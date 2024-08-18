import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";
import { Observable } from "rxjs";
import { jwtConstants } from "./constants/constants";

@Injectable()
export class AuthGuard implements CanActivate
{
    constructor(private jwtService: JwtService){}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request =context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request)

        if(!token) return false

        try{
            const payload = await this.jwtService.verifyAsync(
                token,
                {
                    secret: jwtConstants.secret
                }
            )
            request['funcionario'] = payload
        }catch{
            return false
        }

        return true

    }

    private extractTokenFromHeader(resquest: Request):string|undefined
    {
        const [type,token] = resquest.headers.authorization?.split(" ")??[];
        return type == 'Bearer'? token: undefined
    }

}