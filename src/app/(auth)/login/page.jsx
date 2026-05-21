'use client'

import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import { toast } from "sonner";
import { authClient, signIn } from "@/lib/auth-client";

// import { useRouter } from "next/navigation";

const LoginPage = () => {
    // const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const LogData = Object.fromEntries(formData.entries());

        const { data, error } = await signIn.email({

            email: LogData.email,
            password: LogData.password,

            callbackURL: "/"
        });

        const { data: tokenData } = await authClient.token()
        console.log(tokenData);


        // console.log(data, error);// <=important***
        if (error) {
            toast.error(error.message, {
                position: "top-right",
            });

            return;
        }

        toast.success("Login successful!", {
            position: "top-right",
        });
        // router.push("/")

        e.target.reset();
    };

    const handleGoogleLogin = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/"
        });
    };





    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-lg bg-slate-900 border border-indigo-500/20 rounded-3xl p-8 shadow-xl">

                <div className="flex justify-center mb-6">
                    <div className="h-16 w-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center">
                        <Image
                            src="/logo.png"
                            alt="NookNest Logo"
                            height={64}
                            width={64}
                        />
                    </div>
                </div>


                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-white">
                        Welcome Back
                    </h1>
                    <p className="text-slate-400 mt-2 text-lg">
                        Sign in to manage your rooms and bookings.
                    </p>
                </div>


                <form
                    onSubmit={handleLogin}
                    className="space-y-5">
                    <div>
                        <label className="block text-white font-medium mb-2">
                            Email
                        </label>
                        <input
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-white font-medium mb-2">
                            Password
                        </label>
                        <input
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none"
                        />
                    </div>


                    <div className="flex justify-end">
                        <Link
                            href="/forgot-password"
                            className="text-sm text-indigo-400 hover:text-indigo-300"
                        >
                            Forgot Password?
                        </Link>
                    </div>


                    <button
                        type="submit"
                        className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded-xl transition"
                    >
                        Login
                    </button>
                </form>


                <div className="flex items-center gap-4 my-6">
                    <div className="flex-1 h-px bg-slate-700" />
                    <span className="text-slate-400">OR</span>
                    <div className="flex-1 h-px bg-slate-700" />
                </div>


                <button
                    onPress={handleGoogleLogin}
                    className="w-full flex items-center justify-center gap-3 border border-slate-700 bg-slate-950 hover:border-indigo-500 text-white py-3 rounded-xl transition">
                    <FcGoogle size={22} />
                    Continue with Google
                </button>


                <p className="text-center text-slate-400 mt-8">
                    Don,t have an account?{" "}
                    <Link
                        href="/register"
                        className="text-indigo-400 hover:text-indigo-300 font-medium"
                    >
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;