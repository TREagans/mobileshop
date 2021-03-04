const mongoose = require('mongoose');

module.exports.connectDB = async () => {

  // database connect options
  const connectOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }

  // connect to database
  try {
    await mongoose.connect(process.env.MONGO_URI, connectOptions);

    console.log('[SUCCESS]: Database connection successful');
  } catch (error) {
    console.error('[ERROR]: Failed to connect to database');
    console.error(`[ERROR]: ${error.message}`);
  }
}