const Models = require("../models/index");

const Joi = require('joi')
const helper = require('../helpers/commonHelper.js')
const upload = require("../helpers/upload.js")
const otp = require('../helpers/otp.js')


module.exports = {

    register: async (req, res) => {
        try {
            let schema = Joi.object().keys({
                name: Joi.string().required(),
                email: Joi.string().required(),
                password: Joi.string().required(),
                phoneNumber: Joi.string().required(),
            })

            let payload = await helper.validationJoi(req.body, schema)

            let objToSave = {
                name: payload.name,
                email: payload.email,
                password: payload.password,
                phoneNumber: payload.phoneNumber,
                profilePic: req.file? req.file.path:null,
            }

            let response = await Models.usermodel.create(objToSave)
            return res.status(201).send(response);
        } catch (error) {
            console.log(error)
            throw error
        }
    }
}