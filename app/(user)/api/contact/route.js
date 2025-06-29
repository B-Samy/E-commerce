import { NextResponse } from "next/server";
import connectMongodb from  '../../../../Components/utils/contactdb';
import Contact from '../../../../Components/models/contact-schema';

export async function POST(request){

    try {
        await connectMongodb();

        const body  = await request.json();

        if(!body.name || !body.email || !body.message){
            return NextResponse.json({message: "Please fill all the fields"}, {status: 400})
        }

        console.log('Recieved', body);

        const newContact = new Contact(body);
        await newContact.save();

        return NextResponse.json({message: "Message sent successfully"}, {status: 201})



    } catch (error) {
        console.log('Error', error)
        return NextResponse.json({error: error.message}, {status: 500})
    }
}