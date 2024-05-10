"use client"

import { useSession } from "next-auth/react"
import Image from "next/image"
import { redirect } from "next/navigation";

function ProfilePage() {
    const session = useSession();
    const { status } = session;
    
    if (status === "loading") return <p>Loading...</p>
    // if (status === "unauthenticated") return redirect("/login")

    const userImage = session.data?.user?.image || "/ava.jpg"

  return (
      <div className="w-full bg-white">
          {/* <Image src={userImage} objectFit="contain" width={64} height={64} alt={"avatar"} /> */}
    </div>
  )
}

export default ProfilePage