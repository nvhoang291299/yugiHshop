import { MigrationInterface, QueryRunner } from "typeorm";

export class AddColumnPrice1724828222473 implements MigrationInterface {
    name = 'AddColumnPrice1724828222473'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`card\` ADD \`price\` int NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`card\` DROP COLUMN \`price\``);
    }

}
