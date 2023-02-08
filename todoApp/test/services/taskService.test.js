const taskServices = require('../../src/services/taskServices')
const db = require('../../database/models')

describe('Task cases for Services',() => {
    describe('Task cases for get task services', () => {
        it('Should return all the task from the database' , async () => {
            const mockRes = [
                {id: 1, task: 'test1', isComplete: false},
                {id: 2, task: 'test2', isComplete: false},
            ];
            jest.spyOn(db.User,'findAll').mockResolvedValue(mockRes)
            const tasks = await  taskServices.getTaskService();
            expect(tasks).toEqual(mockRes);
        })
    })
    describe('Task cases for get task by id service' , () => {
        it('Should return task which is enquired from the database' , async () => {
            const mockRes = {
                id : 1,
                task : 'test1',
                isComplete : false,
            }
            jest.spyOn(db.User,'findAll').mockResolvedValue(mockRes);
            const task = await taskServices.getTaskByIdService(1);
            expect(task).toEqual(mockRes);
        })
    })
    describe('Task cases for create task service', () => {
        it('Should return task which is created ' , async () => {
            const mockRes = {
                id : 3,
                task : 'test3',
                isComplete : false,
            }
            const mockReq = {
                task : 'test3',
            }
            jest.spyOn(db.User,'create').mockResolvedValue(mockRes);

            const task = await taskServices.createTaskService(mockReq);
            expect(task).toEqual(mockRes)
        })
    })
    describe('Test cases for update task service' , () => {
        it('Should return 1 when task is successfully updated' , async () => {
            const mockRes = 1;
            const mockReq = {
                params : {
                    id : 4,
                },
                body : {
                    task : 'test5',
                }
            }
            jest.spyOn(db.User,'update').mockResolvedValue(1);
            const task = await taskServices.updateTaskService(mockReq.params.id,mockReq.body);
            expect(task).toEqual(mockRes);
        })
    })
    describe('Test cases for delete task service' , () => {
        it('Should return 1 when task is successfully deleted' , async () => {
            const mockRes = 1;
            const mockReq = {
                params : {
                    id : 4,
                },
            }
            jest.spyOn(db.User,'destroy').mockResolvedValue(1);
            const task = await taskServices.deleteTaskByIdService(mockReq.params.id);
            expect(task).toEqual(mockRes);
        })
    })
})
