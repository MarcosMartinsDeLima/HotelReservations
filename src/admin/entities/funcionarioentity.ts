import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("funcionario")
export class Funcionario
{
    @PrimaryGeneratedColumn()
    idAdmin: number

    @Column()
    nome: string

    @Column()
    email: string

    @Column()
    senha: string

    @Column()
    cpf: string 
}