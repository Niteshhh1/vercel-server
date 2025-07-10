const Client = require('../models/clientModel');

exports.createClient = async (req, res) => {
  try {
    const { name, description,image, designation } = req.body;

    const newClient = new Client({ name, image, description, designation });
    await newClient.save();

    res.status(201).json({ message: "Client created successfully", client: newClient });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
};

exports.getAllClients = async (req, res) => {
  try {
    const clients = await Client.find().sort({ createdAt: -1 });
    res.status(200).json(clients);
  } catch (error) {
    console.error('Error fetching clients:', error);
    res.status(500).json({ error: 'Failed to fetch clients' });
  }
};
