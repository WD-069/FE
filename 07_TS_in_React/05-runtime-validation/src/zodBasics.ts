import * as z from "zod";

let myMessage = "Hello, Mars!";

myMessage = 123345;

const MessageSchema = z.string();

const { success, data, error } = MessageSchema.safeParse(myMessage);
