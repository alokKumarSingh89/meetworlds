export const error_message = {
    email: [
        { type: "required", message: "Email is required" },
        { type: "pattern", message: 'Valid email is required' }
    ],
    user_role: [
        { type: "required", message: "User Role is required" }
    ],
    PASSWORD: [
        { type: "required", message: "Password is required" },
        { type: "trimmed", message: 'Valid password is required' },
        { type: "minlength", message: "Please enter minimum 5 alphabet" }
    ],
    branch_id: [
        { type: "required", message: "Branch is required" }
    ]
}