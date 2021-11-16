import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
                pts: 89,
              },
              {
                score: 10000,
                km: 175,
                pts: 100,
              },
              {
                score: 10000,
                km: 100,
                pts: 108,
              },
              {
                score: 10000,
                km: 100,
                pts: 108,
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
                pts: 200,
              },
              {
                score: 25631,
                km: 200,
                pts: 200,
              },
              {
                score: 35698,
                km: 300,
                pts: 300,
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
      {
        nickname: "COnnard",
        id: "1255fds5",
        kicked: true,
        grade: {
          leader: false,
          coleader: false,
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
    playersUpdated: false,
    // newEventCreated: false
  },
  getters: {
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
