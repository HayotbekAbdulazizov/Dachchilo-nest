// import { ConflictException, Injectable } from '@nestjs/common';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
// import { IUser } from './entities/user.entity';
// import * as bcrypt from "bcrypt";



// @Injectable()
// export class UsersService {

//   constructor(private readonly userRepository: UserRepository) {}

//   async registerUser(createUserDto: CreateUserDto): Promise<IUser> {
//     const { email, password } = createUserDto;

//     // Check if the username is already taken
//     const existingUser = await this.userRepository.findOne({ email: email });
//     if (existingUser) {
//       throw new ConflictException('Username already exists');
//     }

//     // Create a new user record, validate inputs, encrypt password, etc.
//     const hashedPassword = await this.hashPassword(password);
//     const user = await this.userRepository.create({email: email, password: hashedPassword})
//     return user
//   }




//   async findUserByEmail(): Promise<IUser>{
//     const user = await this.userRepository.findOne({email: email})

//     return user
//   }
  


  
//   private async hashPassword(password: string): Promise<string> {
//     const saltRounds = 10;
//     const hashedPassword = await bcrypt.hash(password, saltRounds);
//     return hashedPassword;
//   }
// }












import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IUser, User } from './entities/user.entity';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { hash } from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}

  async registerUser(createUserDto: CreateUserDto): Promise<IUser> {
    const { email, password } = createUserDto;

    const existingUser = await this.userRepository.findByEmail(email);
    if (existingUser) {
      throw new ConflictException('Username already exists');
    }
    const hashedPassword = await hash(password, 10);
    const user = await this.userRepository.create({email: email, password: hashedPassword})
    return user
  }




  async findByUsername(username: string): Promise<User | undefined> {
    return this.userRepository.findOne({ username });
  }




  async comparePasswords(password: string, hashedPassword: string): Promise<boolean> {
    // Compare the provided password with the hashed password using bcrypt or any other library
  }
}