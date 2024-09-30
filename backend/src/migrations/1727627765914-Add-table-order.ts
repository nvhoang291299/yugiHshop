import { MigrationInterface, QueryRunner } from "typeorm";

export class AddTableOrder1727627765914 implements MigrationInterface {
    name = 'AddTableOrder1727627765914'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`card\` ADD \`quantity\` int NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`card\` DROP COLUMN \`quantity\``);
    }

}
