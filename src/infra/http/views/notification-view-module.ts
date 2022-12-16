import { Notification } from '@app/entities/notification';

export class NotificationViewModule {
  static toHTTP(notification: Notification) {
    return {
      id: notification.id,
      category: notification.category,
      content: notification.content.value,
      recipientId: notification.recipientId,
    };
  }
}
