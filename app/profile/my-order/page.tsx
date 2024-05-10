'use client';
import { signOut } from "next-auth/react"

function MyOrderPage() {

    const handleClick = () => {
        signOut()
    }

  return (
      <>
          {/* <button className="w-full bg-white flex justify-center items-center" onClick={handleClick}>Logout</button> */}
      </>
  )
}

export default MyOrderPage