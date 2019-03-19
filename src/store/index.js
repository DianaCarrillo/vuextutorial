import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
import data from '../api/data'
export default new Vuex.Store({
state: { // date
    students: [],
    teamA: [],
    teamB: [],
},
getters: { // computed properties

},
actions: { //methods. You never change state with action!!!
    getStudents(context) {
        context.commit('setStudents')
    },
    addTeamMember(context, data){
        context.commit('pushMemberToTeam', data)
    },
},
mutations: { //used for changing the state
    setStudents(state){
        state.students = data.getStudents()
    },
    pushMemberToTeam(state, data){
        if(data.type === 'A'){
            state.teamA.push(state.students[data.index])
        }else{
            state.teamB.push(state.students[data.index])

        }
    }
}
})