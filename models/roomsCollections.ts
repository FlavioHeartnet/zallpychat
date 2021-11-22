import { collection, query, where, getDocs } from 'firebase/firestore'
import {db} from './../firebase'

export default class Rooms{
    createAt: Date
    createdBy: string
    description: string
    name: string
    photo: string
    participants: {}
    messages:{}

    getRoomsCreatedbyMe(uid:string){
        const rooms = query(collection(db, 'rooms'), where('createdBy', '==', uid))
        
    }
}