import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Book {
  @Field()
  title: string;
  @Field((type) => Int)
  price: number;
}

@ObjectType()
export class Removed {
  @Field()
  message: 'string';
}
