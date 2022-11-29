import React, { useState } from 'react'

import { BsCardImage } from 'react-icons/bs'
import { RiBarChartGroupedFill, RiFileGifLine } from 'react-icons/ri'
import { IoMdCalendar } from 'react-icons/io'
import {RiUserLocationFill} from 'react-icons/ri'
import { RiBarChartHorizontalFill } from 'react-icons/ri'
import { BsEmojiSmile } from 'react-icons/bs'

const style = {
    wrapper:'px-4 flex flex-row border-b border-[#3844d] pb-5',
    tweetBoxLeft:'mr-4',
    tweetBoxRight:'flex-1',
    profileImage:'height-12 w-12 rounded-full',
    inputField:'w-full h-full outline-none bg-transparent text-lg',
    formLowerContainer:'flex',
    iconsContainer:'text-[#1d9bf0] flex flex-1 items-center',
    icon:'mr-2',
    submitGeneral:'px-6 py-2 rounded-3xl font-bold',
    inactiveSubmit:'bg-[#196195] text-[#95999e]',
    activeSubmit:'bg-[#1d9bf0] text-white'
}

function TweetBox(){
    const [tweetMessage,setTweetMessage] = useState('')
    
    const postTweet = (e)=>{
        e.preventDefault()
        console.log(tweetMessage + "is the ")
    }
    console.log(tweetMessage)
    return(
        <div className={style.wrapper}>
            <div className={style.tweetBoxLeft}>
                <img src="https://source.unsplash.com/random" alt='profile image' className={style.profileImage}></img>
            </div>
            <div className={style.tweetBoxRight}>
                <form>
                    <textarea className={style.inputField}
                    placeholder="What's happening"
                    value={tweetMessage}
                    onChange={e=>setTweetMessage(e.target.value)}
                    ></textarea>
                    <div className={style.formLowerContainer}>
                        <div className={style.iconsContainer}>
                            <BsCardImage className={style.icon}/>
                            <RiFileGifLine className={style.icon}/>
                            <RiBarChartHorizontalFill className={style.icon}/>
                            <BsEmojiSmile className={style.icon}/>
                            <IoMdCalendar className={style.icon}/>
                            <RiUserLocationFill className={style.icon}/>
                        </div>
                        <button type='submit' disabled = {!tweetMessage} onClick={e=>postTweet(e)} className={`${style.submitGeneral} ${tweetMessage ? style.activeSubmit : style.inactiveSubmit}`}>Tweet</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default TweetBox;