import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    teamPlayers: [
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
    players : [
      {
        nickname: "Joh",
        id: "1255fds2",
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
                actif: false,
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
                actif: false,
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
                actif: false,
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
                actif: false,
                score: 5952,
                km: 350,
                pts: 100,
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
        nickname: "Jess",
        id: "1255fds3",
        kicked: false,
        grade: {
          leader: false,
          coleader: true,
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
                actif: false,
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
            eventName: "Jus de citrouille2",
            eventParts : [
              {
                score: 10000,
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
                actif: false,
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
            eventName: "Crash test",
            eventParts : [
              {
                score: 25000,
                km: 150,
                pts: 100,
              },
              {
                score: 12345,
                km: 175,
                pts: 100,
              },
              {
                score: 25631,
                km: 100,
                pts: 100,
              },
              {
                actif: false,
                score: 35698,
                km: 100,
                pts: 100,
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
        nickname: "Jack",
        id: "1255fds4",
        kicked: false,
        grade: {
          leader: false,
          coleader: true,
          member: false,
        },
        stats: [
          {
            eventName: "Crash test",
            eventParts : [
              {
                score: 28952,
                km: 150,
                pts: 100,
              },
              {
                score: 0,
                km: 175,
                pts: 100,
              },
              {
                score: 368,
                km: 500,
                pts: 100,
              },
              {
                actif: false,
                score: 15986,
                km: 1200,
                pts: 100,
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
        actualEvent: true,
      }
    ],
    eventSelected: null,
  },
  getters: {
    getPlayers (state) {
      return state.players
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
    updateEventSelected (state, payload) {
      state.eventSelected = payload
    }
  },
  actions: {
    // setActualEvent ({ commit, payload }) {
    //   commit("updateEventSelected", payload)
    // }
  },
  modules: {
  }
})
