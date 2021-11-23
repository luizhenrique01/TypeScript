import express, { response } from "express";
import { createCourse } from "./routes";
const app = express();

app.get("/", createCourse);

app.listen(3333, () => {
  console.log("E o servidor reiniciado eh sim");
});
