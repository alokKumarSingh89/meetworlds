export const error_message = {
  name: [{ type: "required", message: "Name is required" }],
  mobile: [{ type: "pattern", message: "Enter valid mobile no." }],
  address1: [{ type: "required", message: "Address 1 is required" }],
  email_id: [
    { type: "required", message: "Email is required" },
    { type: "pattern", message: "Enter a valid email" }
    // {type:"trimmed",message:'Email is required'}
  ],
  phone: [{ type: "pattern", message: "Enter valid phone" }],
  pincode: [
    { type: "required", message: "Pincode is required" },
    { type: "pattern", message: "Enter valid pincode" }
  ],
  gstin: [
    { type: "required", message: "GSTIN is required" },
    { type: "pattern", message: "Enter valid gstin no." }
  ]
};
