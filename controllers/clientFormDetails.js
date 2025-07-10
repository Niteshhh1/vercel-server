const ClientForm = require('../models/clientFormModel');

exports.createClientForm = async (req, res) => {
  try {
    const { fullname, email, contact, address } = req.body;

    const newRequest = new ClientForm({ fullname, email, contact, address });
    await newRequest.save();

    res.status(201).json({
      message: 'Client request submitted successfully',
      request: newRequest
    });
  } catch (error) {
    console.error('Error while creating client request:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

exports.getAllClientRequests = async (req, res) => {
  try {
    const requests = await ClientForm.find().sort({ createdAt: -1 });
    res.status(200).json(requests);
  } catch (error) {
    console.error('Error fetching client requests:', error);
    res.status(500).json({ error: 'Failed to fetch client requests' });
  }
};

