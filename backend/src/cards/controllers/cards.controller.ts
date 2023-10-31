/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { CardsService } from '../services/cards.service';

@Controller('api/cards/v2')
export class CardsController {

    constructor(
        private cardsService: CardsService
    ){}

    @Post('token')
    generateToken(@Body() body:any){
        return this.cardsService.create(body);
    }

    @Get(':token')
    getCardByToken(@Param('token' ) token: string ){
        return this.cardsService.findOneByToken(token);
    }
}
