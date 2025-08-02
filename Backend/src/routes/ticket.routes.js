const express = require('express');
const router = express.Router();
const middleware = require('../middlewares/user.middleware')
const ticketController = require('../controllers/ticket.controller');


router.post('/create',middleware.authenticate,ticketController.createTicket);
router.get('/',middleware.authenticate, ticketController.getAllTickets);
router.get('/:id',middleware.authenticate, ticketController.getTicketById);
router.put('/:id',middleware.authenticate, ticketController.updateTicket);
router.delete('/:id',middleware.authenticate, ticketController.deleteTicket);

module.exports = router;
