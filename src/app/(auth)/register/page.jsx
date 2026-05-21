'use client'
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import { toast } from "sonner";
import { signUp } from "@/lib/auth-client";
import { useRouter } from "next/navigation";




const RegisterPage = () => {
    const router = useRouter();

    const handleRegister = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const regData = Object.fromEntries(formData.entries());

        const { data, error } = await signUp.email({
            name: regData.name,
            email: regData.email,
            password: regData.password,
            image: regData.image

        });

        console.log(data, error);
        if (error) {
            toast.error(error.message, {
                position: "top-right",
            });

            return;
        }

        toast.success("Registration successful!", {
            position: "top-right",
        });
        router.push("/login")

        e.target.reset();
    };

    const handleGoogleLogin = () => {
        signUp.google({
            callbackURL: "/"
        });
    }

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-lg bg-slate-900 border border-indigo-500/20 rounded-3xl p-8 shadow-xl">

                <div className="flex justify-center mb-6">
                    <div className="h-20 w-20 rounded-2xl bg-indigo-500/10 flex items-center justify-center">
                        <Image
                            src="/logo.png"
                            alt="NookNest Logo"
                            height={160}
                            width={160}
                        />
                    </div>
                </div>


                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-white">
                        Create a StudyNook Account
                    </h1>
                    <p className="text-slate-400 mt-2 text-lg">
                        Start booking quiet rooms today.
                    </p>
                </div>


                <form
                    onSubmit={handleRegister}
                    className="space-y-5">
                    <div>
                        <label className="block text-white font-medium mb-2">
                            Name
                        </label>
                        <input
                            id="name"
                            required
                            placeholder="Enter your full name"
                            name="name"
                            type="text"
                            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-white font-medium mb-2">
                            Email
                        </label>
                        <input
                            name="email"
                            required
                            placeholder="Enter your email"
                            type="email"
                            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-white font-medium mb-2">
                            Photo URL
                        </label>
                        <input
                            name="image"
                            type="url"
                            placeholder="https://..."
                            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-white font-medium mb-2">
                            Password
                        </label>
                        <input
                            name="password"
                            placeholder="Enter your password"
                            type="password"
                            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none"
                        />

                        <p className="text-sm text-slate-400 mt-2">
                            At least 6 characters, with uppercase and lowercase letters.
                        </p>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded-xl transition"
                    >
                        Register
                    </button>
                </form>


                <div className="flex items-center gap-4 my-6">
                    <div className="flex-1 h-px bg-slate-700" />
                    <span className="text-slate-400">OR</span>
                    <div className="flex-1 h-px bg-slate-700" />
                </div>


                <button
                    onPress={handleGoogleLogin}
                    className="w-full flex items-center justify-center gap-3 border border-slate-700 bg-slate-950 hover:border-indigo-500 text-white py-3 rounded-xl transition"
                >
                    <FcGoogle size={22} />
                    Continue with Google
                </button>


                <p className="text-center text-slate-400 mt-8">
                    Already have an account?{" "}
                    <Link
                        href="/login"
                        className="text-indigo-400 hover:text-indigo-300 font-medium"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;

//GalibM@29