<template>
 <div>
   <h1>Students</h1>
   <ul>
     <li v-for="(student, index) in students" :key="student.id"> {{student.name}}
     <i>{{student.games.length}} things she loves</i>
     <button @click="addTeamMember('A', index)">Team A</button>
     <button  @click="addTeamMember('B', index)">Team B</button>

     </li>
   </ul>
   <hr>
   
  <TeamComponent type= 'A'>Team A</TeamComponent>
  <TeamComponent type= 'B'>Team B</TeamComponent>

</div>
</template>

<script>
import store from '../store/index'
import TeamComponent from './TeamComponent.vue'
export default {
  name: 'StudentsComponent',
  components: { TeamComponent },
  computed:{
    students(){
      return store.state.students
    }
  },
  created(){
    // whenever this component is created do:
    store.dispatch('getStudents')
  },
  methods: {
    addTeamMember(type, index){
      store.dispatch('addTeamMember',{type, index})
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
