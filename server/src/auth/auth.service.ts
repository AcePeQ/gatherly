import bcrypt from 'bcrypt';
import { ConflictException, Injectable, UnauthorizedException } from "@nestjs/common";
import { RegisterDto } from "./dto/register.dto.js";
import { UsersService } from '../users/users.service.js';
import { LoginDto } from './dto/login.dto.js';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService
  ) { }
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

  async login(data: LoginDto) {
    const { email, password, remember } = data;

    const user = await this.userService.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException();
    }

    const isCorrectPassword = await bcrypt.compare(password, user.passwordHash)

    if (!isCorrectPassword) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, email: user.email, username: user.name }

    return {
      access_token: await this.jwtService.signAsync(payload)
    }
  }
}