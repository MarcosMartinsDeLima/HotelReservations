import { Funcionario } from "src/admin/entities/funcionarioentity";
import { Consumidor } from "src/BaseEntities/consumidorEntity";
import { Quarto } from "src/BaseEntities/quartoEntity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Registro
{
    @PrimaryGeneratedColumn()
    idRegistro?: number

    @OneToOne(type => Funcionario) @JoinColumn()
    funcionario: Funcionario

    @OneToOne(type =>Consumidor) @JoinColumn()
    consumidor: Consumidor

    @OneToOne(type => Quarto) @JoinColumn()
    quarto: Quarto

    @Column()
    dataEmissao: string
    
    @Column()
    dataEntrada: number

    @Column()
    dataSaida: number
}