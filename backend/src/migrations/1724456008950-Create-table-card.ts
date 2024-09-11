import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableCard1724456008950 implements MigrationInterface {
    name = 'CreateTableCard1724456008950'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`attribute_card\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6), \`createdBy\` varchar(255) NULL, \`updatedBy\` varchar(255) NULL, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`type_card\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6), \`createdBy\` varchar(255) NULL, \`updatedBy\` varchar(255) NULL, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`card\` (\`id\` varchar(36) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`name\` varchar(255) NOT NULL, \`level\` varchar(255) NOT NULL, \`atk\` varchar(255) NOT NULL, \`def\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`attributeId\` int NULL, \`typeId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`card\` ADD CONSTRAINT \`FK_1012d0af9145496f76476ff84a6\` FOREIGN KEY (\`attributeId\`) REFERENCES \`attribute_card\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`card\` ADD CONSTRAINT \`FK_89f4ce8ff7f2618884e7b75c026\` FOREIGN KEY (\`typeId\`) REFERENCES \`type_card\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`card\` DROP FOREIGN KEY \`FK_89f4ce8ff7f2618884e7b75c026\``);
        await queryRunner.query(`ALTER TABLE \`card\` DROP FOREIGN KEY \`FK_1012d0af9145496f76476ff84a6\``);
        await queryRunner.query(`DROP TABLE \`card\``);
        await queryRunner.query(`DROP TABLE \`type_card\``);
        await queryRunner.query(`DROP TABLE \`attribute_card\``);
    }

}
