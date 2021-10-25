import ChatItem from "./chatItem"
import ChatListItens  from './../mocks/chatListModel'
import { useState, useEffect} from "react"


    
export default function ChatList(){
    const [listItem, setListItem] = useState([])
    let arrayList = []
    useEffect(() => {
        
        ChatListItens.map(x => {
            arrayList.push(<ChatItem {...x}/>)
        })
        setListItem(arrayList)
    }, [ChatListItens])
    

    return (
        <div>
            {listItem}
        </div>
    )
}