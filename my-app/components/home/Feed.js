import {BsStar}  from "react-icons/bs"
import TweetBox from './TweetBox.js'
import Post from '../post'
const style ={
    wrappper:'flex-[2] border-l border-r border-[#3844d]',
    header:'sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between  items-center',
    headerTitle:'text-xl font-bold',
}
const tweet = [
    {
        displayName:'Qazi',
        username:'0x8Cd390f697ffDc176f1870D2F3BB3083698434fD',
        avatar:'https://images.unsplash.com/photo-1666581862001-48c22e9a7a14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2ODkyMTkwNA&ixlib=rb-4.0.3&q=80&w=1080',
        text:'gm',
        isProfileImageNft:true,
        timestamp:'2020-06-01T12:00:00.000Z'
    },
    {
        displayName:'Qazi',
        username:'0x8Cd390f697ffDc176f1870D2F3BB3083698434fD',
        avatar:'https://images.unsplash.com/photo-1668005651015-d0692d64a939?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2ODkyMTkyNA&ixlib=rb-4.0.3&q=80&w=1080',
        text:'gm',
        isProfileImageNft:true,
        timestamp:'2020-06-01T12:00:00.000Z'
    },
    {
        displayName:'Qazi',
        username:'0x8Cd390f697ffDc176f1870D2F3BB3083698434fD',
        avatar:'https://images.unsplash.com/photo-1667715471129-7e48b52cf292?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2ODkyMjAwNA&ixlib=rb-4.0.3&q=80&w=1080 ',
        text:'gm',
        isProfileImageNft:true,
        timestamp:'2020-06-01T12:00:00.000Z'
    },
    {
        displayName:'Qazi',
        username:'0x8Cd390f697ffDc176f1870D2F3BB3083698434fD',
        avatar:'https://images.unsplash.com/photo-1668588126946-d8958803ff3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2ODkyMTk3NQ&ixlib=rb-4.0.3&q=80&w=1080',
        text:'gm',
        isProfileImageNft:true,
        timestamp:'2022-06-01T12:00:00.000Z'
    }
]

function Feed(){
    console.log(tweet)
    return(
        <div className={style.wrappper}>
            <div className={style.header}>
                <div className={style.headerTitle}>Home </div>
                <BsStar/>
            </div>
            <TweetBox/>
            <div>
            {
                 
                tweet.map((twt,index) =>{
                    return <Post
                    key={index}
                    displayName={twt.displayName}
                    username={`${twt.username.slice(0,4)}....${twt.username.slice(-4)}`}
                    avatar={twt.avatar}
                    text={twt.text}
                    isProfileImageNft={twt.isProfileImageNft}
                    timestamp = {twt.timestamp}
                    />
                })
            }
            </div>
        </div>
    )
}
export default Feed