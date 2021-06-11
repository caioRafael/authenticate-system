import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUser1623028088835 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'users',
            columns:[
                {
                    name:"id",
                    type:"uuid",
                    isPrimary:true,
                },
                {
                    name:'name',
                    type:'varchar',
                },
                {
                    name:'surname',
                    type:'varchar',
                },
                {
                    name:'email',
                    type:'varchar',
                },
                {
                    name:'password',
                    type:'varchar',
                },
                {
                    name:'cep',
                    type:'varchar',
                },
                {
                    name:'city',
                    type:'varchar',
                },
                {
                    name:'uf',
                    type:'varchar',
                },
                {
                    name:'phone',
                    type:'varchar',
                },
                {
                    name:'id_auth',
                    type:'integer',
                },
            ],
            foreignKeys:[
                {
                    name: 'authorizations',
                    columnNames:['id_auth'],
                    referencedTableName: 'authorizations',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}
