import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1648734701885 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
        new Table({
            name: 'usuarios',
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "username",
                    type: "varchar",
                    isUnique: true
                },
                {
                    name: "email",
                    type: "varchar",
                    isUnique: true
                },
                {
                    name: "password",
                    type: "varchar",
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                }
            ]
        })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("usuarios");
    }
};
