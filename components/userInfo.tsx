import styles from './../styles/Home.module.scss'
import Image from 'next/image'
import profPic from '../public/img/profile.jpg'
import {Icon} from 'semantic-ui-react'

export default function UserInfo(){
    return (
        <div className={styles.userinfo}>
                <Image alt="profile picture" width={50} height={50} className={styles.profImage} src={profPic}/>
                <Icon className={styles.addRoomButton} circular size='large' name='add' />
            </div>
    )
}