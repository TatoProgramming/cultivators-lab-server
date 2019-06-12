import UserDb from '../db/user.db'

class UserService{
    constructor(){ 
        this.userDb = new UserDb()
    }

    async createUser(user){
        try{
            return await this.userDb.createUser(user)
        }catch(err){
            throw new Error(err.message)
        }
    }

    async getUser(userId){
        try{
            return await this.userDb.getUser(userId)
        }catch(err){
            throw new Error(err.message)
        }
    }

    async deleteUser(userId){
        try{
            return await this.userDb.deleteUser(userId)
        }catch(err){
            throw new Error(err.message)
        }
    }
}

export default UserService;