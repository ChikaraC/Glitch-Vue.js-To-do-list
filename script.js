new Vue({
  el: '#app',
  data: {
    newTask: '',
    tasks: []
  },
  methods: {
    // Method to add a task
    addTask() {
      if (this.newTask.trim() !== '') {
        this.tasks.push({ text: this.newTask });
        this.newTask = '';
      }
    },
    // Method to delete a task (triggered by check button)
    deleteTask(index) {
      this.tasks.splice(index, 1);
    }
  }
});
