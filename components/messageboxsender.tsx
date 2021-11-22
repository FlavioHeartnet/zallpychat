import styles from './../styles/Chat.module.scss'
import { Input } from 'semantic-ui-react'
import { useState } from 'react'
export default function Messageboxsender(props){

    const [message, setMessage] = useState("")
    function sendMessage(){
        props.sendMessage(message)
        setMessage("")
    }
    return(
        <div className={styles.messageboxsender}>
                <div className={styles.inputbox}>
                    <Input onChange={e => setMessage(e.target.value)} fluid placeholder='Digite uma mensagem'/>
                </div>
                <div className={styles.sendbuttonbox}>
                    <button onClick={sendMessage} className={styles.sendbutton}>
                        <svg viewBox="0 0 24 24" width='24' height='24'>
                            <path fill="#666" d='M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z' >

                            </path>
                        </svg>
                    </button>
                </div>
            </div>
    )
}