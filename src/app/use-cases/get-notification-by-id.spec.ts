import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { makeNotification } from '@test/factories/notification-factory';
import { GetNotificationById } from './get-notification-by-id';

describe('Get recipient notifications', () => {
  it('should be able to get recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const getNotificationById = new GetNotificationById(
      notificationsRepository,
    );

    const newNotification = makeNotification();

    await notificationsRepository.create(newNotification);

    const { notification } = await getNotificationById.execute({
      notificationId: newNotification.id,
    });

    expect(notification).toBeTruthy();
  });
});
