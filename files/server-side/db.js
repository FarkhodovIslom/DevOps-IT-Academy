const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://hanzo:Gh8TzUyYR8kBk2l6@cluster0.rgyzlv1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = client;