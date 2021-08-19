import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class posts1629330441941 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> { 

        await queryRunner.createTable(new Table({
            name: 'posts',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true
                },
                {
                    name: 'title',
                    type: 'varchar'
                },
                {
                    name: 'subtitle',
                    type: 'varchar'
                },
                {
                    name: 'content',
                    type: 'varchar'
                },
                {
                    name: 'imgurl',
                    type: 'varchar'
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('posts');
    }

}
