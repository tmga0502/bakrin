import {TalkRoomMemberType} from "@/react/types/TalkRoomMemberType";
import {TalkRoomMessageType} from "@/react/types/TalkRoomMessageType";
import {UserType} from "@/react/types/UserType";

export type TalkRoomType = {
    length: any;
	uuid       : string,
	name       : string,
	is_group   : string,
	created_at : string,
	updated_at : string,
	members    : TalkRoomMemberType[],
	messages   : TalkRoomMessageType[],
	partner    : UserType,
	lastMessage  : string,
}
