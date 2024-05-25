//since we are using client facing functionalities like hooks, we need to make it a client component
"use client";

//component imports
import Link from "next/link"
import Image from "next/image"
import { Button  } from 'antd';

//asset imports
import logo from "../public/assets/images/logo.svg"

//hooks and dependency imports
import { useEffect, useState } from "react";
// import { signIn, signOut, getProviders, useSession } from "next-auth/react"

const Nav = () => {

//   const { data: session } = useSession();

//   const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

//   useEffect(() => {
//     const setUpProviders = async () => {
//       const response = await getProviders();

//       setProviders(response);
//     }

//     setUpProviders();
//   }, [])


  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center" >
        <Image 
            src={logo}
            alt="Promptopia Logo"
            width={30}
            height={30}
            className="object-contain"
        />
        <p className="logo_text">TruFund</p>
      </Link>

      {/* Desktop navigation */}
      <div className="sm:flex hidden">
        {/* {
          session ? 
          <div className="flex gap-3 md:gap-3">
            <Link 
              href="/create-prompt"
              className="black_btn"  
            >
              Create Post
            </Link>

            <button
              type="button"
              className="outline_btn"
              onClick={() => signOut()}
            >
              SignOut
            </button>

            <Link href="/profile">
              <Image 
                src={session?.user.image}
                width={37}
                height={37}
                className="rounded-full "
                alt="Profile"

              />
            </Link>
          </div> 
            : 
          <>
            {
              providers && 
              Object.values(providers).map((provider) => {
                return <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              })
            }
          </>
        } */}
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {/* {
          session?.user ? 
          <div className="flex">
            <Image 
                src={session?.user.image}
                width={37}
                height={37}
                className="rounded-full "
                alt="Profile"
                onClick={() => setToggleDropdown((prevVal) => !prevVal)}
              />

            {
              toggleDropdown && 
              <div className="dropdown">
                <Link 
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}  
                > 
                  My Profile
                </Link>
                <Link 
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}  
                > 
                  Create Prompt
                </Link>

                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className="mt-5 w-full black_btn"
                >
                  Sign Out
                </button>

              </div>
            }

          </div>
          :
          <>
            {
              providers && 
              Object.values(providers).map((provider) => {
                return <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              })
            }
          </>
        } */}
 
      </div>

      <Link href={'/campaign/new'}>
       <button
    class="middle none center mr-3 rounded-lg bg-primary-orange py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    data-ripple-light="true"
  >Create Campaign
  </button></Link>
    </nav>
  )
}

export default Nav