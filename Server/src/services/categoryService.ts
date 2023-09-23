import PrismaService from "./prismaService";
import { Category } from "@prisma/client";

const prisma = PrismaService.getInstance()

const getAll = async () =>{
    const categories : Category[] = await prisma.category.findMany();
    return categories
}

const categoryService = {
    getAll
}

export default categoryService