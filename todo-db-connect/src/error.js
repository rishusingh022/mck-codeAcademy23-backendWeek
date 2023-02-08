class InvalidInputError extends Error {
    constructor (message) {
        super(message);
        this.name = 'InvalidInputError'
    }
}
class NotFoundError extends Error {
    constructor (message) {
        super(message);
        this.name = 'NotFounfError';
    }
}
module.exports = {
    InvalidInputError,
    NotFoundError
}