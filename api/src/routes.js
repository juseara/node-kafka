import express from 'express';

const routes = express.Router();


routes.post('/notification', async (req,res)=>{
    //Chama micro serviço
    const {...notificationInf} = req.body

    console.log("NOTIFICATION",notificationInf)

    await req.producer.send({
        topic:'issue-notification',
        messages: [{ value: JSON.stringify(notificationInf)}],
        retry: {
            initialRetryTime: 300,
            retries: 10,
            factor:0.5,
          }
    })
    return res.json({message:"notificação foi registrada para disparo"})
})

export default routes