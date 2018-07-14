const router = require("express").Router();
const userCtrl = require("./userCtrl");
const messageCtrl = require("./messageCtrl");


router.get('/users', userCtrl.getAllUsers);
router.post('/user', userCtrl.createUser);
router.delete('/user/:id', userCtrl.deleteUser);
router.put('/user/:id', userCtrl.updateUser);

router.get('/messages', messageCtrl.getAllMessages);
router.get('/contacts/user/:id', messageCtrl.getAllContacts);
router.post('/message', messageCtrl.createMessage);
router.delete('/message/:id', messageCtrl.deleteMessage);
router.put('/message/:id', messageCtrl.updateMessage);

router.all('/*', function (req, res) {
    res.sendStatus(404);
});
module.exports = router;