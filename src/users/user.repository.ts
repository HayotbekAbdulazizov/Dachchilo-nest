import { FindOneOptionsWhere, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { IUser, User } from './entities/user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';

export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<IUser>,
  ) {}

  async findOne(query: FindOneOptionsWhere<IUser>): Promise<IUser | undefined> {
    const user = await this.repository.findOne({ where: query });
    return user
  }


  async create(data: CreateUserDto): Promise<IUser>{
    const user = await this.repository.create(data)
    return user
  }

  async save(user: User): Promise<User> {
    return this.repository.save(user);
  }


}

export const UserRepositoryToken = getRepositoryToken(User);