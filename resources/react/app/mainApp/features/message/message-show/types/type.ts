import {ProducerType} from "@/react/types/ProducerType";
import {MessageType} from "@/react/types/MessageType";

export type MessageShowType = {
	MessagesData   : MessageType[],
	PartnerProducer: ProducerType
}
