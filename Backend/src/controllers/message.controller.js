const Message = require('../models/message.model');
const Ticket = require('../models/ticket.model');

// POST /api/messages
exports.addMessage = async (req, res) => {
  try {
    const { sender, ticket, content, attachments } = req.body;
    const existingTicket = await Ticket.findById(ticket);
    if (!existingTicket) {
      return res.status(404).json({ message: 'Ticket not found' });
    }

    const message = new Message({
      sender,
      ticket,
      content,
      attachments,
    });

    await message.save();

    return res.status(201).json(message);

  } catch (err) {
    return res.status(500).json({
      message: 'Server error while adding message',
      error: err.message,
    });
  }
};

//GET /api/messages/:ticketId
exports.getMessagesByTicket = async (req, res) => {
  try {
    const { ticketId } = req.params;

    const messages = await Message.find({ ticket: ticketId })
      .populate('sender', 'name email role')
      .sort({ createdAt: 1 });

    return res.status(200).json(messages);

  } catch (err) {
    return res.status(500).json({
      message: 'Server error while fetching messages',
      error: err.message,
    });
  }
};

// DELETE /api/messages/:id
exports.deleteMessage = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Message.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ message: 'Message not found' });
    }

    return res.status(200).json({ message: 'Message deleted successfully' });

  } catch (err) {
    return res.status(500).json({
      message: 'Server error while deleting message',
      error: err.message,
    });
  }
};
