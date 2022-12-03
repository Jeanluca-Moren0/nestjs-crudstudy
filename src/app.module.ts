import { Module } from '@nestjs/common';
import { FoodsModule } from './foods/foods.module';
import { MongooseModule } from '@nestjs/mongoose';

import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    FoodsModule,
    MongooseModule.forRoot(
      `mongodb+srv://jeanluca:${process.env.DATABASE_USERPASS}@nestjscrud.4woczvn.mongodb.net/test`,
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
