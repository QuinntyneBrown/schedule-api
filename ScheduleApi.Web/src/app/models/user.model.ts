import { Role } from "./role.model";

export class User {
    public id: number;
    public name: string;    
    public email: string;
    public username: string;
    public firstname: string;
    public lastname: string;
    public fullname: string;
    public roles: Array<Role> = [];
}