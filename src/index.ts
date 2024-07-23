import { PrismaClient } from "@prisma/client";
import express, { Request, Response } from "express";
import { PORT } from "../src/secrets";
import rootRouter from "./routes/index.route";
import bodyParser from "body-parser";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', rootRouter)

export const prismaClient = new PrismaClient({
  log: ["query"],
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
