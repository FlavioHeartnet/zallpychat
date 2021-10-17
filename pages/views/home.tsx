import { onAuthStateChanged, signOut  } from "firebase/auth";
import {auth} from '../../firebase'
import router from 'next/router'
import {useState} from 'react'
import { Button } from 'semantic-ui-react'

export default function Home() {
    const [userid, setUserId] = useState("")

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUserId(user.uid)
            console.log(userid)
        } else {
            router.push("/")
        }
      });

      const logOut = () =>{
        signOut(auth).then(() => {
            router.push("/")
          }).catch((error) => {
            console.log(error)
          });
      }

    return (
        <div style={{display: "flex", justifyContent: "space-around", alignContent:"center", padding:"5px"}}>
            <h1>ZallpyChat</h1>
            <Button color={'red'} onClick={logOut}>Sair</Button>
        </div>
    )
}
