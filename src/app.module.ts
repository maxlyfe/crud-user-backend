import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://User:xeT82cflkFaABco2@nestjscrud.palng.mongodb.net/test'),
    UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
