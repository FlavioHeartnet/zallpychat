import { collection, query, where, getDocs } from 'firebase/firestore'
import {db} from './../firebase'

export default class Participants{
    name:string
    uid:string

    async getParticipantsbyUid(uid:string){
        let data ={}
       const participants = query(collection(db, 'participants'), where('UID', '==', uid))
       const docSnap = await getDocs(participants)
         docSnap.forEach((doc) => {
            data = doc.data()
        })
        return data
    }
}