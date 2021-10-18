const model = require('../models/steaks.js') 
// const steaks = require('../routes/steak.js')


const GET = async (request, response) => {
    let data = await model.getSteaks() 
    response.json(data)
}

const POST = async (request, response, next) => {

    let steak = await model.insertSteaks(request.body)
    try {
        if (steak) {
            response.json({
                status: 201,
                message: "The new steak has been added!",
                data: steak
            })
        } else throw new Error("There is a error")
    } catch (error) {
        return next(error)
    }
}

const PUT = async (request, response) => {

    

    response.json(await model.getSteaks())
}
const DELETE = async (request, response) => {
    response.json(await model.getSteaks())
}



module.exports = {
    GET,
    POST,
    PUT,
    DELETE
}