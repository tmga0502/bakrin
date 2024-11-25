import {UserType} from "@/react/types/UserType";
import {TalkRoomType} from "@/react/types/TalkRoomType";

export type TalkRoomMessageType = {
    id            :number,
	talk_room_id  : number,
    user_id       : number,
	message       : string,
	created_at   : string,
	updated_at   : string,
	talkRoom     : TalkRoomType,
	user         : UserType,
}
