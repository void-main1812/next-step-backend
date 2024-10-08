import { Request, Response } from "express";
import { prismaClient } from "../index";

// function to create users in the database from the userId
export const createUser = async (req: Request, res: Response) => {
  const { userId, jobRole, skills, location } = req.body;

  let user = await prismaClient.user.findFirst({ where: { userId: userId } });

  if (user) {
    res.status(400).send("User already exists");
    return;
  }

  user = await prismaClient.user.create({
    data: {
      userId: userId,
      jobRole: jobRole ? jobRole : "",
      skills: skills ? skills : [],
      location: location ? location : "",
    },
  });

  res.send(user);
};

// function to get users from the database from the userId
export const getUser = async (req: Request, res: Response) => {
  const { userId } = req.params;

  let user = await prismaClient.user.findFirst({ where: { userId: userId } });

  if (!user) {
    res.status(400).send("User does not exist");
    return;
  }
  res.send(user);
};

// function to update users in the database from the userId
export const updateUser = async (req: Request, res: Response) => {
  const { userId, jobRole, skills, location } = req.body;

  let user = await prismaClient.user.findFirst({ where: { userId: userId } });

  if (!user) {
    res.status(400).send("User does not exist");
    return;
  }

  user = await prismaClient.user.update({
    where: { userId: userId },
    data: { jobRole: jobRole, skills: skills, location: location },
  });

  res.send(user);
};

// function to delete users from the database from the userId
export const deleteUser = async (req: Request, res: Response) => {
  const userId = req.body;

  const user = await prismaClient.user.findFirst({ where: { userId: userId } });

  if (!user) {
    res.status(400).send("User does not exist");
    return;
  }

  await prismaClient.user.delete({ where: { userId: userId } });

  res.send("User deleted");
};

export const deleteUserByClerk = async (req: Request, res: Response) => {
  const id = req.body.data.id;

  const user = await prismaClient.user.findFirst({ where: { userId: id } });

  if (!user) {
    res.status(400).send("User does not exist");
    return;
  }

  await prismaClient.user.delete({ where: { userId: id } });

  res.send("User deleted");
}
