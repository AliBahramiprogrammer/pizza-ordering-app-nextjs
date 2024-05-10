"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoMdPerson } from "react-icons/io";
import { MdLogin } from "react-icons/md";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginInProgress, setLoginInProgress] = useState(false);

    async function handleFormSubmit(ev: any) {
        ev.preventDefault();
        setLoginInProgress(true);

        await signIn("credentials", { email, password, callbackUrl: "/" });

        setLoginInProgress(false);
    }

    return (
        <>
            <div className="flex-1 flex justify-center gap-4 my-4">
                <Link id="auth" href={"/register"}>
                    <IoMdPerson />
                    ثبت نام
                </Link>
                <Link id="auth" href={"/login"} className="border-4 rounded-lg">
                    <MdLogin />
                    ورود
                </Link>
            </div>
            <h2 className="text-white font-extrabold my-4 text-center">
                {" "}
                {" ثبت نام در پیتزا وای فای"}
            </h2>
            <form
                className="max-w-sm mx-auto mt-4 flex flex-col"
                onSubmit={handleFormSubmit}
            >
                <label>
                    ایمیل
                    <input
                        type="email"
                        name="email"
                        value={email}
                        disabled={loginInProgress}
                        onChange={(ev) => setEmail(ev.target.value)}
                    />
                </label>
                <label>
                    پسورد
                    <input
                        type="password"
                        name="password"
                        value={password}
                        disabled={loginInProgress}
                        onChange={(ev) => setPassword(ev.target.value)}
                    />
                </label>
                <button type="submit">ورود</button>
                <button type="button" onClick={()=> signIn("google" , {callbackUrl: "/"})} className="flex justify-center items-center bg-white my-4 p-4 font-extrabold gap-4">
                    <Image
                        src={"/google.png"}
                        alt={"login with google"}
                        width={24}
                        height={24}
                        objectFit="contain"
                    />
                    ورود با گوگل
                </button>
            </form>
        </>
    );
}

export default LoginPage;
