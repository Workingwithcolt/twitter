import { useState } from 'react'
import {TfiLineDotted} from 'react-icons/tfi'
import {VscTwitter} from 'react-icons/vsc'
import {BsPersonBadgeFill,BsPerson} from 'react-icons/bs'
import SidebarOption from './SidebarOption'
import {RiHome7Line,RiHome7Fill,RiFileList2Fill} from 'react-icons/ri'
import {BiHash} from 'react-icons/bi'
import {FiBell} from 'react-icons/fi'
import {IoIosMailOpen,IoIosMail,IoIosMore} from 'react-icons/io'
import{ FaRegListAlt,FatHashtag,FaBell} from 'react-icons/fa'
import {CaMoreo} from 'react-icons/cg'
import { RiBookmarkFill,RiFileList2Line} from "react-icons/ri";
import { RiBookmarkLine } from "react-icons/ri";
import { FiMoreHorizontal} from "react-icons/fi";
import { HiEllipsisHorizontal  } from "react-icons/hi2";
import { CiHashtag } from "react-icons/ci";
const style = {
    wrapper : 'flex-[0.7] px-8 flex flex-col',
    twitterIconContainer:'text-3xl m-4',
    tweetButton:'bg-[#1d9bf0] hover:bg-[#1b8cd8] flex items-center justify-center font-semibold rounded-3xl h-[50px] mt-[20px] cursor-pointer',
    navContainer:'flex-1',
    profileButton:'flex items-center mb-6 cursor-pointer hover:[brown]',
    profileLeft:'flex item-center justify-center mr-4',
    profileImage:'height-12 w-12 rounded-full',
    profileRight:'flex-1 flex',
    detail:'flex-1',
    name:'text-lg',
    handle:'text-[#8899a6]',
    moreContainer:'flex items-center mr-10',
    twit:'ml-5'
}
// flex:1 take the remaining size
function Sidebar({initialSelectedIcon="None"}){
    const [select,setSelected]  = useState(initialSelectedIcon)
    return(
    <div className={style.wrapper}>
    <div className={style.twitterIconContainer}>
        <div className={style.twit}><VscTwitter/></div>
        <SidebarOption 
        text="Home"
        Icon={select === "Home" ? RiHome7Fill:  RiHome7Line}
        isActive={Boolean(select === "Home" )}
        setSelected={setSelected}
        redirect={'/'}
        />
        {/* here we pass the setSelected because when we click on the setselected it will set the select 
        to the current text in the function body */}
        <SidebarOption
        text="Explore"
        Icon={select === "Explore" ? BiHash:CiHashtag}
        isActive={Boolean(select === "Explore")}
        setSelected={setSelected}
        redirect={'/Explore'}
        />
        <SidebarOption
        Icon={select === "Notification" ? FaBell : FiBell}
        text="Notification"
        isActive={Boolean(select === "Notification")}
        setSelected={setSelected}
        redirected={'/Notification'}
        />
        <SidebarOption
        Icon={select === "Messages" ? IoIosMailOpen : IoIosMail}
        text="Messages"
        isActive={Boolean(select==="Messages")}
        setSelected={setSelected}
        redirect={'/Messages'}
        />
        <SidebarOption
        Icon={select === "bookmarks"? RiBookmarkFill : RiBookmarkLine}
        text="bookmarks"
        isActive={Boolean(select === "bookmarks")}
        setSelected={setSelected}
        redirect={'/bookmarks'}
        />
        <SidebarOption
        Icon={select === "Lists"? RiFileList2Fill:RiFileList2Line}
        text="Lists"
        isActive={Boolean(select=== "Lists")}
        setSelected={setSelected}
        redirect={'/Lists'}
        />
        <SidebarOption
        Icon={select === "profile" ? BsPersonBadgeFill:BsPerson}
        text="profile"
        isActive={Boolean(select === "profile")}
        setSelected={setSelected}
        redirect={'/prfile'}

        />
        
        <SidebarOption
        Icon={select === "more" ? FiMoreHorizontal:HiEllipsisHorizontal} 
        text="more"
        isActive={Boolean(select === "more")}
        setSelected={setSelected}
        redirect={'/more'}
        />
        
        <div className={style.tweetButton}>Mint
        </div>
    </div>
    <div className={style.profileButton}>
        <div className={style.profileLeft}></div>
        <div className={style.profileRight}>
            <div className={style.detail}>
                <div className={style.name}>Chetan</div>
                <div className={style.handle}>0x22df....5xf2df</div>
            </div>
            <div className={style.moreContainer}>
                <TfiLineDotted/>
            </div>
        </div>
    </div>
    </div>
    )
}

export default Sidebar;