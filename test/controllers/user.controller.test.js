import UserController from '../../src/controllers/user.controller'

test('Adding a user works', () => {
    let userController  = new UserController()
    let req = { body: {name: 'Tester McTesterton'}}
    userController.postUser(res, req, null)
})