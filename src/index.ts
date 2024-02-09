import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(username: string, password: string, FirstName: string, LastName: string) {
   const res = await prisma.user.create({
    data : {
        email : username,
        password,
        
    }
  })
  console.log(res);
  
}