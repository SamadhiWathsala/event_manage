import { Resolver, Query, Arg, Mutation, Field, Int, InputType, FieldResolver, Root } from "type-graphql";
import Events, { Event } from "../../models/event";
import Users, { User } from "../../models/user";

enum userRole {
    ADMIN = 'Admin',
    USER = 'User',
};

@InputType()
class NewUserInput implements Partial<User> {

    @Field()
    name!: String;

    @Field()
    role!: userRole;

}

@Resolver(() => User)
export class UserResolver {

    @Query(() => [User], { nullable: true })
    async user(): Promise<User[] | any> {
        const users = await Users.find();
        return users;
    }

    @Query(() => User, { nullable: true })
    async userById(@Arg('id') id: string): Promise<User | null | any> {
        const user = await Users.findById(id);
        return user;
    }

    @Mutation(() => User, { nullable: true })
    async addUser(@Arg('input') input: NewUserInput): Promise<User | any> {
        const newUserName = NewUserInput.name;
        if (Users.findOne.name == newUserName) {
            console.log('User exist')
            return;
        }
        const newUser = await Users.create(input);
        return newUser;
    }
}