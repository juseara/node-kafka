import express from 'express';

const routes = express.Router();


routes.post('/notification',(req,res)=>{
    //Chama micro serviço
    const {...notificationInf} = req.body

    console.log("producer",req.producer)

    console.log("NOTIFICATION",notificationInf)
    return res.json({message:"notificação foi registrada para disparo"})
})

export default routes