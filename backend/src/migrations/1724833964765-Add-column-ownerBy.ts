import { MigrationInterface, QueryRunner } from "typeorm";

export class AddColumnOwnerBy1724833964765 implements MigrationInterface {
    name = 'AddColumnOwnerBy1724833964765'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`card\` ADD \`ownerBy\` int NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`card\` DROP COLUMN \`ownerBy\``);
    }

}
