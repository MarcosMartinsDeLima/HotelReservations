import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FuncionarioModule } from './admin/funcionario.module';
import { Funcionario } from './admin/entities/funcionarioentity';

@Module({
  imports: [
    TypeOrmModule.forRoot({ 
      type:'mysql',
      host:'localhost',
      port:3306,
      username:"root",
      password:"secreto123",
      database:"hotel" ,
      entities:[Funcionario],
      synchronize:true
    }),
    FuncionarioModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
