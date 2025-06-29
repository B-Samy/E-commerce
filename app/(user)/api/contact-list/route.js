import { NextResponse } from "next/server";
import connectMongodb from "../../../../Components/utils/contactdb";
import Contact from "../../../../Components/models/contact-schema";

export async function GET() {

    await connectMongodb();
const contacts = await Contact.find().sort({createdAt: -1});

return NextResponse.json({contacts});

}