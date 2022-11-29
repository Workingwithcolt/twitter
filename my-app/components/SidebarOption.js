
const style = {
    wrapper:'flex items-center w-min flex rounded-[100px] p-4 cursor-pointer hover:bg-[#333c45] hover:ease-in-out',
    iconContainer:'text-xl mr-4',
    textGeneral:'font-medium text-base',
    textActive:'font-bold text-base',

}

// p stands for padding
// here we set default flex there when we resize the page the items move rowise

function SidebarOption({text,Icon,isActive,setSelected,redirect}){
    return(
        <div
        className={style.wrapper}
        onClick={()=>{
            setSelected(text)
        }
    }
        >
            <div className={style.iconContainer}>
                <Icon/>
                </div>
                <div className={`${isActive ? style.textActive:style.textGeneral}`}>
                    {text}
                </div>
        </div>
    )

}

export default SidebarOption