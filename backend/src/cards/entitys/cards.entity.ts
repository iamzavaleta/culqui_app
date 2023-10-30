import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Card {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    token: string;

    @Column()
    card_number: number;

    @Column()
    cvv: number

    @Column()
    expiration_month: string;
    
    @Column()
    expiration_year: string;
    
    @Column()
    email: string;
}