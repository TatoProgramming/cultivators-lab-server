import User from '../models/user.model'

class UserDb{
    constructor(){ }

    createUser(user){
        user = new User(user)
        user.save()
        return user
    }

    getUser(userId){
        return User.findById(userId)
    }

    deleteUser(userId){
        User.findByIdAndRemove(userId)
    }
}

export default UserDb