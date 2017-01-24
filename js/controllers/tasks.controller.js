'use strict';
// Tasks Controller
function TasksController(){
  this.$addTaskForm = $('#add_task')
  this.$taskDescriptionInput = $('#task_description')
  this.$selectListMenu = $('#select_list')
  this.$taskPriorityInput = $('#task_priority')
  this.$wrapper = $('#wrapper')
}


TasksController.prototype.init = function(){
  this.addEventListener()
}

TasksController.prototype.addEventListener = function(){
  this.$addTaskForm.submit(( event ) => {
    event.preventDefault()
    var t = new Task(this.$taskDescriptionInput.val(), this.$taskPriorityInput.val(), List.all[this.$selectListMenu.val()])
    t.liEl()
    t.build()
    var button = $(`#list-${t.list.id} button`)


    button.on('click', function(){
        this.parentElement.remove()
        t.list.tasks[t.id] = null
    })
  })
}

// TasksController.prototype. = function() {
//
// }
