"use client";
import { useSession } from "next-auth/react";
import { useState } from "react";

function EditInfo() {

    const session = useSession();
    const [userName, setUserName] = useState(session.data?.user?.name || "خالی");
    

    async function handleProfileInfoUpdate(ev:any) {
        ev.preventDefault();
        const response = await fetch("/api/profile", {
            method: "PUT",
            body: JSON.stringify({ userName }),
            headers: { "Content-type": "application/json" },
        })
    }

    return (
        <div className="flex flex-col items-start justify-center">
            <div className="w-full bg-orange-100 py-4 pr-4 ">
                <h3 className="text-red-800 text-2xl font-extrabold">
                    ویرایش اطلاعات کاربری
                </h3>
            </div>
            <form className="w-full p-8 flex flex-col" onSubmit={handleProfileInfoUpdate}>
                <label className="relative cursor-pointer w-full ">
                    <input
                        type="text"
                        placeholder="Input"
                        value={userName}
                        onChange={ev => setUserName(ev.target.value)}
                        className="h-16 px-6 text-2xl !bg-white border-white border-2 rounded-lg border-opacity-50 outline-none focus:border-primary placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                    />
                    <span className="text-xl font-normal text-primary text-opacity-80 absolute top-4 px-2 bg-white -translate-y-8 -translate-x-2 scale-75">
                        نام و نام خانوادگی
                    </span>
                </label>
                <button type="submit" className="rounded-full bg-primary text-white py-2 px-4 shadow hover:bg-red-700 w-fit self-end mt-6">
                    ویرایش اطلاعات
                </button>
            </form>
        </div>
    );
}

export default EditInfo;
