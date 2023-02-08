const taskValidator = require('../../middlewares/taskValidator');

describe('Test cases for task validation', () => {
    describe('Test cases for id validation ' , () => {
        it('Should return status code 400 with a message : id must be a number when id is string',() => {
            const mockReq = {
                params : {
                    id : 'abc',
                }
            }
            const mockRes = {
                status : jest.fn().mockReturnThis(),
                json : jest.fn(),
            }
            const next = jest.fn();
            taskValidator.idValidator(mockReq,mockRes, () => {});
            expect(mockRes.status).toBeCalledWith(400);
            expect(mockRes.json).toBeCalledWith({
                message : '"id" must be a number',
            })
            expect(next).not.toBeCalled();
        })
        it('Should return status code 400 with a message : id is not present' , () => {
            const mockReq = {
                params : {}
            }
            const mockRes = {
                status : jest.fn().mockReturnThis(),
                json : jest.fn(),
            }
            const next = jest.fn();
            taskValidator.idValidator(mockReq,mockRes, () => {});
            expect(mockRes.status).toBeCalledWith(400);
            expect(mockRes.json).toBeCalledWith({
                message : '"id" is required',
            })
            expect(next).not.toBeCalled();
        })
        it('Should call next when id is validated', () => {
            const mockReq = {
                params : {
                    id : 4,
                }
            }
            const mockRes = {
                status : jest.fn().mockReturnThis(),
                json : jest.fn(),
            }
            const next = jest.fn();
            taskValidator.idValidator(mockReq,mockRes,next);
            expect(next).toBeCalled();
            expect(mockRes.status).not.toBeCalled();
            expect(mockRes.json).not.toBeCalled()
            
        })
        it('Should return Internal Server Error in case of any other error',() => {
            const mockReq = {
                params : {
                    id : 4,
                }
            }
            const mockRes = {
                status : jest.fn().mockReturnThis(),
                json : jest.fn(),
            }
            const next = jest.fn();
            taskValidator.idValidator(mockReq,mockRes,() => {
                throw new Error('Internal Server Error');
            })
            expect(mockRes.status).toBeCalledWith(500);
            expect(mockRes.json).toBeCalledWith({
                message : 'Internal Server Error',
            })
            expect(next).not.toBeCalled();
        })
    })
})