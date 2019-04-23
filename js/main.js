var app = new Vue({
    el: '#app',
    data:{
      newToDo: '',
      todos: []
    },
    methods: {
      addToDo: function(event) {
        if (this.newToDo == "") return; 
        var todo = {
          item: this.newToDo,
          isDone: false
        };

        this.todos.push(todo);
        this.newToDo = "";
      },
      deleteToDo: function(index){
        this.todos.splice(index, 1);
      }
    }
  })
  