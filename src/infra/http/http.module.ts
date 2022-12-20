/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { SendNotification } from '@app/use-cases/send-notification';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';
import { CancelNotification } from '@app/use-cases/cancel-notification';
import { CountRecipientNotification } from '@app/use-cases/count-recipient-notifications';
import { ReadNotification } from '@app/use-cases/read-notification';
import { UnreadNotification } from '@app/use-cases/unread-notification';
import { GetRecipientNotification } from '@app/use-cases/get-recipient-notifications';

@Module({
  imports: [
    DatabaseModule
  ],
  controllers:[NotificationsController],
  providers:[
    SendNotification,
    CancelNotification,
    CountRecipientNotification,
    ReadNotification,
    UnreadNotification,
    GetRecipientNotification
  ]
})
export class HttpModule {}
