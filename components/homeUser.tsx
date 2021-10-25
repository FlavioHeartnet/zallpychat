import UserInfo from './userInfo'
import SearchBar from './searchBar'
import ChatList from './chatList'
export default function HomeUser(){
    return (
        <div>
            <UserInfo/>
            <SearchBar/>
            <ChatList/>
        </div>
    )
}