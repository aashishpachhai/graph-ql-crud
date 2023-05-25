import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateBookInput {
  @Field()
  title: string;
  @Field((type) => Int)
  price: number;
}
