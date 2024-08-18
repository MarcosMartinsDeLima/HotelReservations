import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FuncionarioModule } from './admin/funcionario.module';
import { Funcionario } from './admin/entities/funcionarioentity';
import { AuthModule } from './auth/auth.module';
import { Consumidor } from './BaseEntities/consumidorEntity';
import { Quarto } from './BaseEntities/quartoEntity';
import { RegistroModule } from './registro/registro.module';
import { Registro } from './registro/entities/registroEnitty';

@Module({
  imports: [
    TypeOrmModule.forRoot({ 
      type:'mysql',
      host:'localhost',
      port:3306,
      username:"root",
      password:"secreto123",
      database:"hotel" ,
      entities:[Funcionario,Consumidor,Quarto,Registro],
      synchronize:true
    }),
    FuncionarioModule,
    AuthModule,
    RegistroModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
