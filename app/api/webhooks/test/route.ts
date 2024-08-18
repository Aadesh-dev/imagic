import { createUser } from "@/lib/actions/user.actions";
import { NextResponse } from "next/server";

export async function POST() {
  const user = {
    clerkId: "123",
    email: "abc@gmail.com",
    username: "abc",
    firstName: "Naruto",
    lastName: "Uzumaki",
    photo: "abc.jpg",
  };

  //console.log("New user about to be added");
  const newUser = await createUser(user);
  //console.log("New user added");

  return NextResponse.json({ message: "OK", user: newUser });
  //return Response.json({ message: 'The route is working' });
}
