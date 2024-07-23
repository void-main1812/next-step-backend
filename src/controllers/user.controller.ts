import { Request, Response } from "express";
import { prismaClient } from "../index";

// function to create users in the database from the userId
export const createUser = async (req: Request, res: Response) => {
  const { userId } = req.body;

  let user = await prismaClient.user.findFirst({ where: { userId: userId } });

  if (user) {
    res.status(400).send("User already exists");
    return;
  }

  user = await prismaClient.user.create({ data: { userId: userId } });

  res.send(user);
};

// function to delete users from the database from the userId
export const deleteUser = async (req: Request, res: Response) => {
  const { userId } = req.body;

  const user = await prismaClient.user.findFirst({ where: { userId: userId } });

  if (!user) {
    res.status(400).send("User does not exist");
    return;
  }

  await prismaClient.user.delete({ where: { userId: userId } });

  res.send("User deleted");
};
