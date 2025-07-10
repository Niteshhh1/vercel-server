const Subscriber = require('../models/subscribedEmail');

// Add email to subscription list
exports.subscribeEmail = async (req, res) => {
  try {
    const { email } = req.body;

    const existing = await Subscriber.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: 'Email is already subscribed' });
    }

    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();

    res.status(201).json({ message: 'Subscribed successfully', subscriber: newSubscriber });
  } catch (error) {
    console.error('Subscription error:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

// Admin - View all subscribed emails
exports.getAllSubscribedEmails = async (req, res) => {
  try {
    const subscribers = await Subscriber.find().sort({ createdAt: -1 });
    res.status(200).json(subscribers);
  } catch (error) {
    console.error('Fetch subscribers error:', error);
    res.status(500).json({ error: 'Failed to fetch subscribers' });
  }
};
