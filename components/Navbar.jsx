import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { signOut, signIn, auth } from '@/app/auth'

const Navbar = async() => {
    const session = await auth()
  return (
    <div className='px-5 py-5 bg-white text-black shadow-sm font-work-sans sticky top-0'>
        <div className="flex justify-between items-center ">
            <Link href="/">
                <Image src="/logo.png" alt='Logo' width={144} height={33}/>
            </Link>
            <div className="flex items-center gap-5">
                {session && session.user ? (
                <>
                    <Link href="/startup/create">
                        <span>Create</span>
                    </Link>
                    <form action={async() =>{
                        "use server"
                        await signOut({redirectTo: "/"})
                    }}>
                        <button type='submit'>Logout</button>
                    </form>

                    <Link href={`/user/${session?.id}`}>
                        <span>{session?.user?.name}</span>
                    </Link>

                </>
                ):(
                    <form action={async () =>{
                        "use server"
                        await signIn('github')
                    }}>
                        <button type='submit'>Login</button>
                    </form>
                )}
            </div>
        </div>
    </div>
  )
}

export default Navbar