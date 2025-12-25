import {Query, Resolver} from '@nestjs/graphql';

@Resolver()  // GraphQL Api Serverni hosil qilish uchun Resolver kerak boladi
export class AppResolver {
    @Query(() => String)
    public sayHello(): string {
        return 'GraphQL API Server';
    }
}