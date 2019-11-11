# Micro-serviço com Node.js


- Utilizando kafka;
- Utilizando Node;


## Aplicações

- API principal (Admin);
- Geração de push notification;

## Fluxo

- API principal envia uma mensagem pro serviço de notificação para disparar o push notification nos devices;
- Micro-serviço de Notificação devolve uma resposta (sincrona/assincrona);

## oque sabemos?

- REST (LATENCIA);
- Redis / RabbitMq / **Kafka**;

