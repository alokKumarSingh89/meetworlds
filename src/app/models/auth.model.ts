export type AuthType = 'login' | 'registraion';
export interface UserDTO{
    email:string;
    PASSWORD:string;
    login?:string;
    created_by?:string;
	activated?:number;
}