const errors = require('../error');
const tasks = [
  {id: 1, task: 'Do Swimming', isComplete: false},
  {id: 2, task: 'Do Homework', isComplete: true},
  {id: 3, task: 'Wash the doggy', isComplete: true},
];
let currrent_Id = 3; 
function getTaskList () {
  return tasks;
}
function getTaskById (id) {
  const task = tasks.filter(e => e.id === parseInt(id));
  console.log(task);
  return tasks[0] ?  task[0] : {};
}
function createTask(task){
  currrent_Id += 1;
  const taskObject = {id:currrent_Id,task,isComplete:false};
  tasks.push(taskObject);
  return taskObject;
}

function editTasksById (id , sourceTask) {
  console.log(id);
  const taskObjectIndex = tasks.findIndex(task => task.id === parseInt(id));
  if(taskObjectIndex===-1) {
    return new errors.NotFoundError(`task with ${id} not found`);
  }
  const newTaskObject = {...tasks[taskObjectIndex]};
  for(let key in sourceTask){
    newTaskObject[key] = sourceTask[key] ?? newTaskObject[key];
  }
  tasks[taskObjectIndex] = newTaskObject;
  return newTaskObject;
}
function deleteTaskById (id) {
  const taskObjectIndex = tasks.findIndex(task => task.id === parseInt(id));
  if(taskObjectIndex===-1) {
    return new errors.NotFoundError(`task with ${id} not found`);
  }
  tasks.splice(taskObjectIndex, 1);
  return tasks;
}

module.exports = {
  getTaskList,
  getTaskById,
  createTask,
  editTasksById,
  deleteTaskById
};