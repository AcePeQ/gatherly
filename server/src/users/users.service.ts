import { Injectable } from "@nestjs/common";
import { db } from "../prisma/db.js"

@Injectable()
export class UsersService {
  async findByEmail(email: string) {
    const user = await db.orm.public.User.first({ email });
    return user;
  }

  async createUser(name: string, email: string, passwordHash: string) {
    const user = await db.orm.public.User.create({
      name,
      email,
      passwordHash
    })

    return user;
  }
}