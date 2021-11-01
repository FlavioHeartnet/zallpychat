import styles from './../styles/Home.module.scss'
import Image from 'next/image'
import profilepic from './../public/img/profileUser.png'

export default function ChatItem(props){
    const date = new Date(props.timestamp * 1000)
    const messagetime = date.getHours() + ':'+ date.getMinutes()
    profilepic.src= props.photo
    return (
        <div className={styles.chats}>
            <div className={styles.chatItem}>
                <div className={styles.itemimage}>
                    <Image className={styles.chatitemprofile} width='50px' height='50px' alt='' src={profilepic}/>
                </div>
                <div className={styles.itemtittle}>
                    <h2>{props.name}</h2>
                    <p>{props.description}</p>
                </div>
                <div className={styles.itemsubtittle}>
                    <p className={styles.messagetime}>{messagetime}</p>
                    {props.unread != undefined && <p className={styles.badge}>{props.unread}</p>}
                </div>
            </div>
        </div>
    )
}