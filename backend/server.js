const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const hologramRoutes = require('./routes/holograms'); // Import routes

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB locally
mongoose.connect('mongodb://localhost:27017/virtualzoo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


app.use('/api/holograms', hologramRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
