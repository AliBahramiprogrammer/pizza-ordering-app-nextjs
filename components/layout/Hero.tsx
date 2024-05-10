import Image from "next/image";
import Link from "next/link";

function Hero() {
    return (
        <>
            <div className="flex my-16 justify-center gap-32 font-medium tracking-wider">
                <Link
                    href={"/menu"}
                    className="text-white border-2 rounded-full py-3 px-20 bg-primary hover:bg-white hover:text-black transition delay-150 ease-in-out duration-500"
                >
                    سفارش از منو
                </Link>
                <Link
                    href={"/make-own-pizza"}
                    className="text-white border-2 rounded-full py-3 px-20 bg-primary hover:bg-white hover:text-black transition delay-150 ease-in-out duration-500"
                >
                    پیتزای خودتو بساز
                </Link>
            </div>
            <div className="w-full h-auto border-b-8">
                <Image src={"/home-banner.jpg"} alt="Pizza banner" objectFit="contain" width={0} height={0}  sizes="100vw" style={{width: "100%" , height: "100%"}}/>
            </div> 
        </>
    );
}

export default Hero;
