export const error_message = {
  category: [{ type: "required", message: "Select Category" }],
  name: [{ type: "required", message: "Name is required" }],
  quantity: [
    { type: "required", message: "Name is required" },
    { type: "pattern", message: "Enter valid Quantity" }
  ],
  unit: [{ type: "required", message: "Select Unit" }],
  price: [
    { type: "required", message: "Price is required" },
    { type: "pattern", message: "Enter valid Price" }
  ]
};
