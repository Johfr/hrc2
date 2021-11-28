import firebaseInit from '../Firebase/FirebaseInit'
import { getDatabase, ref, onValue} from "firebase/database";

export default {
  user: function (uuid) {
    const db = getDatabase(firebaseInit)
    const userInfos = ref(db, 'users/' + uuid )
    let data = null

    onValue(userInfos, (snapshot) => {
      data = snapshot.val();
    })
    return data
  }
}
