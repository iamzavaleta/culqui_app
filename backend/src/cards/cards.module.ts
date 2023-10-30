import { CardsService } from './services/cards.service';
import { CardsController } from './controllers/cards.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Card } from './entitys/cards.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Card])
  ],
  controllers: [CardsController],
  providers: [CardsService],
})
export class CardsModule {}
