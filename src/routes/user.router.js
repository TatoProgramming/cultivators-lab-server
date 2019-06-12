import express from 'express'
import UserController from '../controllers/user.controller'

const router  = express.Router()
const userController = new UserController()

// router.use('/users/:userId', (req, res, next)=>{
//     User.findById( req.params.userId, (err, user)=>{
//         if(err)
//             res.status(500).send(err)
//         else {
//             req.user = user;
//             next()
//         }
//     })
// })

// router.get('/users', (req, res) => {
//     User.find({}, (err, users) => {
//         res.json(users)
//     })
// })

// router.get('/users/:userId', (req, res) => {
//     res.json(req.user)
// })
router.get('/users/:userId', (req, res) => {
    userController.getUser(req, res)
})

router.post('/users', (req, res) => { 
    userController.postUser(req, res) 
})

router.delete('/users/:userId', (req, res) => {
    userController.deleteUser(req, res) 
})

// router.put('/users/:userId', (req, res) => {
//     req.user.name = req.body.name
//     req.user.save()
//     res.json(req.user)
// })

// router.patch('/users/:userId', (req,res)=>{
//     if(req.body._id){
//         delete req.body._id;
//     }
//     for( let b in req.body ){
//         req.user[b] = req.body[b];
//     }
//     user.save();
//     res.json(req.user);
// })

// router.delete('/users/:userId', (req, res) => {
//     req.user.remove(err => {
//         if(err){
//             res.status(500).send(err)
//         }else{
//             res.status(204).send('removed')
//         }
//     })
// })
export default router