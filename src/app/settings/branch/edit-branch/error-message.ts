export const error_message = {
  name: [{ type: "required", message: "Name is required" }],
  mobile: [
    { type: "required", message: "Mobile no. is required" },
    { type: "pattern", message: "Enter valid mobile no." }
  ],
  address: [{ type: "required", message: "Address is required" }],
  pincode: [
    { type: "required", message: "Pincode is required" },
    { type: "pattern", message: "Enter valid pincode" }
  ],
  delivery_charge: [
    { type: "required", message: "Delivery Charge is required" },
    { type: "pattern", message: "Enter valid Delivery Charge" }
  ],
  min_order_amount: [
    { type: "required", message: "Minimum Order Amount is required" },
    { type: "pattern", message: "Enter valid Minimum Order Amount" }
  ]
};
