const express=require("express")
const urlRoute=require("./routes/url");
const {connectMongoDB}=require("./connect");
const URL=require('./models/url');
const app=express()
const PORT=8001;
const cors=require("cors")
app.use(cors());
app.use(express.static("public"));
connectMongoDB('mongodb+srv://Rohith:Rohith_14_IM_@url-short.9jbbv.mongodb.net/')
.then(()=>console.log("mongo DB is connected"));
app.use(express.json());

app.use("/url",urlRoute);
app.get("/:shortId",async(req,res)=>{
    const shortId=req.params.shortId;
    const entry = await URL.findOne(
        {
        shortId
        },
        
    );
    if(entry){
    res.redirect(entry.redirectURL);}
    else{
        console.log(shortId);
    }
})
app.listen(PORT,()=>console.log(`Server Started at port: ${PORT}`))
