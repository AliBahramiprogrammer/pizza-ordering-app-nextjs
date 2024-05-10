"use client";
import { Disclosure } from "@headlessui/react";
import { IoIosLogOut } from "react-icons/io";
import { GoListUnordered } from "react-icons/go";
import { MdSupportAgent } from "react-icons/md";
import { IoWalletOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { FaUserEdit } from "react-icons/fa";
import { IoIosPhonePortrait } from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";


function ProfileLayout({ children }: any) {
    const session = useSession();

    const userImage = session.data?.user?.image || "/ava.jpg"

    // const url = location.pathname.split("/")[1]

    return (
        <div className="w-full h-full bg-[#fafafa] px-40 py-20">
            <div className="flex  items-start gap-5 ">
                <Disclosure as="nav">
                    <div className="p-6 w-1/2 bg-white z-20 lg:w-60 shadow-lg rounded-lg">
                        <div className="flex flex-col justify-start item-center">
                            <Image src={userImage} width={28} height={28} objectFit="contain" alt="avatar" />
                            <h1>{session.data?.user?.name}</h1>
                            
                            <div className=" my-4">
                                <Link href={"my-orders"} className="flex my-2 justify-start items-center gap-3 font-normal pl-5 hover:bg-gray-900 p-2 rounded-sm group cursor-pointer hover:shadow-lg m-auto border-b border-primary">
                                    <GoListUnordered className={`text-2xl text-gray-600 group-hover:text-white`} />
                                    <h3 className="text-sm text-nowrap text-gray-800 group-hover:text-white  font-medium ">
                                        سفارش های من
                                    </h3>
                                </Link>
                                <Link href={"support"} className="flex  my-2 justify-start items-center gap-3 font-normal pl-5 hover:bg-gray-900 p-2 rounded-sm group cursor-pointer hover:shadow-lg m-auto border-b border-gray-300">
                                    <MdSupportAgent className="text-2xl text-gray-600 group-hover:text-white " />
                                    <h3 className="text-sm text-nowrap text-gray-800 group-hover:text-white font-medium ">
                                        پشتیبانی
                                    </h3>
                                </Link>
                                <Link href={"notifications"} className="flex  my-2 justify-start items-center gap-3 font-normal pl-5 hover:bg-gray-900 p-2 rounded-sm group cursor-pointer hover:shadow-lg m-auto border-b border-gray-300">
                                    <IoIosNotificationsOutline className="text-2xl text-gray-600 group-hover:text-white " />
                                    <h3 className="text-sm text-nowrap text-gray-800 group-hover:text-white font-medium ">
                                        اعلان ها
                                    </h3>
                                </Link>
                                <Link href={"my-wallet"} className="flex  my-2 justify-start items-center gap-3 font-normal pl-5 hover:bg-gray-900 p-2 rounded-sm group cursor-pointer hover:shadow-lg m-auto border-b border-gray-300">
                                    <IoWalletOutline className="text-2xl text-gray-600 group-hover:text-white " />
                                    <h3 className="text-sm text-nowrap text-gray-800 group-hover:text-white font-medium ">
                                        کیف پول
                                    </h3>
                                </Link>
                                <Link href={"my-address"} className="flex  my-2 justify-start items-center gap-3 font-normal pl-5 hover:bg-gray-900 p-2 rounded-sm group cursor-pointer hover:shadow-lg m-auto border-b border-gray-300">
                                    <CiLocationOn className="text-2xl text-gray-600 group-hover:text-white " />
                                    <h3 className="text-sm text-nowrap text-gray-800 group-hover:text-white font-medium ">
                                        آدرس های من
                                    </h3>
                                </Link>
                                <Link href={"edit-info"} className="flex  my-2 justify-start items-center gap-3 font-normal pl-5 hover:bg-gray-900 p-2 rounded-sm group cursor-pointer hover:shadow-lg m-auto border-b border-gray-300">
                                    <FaUserEdit className="text-2xl text-gray-600 group-hover:text-white " />
                                    <h3 className="text-sm text-nowrap text-gray-800 group-hover:text-white font-medium ">
                                        ویرایش اطلاعات کاربری 
                                    </h3>
                                </Link>
                                <Link href={"edit-phone-number"} className="flex  my-2 justify-start items-center gap-3 font-normal font-light pl-5 hover:bg-gray-900 p-2 rounded-sm group cursor-pointer hover:shadow-lg m-auto border-b border-gray-300">
                                    <IoIosPhonePortrait className="text-2xl text-gray-600 group-hover:text-white " />
                                    <h3 className="text-sm text-nowrap text-gray-800 group-hover:text-white font-medium ">
                                        ویرایش شماره همراه
                                    </h3>
                                </Link>
                                <div className="flex my-2 justify-start items-center gap-3 font-normal pl-5 hover:bg-gray-900 p-2 rounded-sm group cursor-pointer hover:shadow-lg m-auto">
                                    <IoIosLogOut className="text-2xl text-gray-600 group-hover:text-white " />
                                    <h3 className="text-sm text-nowrap text-gray-800 group-hover:text-white font-medium ">
                                        خروج از حساب کاربری
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </Disclosure>
                <div className="grow h-[470px] bg-white shadow-lg rounded-lg overflow-hidden">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default ProfileLayout;
