import { Prop, getModelForClass, modelOptions, Ref } from "@typegoose/typegoose";
import { ObjectType, Field, Int, ID } from "type-graphql";

enum userRole {
    ADMIN = 'Admin',
    USER = 'User',
};

@modelOptions({ schemaOptions: { timestamps: true } })
@ObjectType()
export class User {
    @Field(() => ID)
    id: String

    @Field()
    @Prop()
    name: String

    @Field()
    @Prop()
    role: userRole

}

const Users = getModelForClass(User);

export default Users;