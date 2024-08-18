import { Module } from '@nestjs/common';
import { RegistroController } from './registro.controller';
import { RegistroService } from './registro.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Registro } from './entities/registroEnitty';
import { Quarto } from 'src/BaseEntities/quartoEntity';
import { Funcionario } from 'src/admin/entities/funcionarioentity';
import { Consumidor } from 'src/BaseEntities/consumidorEntity';
import { AuthModule } from 'src/auth/auth.module';
@Module({
  imports:[TypeOrmModule.forFeature([Registro,Quarto,Funcionario,Consumidor]),AuthModule],
  controllers: [RegistroController],
  providers: [RegistroService]
})
export class RegistroModule {}
