require('dotenv').config();
console.log(process.env.MONGO_URL);

const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');  // Import CORS

const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");

const app = express();

// Enable CORS for all origins (adjust to your needs)
app.use(cors());

app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);

async function main() {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(3000, () => {
        console.log("Listening on port 3000");
    });
}

main();
