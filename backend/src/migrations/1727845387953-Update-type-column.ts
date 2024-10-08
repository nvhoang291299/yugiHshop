import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateTypeColumn1727845387953 implements MigrationInterface {
    name = 'UpdateTypeColumn1727845387953'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`order\` DROP COLUMN \`total\``);
        await queryRunner.query(`ALTER TABLE \`order\` ADD \`total\` int NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`order\` DROP COLUMN \`total\``);
        await queryRunner.query(`ALTER TABLE \`order\` ADD \`total\` varchar(255) NOT NULL`);
    }

}
