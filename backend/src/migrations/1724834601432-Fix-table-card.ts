import { MigrationInterface, QueryRunner } from "typeorm";

export class FixTableCard1724834601432 implements MigrationInterface {
    name = 'FixTableCard1724834601432'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`card\` CHANGE \`level\` \`level\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`card\` CHANGE \`atk\` \`atk\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`card\` CHANGE \`def\` \`def\` varchar(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`card\` CHANGE \`def\` \`def\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`card\` CHANGE \`atk\` \`atk\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`card\` CHANGE \`level\` \`level\` varchar(255) NOT NULL`);
    }

}
