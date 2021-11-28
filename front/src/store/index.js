import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    uuid: null,
    user: {},
    players : [], // id:1255fds4
    // players : [
    //   {
    //     nickname: "Joh",
    //     id: "1",
    //     kicked: false,
    //     grade: 'leader',
    //     stats: [
    //       {
    //         eventName: "Gas Gas Gas",
    //         eventParts : [
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           }
    //         ],
    //         moyenne: 0,
    //         bestRecord: 0,
    //         bestKm: 0,
    //         bestPts: 0,
    //       },
    //     ]
    //   },
    //   {
    //     nickname: "007",
    //     id: "2",
    //     kicked: false,
    //     grade: 'coleader',
    //     stats: [
    //       {
    //         eventName: "Gas Gas Gas",
    //         eventParts : [
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           }
    //         ],
    //         moyenne: 0,
    //         bestRecord: 0,
    //         bestKm: 0,
    //         bestPts: 0,
    //       },
    //     ]
    //   },
    //   {
    //     nickname: "Nicoz",
    //     id: "3",
    //     kicked: false,
    //     grade: 'coleader',
    //     stats: [
    //       {
    //         eventName: "Gas Gas Gas",
    //         eventParts : [
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           }
    //         ],
    //         moyenne: 0,
    //         bestRecord: 0,
    //         bestKm: 0,
    //         bestPts: 0,
    //       },
    //     ]
    //   },
    //   {
    //     nickname: "OursPoiluDuQ",
    //     id: "4",
    //     kicked: false,
    //     grade: 'member',
    //     stats: [
    //       {
    //         eventName: "Gas Gas Gas",
    //         eventParts : [
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           }
    //         ],
    //         moyenne: 0,
    //         bestRecord: 0,
    //         bestKm: 0,
    //         bestPts: 0,
    //       },
    //     ]
    //   },
    //   {
    //     nickname: "La censurix",
    //     id: "5",
    //     kicked: false,
    //     grade: 'member',
    //     stats: [
    //       {
    //         eventName: "Gas Gas Gas",
    //         eventParts : [
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           }
    //         ],
    //         moyenne: 0,
    //         bestRecord: 0,
    //         bestKm: 0,
    //         bestPts: 0,
    //       },
    //     ]
    //   },
    //   {
    //     nickname: "Tuvema",
    //     id: "6",
    //     kicked: false,
    //     grade: 'member',
    //     stats: [
    //       {
    //         eventName: "Gas Gas Gas",
    //         eventParts : [
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           }
    //         ],
    //         moyenne: 0,
    //         bestRecord: 0,
    //         bestKm: 0,
    //         bestPts: 0,
    //       },
    //     ]
    //   },
    //   {
    //     nickname: "Roak51",
    //     id: "7",
    //     kicked: false,
    //     grade: 'member',
    //     stats: [
    //       {
    //         eventName: "Gas Gas Gas",
    //         eventParts : [
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           }
    //         ],
    //         moyenne: 0,
    //         bestRecord: 0,
    //         bestKm: 0,
    //         bestPts: 0,
    //       },
    //     ]
    //   },
    //   {
    //     nickname: "D1inho73",
    //     id: "8",
    //     kicked: false,
    //     grade: 'member',
    //     stats: [
    //       {
    //         eventName: "Gas Gas Gas",
    //         eventParts : [
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           }
    //         ],
    //         moyenne: 0,
    //         bestRecord: 0,
    //         bestKm: 0,
    //         bestPts: 0,
    //       },
    //     ]
    //   },
    //   {
    //     nickname: "Monik tamèr",
    //     id: "9",
    //     kicked: false,
    //     grade: 'member',
    //     stats: [
    //       {
    //         eventName: "Gas Gas Gas",
    //         eventParts : [
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           }
    //         ],
    //         moyenne: 0,
    //         bestRecord: 0,
    //         bestKm: 0,
    //         bestPts: 0,
    //       },
    //     ]
    //   },
    //   {
    //     nickname: "Turbo28266",
    //     id: "10",
    //     kicked: false,
    //     grade: 'member',
    //     stats: [
    //       {
    //         eventName: "Gas Gas Gas",
    //         eventParts : [
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           }
    //         ],
    //         moyenne: 0,
    //         bestRecord: 0,
    //         bestKm: 0,
    //         bestPts: 0,
    //       },
    //     ]
    //   },
    //   {
    //     nickname: "La buche",
    //     id: "11",
    //     kicked: false,
    //     grade: 'member',
    //     stats: [
    //       {
    //         eventName: "Gas Gas Gas",
    //         eventParts : [
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           }
    //         ],
    //         moyenne: 0,
    //         bestRecord: 0,
    //         bestKm: 0,
    //         bestPts: 0,
    //       },
    //     ]
    //   },
    //   {
    //     nickname: "mimi",
    //     id: "12",
    //     kicked: false,
    //     grade: 'member',
    //     stats: [
    //       {
    //         eventName: "Gas Gas Gas",
    //         eventParts : [
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           }
    //         ],
    //         moyenne: 0,
    //         bestRecord: 0,
    //         bestKm: 0,
    //         bestPts: 0,
    //       },
    //     ]
    //   },
    //   {
    //     nickname: "gege",
    //     id: "13",
    //     kicked: false,
    //     grade: 'member',
    //     stats: [
    //       {
    //         eventName: "Gas Gas Gas",
    //         eventParts : [
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           }
    //         ],
    //         moyenne: 0,
    //         bestRecord: 0,
    //         bestKm: 0,
    //         bestPts: 0,
    //       },
    //     ]
    //   },
    //   {
    //     nickname: "follasse65",
    //     id: "14",
    //     kicked: false,
    //     grade: 'member',
    //     stats: [
    //       {
    //         eventName: "Gas Gas Gas",
    //         eventParts : [
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           }
    //         ],
    //         moyenne: 0,
    //         bestRecord: 0,
    //         bestKm: 0,
    //         bestPts: 0,
    //       },
    //     ]
    //   },
    //   {
    //     nickname: "LaBuche",
    //     id: "15",
    //     kicked: false,
    //     grade: 'member',
    //     stats: [
    //       {
    //         eventName: "Gas Gas Gas",
    //         eventParts : [
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           }
    //         ],
    //         moyenne: 0,
    //         bestRecord: 0,
    //         bestKm: 0,
    //         bestPts: 0,
    //       },
    //     ]
    //   },
    //   {
    //     nickname: "ahmd_351",
    //     id: "16",
    //     kicked: false,
    //     grade: 'member',
    //     stats: [
    //       {
    //         eventName: "Gas Gas Gas",
    //         eventParts : [
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           }
    //         ],
    //         moyenne: 0,
    //         bestRecord: 0,
    //         bestKm: 0,
    //         bestPts: 0,
    //       },
    //     ]
    //   },
    //   {
    //     nickname: "star20547",
    //     id: "17",
    //     kicked: false,
    //     grade: 'member',
    //     stats: [
    //       {
    //         eventName: "Gas Gas Gas",
    //         eventParts : [
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           }
    //         ],
    //         moyenne: 0,
    //         bestRecord: 0,
    //         bestKm: 0,
    //         bestPts: 0,
    //       },
    //     ]
    //   },
    //   {
    //     nickname: "Noname 4k",
    //     id: "18",
    //     kicked: false,
    //     grade: 'member',
    //     stats: [
    //       {
    //         eventName: "Gas Gas Gas",
    //         eventParts : [
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           }
    //         ],
    //         moyenne: 0,
    //         bestRecord: 0,
    //         bestKm: 0,
    //         bestPts: 0,
    //       },
    //     ]
    //   },
    //   {
    //     nickname: "Bryan",
    //     id: "19",
    //     kicked: false,
    //     grade: 'member',
    //     stats: [
    //       {
    //         eventName: "Gas Gas Gas",
    //         eventParts : [
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           }
    //         ],
    //         moyenne: 0,
    //         bestRecord: 0,
    //         bestKm: 0,
    //         bestPts: 0,
    //       },
    //     ]
    //   },
    //   {
    //     nickname: "Nathan1210",
    //     id: "20",
    //     kicked: false,
    //     grade: 'member',
    //     stats: [
    //       {
    //         eventName: "Gas Gas Gas",
    //         eventParts : [
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           }
    //         ],
    //         moyenne: 0,
    //         bestRecord: 0,
    //         bestKm: 0,
    //         bestPts: 0,
    //       },
    //     ]
    //   },
    //   {
    //     nickname: "Clems***",
    //     id: "21",
    //     kicked: false,
    //     grade: 'member',
    //     stats: [
    //       {
    //         eventName: "Gas Gas Gas",
    //         eventParts : [
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           }
    //         ],
    //         moyenne: 0,
    //         bestRecord: 0,
    //         bestKm: 0,
    //         bestPts: 0,
    //       },
    //     ]
    //   },
    //   {
    //     nickname: "Bonjour",
    //     id: "22",
    //     kicked: false,
    //     grade: 'member',
    //     stats: [
    //       {
    //         eventName: "Gas Gas Gas",
    //         eventParts : [
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           }
    //         ],
    //         moyenne: 0,
    //         bestRecord: 0,
    //         bestKm: 0,
    //         bestPts: 0,
    //       },
    //     ]
    //   },
    //   {
    //     nickname: "malki",
    //     id: "23",
    //     kicked: false,
    //     grade: 'member',
    //     stats: [
    //       {
    //         eventName: "Gas Gas Gas",
    //         eventParts : [
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           }
    //         ],
    //         moyenne: 0,
    //         bestRecord: 0,
    //         bestKm: 0,
    //         bestPts: 0,
    //       },
    //     ]
    //   },
    //   {
    //     nickname: "Cylia",
    //     id: "24",
    //     kicked: false,
    //     grade: 'member',
    //     stats: [
    //       {
    //         eventName: "Gas Gas Gas",
    //         eventParts : [
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           }
    //         ],
    //         moyenne: 0,
    //         bestRecord: 0,
    //         bestKm: 0,
    //         bestPts: 0,
    //       },
    //     ]
    //   },
    //   {
    //     nickname: "lemouse1er",
    //     id: "25",
    //     kicked: false,
    //     grade: 'member',
    //     stats: [
    //       {
    //         eventName: "Gas Gas Gas",
    //         eventParts : [
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           }
    //         ],
    //         moyenne: 0,
    //         bestRecord: 0,
    //         bestKm: 0,
    //         bestPts: 0,
    //       },
    //     ]
    //   },
    //   {
    //     nickname: "tounudario",
    //     id: "26",
    //     kicked: true,
    //     grade: 'member',
    //     stats: [
    //       {
    //         eventName: "Gas Gas Gas",
    //         eventParts : [
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           }
    //         ],
    //         moyenne: 0,
    //         bestRecord: 0,
    //         bestKm: 0,
    //         bestPts: 0,
    //       },
    //     ]
    //   },
    //   {
    //     nickname: "FOX",
    //     id: "27",
    //     kicked: false,
    //     grade: 'member',
    //     stats: [
    //       {
    //         eventName: "Gas Gas Gas",
    //         eventParts : [
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           }
    //         ],
    //         moyenne: 0,
    //         bestRecord: 0,
    //         bestKm: 0,
    //         bestPts: 0,
    //       },
    //     ]
    //   },
    //   {
    //     nickname: "Ruben.otf",
    //     id: "28",
    //     kicked: false,
    //     grade: 'member',
    //     stats: [
    //       {
    //         eventName: "Gas Gas Gas",
    //         eventParts : [
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           }
    //         ],
    //         moyenne: 0,
    //         bestRecord: 0,
    //         bestKm: 0,
    //         bestPts: 0,
    //       },
    //     ]
    //   },
    //   {
    //     nickname: "Krakanazz",
    //     id: "29",
    //     kicked: false,
    //     grade: 'member',
    //     stats: [
    //       {
    //         eventName: "Gas Gas Gas",
    //         eventParts : [
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           }
    //         ],
    //         moyenne: 0,
    //         bestRecord: 0,
    //         bestKm: 0,
    //         bestPts: 0,
    //       },
    //     ]
    //   },
    //   {
    //     nickname: "cda_38",
    //     id: "30",
    //     kicked: false,
    //     grade: 'member',
    //     stats: [
    //       {
    //         eventName: "Gas Gas Gas",
    //         eventParts : [
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           }
    //         ],
    //         moyenne: 0,
    //         bestRecord: 0,
    //         bestKm: 0,
    //         bestPts: 0,
    //       },
    //     ]
    //   },
    //   {
    //     nickname: "loups",
    //     id: "31",
    //     kicked: false,
    //     grade: 'member',
    //     stats: [
    //       {
    //         eventName: "Gas Gas Gas",
    //         eventParts : [
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           }
    //         ],
    //         moyenne: 0,
    //         bestRecord: 0,
    //         bestKm: 0,
    //         bestPts: 0,
    //       },
    //     ]
    //   },
    //   {
    //     nickname: "Dead poule",
    //     id: "32",
    //     kicked: false,
    //     grade: 'member',
    //     stats: [
    //       {
    //         eventName: "Gas Gas Gas",
    //         eventParts : [
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           }
    //         ],
    //         moyenne: 0,
    //         bestRecord: 0,
    //         bestKm: 0,
    //         bestPts: 0,
    //       },
    //     ]
    //   },
    //   {
    //     nickname: "jef",
    //     id: "33",
    //     kicked: false,
    //     grade: 'member',
    //     stats: [
    //       {
    //         eventName: "Gas Gas Gas",
    //         eventParts : [
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           }
    //         ],
    //         moyenne: 0,
    //         bestRecord: 0,
    //         bestKm: 0,
    //         bestPts: 0,
    //       },
    //     ]
    //   },
    //   {
    //     nickname: "hamimton",
    //     id: "34",
    //     kicked: false,
    //     grade: 'member',
    //     stats: [
    //       {
    //         eventName: "Gas Gas Gas",
    //         eventParts : [
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           }
    //         ],
    //         moyenne: 0,
    //         bestRecord: 0,
    //         bestKm: 0,
    //         bestPts: 0,
    //       },
    //     ]
    //   },
    //   {
    //     nickname: "Zorklixx",
    //     id: "35",
    //     kicked: false,
    //     grade: 'member',
    //     stats: [
    //       {
    //         eventName: "Gas Gas Gas",
    //         eventParts : [
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           }
    //         ],
    //         moyenne: 0,
    //         bestRecord: 0,
    //         bestKm: 0,
    //         bestPts: 0,
    //       },
    //     ]
    //   },
    //   {
    //     nickname: "Le S",
    //     id: "36",
    //     kicked: false,
    //     grade: 'member',
    //     stats: [
    //       {
    //         eventName: "Gas Gas Gas",
    //         eventParts : [
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           }
    //         ],
    //         moyenne: 0,
    //         bestRecord: 0,
    //         bestKm: 0,
    //         bestPts: 0,
    //       },
    //     ]
    //   },
    //   {
    //     nickname: "Cloclo45",
    //     id: "37",
    //     kicked: false,
    //     grade: 'member',
    //     stats: [
    //       {
    //         eventName: "Gas Gas Gas",
    //         eventParts : [
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           }
    //         ],
    //         moyenne: 0,
    //         bestRecord: 0,
    //         bestKm: 0,
    //         bestPts: 0,
    //       },
    //     ]
    //   },
    //   {
    //     nickname: "Turbo_Pedo",
    //     id: "38",
    //     kicked: false,
    //     grade: 'member',
    //     stats: [
    //       {
    //         eventName: "Gas Gas Gas",
    //         eventParts : [
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           }
    //         ],
    //         moyenne: 0,
    //         bestRecord: 0,
    //         bestKm: 0,
    //         bestPts: 0,
    //       },
    //     ]
    //   },
    //   {
    //     nickname: "Tounuchef",
    //     id: "39",
    //     kicked: false,
    //     grade: 'member',
    //     stats: [
    //       {
    //         eventName: "Gas Gas Gas",
    //         eventParts : [
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           }
    //         ],
    //         moyenne: 0,
    //         bestRecord: 0,
    //         bestKm: 0,
    //         bestPts: 0,
    //       },
    //     ]
    //   },
    //   {
    //     nickname: "Minewoord",
    //     id: "40",
    //     kicked: true,
    //     grade: 'member',
    //     stats: [
    //       {
    //         eventName: "Gas Gas Gas",
    //         eventParts : [
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           }
    //         ],
    //         moyenne: 0,
    //         bestRecord: 0,
    //         bestKm: 0,
    //         bestPts: 0,
    //       },
    //     ]
    //   },
    //   {
    //     nickname: "mazikeen",
    //     id: "41",
    //     kicked: false,
    //     grade: 'member',
    //     stats: [
    //       {
    //         eventName: "Gas Gas Gas",
    //         eventParts : [
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           }
    //         ],
    //         moyenne: 0,
    //         bestRecord: 0,
    //         bestKm: 0,
    //         bestPts: 0,
    //       },
    //     ]
    //   },
    //   {
    //     nickname: "Trou2Ball",
    //     id: "42",
    //     kicked: false,
    //     grade: 'member',
    //     stats: [
    //       {
    //         eventName: "Gas Gas Gas",
    //         eventParts : [
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           }
    //         ],
    //         moyenne: 0,
    //         bestRecord: 0,
    //         bestKm: 0,
    //         bestPts: 0,
    //       },
    //     ]
    //   },
    //   {
    //     nickname: "Boss",
    //     id: "43",
    //     kicked: false,
    //     grade: 'member',
    //     stats: [
    //       {
    //         eventName: "Gas Gas Gas",
    //         eventParts : [
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           }
    //         ],
    //         moyenne: 0,
    //         bestRecord: 0,
    //         bestKm: 0,
    //         bestPts: 0,
    //       },
    //     ]
    //   },
    //   {
    //     nickname: "chris dh",
    //     id: "44",
    //     kicked: false,
    //     grade: 'member',
    //     stats: [
    //       {
    //         eventName: "Gas Gas Gas",
    //         eventParts : [
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           }
    //         ],
    //         moyenne: 0,
    //         bestRecord: 0,
    //         bestKm: 0,
    //         bestPts: 0,
    //       },
    //     ]
    //   },
    //   {
    //     nickname: "kentin",
    //     id: "45",
    //     kicked: false,
    //     grade: 'member',
    //     stats: [
    //       {
    //         eventName: "Gas Gas Gas",
    //         eventParts : [
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           }
    //         ],
    //         moyenne: 0,
    //         bestRecord: 0,
    //         bestKm: 0,
    //         bestPts: 0,
    //       },
    //     ]
    //   },
    //   {
    //     nickname: "NK meruem",
    //     id: "46",
    //     kicked: false,
    //     grade: 'member',
    //     stats: [
    //       {
    //         eventName: "Gas Gas Gas",
    //         eventParts : [
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           }
    //         ],
    //         moyenne: 0,
    //         bestRecord: 0,
    //         bestKm: 0,
    //         bestPts: 0,
    //       },
    //     ]
    //   },
    //   {
    //     nickname: "Nono",
    //     id: "47",
    //     kicked: false,
    //     grade: 'member',
    //     stats: [
    //       {
    //         eventName: "Gas Gas Gas",
    //         eventParts : [
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           }
    //         ],
    //         moyenne: 0,
    //         bestRecord: 0,
    //         bestKm: 0,
    //         bestPts: 0,
    //       },
    //     ]
    //   },
    //   {
    //     nickname: "Tiflop",
    //     id: "48",
    //     kicked: false,
    //     grade: 'member',
    //     stats: [
    //       {
    //         eventName: "Gas Gas Gas",
    //         eventParts : [
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           }
    //         ],
    //         moyenne: 0,
    //         bestRecord: 0,
    //         bestKm: 0,
    //         bestPts: 0,
    //       },
    //     ]
    //   },
    //   {
    //     nickname: "vacheAmericaine",
    //     id: "49",
    //     kicked: false,
    //     grade: 'member',
    //     stats: [
    //       {
    //         eventName: "Gas Gas Gas",
    //         eventParts : [
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           }
    //         ],
    //         moyenne: 0,
    //         bestRecord: 0,
    //         bestKm: 0,
    //         bestPts: 0,
    //       },
    //     ]
    //   },
    //   {
    //     nickname: "TDX|Iron man",
    //     id: "50",
    //     kicked: false,
    //     grade: 'member',
    //     stats: [
    //       {
    //         eventName: "Gas Gas Gas",
    //         eventParts : [
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           },
    //           {
    //             score: 0,
    //             km: 0,
    //             pts: 0,
    //           }
    //         ],
    //         moyenne: 0,
    //         bestRecord: 0,
    //         bestKm: 0,
    //         bestPts: 0,
    //       },
    //     ]
    //   },
    // ],
    events: [
      // {
      //   eventName: "Gas Gas Gas",
      //   start: "19/11/21",
      //   end: "25/11/21",
      //   actualEvent: true,
      // }
    ],
    // events: [
    //   {
    //     eventName: "Jus de citrouille0",
    //     start: "05/11/21",
    //     end: "10/11/21",
    //     actualEvent: false,
    //   },
    //   {
    //     eventName: "Jus de citrouille",
    //     start: "05/11/21",
    //     end: "10/11/21",
    //     actualEvent: false,
    //   },
    //   {
    //     eventName: "Jus de citrouille2",
    //     start: "05/11/21",
    //     end: "10/11/21",
    //     actualEvent: false,
    //   },
    //   {
    //     eventName: "Crash test",
    //     start: "05/11/21",
    //     end: "10/11/21",
    //     actualEvent: false,
    //   },
    //   {
    //     eventName: "Let's goooooooo!",
    //     start: "13/11/21",
    //     end: "18/11/21",
    //     actualEvent: false,
    //   },
    //   {
    //     eventName: "Gas Gas Gas",
    //     start: "19/11/21",
    //     end: "25/11/21",
    //     actualEvent: true,
    //   }
    // ],
    eventSelected: null,
    playersUpdated: false,
    // newEventCreated: false
  },
  getters: {
    getUuid (state) {
      return state.uuid
    },
    getUser (state) {
      return state.user
    },
    getPlayers (state) {
      return state.players
    },
    getActifPlayers (state) {
      const actifPlayers = state.players.filter(player => player.kicked === false)
      return actifPlayers
    },
    getLeaders (state) {
      const actifPlayers = state.players.filter(player => player.kicked === false)
      const leaders = actifPlayers.filter(player => player.grade === 'leader' || player.grade === 'coleader')
      return leaders
    },
    getInactifPlayers (state) {
      const inactifPlayers = state.players.filter(player => player.kicked)
      // state.actifPlayers.push(actifPlayers)
      // Pour l'ajout d'un nouvel event
      // récupère et affiche tous les joueurs non kickés
      // Push dans players.stats if actifPlayers.id === state.player.id
      return inactifPlayers
    },
    getPlayersName (state) {
      let players = []
      state.players.map(player => players.push(player.nickname))
      return players
    },
    getEvents (state) {
      return state.events
    },
    getSelectedEvent (state) {
      return state.eventSelected
    },
    getActualEvent (state) {
      let actualEvent = null
      state.events.map((event) => {
        if (event.actualEvent) {
          actualEvent = event
        }
      })
      return actualEvent
    },
    getBestPlayersByKm (state, getters) { // Classe les joueurs par rapport à leur meilleur score
      let bestPlayersKm = []

      state.players.map((player) => {
        player.stats.map((stat) => {
          if (getters.getActualEvent.eventName === stat.eventName) {
            let playerKms = []
            let bestPlayerKm = 0

            for (let i =0; i < stat.eventParts.length; i++) {
              playerKms.push(stat.eventParts[i].km)
            }
            playerKms.sort(function(a, b) {
              return a - b;
            })
            bestPlayerKm = playerKms[playerKms.length - 1]
            bestPlayersKm.push({playerName: player.nickname ,bestKm : bestPlayerKm})
          }
        })
      })

      return bestPlayersKm
    },
  },
  mutations: {
    setUuid(state, payload) {
      state.uuid = payload
    },
    setUser(state, payload) {
      state.user = payload
    },
    setPlayers(state, payload) { // push dans players
      // console.log('store', payload)
      state.players = payload
    },
    setEvents(state, payload) { // push dans players
      // console.log('store', payload)
      state.events = payload
    },
    updateEventSelected (state, payload) {
      state.eventSelected = payload
    },
    updatePlayers (state, payload) { //mets à jour les points/ km/ score des joueurs
      state.playersUpdated = !state.playersUpdated
      
      const filteredPlayer = state.players.filter(player => payload.id === player.id)
      
      if (filteredPlayer.length > 0) { // joueur existant
        state.players.map(player => {
          if (filteredPlayer[0].id === player.id) {
            for (let i =0; i < player.stats.length; i++) {
              if (payload.eventName === player.stats[i].eventName) {
                player.nickname = payload.nickname
                player.grade = payload.grade
                player.stats[i].eventName = payload.eventName

                player.stats[i].eventParts[0].score = payload.score1
                player.stats[i].eventParts[0].km = payload.km1
                player.stats[i].eventParts[0].pts = payload.pts1
                
                player.stats[i].eventParts[1].score = payload.score2
                player.stats[i].eventParts[1].km = payload.km2
                player.stats[i].eventParts[1].pts = payload.pts2
                
                player.stats[i].eventParts[2].score = payload.score3
                player.stats[i].eventParts[2].km = payload.km3
                player.stats[i].eventParts[2].pts = payload.pts3
                
                player.stats[i].eventParts[3].score = payload.score4
                player.stats[i].eventParts[3].km = payload.km4
                player.stats[i].eventParts[3].pts = payload.pts4
              }
            }
          }
        })
      } else { // nouveau joueur
        state.players.push(
          {
            nickname: payload.nickname,
            id: payload.id,
            kicked: payload.kicked,
            grade: payload.grade,
            // {
            //   leader: payload.grade.leader,
            //   coleader: payload.grade.coleader,
            //   member: payload.grade.member,
            // },
            stats: [
              {
                eventName: payload.eventName,
                eventParts : [
                  {
                    score: payload.score1,
                    km: payload.km1,
                    pts: payload.pts1,
                  },
                  {
                    score: payload.score2,
                    km: payload.km2,
                    pts: payload.pts2,
                  },
                  {
                    score: payload.score3,
                    km: payload.km3,
                    pts: payload.pts3,
                  },
                  {
                    score: payload.score4,
                    km: payload.km4,
                    pts: payload.pts4,
                  }
                ],
                moyenne: payload.moyenne,
                bestRecord: payload.bestRecord,
                bestKm: payload.bestKm,
                bestPts: payload.bestPts,
              }
            ]
          }
        )
      }
      
    },
    kickPlayer (state, payload) {
      state.players.filter(player => payload.id === player.id ? player.kicked = true : '')
      // console.log(payload)
      // console.log(state.players)
    },
    createNewEvent (state, payload) {
      state.events.map(event => {
        event.actualEvent ? event.actualEvent = false : ''
      })
      state.events.push(payload)
      // console.log(payload)
    },
    cleanStore (state) {
      state.uuid = null,
      state.user = {},
      state.players  = [],
      state.eventSelected = null,
      state.playersUpdated = false
    }
  },
  actions: {
    setUuid ({ commit }, payload) {
      return new Promise((resolve) => {
        commit("setUuid", payload)
        resolve()
      })
    },
    setUser ({ commit }, payload) {
      return new Promise((resolve) => {
        commit("setUser", payload)
        resolve()
      })
    },
    setPlayers ({ commit }, payload) {
      return new Promise((resolve) => {
        commit("setPlayers", payload)
        resolve()
      })
    },
    setEvents ({ commit }, payload) {
      return new Promise((resolve) => {
        commit("setEvents", payload)
        resolve()
      })
    },
    createNewEvent ({ commit }, payload) {
      return new Promise((resolve) => {
        commit("createNewEvent", payload)
        resolve()
      })
    },
    kickPlayer ({ commit }, payload) {
      return new Promise((resolve) => {
        commit("kickPlayer", payload)
        resolve()
      })
    },
    updatePlayers ({ commit }, payload) {
      return new Promise((resolve) => {
        commit("updatePlayers", payload)
        resolve()
      })
    },
    cleanStore ({ commit }) {
      return new Promise((resolve) => {
        commit("cleanStore")
        resolve()
      })
    }
  },
  modules: {
  }
})
