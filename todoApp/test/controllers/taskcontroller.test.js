const taskController = require('../../src/controllers/taskcontroller')
const taskServices = require('../../src/services/taskServices')

describe('Task cases Controller', () => {
    describe('Task cases for Get task Controller', () => {
        it('Should return 200 as status code and return a list of task', async () => {
            const tasks = [
                {id: 1, task: 'test1', isComplete: false},
                {id: 2, task: 'test2', isComplete: false},
            ];
            jest.spyOn(taskServices, 'getTaskService').mockResolvedValue(tasks);
    
            const mockReq = {};
            const mockRes = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };
            await taskController.getTask(mockReq, mockRes);
            expect(mockRes.status).toBeCalledWith(200);
            expect(mockRes.json).toBeCalledWith({
                message : 'Task fetched succesfully',
                data : tasks,
            });
        })
        it('Should return 500 as a status code internal server error if found bug at server side ', async () => {
    
            jest.spyOn(taskServices, 'getTaskService').mockRejectedValue(new Error('Internal Server Error'))
    
            const mockReq = {};
            const mockRes = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };
            await taskController.getTask(mockReq, mockRes);
            expect(mockRes.status).toBeCalledWith(500);
            expect(mockRes.json).toBeCalledWith({
                message : 'Internal Server Error',
    
            });
        })
    })
    describe('Task cases for create Task Controller', () => {
        it('Should return 201 as status code and return task which is created', async () => {
            jest.spyOn(taskServices, 'createTaskService').mockResolvedValue({
                id : 3,
                task : 'test3',
                isComplete : false,
            });
            const mockReq = {
                body:{
                    task : 'test3',
                }
            };
            const mockRes = {
                status:jest.fn().mockReturnThis(),
                json: jest.fn(),
            }
            const task = {
                id : 3,
                task : 'test3',
                isComplete : false,
    
            }
            await taskController.createTask(mockReq,mockRes);
            expect(mockRes.status).toBeCalledWith(201);
            expect(mockRes.json).toBeCalledWith({
                message : 'Task Created successfully',
                data : task,
            });
        })
        it('Should return 500 as status code internal server error if there is a bug at server side',async() => {
            jest.spyOn(taskServices, 'createTaskService').mockRejectedValue(new Error('Internal Server Error'))
            const mockReq = {
                body : {
                    task : 'test3',
                }
            }
            const mockRes = {
                status:jest.fn().mockReturnThis(),
                json:jest.fn(),
            }
            await taskController.createTask(mockReq,mockRes);
            expect(mockRes.status).toBeCalledWith(500);
            expect(mockRes.json).toBeCalledWith({
                message : 'Internal Server Error',
            })
        })
    })
    describe('Task cases for Get the task by id Controller',() =>{
        it('Should return 200 as status code and return the task which is enquired', async () => {
            const task = {
                id : 3,
                task : 'test3',
                isComplete : 'false',
            }
            jest.spyOn(taskServices,'getTaskByIdService').mockResolvedValue(task);
            const mockReq = {
                params : {
                    id : 3,
                }
            }
            const mockRes = {
                status : jest.fn().mockReturnThis(),
                json : jest.fn(),
            }
            await taskController.getTaskById(mockReq,mockRes);
            expect(mockRes.status).toBeCalledWith(200);
            expect(mockRes.json).toBeCalledWith({
                message : `Task with id : 3 is fetched successfully`,
                data : task,
            })
        })
        it('Should return 500 as a status code internal server error if found bug at server side ', async () => {
            jest.spyOn(taskServices, 'getTaskByIdService').mockRejectedValue(new Error('Internal Server Error'))
            const mockReq = {
                params : {
                    id : 3,
                }
            };
            const mockRes = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };
            await taskController.getTaskById(mockReq, mockRes);
            expect(mockRes.status).toBeCalledWith(500);
            expect(mockRes.json).toBeCalledWith({
                message : 'Internal Server Error',
    
            });
        })
    })
    describe('Task cases for Update Task Controller', () => {
        it('Should return 200 as status code and return task which is updated', async () => {
            jest.spyOn(taskServices,'updateTaskService').mockResolvedValue({
                id : 3,
                task : 'test4',
                isComplete : false,
            });
            const mockReq = {
                params:{
                    id:3,
                },
                body:{
                    task : 'test4',
                }
            };
            const mockRes = {
                status:jest.fn().mockReturnThis(),
                json: jest.fn(),
            }
            const task = {
                id : 3,
                task : 'test4',
                isComplete : false,
    
            }
            await taskController.updateTask(mockReq,mockRes);
            expect(mockRes.status).toBeCalledWith(200);
            expect(mockRes.json).toBeCalledWith({
                message : 'Task updated successfully',
                data : task,
            });
        })
        it('Should return 500 as a status code internal server error if found bug at server side ', async () => {
            jest.spyOn(taskServices, 'updateTaskService').mockRejectedValue(new Error('Internal Server Error'))
            const mockReq = {
                params:{
                    id:3,
                },
                body:{
                    task : 'test4',
                }
            };
            const mockRes = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };
            await taskController.updateTask(mockReq, mockRes);
            expect(mockRes.status).toBeCalledWith(500);
            expect(mockRes.json).toBeCalledWith({
                message : 'Internal Server Error',
    
            });
        })
        
    })
    describe('Task cases Delete task by id Controller',() =>{
        it('Should return 200 as status code and return the task which is deleted', async () => {
            const task = {
                id : 3,
                task : 'test3',
                isComplete : 'false',
            }
            jest.spyOn(taskServices, 'deleteTaskByIdService').mockResolvedValue(task);
            const mockReq = {
                params : {
                    id : 3,
                }
            }
            const mockRes = {
                status : jest.fn().mockReturnThis(),
                json : jest.fn(),
            }
            await taskController.deleteTask(mockReq,mockRes);
            expect(mockRes.status).toBeCalledWith(200);
            expect(mockRes.json).toBeCalledWith({
                message : `Task with id : 3 is deleted successfully`,
                data : task,
            })
        })
        it('Should return 500 as a status code internal server error if found bug at server side ', async () => {
            jest.spyOn(taskServices, 'deleteTaskByIdService').mockRejectedValue(new Error('Internal Server Error'))
            const mockReq = {
                params:{
                    id:3,
                },
            };
            const mockRes = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };
            await taskController.deleteTask(mockReq, mockRes);
            expect(mockRes.status).toBeCalledWith(500);
            expect(mockRes.json).toBeCalledWith({
                message : 'Internal Server Error',
            });
        })
    })
})

