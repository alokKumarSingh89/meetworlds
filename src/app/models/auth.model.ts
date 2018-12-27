export type AuthType = 'login' | 'registraion';
export interface UserDTO{
    email:string;
    PASSWORD:string;
    login?:string;
    created_by?:string;
    activated?:number;
    first_name?:string;
    last_name?:string;
    user_role:string;
}