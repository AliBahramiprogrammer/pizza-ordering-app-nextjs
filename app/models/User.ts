import { model, models, Schema } from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new Schema(
    {
        // email: { type: String, required: true, unique: true },
        // password: {
        //     type: String,
        //     required: true,
        //     validate: (pass:any) => {
        //         if (!pass?.length || pass.length < 5) {
        //             new Error("Password must be at least 5 characters.")
        //         }
        //     }
        // }
        name: { type: String },
        email: { type: String, required: true, unique: true },
        password: { type: String },
        image: { type: String },
    },
    { timestamps: true }
);

UserSchema.pre("save", async function (next) {
    if (this.password && this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 8);
    }
    next();
});

const User = models?.User || model("User", UserSchema);
export default User;
