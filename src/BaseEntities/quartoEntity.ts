import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Quarto
{
    @PrimaryGeneratedColumn()
    idQuarto: number

    @Column()
    numeroQuarto: number
    
    @Column()
    andar: number

    @Column()
    disponivel: boolean

}