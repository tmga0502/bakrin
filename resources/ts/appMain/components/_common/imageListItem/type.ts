import {ProducerType} from "@/ts/types/ProducerType";
import {ItemType} from "@/ts/types/ItemType";

type ListImageType = {
    data: ItemType;
};

type ItemShowImageType = {

}

type ProducerPanelProps = {
    data: ProducerType;
};

type ProducerShowType = {
    name: string,
    address: string,
    img: string,
}

export {
    ListImageType,
    ItemShowImageType,
    ProducerPanelProps,
    ProducerShowType,
}
