import { NextResponse } from "next/server";
import Contact from "../../../../../Components/models/contact-schema";
import connectMongodb from "../../../../../Components/utils/contactdb";


const allowedAdmins = ['shaheerrangrej@gmail.com']
export async function DELETE(req, {params}){
    await connectMongodb();
    const {id} = params;

    try {
        await Contact.findByIdAndDelete(id);
        return NextResponse.json({success:true})
    } catch (err) {
        return NextResponse.json({success:false , error:err.message} , {status:500})
    }

}