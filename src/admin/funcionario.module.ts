import { forwardRef, Module } from '@nestjs/common';
import { FuncionarioController } from './funcionario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Funcionario } from 'src/admin/entities/funcionarioentity';
import { FuncionarioService } from './funcionario.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
    imports:[TypeOrmModule.forFeature([Funcionario]),forwardRef(()=>AuthModule)],
    controllers: [FuncionarioController],
    providers: [FuncionarioService],
    exports:[FuncionarioService]
})
export class FuncionarioModule {}
