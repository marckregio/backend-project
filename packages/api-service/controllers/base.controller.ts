import { Kafka, logLevel, Partitioners } from "kafkajs";

const kafka = new Kafka({
  clientId: 'localhost',
  brokers: ['localhost:9092'],
	logLevel: logLevel.INFO,
});
export abstract class CommonControllers {
	name: string

	async welcomeProducer(value: string) {
		const producer = kafka.producer( {
			allowAutoTopicCreation: true,
			createPartitioner: Partitioners.LegacyPartitioner
		});

		await producer.connect();
		await producer.send({
			topic: 'com.makregio.user.welcome',
			messages: [
				{ value: value } // no key for now
			]
		})
	}

	constructor(name: string) {
		this.name = name;
	}
}