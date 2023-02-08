const errors = require('../error')
const db = require('../../database/models')
const {User} = db;

const getTaskService = async () => {
    return await db.User.findAll();
}
const getTaskByIdService = async (taskId) => {
    const task =await db.User.findAll({
        where : {
            id : taskId,
        },
    });
    return task;
}
const createTaskService = async(task) => {
    const taskObject = await User.create({task,isComplete:false});
    return taskObject;
}

const updateTaskService = async (taskId , sourceTask) => {
    const updatedTask = await User.update({task:sourceTask["task"]},{
        where:{
            id:taskId,
        }
    });
    return updatedTask;
}
const deleteTaskByIdService = async (taskId) => {
    const deletedTask = await User.destroy({
        where : {
            id : taskId,
        },
    });
    return deletedTask;
}

module.exports = {
    getTaskService,
    getTaskByIdService,
    createTaskService,
    updateTaskService,
    deleteTaskByIdService,
};