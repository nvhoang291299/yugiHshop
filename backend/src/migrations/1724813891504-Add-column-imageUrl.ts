import { MigrationInterface, QueryRunner } from "typeorm";

export class AddColumnImageUrl1724813891504 implements MigrationInterface {
    name = 'AddColumnImageUrl1724813891504'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`card\` ADD \`imageUrl\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`card\` DROP COLUMN \`imageUrl\``);
    }

}
