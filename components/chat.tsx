import styles from './../styles/Chat.module.css'
import { Input } from 'semantic-ui-react'
export default function Chat(){
    return (
        <div className={styles.dialogbox}>
            <div className={styles.dialogs}>
                <h1>dialogs</h1>
            </div>
            <div className={styles.messageboxsender}>
                <div className={styles.inputbox}>
                    <Input fluid placeholder='Digite uma mensagem'/>
                </div>
                <div className={styles.sendbuttonbox}>
                    <button className={styles.sendbutton}>
                        <svg viewBox="0 0 24 24" width='24' height='24'>
                            <path fill="#666" d='M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z' >

                            </path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}