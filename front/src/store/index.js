import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    uuid: null,
    user: {},
    actifPlayers: [
      {
        nickname: "Joh",
        id: "1255fds2",
        kicked: false,
      },
      {
        nickname: "Jess",
        id: "1255fds3",
        kicked: false,
      },
      {
        nickname: "Jack",
        id: "1255fds4",
        kicked: false,
      },
    ],
    // players : [],
    players : [ // id:1255fds4
      {
        nickname: "Joh",
        id: "1",
        kicked: false,
        grade: {
          leader: true,
          coleader: false,
          member: false,
        },
        stats: [
          {
            eventName: "Jus de citrouille0",
            eventParts : [
              {
                score: 99999,
                km: 150,
                pts: 100,
              },
              {
                score: 10000,
                km: 175,
                pts: 100,
              },
              {
                score: 10000,
                km: 100,
                pts: 100,
              },
              {
                score: 10000,
                km: 100,
                pts: 100,
              }
            ],
            moyenne: 0,
            bestRecord: 0,
            bestKm: 0,
            bestPts: 0,
          },
          {
            eventName: "Jus de citrouille",
            eventParts : [
              {
                score: 10000,
                km: 150,
                pts: 100,
              },
              {
                score: 19000,
                km: 175,
                pts: 100,
              },
              {
                score: 19500,
                km: 100,
                pts: 100,
              },
              {
                score: 20000,
                km: 100,
                pts: 100,
              }
            ],
            moyenne: 0,
            bestRecord: 0,
            bestKm: 0,
            bestPts: 0,
          },
          {
            eventName: "Jus de citrouille2",
            eventParts : [
              {
                score: 1,
                km: 150,
                pts: 100,
              },
              {
                score: 2,
                km: 175,
                pts: 100,
              },
              {
                score: 3,
                km: 100,
                pts: 100,
              },
              {
                score: 4,
                km: 100,
                pts: 100,
              }
            ],
            moyenne: 0,
            bestRecord: 0,
            bestKm: 0,
            bestPts: 0,
          },
          {
            eventName: "Crash test",
            eventParts : [
              {
                score: 6523,
                km: 75,
                pts: 100,
              },
              {
                score: 6958,
                km: 175,
                pts: 100,
              },
              {
                score: 7200,
                km: 200,
                pts: 100,
              },
              {
                score: 5952,
                km: 350,
                pts: 400,
              }
            ],
            moyenne: 0,
            bestRecord: 0,
            bestKm: 0,
            bestPts: 0,
          },
          {
            eventName: "Let's goooooooo!",
            eventParts : [
              {
                score: 23949,
                km: 18,
                pts: 300,
              },
              {
                score: 24843,
                km: 141,
                pts: 600,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              }
            ],
            moyenne: 0,
            bestRecord: 0,
            bestKm: 0,
            bestPts: 0,
          },
        ]
      },
      {
        nickname: "007",
        id: "2",
        kicked: false,
        grade: {
          leader: false,
          coleader: true,
          member: false,
        },
        stats: [
          {
            eventName: "Let's goooooooo!",
            eventParts : [
              {
                score: 21315,
                km: 13,
                pts: 280,
              },
              {
                score: 20978,
                km: 108,
                pts: 542,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              }
            ],
            moyenne: 0,
            bestRecord: 0,
            bestKm: 0,
            bestPts: 0,
          },
        ]
      },
      {
        nickname: "Nicoz",
        id: "3",
        kicked: false,
        grade: {
          leader: false,
          coleader: true,
          member: false,
        },
        stats: [
          {
            eventName: "Let's goooooooo!",
            eventParts : [
              {
                score: 10998,
                km: 0,
                pts: 87,
              },
              {
                score: 10253,
                km: 63,
                pts: 138,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              }
            ],
            moyenne: 0,
            bestRecord: 0,
            bestKm: 0,
            bestPts: 0,
          },
        ]
      },
      {
        nickname: "OursPoiluDuQ",
        id: "4",
        kicked: false,
        grade: {
          leader: false,
          coleader: false,
          member: true,
        },
        stats: [
          {
            eventName: "Let's goooooooo!",
            eventParts : [
              {
                score: 11791,
                km: 12,
                pts: 131,
              },
              {
                score: 13551,
                km: 140,
                pts: 271,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              }
            ],
            moyenne: 0,
            bestRecord: 0,
            bestKm: 0,
            bestPts: 0,
          },
        ]
      },
      {
        nickname: "La censurix",
        id: "5",
        kicked: false,
        grade: {
          leader: false,
          coleader: false,
          member: true,
        },
        stats: [
          {
            eventName: "Let's goooooooo!",
            eventParts : [
              {
                score: 4059,
                km: 16,
                pts: 17,
              },
              {
                score: 3955,
                km: 112,
                pts: 28,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              }
            ],
            moyenne: 0,
            bestRecord: 0,
            bestKm: 0,
            bestPts: 0,
          },
        ]
      },
      {
        nickname: "Tuvema",
        id: "6",
        kicked: false,
        grade: {
          leader: false,
          coleader: false,
          member: true,
        },
        stats: [
          {
            eventName: "Let's goooooooo!",
            eventParts : [
              {
                score: 5559,
                km: 14,
                pts: 19,
              },
              {
                score: 8366,
                km: 60,
                pts: 45,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              }
            ],
            moyenne: 0,
            bestRecord: 0,
            bestKm: 0,
            bestPts: 0,
          },
        ]
      },
      {
        nickname: "Roak51",
        id: "7",
        kicked: false,
        grade: {
          leader: false,
          coleader: false,
          member: true,
        },
        stats: [
          {
            eventName: "Let's goooooooo!",
            eventParts : [
              {
                score: 8658,
                km: 11,
                pts: 57,
              },
              {
                score: 9853,
                km: 32,
                pts: 111,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              }
            ],
            moyenne: 0,
            bestRecord: 0,
            bestKm: 0,
            bestPts: 0,
          },
        ]
      },
      {
        nickname: "D1inho73",
        id: "8",
        kicked: false,
        grade: {
          leader: false,
          coleader: false,
          member: true,
        },
        stats: [
          {
            eventName: "Let's goooooooo!",
            eventParts : [
              {
                score: 7817,
                km: 10,
                pts: 41,
              },
              {
                score: 9401,
                km: 50,
                pts: 82,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              }
            ],
            moyenne: 0,
            bestRecord: 0,
            bestKm: 0,
            bestPts: 0,
          },
        ]
      },
      {
        nickname: "Monik tamèr",
        id: "9",
        kicked: false,
        grade: {
          leader: false,
          coleader: false,
          member: true,
        },
        stats: [
          {
            eventName: "Let's goooooooo!",
            eventParts : [
              {
                score: 11499,
                km: 6,
                pts: 114,
              },
              {
                score: 9698,
                km: 21,
                pts: 164,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              }
            ],
            moyenne: 0,
            bestRecord: 0,
            bestKm: 0,
            bestPts: 0,
          },
        ]
      },
      {
        nickname: "Turbo28266",
        id: "10",
        kicked: false,
        grade: {
          leader: false,
          coleader: false,
          member: true,
        },
        stats: [
          {
            eventName: "Let's goooooooo!",
            eventParts : [
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 11815,
                km: 29,
                pts: 192,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              }
            ],
            moyenne: 0,
            bestRecord: 0,
            bestKm: 0,
            bestPts: 0,
          },
        ]
      },
      {
        nickname: "La buche",
        id: "11",
        kicked: false,
        grade: {
          leader: false,
          coleader: false,
          member: true,
        },
        stats: [
          {
            eventName: "Let's goooooooo!",
            eventParts : [
              {
                score: 4258,
                km: 3,
                pts: 18,
              },
              {
                score: 7564,
                km: 30,
                pts: 41,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              }
            ],
            moyenne: 0,
            bestRecord: 0,
            bestKm: 0,
            bestPts: 0,
          },
        ]
      },
      {
        nickname: "mimi",
        id: "12",
        kicked: false,
        grade: {
          leader: false,
          coleader: false,
          member: true,
        },
        stats: [
          {
            eventName: "Let's goooooooo!",
            eventParts : [
              {
                score: 8581,
                km: 0,
                pts: 54,
              },
              {
                score: 8817,
                km: 21,
                pts: 83,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              }
            ],
            moyenne: 0,
            bestRecord: 0,
            bestKm: 0,
            bestPts: 0,
          },
        ]
      },
      {
        nickname: "gege",
        id: "13",
        kicked: false,
        grade: {
          leader: false,
          coleader: false,
          member: true,
        },
        stats: [
          {
            eventName: "Let's goooooooo!",
            eventParts : [
              {
                score: 7211,
                km: 2,
                pts: 33,
              },
              {
                score: 8567,
                km: 11,
                pts: 58,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              }
            ],
            moyenne: 0,
            bestRecord: 0,
            bestKm: 0,
            bestPts: 0,
          },
        ]
      },
      {
        nickname: "follasse65",
        id: "14",
        kicked: false,
        grade: {
          leader: false,
          coleader: false,
          member: true,
        },
        stats: [
          {
            eventName: "Let's goooooooo!",
            eventParts : [
              {
                score: 0,
                km: 1,
                pts: 0,
              },
              {
                score: 0,
                km: 3,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              }
            ],
            moyenne: 0,
            bestRecord: 0,
            bestKm: 0,
            bestPts: 0,
          },
        ]
      },
      {
        nickname: "LaBuche",
        id: "15",
        kicked: false,
        grade: {
          leader: false,
          coleader: false,
          member: true,
        },
        stats: [
          {
            eventName: "Let's goooooooo!",
            eventParts : [
              {
                score: 8809,
                km: 0,
                pts: 61,
              },
              {
                score: 11723,
                km: 15,
                pts: 186,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              }
            ],
            moyenne: 0,
            bestRecord: 0,
            bestKm: 0,
            bestPts: 0,
          },
        ]
      },
      {
        nickname: "ahmd_351",
        id: "16",
        kicked: false,
        grade: {
          leader: false,
          coleader: false,
          member: true,
        },
        stats: [
          {
            eventName: "Let's goooooooo!",
            eventParts : [
              {
                score: 9183,
                km: 0,
                pts: 66,
              },
              {
                score: 9446,
                km: 60,
                pts: 108,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              }
            ],
            moyenne: 0,
            bestRecord: 0,
            bestKm: 0,
            bestPts: 0,
          },
        ]
      },
      {
        nickname: "star20547",
        id: "17",
        kicked: false,
        grade: {
          leader: false,
          coleader: false,
          member: true,
        },
        stats: [
          {
            eventName: "Let's goooooooo!",
            eventParts : [
              {
                score: 9887,
                km: 0,
                pts: 70,
              },
              {
                score: 9362,
                km: 74,
                pts: 107,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              }
            ],
            moyenne: 0,
            bestRecord: 0,
            bestKm: 0,
            bestPts: 0,
          },
        ]
      },
      {
        nickname: "Noname 4k",
        id: "18",
        kicked: false,
        grade: {
          leader: false,
          coleader: false,
          member: true,
        },
        stats: [
          {
            eventName: "Let's goooooooo!",
            eventParts : [
              {
                score: 8455,
                km: 0,
                pts: 50,
              },
              {
                score: 7507,
                km: 4,
                pts: 71,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              }
            ],
            moyenne: 0,
            bestRecord: 0,
            bestKm: 0,
            bestPts: 0,
          },
        ]
      },
      {
        nickname: "Bryan",
        id: "19",
        kicked: false,
        grade: {
          leader: false,
          coleader: false,
          member: true,
        },
        stats: [
          {
            eventName: "Let's goooooooo!",
            eventParts : [
              {
                score: 8383,
                km: 0,
                pts: 47,
              },
              {
                score: 10979,
                km: 32,
                pts: 114,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              }
            ],
            moyenne: 0,
            bestRecord: 0,
            bestKm: 0,
            bestPts: 0,
          },
        ]
      },
      {
        nickname: "Nathan1210",
        id: "20",
        kicked: false,
        grade: {
          leader: false,
          coleader: false,
          member: true,
        },
        stats: [
          {
            eventName: "Let's goooooooo!",
            eventParts : [
              {
                score: 8063,
                km: 0,
                pts: 44,
              },
              {
                score: 0,
                km: 0,
                pts: 44,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              }
            ],
            moyenne: 0,
            bestRecord: 0,
            bestKm: 0,
            bestPts: 0,
          },
        ]
      },
      {
        nickname: "Clems***",
        id: "21",
        kicked: false,
        grade: {
          leader: false,
          coleader: false,
          member: true,
        },
        stats: [
          {
            eventName: "Let's goooooooo!",
            eventParts : [
              {
                score: 10435,
                km: 0,
                pts: 75,
              },
              {
                score: 9149,
                km: 21,
                pts: 105,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              }
            ],
            moyenne: 0,
            bestRecord: 0,
            bestKm: 0,
            bestPts: 0,
          },
        ]
      },
      {
        nickname: "Bonjour",
        id: "22",
        kicked: false,
        grade: {
          leader: false,
          coleader: false,
          member: true,
        },
        stats: [
          {
            eventName: "Let's goooooooo!",
            eventParts : [
              {
                score: 7434,
                km: 1,
                pts: 35,
              },
              {
                score: 8379,
                km: 32,
                pts: 58,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              }
            ],
            moyenne: 0,
            bestRecord: 0,
            bestKm: 0,
            bestPts: 0,
          },
        ]
      },
      {
        nickname: "malki",
        id: "23",
        kicked: false,
        grade: {
          leader: false,
          coleader: false,
          member: true,
        },
        stats: [
          {
            eventName: "Let's goooooooo!",
            eventParts : [
              {
                score: 10685,
                km: 0,
                pts: 81,
              },
              {
                score: 14733,
                km: 10,
                pts: 303,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              }
            ],
            moyenne: 0,
            bestRecord: 0,
            bestKm: 0,
            bestPts: 0,
          },
        ]
      },
      {
        nickname: "Cylia",
        id: "24",
        kicked: false,
        grade: {
          leader: false,
          coleader: false,
          member: true,
        },
        stats: [
          {
            eventName: "Let's goooooooo!",
            eventParts : [
              {
                score: 6763,
                km: 2,
                pts: 31,
              },
              {
                score: 9026,
                km: 12,
                pts: 80,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              }
            ],
            moyenne: 0,
            bestRecord: 0,
            bestKm: 0,
            bestPts: 0,
          },
        ]
      },
      {
        nickname: "lemouse1er",
        id: "25",
        kicked: false,
        grade: {
          leader: false,
          coleader: false,
          member: true,
        },
        stats: [
          {
            eventName: "Let's goooooooo!",
            eventParts : [
              {
                score: 6160,
                km: 0,
                pts: 29,
              },
              {
                score: 7305,
                km: 21,
                pts: 48,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              }
            ],
            moyenne: 0,
            bestRecord: 0,
            bestKm: 0,
            bestPts: 0,
          },
        ]
      },
      {
        nickname: "tounudario",
        id: "26",
        kicked: true,
        grade: {
          leader: false,
          coleader: false,
          member: true,
        },
        stats: [
          {
            eventName: "Let's goooooooo!",
            eventParts : [
              {
                score: 6044,
                km: 0,
                pts: 27,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              }
            ],
            moyenne: 0,
            bestRecord: 0,
            bestKm: 0,
            bestPts: 0,
          },
        ]
      },
      {
        nickname: "FOX",
        id: "27",
        kicked: false,
        grade: {
          leader: false,
          coleader: false,
          member: true,
        },
        stats: [
          {
            eventName: "Let's goooooooo!",
            eventParts : [
              {
                score: 6012,
                km: 0,
                pts: 25,
              },
              {
                score: 6954,
                km: 7,
                pts: 43,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              }
            ],
            moyenne: 0,
            bestRecord: 0,
            bestKm: 0,
            bestPts: 0,
          },
        ]
      },
      {
        nickname: "Ruben.otf",
        id: "28",
        kicked: false,
        grade: {
          leader: false,
          coleader: false,
          member: true,
        },
        stats: [
          {
            eventName: "Let's goooooooo!",
            eventParts : [
              {
                score: 5931,
                km: 0,
                pts: 24,
              },
              {
                score: 7083,
                km: 44,
                pts: 43,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              }
            ],
            moyenne: 0,
            bestRecord: 0,
            bestKm: 0,
            bestPts: 0,
          },
        ]
      },
      {
        nickname: "Krakanazz",
        id: "29",
        kicked: false,
        grade: {
          leader: false,
          coleader: false,
          member: true,
        },
        stats: [
          {
            eventName: "Let's goooooooo!",
            eventParts : [
              {
                score: 5813,
                km: 10,
                pts: 22,
              },
              {
                score: 6995,
                km: 61,
                pts: 41,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              }
            ],
            moyenne: 0,
            bestRecord: 0,
            bestKm: 0,
            bestPts: 0,
          },
        ]
      },
      {
        nickname: "cda_38",
        id: "30",
        kicked: false,
        grade: {
          leader: false,
          coleader: false,
          member: true,
        },
        stats: [
          {
            eventName: "Let's goooooooo!",
            eventParts : [
              {
                score: 5734,
                km: 0,
                pts: 21,
              },
              {
                score: 4879,
                km: 42,
                pts: 33,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              }
            ],
            moyenne: 0,
            bestRecord: 0,
            bestKm: 0,
            bestPts: 0,
          },
        ]
      },
      {
        nickname: "loups",
        id: "31",
        kicked: false,
        grade: {
          leader: false,
          coleader: false,
          member: true,
        },
        stats: [
          {
            eventName: "Let's goooooooo!",
            eventParts : [
              {
                score: 11327,
                km: 0,
                pts: 107,
              },
              {
                score: 11797,
                km: 20,
                pts: 200,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              }
            ],
            moyenne: 0,
            bestRecord: 0,
            bestKm: 0,
            bestPts: 0,
          },
        ]
      },
      {
        nickname: "Dead poule",
        id: "32",
        kicked: false,
        grade: {
          leader: false,
          coleader: false,
          member: true,
        },
        stats: [
          {
            eventName: "Let's goooooooo!",
            eventParts : [
              {
                score: 12480,
                km: 0,
                pts: 150,
              },
              {
                score: 12380,
                km: 11,
                pts: 264,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              }
            ],
            moyenne: 0,
            bestRecord: 0,
            bestKm: 0,
            bestPts: 0,
          },
        ]
      },
      {
        nickname: "jef",
        id: "33",
        kicked: false,
        grade: {
          leader: false,
          coleader: false,
          member: true,
        },
        stats: [
          {
            eventName: "Let's goooooooo!",
            eventParts : [
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 9321,
                km: 26,
                pts: 38,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              }
            ],
            moyenne: 0,
            bestRecord: 0,
            bestKm: 0,
            bestPts: 0,
          },
        ]
      },
      {
        nickname: "hamimton",
        id: "34",
        kicked: false,
        grade: {
          leader: false,
          coleader: false,
          member: true,
        },
        stats: [
          {
            eventName: "Let's goooooooo!",
            eventParts : [
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 0,
                km: 3,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              }
            ],
            moyenne: 0,
            bestRecord: 0,
            bestKm: 0,
            bestPts: 0,
          },
        ]
      },
      {
        nickname: "Zorklixx",
        id: "35",
        kicked: false,
        grade: {
          leader: false,
          coleader: false,
          member: true,
        },
        stats: [
          {
            eventName: "Let's goooooooo!",
            eventParts : [
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 0,
                km: 5,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              }
            ],
            moyenne: 0,
            bestRecord: 0,
            bestKm: 0,
            bestPts: 0,
          },
        ]
      },
      {
        nickname: "Le S",
        id: "36",
        kicked: false,
        grade: {
          leader: false,
          coleader: false,
          member: true,
        },
        stats: [
          {
            eventName: "Let's goooooooo!",
            eventParts : [
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              }
            ],
            moyenne: 0,
            bestRecord: 0,
            bestKm: 0,
            bestPts: 0,
          },
        ]
      },
      {
        nickname: "Cloclo45",
        id: "37",
        kicked: false,
        grade: {
          leader: false,
          coleader: false,
          member: true,
        },
        stats: [
          {
            eventName: "Let's goooooooo!",
            eventParts : [
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 5529,
                km: 2,
                pts: 13,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              }
            ],
            moyenne: 0,
            bestRecord: 0,
            bestKm: 0,
            bestPts: 0,
          },
        ]
      },
      {
        nickname: "Turbo_Pedo",
        id: "38",
        kicked: false,
        grade: {
          leader: false,
          coleader: false,
          member: true,
        },
        stats: [
          {
            eventName: "Let's goooooooo!",
            eventParts : [
              {
                score: 11216,
                km: 0,
                pts: 99,
              },
              {
                score: 0,
                km: 4,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              }
            ],
            moyenne: 0,
            bestRecord: 0,
            bestKm: 0,
            bestPts: 0,
          },
        ]
      },
      {
        nickname: "Tounuchef",
        id: "39",
        kicked: false,
        grade: {
          leader: false,
          coleader: false,
          member: true,
        },
        stats: [
          {
            eventName: "Let's goooooooo!",
            eventParts : [
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              }
            ],
            moyenne: 0,
            bestRecord: 0,
            bestKm: 0,
            bestPts: 0,
          },
        ]
      },
      {
        nickname: "Minewoord",
        id: "40",
        kicked: true,
        grade: {
          leader: false,
          coleader: false,
          member: true,
        },
        stats: [
          {
            eventName: "Let's goooooooo!",
            eventParts : [
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              }
            ],
            moyenne: 0,
            bestRecord: 0,
            bestKm: 0,
            bestPts: 0,
          },
        ]
      },
      {
        nickname: "mazikeen",
        id: "41",
        kicked: false,
        grade: {
          leader: false,
          coleader: false,
          member: true,
        },
        stats: [
          {
            eventName: "Let's goooooooo!",
            eventParts : [
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              }
            ],
            moyenne: 0,
            bestRecord: 0,
            bestKm: 0,
            bestPts: 0,
          },
        ]
      },
      {
        nickname: "Trou2Ball",
        id: "42",
        kicked: false,
        grade: {
          leader: false,
          coleader: false,
          member: true,
        },
        stats: [
          {
            eventName: "Let's goooooooo!",
            eventParts : [
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              }
            ],
            moyenne: 0,
            bestRecord: 0,
            bestKm: 0,
            bestPts: 0,
          },
        ]
      },
      {
        nickname: "Boss",
        id: "43",
        kicked: false,
        grade: {
          leader: false,
          coleader: false,
          member: true,
        },
        stats: [
          {
            eventName: "Let's goooooooo!",
            eventParts : [
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              }
            ],
            moyenne: 0,
            bestRecord: 0,
            bestKm: 0,
            bestPts: 0,
          },
        ]
      },
      {
        nickname: "chris dh",
        id: "44",
        kicked: false,
        grade: {
          leader: false,
          coleader: false,
          member: true,
        },
        stats: [
          {
            eventName: "Let's goooooooo!",
            eventParts : [
              {
                score: 12526,
                km: 0,
                pts: 161,
              },
              {
                score: 14117,
                km: 17,
                pts: 311,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              }
            ],
            moyenne: 0,
            bestRecord: 0,
            bestKm: 0,
            bestPts: 0,
          },
        ]
      },
      {
        nickname: "kentin",
        id: "45",
        kicked: false,
        grade: {
          leader: false,
          coleader: false,
          member: true,
        },
        stats: [
          {
            eventName: "Let's goooooooo!",
            eventParts : [
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 5936,
                km: 13,
                pts: 14,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              }
            ],
            moyenne: 0,
            bestRecord: 0,
            bestKm: 0,
            bestPts: 0,
          },
        ]
      },
      {
        nickname: "NK meruem",
        id: "46",
        kicked: false,
        grade: {
          leader: false,
          coleader: false,
          member: true,
        },
        stats: [
          {
            eventName: "Let's goooooooo!",
            eventParts : [
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 14075,
                km: 4,
                pts: 185,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              }
            ],
            moyenne: 0,
            bestRecord: 0,
            bestKm: 0,
            bestPts: 0,
          },
        ]
      },
      {
        nickname: "Nono",
        id: "47",
        kicked: false,
        grade: {
          leader: false,
          coleader: false,
          member: true,
        },
        stats: [
          {
            eventName: "Let's goooooooo!",
            eventParts : [
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 20978,
                km: 128,
                pts: 280,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              }
            ],
            moyenne: 0,
            bestRecord: 0,
            bestKm: 0,
            bestPts: 0,
          },
        ]
      },
      {
        nickname: "Tiflop",
        id: "48",
        kicked: false,
        grade: {
          leader: false,
          coleader: false,
          member: true,
        },
        stats: [
          {
            eventName: "Let's goooooooo!",
            eventParts : [
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 0,
                km: 28,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              },
              {
                score: 0,
                km: 0,
                pts: 0,
              }
            ],
            moyenne: 0,
            bestRecord: 0,
            bestKm: 0,
            bestPts: 0,
          },
        ]
      },
    ],
    events: [
      {
        eventName: "Jus de citrouille0",
        start: "05/11/21",
        end: "10/11/21",
        actualEvent: false,
      },
      {
        eventName: "Jus de citrouille",
        start: "05/11/21",
        end: "10/11/21",
        actualEvent: false,
      },
      {
        eventName: "Jus de citrouille2",
        start: "05/11/21",
        end: "10/11/21",
        actualEvent: false,
      },
      {
        eventName: "Crash test",
        start: "05/11/21",
        end: "10/11/21",
        actualEvent: false,
      },
      {
        eventName: "Let's goooooooo!",
        start: "13/11/21",
        end: "18/11/21",
        actualEvent: true,
      }
    ],
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
            grade: {
              leader: payload.grade.leader,
              coleader: payload.grade.coleader,
              member: payload.grade.member,
            },
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
    }
  },
  modules: {
  }
})
