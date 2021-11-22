import { useEffect, useState } from 'react'
import styles from './../styles/Chat.module.scss'
export default function Balloons(props){
    const [ballon, setBallon] = useState(<div/>)
    useEffect(() => {
       if(props.type == 'sender'){
        setBallon(<div className={styles.ballonsender}>
            <p>{props.text}</p>
        </div>)
       }else{
            setBallon(<div className={styles.ballonreply}>
                <p className={styles.groupballoontittle}>{props.tittlename}</p>
                <p>{props.text}</p>
            </div>)
       }
    }, [props])
    return (
        <div className={styles.dialogs}>
            {ballon}  
        </div>
    )
}