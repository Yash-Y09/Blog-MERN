import express from "express"
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import postRoutes from "./routes/posts.js"

const app = express()

app.use(express.json())

app.use("/api/auth",authRoutes)
app.use("/api/users",userRoutes)
app.use("/api/posts",postRoutes)

app.get("/test", (req,res)=>{
    res.json("It works")
})
const port = 8800;
app.listen(port,()=>{
    console.log(`DB Connected! ${port}`);
})