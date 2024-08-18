import { forwardRef, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { FuncionarioService } from 'src/admin/funcionario.service';

@Injectable()
export class AuthService 
{
    constructor(
        @Inject(forwardRef(()=> FuncionarioService))
        private funcionarioService: FuncionarioService,
        private jwtService: JwtService
     ){}

    async signIn(email: string, password: string): Promise<any>
    {
        const funcionario = await this.funcionarioService.getFuncionarioByEmail(email)
        if(funcionario == null) return false

        if(funcionario.senha !== password){
            return{SenhaInvalida:true};
        }

        const payload = {sub: funcionario.idAdmin,nome: funcionario.nome }

        return {acess_token: await this.jwtService.signAsync(payload)}

    }
}
