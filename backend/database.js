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

    console.log('[SUCCESS]: Successful connection to database');
  } catch (error) {
    console.error('[ERROR]: Failed to connect to database');
    console.error(`[ERROR]: ${error.message}`);
  }
}