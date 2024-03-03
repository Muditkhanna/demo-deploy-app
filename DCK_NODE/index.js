const express =require('express');
const app =express();

const port = 3000;

app.get('/',(req,res)=>{
    res.json({
        "stack":"NodeJs",
        "made_by":"mudit_khanna"
    });
})

app.listen(port,()=>{
    console.log(`server is listening on ${port}`);
})