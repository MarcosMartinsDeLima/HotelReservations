import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants/constants';
import { FuncionarioModule } from 'src/admin/funcionario.module';
import { AuthGuard } from './authGuard';

@Module({
  providers: [AuthService,AuthGuard],
  imports:[JwtModule.register({
    global:true,
    secret:jwtConstants.secret,
    signOptions:{expiresIn:"1day"}
  }),forwardRef(()=>FuncionarioModule)],
  exports:[AuthService,AuthGuard]
})
export class AuthModule {}
