import { Prop, getModelForClass, modelOptions, Ref } from "@typegoose/typegoose";
import { ObjectType, Field, Int, ID } from "type-graphql";
import { User } from "./user";

@modelOptions({ schemaOptions: { timestamps: true } })
@ObjectType()
export class Event {
    @Field(() => ID)
    id: String;

    @Field()
    @Prop()
    title: String;

    @Field()
    @Prop()
    description: String;

    @Field()
    @Prop()
    banner_image: String;

    @Field()
    @Prop()
    time: String;

    @Field()
    @Prop()
    venue: String;

    @Prop({ ref: User })
    createdBy: Ref<User>;

    @Field()
    createdAt: Date;


}

const Events = getModelForClass(Event);

export default Events;