
const shortid=require("shortid");
const URL=require('../models/url');
async function handleGenerateNewShortURL(req,res){
    const body =req.body;
    if(!body.url) return res.status(400).json({error:"url is required"});
    const shortId=shortid();
    await URL.create({
        shortId:shortId,
        redirectURL:body.url,
        visitHistory:[],

    })
    return res.json({shortId:shortId})
}
module.exports={
    handleGenerateNewShortURL
}