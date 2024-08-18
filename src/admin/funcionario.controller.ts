import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { FuncionarioCreateDto } from './entities/funcionarioCreateDto';
import { Response } from 'express';
import { FuncionarioService } from './funcionario.service';
import { Funcionario } from './entities/funcionarioentity';
import { FuncionarioUpdateDto } from './entities/funcionarioUpdateDto';

@Controller('funcionario')
export class FuncionarioController 
{
    constructor(private readonly funcionarioService: FuncionarioService){}

    @Get()
     async getAll(@Res() resp: Response)
    {
        const funcionarios: Awaited<Funcionario[]> = await this.funcionarioService.getAllFuncionarios();
        if(funcionarios == null) return resp.status(404).json("Não há funcionarios")

        return  resp.status(200).json(funcionarios)
    }

    @Get(":id")
    async getById(@Res() resp: Response,@Param("id") id:number)
    {
        const funcionario: Awaited<Funcionario> = await this.funcionarioService.getFuncionarioById(id);
        if(funcionario == null) return  resp.status(404).json("Não foi possivel achar esse funcionario")
            
        return resp.status(200).json(funcionario)
    }

    @Post("create")
    createFuncionario(@Res() resp : Response,@Body() Funcionario :FuncionarioCreateDto)
    {
        if(!Funcionario.nome || !Funcionario.email || !Funcionario.cpf || !Funcionario.senha) {
            return resp.status(400).json("Todos os campos são obrigatórios")
        }

        this.funcionarioService.create(Funcionario)
        return resp.status(201).json(Funcionario);
        
    }

    @Put("update")
    async updateFuncionario(@Res() resp: Response, @Body() funcionario: FuncionarioUpdateDto)
    {
        const funcionarioNovo = await this.funcionarioService.update(funcionario);
        if(funcionarioNovo == null) return resp.status(422).json("Não foi possivel atualizar, tente novamente!")

        return resp.status(200).json(funcionarioNovo)
    }

    @Delete("delete/:idAdmin")
    async deleteFuncionario(@Res() resp: Response,@Param() idAdmin: number)
    {
        const funcionarioExist = await this.funcionarioService.getFuncionarioById(idAdmin);
        if(!funcionarioExist) return resp.status(404).json("Usuario não existe")
            
        const deletedUser = await this.funcionarioService.delete(idAdmin);
        if(deletedUser == false) return resp.status(400).json("Não foi possivel deletar o funcionario")
        
        return resp.status(205)
    }

}
