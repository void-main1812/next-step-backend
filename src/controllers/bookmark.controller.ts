import { Request, Response } from "express"
import { prismaClient } from "../index";


export const createBookmark = async (req: Request, res: Response) => {
    const { userId, jobId } = req.body;

    let user = await prismaClient.user.findFirst({ where: { userId: userId } });
    let bookmark = await prismaClient.bookmarks.findFirst({ where: { userId: userId, jobId: jobId } });
    
    if(!user) {
        res.status(400).send("User does not exist");
        return;
    }

    if (bookmark) {
        res.status(400).send("Bookmark already exists");
        return;
    }

    bookmark = await prismaClient.bookmarks.create({ data: { userId: userId, jobId: jobId } });

    res.send(bookmark);
}

export const getAllBookmark = async (req: Request, res: Response) => {
    const { userId } = req.body;

    let user = await prismaClient.user.findFirst({ where: { userId: userId } });

    if (!user) {
        res.status(400).send("User does not exist");
        return;
    }

    const bookmarks = await prismaClient.bookmarks.findMany({ where: { userId: userId } });

    res.send(bookmarks);
}

export const deleteBookmark = async (req: Request, res: Response) => {
    const { userId, jobId,  } = req.body;

    const bookmark = await prismaClient.bookmarks.findFirst({ where: { userId: userId, jobId: jobId } });

    if (!bookmark) {
        res.status(400).send("Bookmark does not exist");
        return;
    }

    await prismaClient.bookmarks.delete({ where: { id: bookmark.id } });

    res.send("Bookmark deleted" + bookmark);
}