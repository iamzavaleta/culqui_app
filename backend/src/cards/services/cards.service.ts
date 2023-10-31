/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Card } from '../entitys/cards.entity';
import { randomString } from '../utils/generateToken';

@Injectable()
export class CardsService {
    constructor(
        @InjectRepository(Card) private cardRepo: Repository<Card>
    ){}

    findOneByToken(token: string ){
        return this.cardRepo.find({
            where: {
                token: token
            }
        })
    }

    create(body: any){
        const newCard = new Card();
        newCard.token = randomString(16);
        newCard.card_number = body.card_number;
        newCard.cvv = body.cvv;
        newCard.expiration_month = body.expiration_month;
        newCard.expiration_year = body.expiration_year;
        newCard.email = body.email;
        return this.cardRepo.save(newCard);
    }
}
