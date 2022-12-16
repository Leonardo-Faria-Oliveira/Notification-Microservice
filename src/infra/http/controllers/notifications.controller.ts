import { Body, Controller, Get, Post } from '@nestjs/common';
import { SendNotification } from '@app/use-cases/send-notification';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { NotificationViewModule } from '../views/notification-view-module';

@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { content, recipientId, category } = body;
    const { notification } = await this.sendNotification.execute({
      recipientId,
      category,
      content,
    });

    return {
      notification: NotificationViewModule.toHTTP(notification),
    };
  }
}
