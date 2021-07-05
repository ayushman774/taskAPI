const {getAll, getById, removeById, save, update, log} = require('../middleware/users.middle');
const createUser = async ({username, contact, email, password}) => {
    const user = {
        username, 
        contact, 
        email, 
        password
    }
    return await save(user);
}

const getUsers = async () => {
    return await getAll();
}

const getUser = async id => {
    return await getById(id);
}

const deleteUser = async () =>{
    return await removeById(id);
}

const updateUser = async (id, {username, contact, email, password}) =>{
    return await update(id, {username, contact, email, password});
}

const logUser = async ({email, username}) => {
    return await log({email, username});
}

module.exports = {
     createUser,
     getUsers,
     getUser,
     updateUser,
     deleteUser,
     logUser
}