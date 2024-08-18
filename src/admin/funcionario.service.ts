import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Funcionario } from './entities/funcionarioentity';
import { Repository, UpdateResult } from 'typeorm';
import { FuncionarioCreateDto } from './entities/funcionarioCreateDto';
import { FuncionarioUpdateDto } from './entities/funcionarioUpdateDto';

@Injectable()
export class FuncionarioService 
{
    constructor(
        @InjectRepository(Funcionario)
        private FuncionarioRepo : Repository<Funcionario>
    ){}

    async getAllFuncionarios(): Promise<Funcionario[]>
    {
        return await this.FuncionarioRepo.find();
    }

    async getFuncionarioById(id:number):Promise<Funcionario>
    {
        return await this.FuncionarioRepo.findOne({where:{"idAdmin": id}})
    }

    async create(Funcionario: FuncionarioCreateDto) : Promise<boolean>
    {
        try {
            const funcionario = this.FuncionarioRepo.create(Funcionario);
            await this.FuncionarioRepo.save(funcionario)
        } catch (error) {
            return false
        }

        return true
    }

    async update(funcionario: FuncionarioUpdateDto): Promise<UpdateResult>
    {
        try{
            const id = funcionario.idAdmin
            if(!id) return null

            return (await this.FuncionarioRepo.update(id,funcionario)).raw  
        }catch(error){
            console.log(error)
        }

    }

    async delete(id: number): Promise<boolean>
    {
        try {
            await this.FuncionarioRepo.delete(id).then()
            return true
        } catch (error) {
            console.log(error)
            return false            
        }
    }


}
