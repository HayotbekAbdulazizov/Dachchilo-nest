import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';


// @Injectable()
// export class AuthService {
//     constructor( private userService: UsersService){}

//     async validate(email: string, password: string): Promise<any>{
//         const user  = await this.userService.findOne(email);

//         if(user && user.password === password){
//             const { password, ...rest } = user
//             return rest
//         }
//         return null;
//     }
// }






// @Injectable()
// export class AuthService {
//   constructor(private usersService: UsersService) {}

//   async validateUser(username: string, pass: string): Promise<any> {
//     const user = await this.usersService.findOne(username);
//     if (user && user.password === pass) {
//       const { password, ...result } = user;
//       return result;
//     }
//     return null;
//   }
// }




@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }


  async login(user: any) {
    const payload = { email: user.email, name: user.name };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}