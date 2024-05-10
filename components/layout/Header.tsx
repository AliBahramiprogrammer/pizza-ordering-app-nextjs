"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Modal from "./Modal";
import {
    IoBasketOutline,
    IoLocationOutline,
    IoPersonOutline,
} from "react-icons/io5";
import { useSession } from "next-auth/react";

function Header() {
    const [open, setOpen] = useState<boolean>(false);
    const session = useSession();
    console.log(session);
    const userData = session.data?.user;
    let userName = userData?.name || userData?.email;
    if (userName?.includes(" ")) {
        userName = userName.split(" ")[0];
    }


    return (
        <header className="max-w-6xl mx-auto flex justify-between items-center p-4 border-b-[1px] border-slate-300 ">
            <nav className="flex items-center gap-8 font-medium text-secondary">
                <Image
                    src={"/logo-header.png"}
                    objectFit={"contain"}
                    alt={"pizzawifi"}
                    width={78}
                    height={75}
                />
                <Link href={"/"}>صفحه اول</Link>
                <Link href={"/"}>سفارش از منو</Link>
                <Link href={"/"}>پیتزاتو بساز</Link>
                <Link href={"/"}> سبد خرید</Link>
                {session.status === "authenticated" ? (
                    <Link href={"/profile/my-order"}>{userName}</Link>
                ) : (
                    <Link href={"/login"}> ورود/عضویت</Link>
                )}
            </nav>
            <nav className="flex items-center gap-4 font-medium text-secondary">
                <button
                    className="flex items-center justify-center gap-2 bg-white rounded-full py-2 px-6 text-black"
                    onClick={() => setOpen(true)}
                >
                    <IoLocationOutline size="20px" />
                    <span>انتخاب شعبه</span>
                </button>
                <button>
                    <IoPersonOutline size="25px" />
                </button>
                <button type="button" className="relative">
                    <IoBasketOutline size="25px" />
                    <span className="sr-only">Notifications</span>
                    <div className="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-primary bg-white  rounded-full -top-1 -start-2 dark:border-gray-900">
                        0
                    </div>
                </button>
                <Modal open={open} onClose={() => setOpen(false)}>
                    MODAL CONTENT
                </Modal>
            </nav>
        </header>
    );
}

export default Header;
