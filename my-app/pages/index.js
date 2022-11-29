import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/home/Feed.js'
import Widgets from '../components/Widgets'
import Sidebar from "../components/Sidebar.js"
// import '../styles/home.css'
const style = {
  wrapper:`flex  justify-center h-150  w-screen select-none bg-[#15202b] text-white`,
  content:`max-w-[1400px] w-2/3 flex justify-between`
}
// select none stop selecting text from the website
//w-2/3 for dividing the section into equal parts

export default function Home(){
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
      <Sidebar/>
      <Feed/>
      <Widgets/>
    </div>
    </div>
  )
}
