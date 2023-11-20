new Vue({
    el: '#app',
    data: {
        newTask: '',
        tasks: []
    },
    methods: {
        addTask: function () {
            if (this.newTask.trim() !== '') {
                this.tasks.push(this.newTask.trim());
                this.newTask = '';
            }
        },
        removeTask: function (index) {
            this.tasks.splice(index, 1);
        }
    }
});