import { Body, Controller, Post } from "@nestjs/common";
import { type ForgotPasswordDto, forgotPasswordSchema } from "./dto/forgot-password.dto.js";
import { NotificationService } from "./notification.service.js";

@Controller("notifications")
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) { }

  @Post("forgot-password")
  async forgotPassword(
    @Body({ schema: forgotPasswordSchema }) forgotPasswordData: ForgotPasswordDto,
  ) {
    return this.notificationService.forgotPassword(forgotPasswordData);
  }
}
