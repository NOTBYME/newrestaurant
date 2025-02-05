import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration21728907025934 implements MigrationInterface {
    name = 'Migration21728907025934'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`item\` CHANGE \`carbohydrates\` \`carbohydrates\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`item\` CHANGE \`protein\` \`protein\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`item\` CHANGE \`cholesterol\` \`cholesterol\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`item\` CHANGE \`sodium\` \`sodium\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`item\` CHANGE \`fiber\` \`fiber\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`item\` CHANGE \`regional_vi\` \`regional_vi\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`item\` CHANGE \`regional_en\` \`regional_en\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`order\` DROP FOREIGN KEY \`FK_cff8eff4c72e7c4cb5bf045447c\``);
        await queryRunner.query(`ALTER TABLE \`order\` CHANGE \`voucherId\` \`voucherId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`order\` ADD CONSTRAINT \`FK_cff8eff4c72e7c4cb5bf045447c\` FOREIGN KEY (\`voucherId\`) REFERENCES \`voucher\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`review\` MODIFY \`comment\` VARCHAR(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`order\` DROP FOREIGN KEY \`FK_cff8eff4c72e7c4cb5bf045447c\``);
        await queryRunner.query(`ALTER TABLE \`order\` CHANGE \`voucherId\` \`voucherId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`order\` ADD CONSTRAINT \`FK_cff8eff4c72e7c4cb5bf045447c\` FOREIGN KEY (\`voucherId\`) REFERENCES \`voucher\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`item\` CHANGE \`regional_en\` \`regional_en\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`item\` CHANGE \`regional_vi\` \`regional_vi\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`item\` CHANGE \`fiber\` \`fiber\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`item\` CHANGE \`sodium\` \`sodium\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`item\` CHANGE \`cholesterol\` \`cholesterol\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`item\` CHANGE \`protein\` \`protein\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`item\` CHANGE \`carbohydrates\` \`carbohydrates\` int NULL DEFAULT 'NULL'`);
    }

}
