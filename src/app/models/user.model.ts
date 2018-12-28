export interface User{
    email:string;
    PASSWORD:string;
    login?:string;
    created_by?:string;
    activated?:number;
    first_name?:string;
    last_name?:string;
    user_role:string;
    token?:string;
    branch_id?:string;
}