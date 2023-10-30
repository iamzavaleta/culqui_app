/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Post, Get, Body, Param } from '@nestjs/common';

@Controller('api/cards/v2')
export class CardsController {

    @Post('token')
    generateToken(@Body() body:any){
        return body;
    }

    @Get(':token')
    getCardByToken(@Param('token' ) token: string ){
        return token;
    }
}
