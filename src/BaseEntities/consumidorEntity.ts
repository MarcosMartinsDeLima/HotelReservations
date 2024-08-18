import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("consumidor")
export class Consumidor
{
    @PrimaryGeneratedColumn()
    idConsumidor: number

    @Column()
    nome: string

    @Column()
    cpf: string
}