import Image from "next/image";

function AuthLayout({ children }: any) {
    return (
        <div className="w-screen h-screen bg-white flex flex-col p-12 items-center gap-12 ">
            <div className="flex flex-row-reverse items-center bg-primary gap-2 h-fit p-4 rounded-3xl w-fit">
                <span className="font-mono text-3xl text-white font-extrabold">
                    PizzaWifi
                </span>
                <Image
                    src={"/logo-header.png"}
                    objectFit="contain"
                    alt="logo"
                    width={75}
                    height={78}
                />
            </div>
            <div className="flex flex-col w-2/5 bg-primary rounded-md opacity-[0.6] ">
                {children}
            </div>
        </div>
    );
}

export default AuthLayout;
