import mongoose from "mongoose";
import bcrypt from "bcryptjs"; //A library used to hash and compare passwords securely.

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Name is required"], //custom error msg
		},
		email: {
			type: String,
			required: [true, "Email is required"],
			unique: true,
			lowercase: true,
			trim: true,
		},
		password: {
			type: String,
			required: [true, "Password is required"],
			minlength: [6, "Password must be at least 6 characters long"],
		},
		cartItems: [
			{
				quantity: {
					type: Number,
					default: 1,
				},
				product: {
					type: mongoose.Schema.Types.ObjectId, //mongoDB id
					ref: "Product", //from product model
				},
			},
		],
		role: {
			type: String,
			enum: ["customer", "admin","seller"],
			default: "customer",
		},
	},
	{
		timestamps: true,
	}
);

// Pre-save hook to hash password before saving to database
userSchema.pre("save", async function (next) {
	if (!this.isModified("password")) return next();  //If the password field hasn't been modified (e.g., when updating other fields), the function exits early and skips hashing.

	try {
		const salt = await bcrypt.genSalt(10); //The value 10 is the number of rounds for salt generation (a standard value).
		this.password = await bcrypt.hash(this.password, salt); //using salt we hash the password
		next();
	} catch (error) {
		next(error);
	}
});

userSchema.methods.comparePassword = async function (password) {  ///if wrong PW "invalid credentials"
	return bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema); //should be below the above hashing function.

export default User;
