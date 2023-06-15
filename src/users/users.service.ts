import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IUser } from './entities/user.entity';

@Injectable()
@Injectable()

export class UsersService {

  private readonly users = [
    {
      name: 'john',
      email: 'some@gmail.com',
      password: 'changeme',
    },
    {
      name: 'maria',
      email: 'somee@gmail.com',
      password: 'guess',
    },
  ];

  async findOne(email: string): Promise<IUser | undefined> {
    return this.users.find(user => user.email === email);
  }
}
