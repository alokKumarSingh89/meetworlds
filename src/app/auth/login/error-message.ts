export const error_message = {
  email: [
    { type: "required", message: "Email is required" },
    { type: "pattern", message: "Enter a valid email" },
    // {type:"trimmed",message:'Email is required'}
  ],
  PASSWORD:[
    { type: "required", message: "Password is required" },
    { type: "minlength", message: "Password cann't be less than 6" },
    // {type:"trimmed",message:'Password is required'}
  ]
};
