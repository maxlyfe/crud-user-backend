import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
