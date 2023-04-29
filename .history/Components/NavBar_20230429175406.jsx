import React, { useState, useEffect, useContext } from "react"

//INTERNAL IMPORT 
import { CrowdFundingContext } from "@/Context/CrowdFunding";
import Logo from "@/Components/Logo";


const NavBar = () => {
    const { currentAccount, connectWallet } = useContext(CrowdFundingContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuList = ["white Paper", "Project", "Donation", "Members"];
     return (
      <div class="backgroundMain">
        <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div class="relative flex items-center justify-between">
            <div class="flex items-center">
              <a
                href="/"
                aria-label="Company"
                title="Company"
                class="inline-flex items-center mr-8"
              >
                <Logo
                color="text-white"
                />
                <span class="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                  BLOCK FUND
                </span>
              </a>
              <ul class="items-center hidden space-x-8 lg:flex">
                {menuList.map((el, i) => (
                  <li key={i + 1} class="inline-block mr-8">
                    <a
                      href="/"
                      aria-label="Our product"
                      title="Our product"
                      class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                    >
                      {el}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {!currentAccount && (
              <ul class="flex items-center hidden space-x-8 lg:flex">
                <li class="inline-block">
                  <button 
                    onClick={() => connectWallet()}
                    class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                    
          </div>
        </div>
      </div> 
    )
}


export default NavBar




