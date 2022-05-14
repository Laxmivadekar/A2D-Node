const express=require("express")
const connectDB=require("./config/db");

const app=express()

// connect database
connectDB();


// Init middleware
app.use(express.json({ extended:false }))  


// Define Routers
app.use("/user",require("./routes/users"))
app.use("/auth",require("./routes/auth"))
app.use("/library",require("./routes/books"))

const PORT=process.env.PORT || 2000

app.listen(PORT,() => console.log(`server started on post ${PORT}`))