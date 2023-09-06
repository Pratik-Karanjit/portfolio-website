import express, { json } from "express";
import { port } from "./src/config/constant.js";
import cors from "cors"
import userRouter from "./src/Routes/userRouter.js";


let app = express();

app.use(json());

app.use(cors())
app.use("/users", userRouter);


app.use(express.static("./public"));


app.listen(port, () => {
  console.log(`app is listening at port ${port}`);
});
