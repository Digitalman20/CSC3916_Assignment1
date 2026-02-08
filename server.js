const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.raw({ type: "*/*" })); // catches everything as text first

// POST / endpoint
app.post("/", (req, res) => {
    
    res.send(req.body);
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Echo server running on http://localhost:${PORT}`);
});