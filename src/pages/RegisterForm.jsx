import { useForm } from "react-hook-form";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../context";

function RegisterForm() {

    const { store } = useContext(Context);

    const {
        register,
        formState: { errors },
        handleSubmit,
        setError,
    } = useForm();

    const onSubmit = async (data) => {
        const response = await store.register(data.username, data.email, data.password)
        if (response){
            if (response.status == 409){ setError("root", {type:"root", message:"User with this email or username already exists"})}
            if (response.status == 500){ setError("root", {type:"root", message:"Internal server error, please try later"})}
        }
    };

    return (
        <div className="auth-card w-[360px] md:w-[400px] bg-base-100 shadow-xl rounded-lg p-6 font-mono self-center">
            <h1 className="text-center text-2xl font-bold text-primary mb-4">
                SIGN UP
            </h1>

            <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="flex flex-col gap-4"
            >

                <div>
                    <div className="flex justify-between items-center mb-1">
                        <label htmlFor="username" className="label-text">
                            Username
                        </label>
                        {errors.username && (
                            <p role="alert" className="text-error text-sm">
                                {errors.username.message}
                            </p>
                        )}
                    </div>
                    <input
                        className="input input-bordered w-full"
                        type="text"
                        id="username"
                        placeholder="username..."
                        {...register("username", {
                            required: "Username required",
                            minLength: { value: 6, message: "Username too short" },
                            pattern: {
                                value: /^[a-z0-9_-]+$/,
                                message: "Username has to be in lowercase",
                            },
                        })}
                    />
                </div>


                <div>
                    <div className="flex justify-between items-center mb-1">
                        <label htmlFor="email" className="label-text">
                            Email
                        </label>
                        {errors.email && (
                            <p role="alert" className="text-error text-sm">
                                {errors.email.message}
                            </p>
                        )}
                    </div>
                    <input
                        className="input input-bordered w-full"
                        type="email"
                        id="email"
                        autoComplete="email"
                        placeholder="test123@test.com"
                        aria-invalid={!!errors.email}
                        {...register("email", {
                            required: "Email required!!",
                            minLength: { value: 6, message: "Too short for email" },
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                                message: "Invalid email",
                            },
                        })}
                    />
                </div>

                <div>
                    <div className="flex justify-between items-center mb-1">
                        <label htmlFor="password" className="label-text">
                            Password
                        </label>
                        {errors.password && (
                            <p role="alert" className="text-error text-sm">
                                {errors.password.message}
                            </p>
                        )}
                    </div>
                    <input
                        className="input input-bordered w-full"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        placeholder="password"
                        {...register("password", {
                            required: "Password required!!",
                            minLength: { value: 8, message: "Password too short" },
                        })}
                    />
                </div>
                {errors.root && <p role="alert" className="text-error text-center text-sm">
                    {errors.root.message}
                </p>}

                <button type="submit" className="btn btn-secondary w-1/2 self-center">
                    Sign up
                </button>
            </form>
        </div>
    );
};

export default observer(RegisterForm);