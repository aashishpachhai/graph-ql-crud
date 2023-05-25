import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BookService } from './book.service';
import { Book, Removed } from './entities/book.entity';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';

@Resolver(() => Book)
export class BookResolver {
  constructor(private readonly bookService: BookService) {}

  @Mutation(() => [Book])
  createBook(@Args('createBookInput') createBookInput: CreateBookInput) {
    return this.bookService.create(createBookInput);
  }

  @Query(() => [Book], { name: 'allbook' })
  findAll() {
    return this.bookService.findAll();
  }

  @Query(() => [Book], { name: 'book' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.bookService.findOne(id);
  }

  @Mutation(() => [Book])
  updateBook(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateBookInput') updateBookInput: UpdateBookInput,
  ) {
    return this.bookService.update(id, updateBookInput);
  }

  @Mutation(() => [Removed])
  removeBook(@Args('id', { type: () => Int }) id: number) {
    return this.bookService.remove(id);
  }
}
