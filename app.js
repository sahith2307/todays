const express=request("Express");
const app=express();
app.get("/",(request,response){
    const today=new Date();
    response.send(`${today.getDate()}-${today.getMonth()+1}-${today.getFullYear()}`)
})
module.exports=app