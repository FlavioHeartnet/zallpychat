import styles from './../styles/Home.module.css'
import Image from 'next/image'
import profPic from '../public/img/profile.jpg'
import {Icon} from 'semantic-ui-react'

export default function HomeUser(){
    return (
        <div>
            <div className={styles.userinfo}>
                <Image alt="profile picture" width={50} height={50} className={styles.profImage} src={profPic}/>
                <button className={styles.addRoomButton}><Icon circular size='large' name='add' /></button>
            </div>
            <div className={styles.searchbar}><p>searchbar</p></div>
            <div className={styles.chats}><p>chat</p></div>
        </div>
    )
}