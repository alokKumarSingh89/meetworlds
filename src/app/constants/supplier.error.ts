export const error_message={
	name: [
		{type: "required",message: "Supplier name is required"},
	],
	email_id: [
		{type: "required",message: "Email is required"},
		{type: "pattern",message: 'Valid email is required'}
	],
	mobile: [
		{type: "required",message: "mobile is required"},
		{type: "pattern",message: 'Valid mobile is required'}
	],
	pincode: [
		{type: "required",message: "pincode is required"},
		{ type: "minlength", message: "Please enter minimum 6 number" }
	]
}