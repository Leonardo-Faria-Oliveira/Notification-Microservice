import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notifications-repository';
import { NotificationNotFound } from './errors/notification-not-found';
import { Notification } from '@app/entities/notification';

interface GetNotificationByIdRequest {
  notificationId: string;
}

interface GetNotificationByIdResponse {
  notification: Notification;
}

@Injectable()
export class GetNotificationById {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: GetNotificationByIdRequest,
  ): Promise<GetNotificationByIdResponse> {
    const { notificationId } = request;

    const notification = await this.notificationsRepository.findById(
      notificationId,
    );

    if (!notification) {
      throw new NotificationNotFound();
    }

    return {
      notification,
    };
  }
}
