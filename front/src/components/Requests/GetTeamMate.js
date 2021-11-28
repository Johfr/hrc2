import firebaseInit from '../Firebase/FirebaseInit'
import { getDatabase, ref, onValue} from "firebase/database";

export default {
  teamMate: function (teamId, leaderEmail) {
    const db = getDatabase(firebaseInit)
    const userInfos = ref(db, 'users/' )
    let data = null

    onValue(userInfos, (snapshot) => {
      data = snapshot.val();
    })
    const keys = Object.keys(data)
    const mates = []

    keys.map(key => {
      if (data[key].teamId === teamId && data[key].email !== leaderEmail) {
        mates.push(data[key])
      }
    })

    return mates
  }
}
