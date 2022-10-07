import { Resolver, Query, Arg, Mutation, Field, Int, InputType, FieldResolver, Root } from "type-graphql";
import Events, { Event } from "../../models/event";
import Users, { User } from "../../models/user";

@InputType()
class NewEventInput implements Partial<Event> {

    @Field()
    title: String;

    @Field()
    description: String;

    @Field()
    banner_image: String;

    @Field()
    time: String;

    @Field()
    venue: String;

    // @Field()
    // createdBy: User;
}

@Resolver(() => Event)
export class EventResolver {
    // @FieldResolver(() => User)
    // async user(@Root() event: any) {
    //     const createdBy = await Users.findById(event.createdBy);
    //     return createdBy;
    // }

    @Query(() => [Event], { nullable: true })
    async event(): Promise<Event[] | any> {
        const events = await Events.find();
        return events;
    }

    @Query(() => Event, { nullable: true })
    async eventById(@Arg('id') id: string): Promise<Event | null | any> {
        const event = await Events.findById(id);
        return event;
    }

    @Mutation(() => Event, { nullable: true })
    async addEvent(@Arg('input') input: NewEventInput): Promise<Event | any> {
        const event = await Events.create(input);
        return event;
    }
}