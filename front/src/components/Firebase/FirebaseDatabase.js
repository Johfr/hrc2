import { getDatabase, ref, onValue} from "firebase/database";

const getUserDatas = function (uuid) {
  const db = getDatabase()
  const userInfos = ref(db, 'users/' + uuid )

  onValue(userInfos, (snapshot) => {
    const data = snapshot.val();
    return data
  })
}

export default getUserDatas()