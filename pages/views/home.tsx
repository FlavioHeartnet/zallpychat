import { onAuthStateChanged, signOut  } from "firebase/auth";
import {auth} from '../../firebase'
import UserModel from './../../models/userCollectionRef'
import {useRouter} from 'next/router'
import {useState, useEffect} from 'react'
import { Button } from 'semantic-ui-react'
import styles from '../../styles/Home.module.scss'
import Chat from '../../components/chat'
import User from '../../components/homeUser'

export default function Home() {
    const [userid, setUserId] = useState("")
    const [userData, setuserdata] = useState({})
    const router = useRouter()
    useEffect(()=>{
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                setUserId(user.uid)
                const userModel = new UserModel
                const documentData = await userModel.getDocByid(userid)
                setuserdata(documentData)
            } else {
                router.push("/")
            }
          });
    
    })
    
      const logOut = () =>{
        signOut(auth).then(() => {
            router.push("/")
          }).catch((error) => {
            console.log(error)
          });
      }

    return (
        <div>
            <div style={{display: "flex", justifyContent: "space-around", alignContent:"center", padding:"5px"}}>
                <h1>ZallpyChat</h1>
                <Button color={'red'} onClick={logOut}>Sair</Button>
            </div>
            <div className={styles.maincontainer}>
                <div className={styles.usercolumn}>
                    <User {...userData}/>
                </div>
                <div className={styles.chatcolumn}>
                    <Chat/>
                </div>
            </div>
        </div>
    )
}
