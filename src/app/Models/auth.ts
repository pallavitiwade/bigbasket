export interface IloginUser{
name:string|null;
Number:string|null;
email:string|null;
   
}

export interface IRegisterUser{
    name:string;
    Number:string;
    email:string;
userRole:'admin' | 'buyer' | 'superAdmin'

}