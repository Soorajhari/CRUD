const mongoose = require('mongoose');

async function connectToMongoDB() {
  try {
    await mongoose.connect('mongodb+srv://soorajhari1999:4plvEWdaf5Vrq1ud@cluster0.d3scysj.mongodb.net/?myDatabaseretryWrites=true&w=majority', {
      
    });
        console.log('Connected to MongoDB hi every');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
  }
}

module.exports= connectToMongoDB 