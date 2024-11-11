const app=require('.');
const { connectDB } = require('./config/db');
const PORT=5454;


// Connect to the database
connectDB()
  .then(() => {
    console.log('Database connected successfully');
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Database connection failed:', error.message);
    process.exit(1);
  });
