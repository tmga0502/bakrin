export type MessageType = {
    map(arg0: (messageGroup: any, index: number) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode;
    id          :number,
    senderUuid  : string,
	receiverUuid: string,
	message     : string,
	read_at     : string | undefined,
}
