import { NextResponse, NextRequest } from "next/server";
import mongoose from "mongoose";
import dbConnect from "@/lib/database/db";
import { User } from "@/lib/models/user.model";

dbConnect();

export const GET = async (request) => {
  try {
    // await mongoose.connect(connectionStr);
    const users = await User.find();
    return NextResponse.json({
      data: users,
      response: "success",
    });
  } catch (error) {
    return NextResponse.json({ error: error, error_new: "error occure" });
  }
};

export const POST = async (request) => {
  try {
    // await mongoose.connect(connectionStr);
    const payload = await request.json();

    const user = new User(payload);
    const res = await user.save();
    return NextResponse.json({ response: "success", res });
  } catch (error) {
    return NextResponse.json({ error: error, error_new: "error occure" });
  }
};
