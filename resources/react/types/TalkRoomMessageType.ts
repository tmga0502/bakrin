import {UserType} from "@/react/types/UserType";

export type TalkRoomMessageType = {
    map(arg0: (messageGroup: any, index: number) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode;
    id            :number,
	messageGroupId: number,
    senderUuid    : string,
	receiverUuid  : string,
	message       : string,
	read_at       : string | undefined,
	sender        : UserType,
	receiver      : UserType,
}
