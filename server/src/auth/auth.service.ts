import bcrypt from 'bcrypt';
import { ConflictException, Injectable } from "@nestjs/common";
import { RegisterDto } from "./dto/register.dto";
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) { }
  async register(data: RegisterDto) {
    const { email, name, password } = data;

    const existingUser = await this.userService.findByEmail(email);

    if (existingUser) {
      throw new ConflictException("Email is already in use")
    }

    const saltOrRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltOrRounds);

    await this.userService.createUser(name, email, passwordHash);

    return {
      message: "Successfully created an account"
    }
  }
}