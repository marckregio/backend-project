const amqplib = require('amqplib');

var AMQP = process.env.REACT_APP_RABBITMQ_URL || 'amqps://talk-rabbitmq:talkinnovations@b-f545d0b1-aa4e-48a4-a2b4-8ecd61ef382f.mq.ap-southeast-1.amazonaws.com:5671';
var EXCHANGE = 'talk-project';
//var QUEUE = 'talk-test-hello';
var BIND_ROUTE = 'talk-route';

export abstract class CommonServices {
    name: string;

    async RESPONSE(status: number, obj: any) {
        return {
            status: status,
            response: obj
        }
    }

    async sendQMessage(q: any, message: any) {
        // var connection = await amqplib.connect(AMQP, "heartbeat=60");
        // var channel = await connection.createChannel();
        // await channel.assertExchange(EXCHANGE, 'direct', { durable: true }).catch(console.error);
        // await channel.assertQueue(q, { durable: true });
        // await channel.bindQueue(q, EXCHANGE, BIND_ROUTE);
        // await channel.sendToQueue(q, Buffer.from(JSON.stringify(message)));

        // setTimeout(function () {
        //     channel.close();
        //     connection.close();
        // }, 500);
    }
    async consumeQMessage(q: any) {
        var connection = await amqplib.connect(AMQP, "heartbeat=60");
        var channel = await connection.createChannel();
        var response: any;
        await channel.consume(q, (message: any) => {
            if (message.fields.consumerTag == q) {
                console.log("AMQP", message.content.toString());
                response = message.content.toString();
                channel.ack(message);
                channel.cancel(q);
            } else {
                return null;
            }
        }, { consumerTag: q});

        setTimeout(function () {
            channel.close();
            connection.close();
        }, 500);

        return response;
    }

    constructor(name: string) {
        this.name = name;
    }
}