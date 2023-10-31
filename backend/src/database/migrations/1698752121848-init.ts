import {MigrationInterface, QueryRunner} from "typeorm";

export class init1698752121848 implements MigrationInterface {
    name = 'init1698752121848'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "card" ("id" SERIAL NOT NULL, "token" character varying NOT NULL, "card_number" integer NOT NULL, "cvv" integer NOT NULL, "expiration_month" character varying NOT NULL, "expiration_year" character varying NOT NULL, "email" character varying NOT NULL, CONSTRAINT "PK_9451069b6f1199730791a7f4ae4" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "card"`);
    }

}
