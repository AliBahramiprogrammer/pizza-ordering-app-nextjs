import  User  from "@/app/models/User";
import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";

connect()
export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const { email, password } = reqBody;

        const user = await User.findOne({ email });

        if (user) {
            return NextResponse.json({error : "User already exists"}, {status: 400})
        }

        const newUser = new User({
            email,
            password
        })

        const savedUser = await newUser.save()
    
        return NextResponse.json(savedUser)

    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
  
}