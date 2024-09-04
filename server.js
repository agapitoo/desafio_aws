
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));


// Conectar ao MongoDB
mongoose.connect(process.env.CNCT, {
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Could not connect to MongoDB...', err);
});

const studentRoutes = require('./routes/students');
app.use('/api/students', studentRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


