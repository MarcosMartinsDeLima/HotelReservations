import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Registro } from './entities/registroEnitty';
import { Repository } from 'typeorm';
import { Funcionario } from 'src/admin/entities/funcionarioentity';
import { Consumidor } from 'src/BaseEntities/consumidorEntity';
import { Quarto } from 'src/BaseEntities/quartoEntity';
import { ConsumidorDto } from 'src/BaseEntities/consumidorDto';
import { QuartoDto } from 'src/BaseEntities/quartoDto';
import { RegistroDto } from './entities/registroDto';

@Injectable()
export class RegistroService 
{
    constructor(
        @InjectRepository(Registro)
        private registroRepo: Repository<Registro>,
        @InjectRepository(Funcionario)
        private funcionarioRepo: Repository<Funcionario>,
        @InjectRepository(Consumidor)
        private consumidorRepo: Repository<Consumidor>,
        @InjectRepository(Quarto)
        private quartoRepo: Repository<Quarto>
    ){}


    async createConsumidor(consumidorDto: ConsumidorDto): Promise<Consumidor>
    {
        const consumidor = this.consumidorRepo.create(consumidorDto);
        return await this.consumidorRepo.save(consumidor);
    }

    async CreateQuarto(quartoDto: QuartoDto): Promise<Quarto>
    {
        const quarto = this.quartoRepo.create(quartoDto)
        return await this.quartoRepo.save(quarto)
    }

    async CreateReserva(registroDto: RegistroDto): Promise<Registro>
    {
        const funcionario = await this.funcionarioRepo.findOne({where:{"idAdmin":registroDto.funcionario}})
        const quarto = await this.quartoRepo.findOne({where:{"idQuarto":registroDto.quarto}})
        const consumidor = await this.consumidorRepo.findOne({where:{"idConsumidor":registroDto.consumidor}})

        
        const registroObject: Registro = new Registro()
        registroObject.funcionario = funcionario
        registroObject.quarto = quarto
        registroObject.consumidor = consumidor
        registroObject.dataEmissao = registroDto.dataEmissao
        registroObject.dataEntrada = registroDto.dataEntrada
        registroObject.dataSaida = registroDto.dataSaida 
        
        const registro = this.registroRepo.create(registroObject)
        //tornar quarto indisponivel
        quarto.disponivel = false
        await this.quartoRepo.save(quarto)

        return await this.registroRepo.save(registro);
    
    }

}
