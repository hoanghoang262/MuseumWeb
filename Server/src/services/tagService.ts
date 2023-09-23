import PrismaService from "./prismaService";
import { Tag } from "@prisma/client";

const prisma = PrismaService.getInstance()

const getAll = async () => {
    const tags : Tag[] = await prisma.tag.findMany()
    return tags;
}

const tagService = {
    getAll
}

export default tagService