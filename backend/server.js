'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Add your routes here

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
