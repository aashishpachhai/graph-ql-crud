import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { Knex } from 'knex';
import { InjectModel } from 'nest-knexjs';

@Injectable()
export class BookService {
  constructor(@InjectModel() private knex: Knex) {}
  async create(createBookInput: CreateBookInput) {
    try {
      return this.knex
        .table('book')
        .insert({
          title: createBookInput.title,
          price: createBookInput.price,
        })
        .then((id) => this.findOne(id[0]));
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll() {
    const users = await this.knex.table('book');
    console.log(users);
    return users;
  }

  async findOne(id: number) {
    if (!id) {
      throw new NotFoundException(`Book ${id} not found`);
    } else {
      const user = await this.knex.table('book').where('id', id);
      console.log(user);
      return user;
    }
  }

  async update(id: number, updateBookInput: UpdateBookInput) {
    try {
      return await this.knex
        .table('book')
        .where('id', id)
        .update({
          title: updateBookInput.title,
          price: updateBookInput.price,
        })
        .then(() => this.findOne(id));
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_GATEWAY);
    }
  }

  async remove(id: number) {
    const users = await this.knex.table('book').where('id', id).del();
    return [{ message: 'Item is removed' }];
  }
}
