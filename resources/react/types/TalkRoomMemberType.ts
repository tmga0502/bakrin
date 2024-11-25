import {TalkRoomType} from "@/react/types/TalkRoomType";
import {UserType} from "@/react/types/UserType";

export type TalkRoomMemberType = {
	talk_room_id : number,
	user_id      : number,
	created_at   : string,
	updated_at   : string,
	talkRoom     : TalkRoomType,
	user         : UserType,
}
