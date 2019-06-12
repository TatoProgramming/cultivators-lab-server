import UserService from '../services/user.service'

class UserController{
    constructor(){
        this.UserService = new UserService()
    }

    async postUser(req, res){
        const user = req.body
        try{
            await this.UserService.createUser(user)
            res.sendStatus(201)
        }catch(err){
            console.log(err.message)
            res.sendStatus(500)  
        }
    }

    async getUser(req, res){
        try{
            let user = await this.UserService.getUser(req.params.userId)
            res.json(user)
        }catch(err){
            console.log(err.message)
            res.sendStatus(500)
        }
    }

    async deleteUser(req, res){
        try{
            await this.UserService.deleteUser(req.params.userId)
            res.sendStatus(201)
        }catch(err){
            console.log(err.message)
            res.sendStatus(500)
        }
    }
}

export default UserController;