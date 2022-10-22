import { Consumer, Kafka, logLevel } from "kafkajs";

const kafka = new Kafka({
  clientId: 'localhost',
  brokers: ['localhost:9092'],
	logLevel: logLevel.INFO,
});

export function initializeConsumers() {
	const consumer = kafka.consumer({ groupId: 'user-service-group' });
	
	const run = async () => {
		await consumer.connect();
		await consumer.subscribe({ topic: 'com.makregio.user.welcome', fromBeginning: true })
		await consumer.run({
			eachMessage: async ({ topic, partition, message }) => {
				console.log( {
					value: message.value?.toString()
				});
			},
		});
	};

	run().catch(e => {
		console.error('error:', e);
	});
}