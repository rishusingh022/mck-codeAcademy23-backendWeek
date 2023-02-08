const Joi = require('joi');
const {HTTPError} = require('../src/error');
const idSchema = Joi.object({
    id: Joi.number().integer().required()
});
const nameSchema = Joi.object({
    task: Joi.string().required()
});
const bodyValidator = async (req, res, next) => {
    try {
        const { error } = nameSchema.validate(req.body);
        if (error) {
            throw new HTTPError(error.message, 400);
        }
        next();
    }
    catch (error) {
        if(error instanceof HTTPError){
            res.status(error.code).json({
                message: error.message,
            })
            return;
        }
        else{
            res.status(500).json({
                message: 'Internal Server Error',
            })
        }
    }
};
const idValidator = async (req, res, next) => {
    try {
        const { error } = idSchema.validate(req.params);
        if (error) {
            throw new HTTPError(error.message, 400);
        }
        next();
    }
    catch (error) {
        if(error instanceof HTTPError){
            res.status(error.code).json({
                message: error.message,
            })
            return;
        }
        else{
            res.status(500).json({

                message: 'Internal Server Error',
            })
        }
    }
};
module.exports ={
    bodyValidator,
    idValidator,
}