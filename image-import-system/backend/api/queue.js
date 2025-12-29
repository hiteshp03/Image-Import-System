const { Queue } = require("bullmq");

module.exports = new Queue("image-import", {
  connection: {
    host: process.env.REDIS_HOST,
    port: 6379
  }
});
