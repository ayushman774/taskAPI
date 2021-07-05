const user = require('../models/index.model');
const ObjectId = require('mongodb').ObjectId;

const save = async({username, contact, email, password}) => {
    const result = await user.create({username, contact, email, password});
    return result
}

const getAll = async () => {
    const cursor = await user.find();
    return cursor.toArray();
}

const getById = async (id) => {
    return await user.findOne({_id:ObjectId(id)});
}

const update = async (id, {username, contact, email, password}) => {
    const result = await user.findOneAndUpdate({_id:ObjectId(id)}, {username, contact, email, password})
    return result;
}

const removeById = async id => {
    await user.deleteOne({_id:ObjectId(id)});
}

const log = () => {
    user.validate(async function({email, password}){
        if (user.email !== email && user.password !== password){
            return { message: " User not Found" }
        } else {
            return await user.findOne({email, password})
        }
    })
} 

module.exports = {getAll, getById, removeById, save, update, log}
