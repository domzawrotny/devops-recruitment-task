import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';

var mongoDbUrl = process.env.MONGO_DB_URL;

@Module({
  imports: [
    MongooseModule.forRoot(mongoDbUrl),
    CatsModule,
  ],
})
export class AppModule {}
