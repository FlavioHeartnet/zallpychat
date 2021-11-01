import { Input } from 'semantic-ui-react'
import styles from './../styles/Home.module.scss'

export default function SearchBar(){
    return (
        <div className={styles.searchbar}>
            <Input size='mini' className={styles.searchbarinput} icon='search' placeholder='Search...' />
        </div>
    )
}