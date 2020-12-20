import { Roles } from './Roles';

export class User{
  id :number;
  nom:string;
  prenom:string;
  email:string;
  password:string;
  username:string;
  roles:Roles[];

 }
