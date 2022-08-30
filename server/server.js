import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express()
const PORT = process.env.PORT || 8000;

app.use(express.json())
app.use(cors())

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "..", "client/build")))
}
app.get("/api", (req ,res)=>{
    res.send("working")
})

app.get("*", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "..", "client/build", "index.html"))
})
app.listen(PORT, ()=>console.log(`server listening on port ${PORT}`))