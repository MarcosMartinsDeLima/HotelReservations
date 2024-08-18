import { Module } from '@nestjs/common';
import { FuncionarioController } from './funcionario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Funcionario } from 'src/admin/entities/funcionarioentity';
import { FuncionarioService } from './funcionario.service';

@Module({
    imports:[TypeOrmModule.forFeature([Funcionario])],
    controllers: [FuncionarioController],
    providers: [FuncionarioService],
})
export class FuncionarioModule {}
