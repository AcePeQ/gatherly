import { Body, Controller, Post } from "@nestjs/common";
import { type ResetPasswordDto, resetPasswordSchema } from "./dto/resetPassword.dto.js";
import { NotificationService } from "./notification.service.js";

@Controller("notifications")
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) { }

  @Post("reset-password")
  async resetPassword(@Body({ schema: resetPasswordSchema }) mailData: ResetPasswordDto) {
    return this.notificationService.resetPassword(mailData);
  }
}