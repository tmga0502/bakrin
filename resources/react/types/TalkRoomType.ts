import {TalkRoomMemberType} from "@/react/types/TalkRoomMemberType";
import {TalkRoomMessageType} from "@/react/types/TalkRoomMessageType";

export type TalkRoomType = {
	name       : string,
	is_group   : string,
	created_at : string,
	updated_at : string,
	members    : TalkRoomMemberType[],
	messages   : TalkRoomMessageType[],
}
