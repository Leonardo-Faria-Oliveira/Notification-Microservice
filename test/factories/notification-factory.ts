import { Content } from '@app/entities/content';
import { Notification, NotificationProps } from '@app/entities/notification';

type Override = Partial<NotificationProps>;

export function makeNotification(overrite: Override = {}, id?: string) {
  return new Notification(
    {
      category: 'social',
      content: new Content('Nova mensagem'),
      recipientId: 'recipient-2',
      ...overrite,
    },
    id,
  );
}
