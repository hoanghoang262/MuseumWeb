import express, { NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import * as env from "dotenv";
import { PrismaClient } from "@prisma/client";

import mainRoute from "./routes/mainRoute";

const prisma = new PrismaClient();
//connect to database
prisma.$connect();

//test database connection
const dbtest = async () => {
  console.log("test database connection");

  const role = await prisma.role.findMany();
  console.log("role", role);
};

dbtest();

//environment variables configuration
env.config();

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World with TypeScript!");
});

//main routes
app.use("/", mainRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
