import { connect } from "@/dbConfig/dbConfig";
import { getServerSession } from "next-auth";
import { NextRequest } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import User from "@/app/models/User";

connect();

export async function PUT(request: NextRequest) {
    const data = await request.json();
    const session = await getServerSession(authOptions);
    const email = session?.user?.email;

    console.log(email);
    if ("userName" in data) {
        console.log(data.userName);
        
        await User.updateOne({ email }, { $set: { name: data.userName } })
    }

    return Response.json(true);

}