import React, { useState, useEffect, useContext } from "react"

//INTERNAL IMPORT 
import { CrowdFundingContext } from "@/Context/CrowdFunding";
import { Logo, Menu } from "../Components/index"


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
                
            </div>
          </div>
        </div>
      </div> 
    )
}


export default NavBar




