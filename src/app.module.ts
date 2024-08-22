import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './resources/test/test.module';
import { ConfigModule } from '@nestjs/config';
import { PlayerModule } from './resources/player/player.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      expandVariables: true,
      isGlobal: true,
    }),
    TestModule,
    PlayerModule,
    MongooseModule.forRoot(process.env.MONGO_URI, { dbName: 'my_sport_space' })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
