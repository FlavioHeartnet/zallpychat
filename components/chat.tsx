import styles from './../styles/Chat.module.scss'
import Messageboxsender from './messageboxsender'
import Balloons from './balloons'
import messagelist from './../mocks/messagemocks'
import Image from 'next/image'
import profilepic from './../public/img/profileUser.png'
import { useEffect, useState } from 'react'

export default function Chat(){

const [balloons, setBallons] = useState([])
useEffect(() => {
        let array = []

        messagelist.map(message => {
            array.push(<Balloons {...message}/>)  
        })
        setBallons(array)
},[messagelist])
    return (
        <div className={styles.dialogbox}> 
            <div className={styles.chatheader}>
                <div>
                    <Image className={styles.chatitemprofile} width='40px' height='40px' alt='' src={profilepic}/>
                </div>
                <div className={styles.headerinfo}>
                    <span>Sala 1</span>
                    <p>Ronaldo, Flavio, Augusto, Derliane, Debora</p>
                </div>
            </div>
            {balloons}
            <Messageboxsender/>
        </div>
    )
}