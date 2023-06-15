import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';




export interface IUser {
    name: string ;
    email: string ;
    password: string ;
}







@Entity()
export class User {
    @Column()
    name: string

    @Column()
    email: string;

    @Column()
    password: string;
}