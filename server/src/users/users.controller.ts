import { Controller, Get, Post } from '@nestjs/common';
import { UserResponseDto } from './dto/response-user.dto';
import { UserCreateDto } from './dto/create-user.dto';


@Controller("users")
export class UsersController {
  @Post()
  createUser(userData: UserCreateDto): UserResponseDto {

  }
}