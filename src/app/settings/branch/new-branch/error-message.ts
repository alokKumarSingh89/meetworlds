export const error_message = {
  name: [{ type: "required", message: "Name is required" }],
  mobile: [{ type: "pattern", message: "Enter valid mobile no." }],
  email_id: [
    { type: "required", message: "Email is required" },
    { type: "pattern", message: "Enter a valid email" }
    // {type:"trimmed",message:'Email is required'}
  ],
  phone: [{ type: "pattern", message: "Enter valid phone" }],
  pincode: [{ type: "pattern", message: "Enter valid pincode" }]
};
