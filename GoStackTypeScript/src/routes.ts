import { Request, Response } from "express";
import createUser from "./services/CreateUser";

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: "luiz@gmail.com",
    password: "coxinha123",
    techs: ["Node.js", "C#", { title: "JavaScript", experience: 100 }],
  });
  return response.json({ message: "Hello World" });
}
