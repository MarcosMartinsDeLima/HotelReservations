import { Body, Controller, Post, Res } from '@nestjs/common';
import { RegistroService } from './registro.service';
import { Response } from 'express';
import { ConsumidorDto } from 'src/BaseEntities/consumidorDto';
import { QuartoDto } from 'src/BaseEntities/quartoDto';
import { RegistroDto } from './entities/registroDto';

@Controller('registro')
export class RegistroController 
{
    constructor(
        private readonly registroService: RegistroService
    ){}

    @Post("create-consumer")
    async createConsumidor(@Res() resp: Response,@Body() consumidordto: ConsumidorDto)
    {
        if(!consumidordto.cpf || !consumidordto.nome) return resp.status(400).json("Preencha todos os campos");

        const consumidor = await this.registroService.createConsumidor(consumidordto);
        return resp.status(201).json(consumidor);
    }


    @Post("create-quarto")
    async createQuarto(@Res() resp: Response,@Body() quartoDto: QuartoDto)
    {
        if(!quartoDto.andar || !quartoDto.numeroQuarto || !quartoDto.disponivel) return resp.status(400).json("Preencha todos os campos");

        const quarto = await this.registroService.CreateQuarto(quartoDto);
        return resp.status(201).json(quarto);
    }

    @Post('create-reserva')
    async createReserva(@Res() resp: Response,@Body() registroDto: RegistroDto)
    {
        if(!registroDto.consumidor || 
            !registroDto.dataEntrada || 
            !registroDto.dataSaida   ||
            !registroDto.funcionario ||
            !registroDto.quarto    
        ) return resp.status(400).json("Todos os campos são obrigatorios!")
        registroDto.dataEmissao = new Date().toISOString().slice(0, 19).replace('T', ' ');
        console.log(Date.now())

        const registro = await this.registroService.CreateReserva(registroDto)

        return resp.status(201).json(registro)
    }
}
