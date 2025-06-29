import express from "express";
import { PORT } from "./config/env.js";
import authRouter from "./routes/authRoute.js";
import userRouter from "./routes/userRoutes.js";
import blogRouter from "./routes/blogRoutes.js";
import cookieParser from "cookie-parser";
import errorMiddleware from "./middlewares/errorMiddleware.js";
import connectToDatabase from "./database/mongoDb.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/blog", blogRouter); // blogRouter is not defined yet (nul)
app.use("/api/v1/user", userRouter);
app.use(errorMiddleware);

app.get("/", (req,res)=> res.send("Hello World"));

app.listen(PORT, async()=> {
    console.log(`Server running on port ${PORT}`);
    await connectToDatabase();
});

export default app;