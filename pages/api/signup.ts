import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

export default async function signUp(req, res) {
   const prisma = new PrismaClient();

   if(req.method === 'POST'){
      hash(req.body.password, 10,  async function(err, hash) {
         const result = await prisma.user.create({
            data: {
               name: req.body.name,
               email: req.body.email,
               password: hash
            },
         })
   
         const users = await prisma.user.findMany()
         res.json(users);
     });
   } else {
      res.status(405).json({message: 'We only support POST!'});
   }
}