const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    message: 'Hello CI/CD World!',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

app.get('/about', (req, res) => {
  res.json({
    appName: 'CI/CD Learning Project',
    version: '1.0.0',
    author: 'Subhash Bhalerao',
    description: 'Learning DevOps and CI/CD pipelines',
    endpoints: {
      '/': 'Main endpoint',
      '/health': 'Health check',
      '/about': 'Application information'
    }
  });
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

module.exports = app;