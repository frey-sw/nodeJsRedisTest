const express = require("express");
const app = express();
const redis = require('redis');
const client = redis.createClient({ url: 'redis://syrus4:redis@localhost:6379' });

client.on('connect', function() {
    console.log('Redis connected!');
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Node server started");
});