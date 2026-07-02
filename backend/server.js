const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
// create a get route of products
app.get("/", (req, res) => {
    res.json({ message: "Products", data: ["Apple", "Banana", "Orange", "Pineapple"], });
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})