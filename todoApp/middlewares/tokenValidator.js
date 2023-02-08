const axios = require('axios');

const tokenValidation = async(req, res, next) => {
    try{
        const token = req.headers['authorization'];
        console.log(token)
        const result = await axios.post('http://localhost:3000/api/validateJwt',
        {
            token: token
        });
        next();
    }
    catch(err){
        res.status(401).json({
            message: err.message
        });
    }
}
module.exports = {
    tokenValidation,
};