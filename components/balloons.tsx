import styles from './../styles/Chat.module.scss'
export default function Balloons(){
    return (
        <div className={styles.dialogs}>
            <div className={styles.ballonreply}>
                <p className={styles.groupballoontittle}>Ronaldo</p>
                <p>reply</p>
            </div>
            <div className={styles.ballonsender}>
                <p>Sender</p>
            </div>
        </div>
    )
}