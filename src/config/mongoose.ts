import mongoose from 'mongoose';
import config from '.';

export default async (): Promise<void> => {
    try {
        console.log(config.database.uri)
        await mongoose.connect(config.database.uri, config.database.options);
    } catch (err) {
        console.error(`MongoDB Connection error - ${err}`);
    }
};
