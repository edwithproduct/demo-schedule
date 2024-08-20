// import Image from 'next/image'
import NavLink from '@/app/ui/NavLink'
import Burger from '@/app/ui/burger'
import { NavBar } from '../../ui/NavBar'
// import { Intro } from '../../ui/intro'
import { CreateTask } from '@/app/ui/CreateTask'
// import { CreateLine } from '@/app/ui/CreateLine'
import { ChakraProvider } from '@chakra-ui/react'
export default function Product() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-6">
    <main className="flex min-h-screen flex-rol">
      <div className="w-1/8 sm:w-1/6 md:w-1/4">
        {/* <NavLink /> */}
        <NavBar />
        {/* <SignOut /> */}
      </div>
      <div
        id="g_id_onload"
        data-client_id="696926247498-oroon8q33sc74q6v011539qrjn2u47or.apps.googleusercontent.com"
        data-context="signin"
        data-ux_mode="popup"
        data-login_uri="localhost:3000/login"
        data-auto_select="true"
        data-itp_support="true"
      ></div>

      <div
        className="g_id_signin"
        data-type="standard"
        data-shape="rectangular"
        data-theme="outline"
        data-text="signin_with"
        data-size="large"
        data-logo_alignment="left"
      ></div>
      <div className="flex flex-col items-start w-7/8 sm:w-5/6 md:w-3/4 p-6 overflow-y-scroll">
        <div className="sm:p-2 md:p-2 lg:p-4">
          <h1 className="text-orange-400 font-bold w-fit h-fit z-0 text-sm sm:text-sm md:text-base lg:text-2xl">
            Start Planning Your Life!
          </h1>
        </div>
        <div>
          <div className="text-base/6 text-sm sm:text-sm md:text-base lg:text-lg  p-4 w-fit h-fit z-10">
            <ChakraProvider>
              <div className="flex flex-row">
                <div className="px-2">
                  <CreateTask />
                  {/* 預計會實作時程長度可視化的功能 */}
                  {/* <CreateLine /> */}
                  {/* TODO: Add "Order by Date" Feature */}
                  {/* TODO: Add Tag for each tasks */}
                </div>
                {/* <div>
                  <DeleteTask />
                </div> */}
              </div>
            </ChakraProvider>
          </div>
        </div>
      </div>
    </main>
  )
}
