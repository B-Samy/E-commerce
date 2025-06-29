import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

export default async function connectMongodb(){

    if(mongoose.connections[0].readyState){
        return;
    }
    try {
            await mongoose.connect(MONGODB_URI , {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName:'Ecommerce-contact-schema',
        });

        console.log('Connected to MongoDB')

    } catch (error) {
        console.error('Error connecting to MongoDB', error);
        throw new Error('Failed to connect to MongoDB');
    }

}