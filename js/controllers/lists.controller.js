'use strict';
// Lists Controller
function ListsController() {
  this.$addListForm = $('#add_list')
  this.$listTitleInput = $('#list_title')
  this.$selectListMenu = $('#select_list')
  this.$addTaskForm = $('#add_task')
  this.$wrapper = $('#wrapper')
}

ListsController.prototype.init = function(){
  this.$addTaskForm.css("display", "none");
  this.addEventListener()
}

ListsController.prototype.addEventListener = function(){
  this.$addListForm.submit(( event ) => {
    event.preventDefault()
    this.$addTaskForm.css("display", "block")
    var new_list = new List(this.$listTitleInput.val())
    new_list.build()
    var $button = $(`#list-${new_list.id}`).siblings().children()
    $button.click(function(){
      $(this).parent().parent().remove()
    })
  })
}
