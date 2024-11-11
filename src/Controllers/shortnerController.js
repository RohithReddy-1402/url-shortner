const UrlShortner = require('../models/UrlShortnerModel')


function generateRandomCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomCode = '';
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomCode += characters.charAt(randomIndex);
    }
  
    return randomCode;
  }
  

  const createUrl = async(req,res) => {
        try {
            let {shortUrl} = req.body
            let longUrl=req.body.url;
            if(!shortUrl){
              shortUrl = generateRandomCode();
            }
             
            const existingUrl = await UrlShortner.findOne({ longUrl});

            if (!existingUrl) {
              const  longUrl  = req.body.url;
              
              const newUrl = await UrlShortner.create({ longUrl, shortUrl });
              return res.status(200).json(newUrl);
            }else{
              return res.json({ shortUrl: `${existingUrl.shortUrl}`,longUrl:longUrl });
            }
            
            return res.status(409).json({ error: "URL already exists" });
           
        } catch (error) {
            return res.status(401).json({error : error.message})
        }
  }

  const getUrl = async (req, res) => {
    try {
      const { shortUrl } = req.params; 
      const existingUrl = await UrlShortner.findOne({ shortUrl });
  
      if (!existingUrl) {
        return res.status(404).json({ error: "URL not found" });
      }
  
      const destination = existingUrl.longUrl;
      return res.status(302).redirect(destination);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  

  

  const test = async(req,res) => {
    try {
       return res.status(200).json("test")
       
    } catch (error) {
        return res.status(401).json({error : error.message})
    }
}
  
  module.exports = {test,generateRandomCode,createUrl, getUrl}
