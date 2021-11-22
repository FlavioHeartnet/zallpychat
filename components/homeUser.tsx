import UserInfo from './userInfo'
import SearchBar from './searchBar'
import ChatList from './chatList'
export default function HomeUser(props){
    return (
        <div>
            <UserInfo name={props.name}/>
            <SearchBar/>
            <ChatList/>
        </div>
    )
}