'use strict';
// Task Model
function Task(description, priority, list) {
  this.description = description,
  this.priority = priority,
  this.list = list
  this.list.tasks.push(this)
  this.id = this.list.tasks.length - 1
}

Task.prototype.liEl = function() {
  return `<li data-id="${this.id}"><button class="destroy-task">x</button> ${this.description}, ${this.priority}</li>`
}

Task.prototype.build = function() {
  $(`#list-${this.list.id}`).append(this.liEl())
}
