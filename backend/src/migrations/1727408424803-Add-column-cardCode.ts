import { MigrationInterface, QueryRunner } from "typeorm";

export class AddColumnCardCode1727408424803 implements MigrationInterface {
    name = 'AddColumnCardCode1727408424803'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`card\` ADD \`cardCode\` varchar(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`card\` DROP COLUMN \`cardCode\``);
    }

}
