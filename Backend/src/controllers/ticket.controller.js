const Ticket = require('../models/ticket.model');

// POST /api/tickets
exports.createTicket = async (req, res) => {
  try {
    const {
      title,
      description,
      category,
      attachments,
      created_by
    } = req.body;

    const ticket = new Ticket({
      title,
      description,
      category,
      attachments,
      created_by
    });

    await ticket.save();
    return res.status(201).json(ticket);

  } catch (err) {
    return res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// GET /api/tickets
exports.getAllTickets = async (req, res) => {
  try {
    const { status, category, created_by, sortBy } = req.query;

    let filter = {};
    if (status) filter.status = status;
    if (category) filter.category = category;
    if (created_by) filter.created_by = created_by;

    let sort = {};
    if (sortBy === 'recent') sort.updatedAt = -1;
    if (sortBy === 'most_replied') sort.message_thread = -1; 

    const tickets = await Ticket.find(filter)
      .populate('created_by', 'name email')
      .populate('assigned_to', 'name email')
      .sort(sort);

    return res.status(200).json(tickets);

  } catch (err) {
    return res.status(500).json({ message: 'Server error', error: err.message });
  }
};

//GET /api/tickets/:id
exports.getTicketById = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id)
      .populate('created_by', 'name email')
      .populate('assigned_to', 'name email');

    if (!ticket) return res.status(404).json({ message: 'Ticket not found' });

    return res.status(200).json(ticket);

  } catch (err) {
    return res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// PUT /api/tickets/:id
exports.updateTicket = async (req, res) => {
  try {
    const updates = req.body;
    const updatedTicket = await Ticket.findByIdAndUpdate(req.params.id, updates, {
      new: true,
      runValidators: true
    });

    if (!updatedTicket) return res.status(404).json({ message: 'Ticket not found' });

    return res.status(200).json(updatedTicket);

  } catch (err) {
    return res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// DELETE /api/tickets/:id
exports.deleteTicket = async (req, res) => {
  try {
    const deleted = await Ticket.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Ticket not found' });

    return res.status(200).json({ message: 'Ticket deleted successfully' });

  } catch (err) {
    return res.status(500).json({ message: 'Server error', error: err.message });
  }
};
