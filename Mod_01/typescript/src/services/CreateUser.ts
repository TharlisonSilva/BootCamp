/**
 *  pra cirar : nome, email, senha 
 */

 interface TechObject{
     title: string;
     experience: number;
 }

 interface CreateUserData{
     name?: string;
     email: string;
     password: string;
     techs: Array<String | TechObject>;
 }

export default function createUser({name = '', email, password}: CreateUserData){
    const user = {
        name,
        email,
        password,
    }

    return user;
}