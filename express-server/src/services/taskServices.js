const errors = require('../error')
const db = require('../../database/models')
const {User} = db;
async function getTaskList () {
    return await db.User.findAll();
}
async function getTaskById (taskId) {
    const task =await db.User.findAll({
        where : {
            id : taskId
        },
    });
    return task;
}
async function createTask(task){
    const taskObject = await User.create({task,isComplete:false});
    return taskObject;
}

async function editTasksById (taskId , sourceTask) {
    console.log(taskId);
    const updatedTask = await User.update({task:sourceTask["task"]},{
        where:{
            id:taskId
        }
    });
    return updatedTask;
}
async function deleteTaskById (taskId) {
    const deletedTask = await User.destroy({
        where : {
            id:taskId
        },
    });
    return deletedTask;
}

module.exports = {
    getTaskList,
    getTaskById,
    createTask,
    editTasksById,
    deleteTaskById
};