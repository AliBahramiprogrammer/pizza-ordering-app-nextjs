"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoMdPerson } from "react-icons/io";
import { MdLogin } from "react-icons/md";

function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [creatingUser, setCreatingUser] = useState(false);
    const [userCreated, setUserCreated] = useState(false);
    const [error , setError] = useState(false)

    async function handleFormSubmit(e: any) {
        e.preventDefault();
        setCreatingUser(true)
        try {
            const response = await fetch("/api/register", {
                method: "POST",
                body: JSON.stringify({ email, password }),
                headers: { "Content-type": "application/json" },
            });
            if (response.ok) {
                setUserCreated(true) 
            } else {
                setError(true)
            }
            setCreatingUser(false)
            
        } catch (error) {
            setError(true)
        }
    }

    return (
        <>
            <div className="flex-1 flex justify-center gap-4 my-4">
                <Link id="auth" href={"/register"} className="border-4 rounded-lg">
                    <IoMdPerson />
                    ثبت نام
                </Link>
                <Link id="auth" href={"/login"}>
                    <MdLogin />
                    ورود
                </Link>
            </div>
            <h2 className="text-white font-extrabold my-4 text-center">
                {" "}
                {
                   (" ثبت نام در پیتزا وای فای")
                }
            </h2>
            {userCreated && (
                <h2 className="text-white font-extrabold  text-center">
                   ثبت نام با موفقیت انجام شد . الان میتونی وارد بشی.
                </h2>
            )}
            {error && (
                <h2 className=" font-light text-black text-center">
                   مشکلی پیش اومده !! 
                   .لطفا بعدا امتحان کنید
                </h2>
            )}
            <form
                className="max-w-sm mx-auto mt-4 flex flex-col"
                onSubmit={handleFormSubmit}
            >
                <label>
                    ایمیل
                    <input
                        type="email"
                        value={email}
                        disabled={creatingUser}
                        onChange={(ev) => setEmail(ev.target.value)}
                    />
                </label>
                <label>
                    پسورد
                    <input
                        type="password"
                        value={password}
                        disabled={creatingUser}
                        onChange={(ev) => setPassword(ev.target.value)}
                    />
                </label>
                <button type="submit" disabled={creatingUser}>ثبت نام</button>
                <button onClick={()=> signIn("google" , {callbackUrl: "/"})} className="flex justify-center items-center bg-white my-4 p-4 font-extrabold gap-4">
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

export default RegisterPage;
