import {MigrationInterface, QueryRunner} from "typeorm";

export class uuid1698773126583 implements MigrationInterface {
    name = 'uuid1698773126583'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."card" DROP CONSTRAINT "PK_9451069b6f1199730791a7f4ae4"`);
        await queryRunner.query(`ALTER TABLE "public"."card" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "public"."card" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "public"."card" ADD CONSTRAINT "PK_9451069b6f1199730791a7f4ae4" PRIMARY KEY ("id")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."card" DROP CONSTRAINT "PK_9451069b6f1199730791a7f4ae4"`);
        await queryRunner.query(`ALTER TABLE "public"."card" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "public"."card" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."card" ADD CONSTRAINT "PK_9451069b6f1199730791a7f4ae4" PRIMARY KEY ("id")`);
    }

}
