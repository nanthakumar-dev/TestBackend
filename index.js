const express = require('express');
const app = express();
const router = express.Router();

// Home route
router.get('/', (req, res) => {
    res.json({ message: 'Hello from Vercel Serverless!' });
});

// Apply the router
app.use(router);

// Export as a serverless function
module.exports = app;
module.exports.handler = require('serverless-http')(app);
