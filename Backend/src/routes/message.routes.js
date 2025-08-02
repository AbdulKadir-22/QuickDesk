const express = require('express');
const router = express.Router();

const messageController = require('../controllers/message.controller');

router.post('/', messageController.addMessage);
router.get('/:ticketId', messageController.getMessagesByTicket);
router.delete('/:id', messageController.deleteMessage);

module.exports = router;
