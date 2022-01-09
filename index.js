import express from "express";
import bodyParser from "body-parser";

import usersRoutes from "./routes/users.js";

const app = express();
const PORT = 5000 || process.env.PORT;

app.use(bodyParser.json());
app.use("/users", usersRoutes);

app.get("/", (req, res) => {
  res.send("Hello from Backend");
});

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
