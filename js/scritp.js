const {createApp} = Vue;

createApp({

  data(){
    return{
      tasks:[
        {
          text: 'andare a fare la spesa',
          done: true
        },
        {
          text: 'allenarsi',
          done: false
        },
        {
          text: 'visita medica',
          done: true
        }
      ],
      errMsg:'',
      newTaskString: '',
    };
  },

  methods:{
    removeTask(index){
      if(this.task[index].done){
        this.tasks.splice(index,1)
        this.errMsg = '';
      }

      else{
        this.errMsg= 'Errore, la task viene eliminata solo in caso di completamento.';
      }
    },

    addTask(){
      console.log(this.newTaskString)
      if(this.newTaskString.length > 4){
        const newTask = {
          text: this.newTaskString,
          done: false        
        }
        this.tasks.push(newTask);
        this.newTaskString = '';
      }
      else{
        this.errMsg= 'Errore, il testo deve essere lungo minimo 5 caratteri'
      }
    }
  }

}).mount('#app')