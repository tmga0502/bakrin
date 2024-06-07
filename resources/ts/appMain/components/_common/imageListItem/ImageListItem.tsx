import React, {useState} from 'react';
import {
    ProducerPanelProps,
} from "@/ts/appMain/components/_common/imageListItem/type";
import {Link} from "react-router-dom";
import {ItemFavoriteButton} from "@/ts/appMain/components/_ui/button/Button";
import {GetPlanImage} from "@/ts/functions/GetPlanImage";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { tv } from "tailwind-variants";
import {ProducerType} from "@/ts/types/ProducerType";
import {useDeregisterFavoriteProducer, useRegisterFavoriteProducer} from "@/ts/_api/query/FavoriteProducerQuery";
import {useAuth} from "@/ts/hooks/AuthContext";

const planTv = tv({
    base:`
    inline-block absolute left-0 top-[3%] box-border py-0 px-4 m-0 h-5 leading-5 text-xs text-white bg-orange-500 shadow-ribbon z-100 rounded-tr-[5px] rounded-br-[5px]
    before:absolute before:content-[''] before:top-0 before:-left-[7px] before:border-0 before:h-6 before:w-[7px] before:bg-orange-500 before:rounded-tl-[5px] before:rounded-bl-[5px]
    after:absolute after:content-[''] after:-bottom-[7px] after:-left-[5px] after:border-0 after:h-5 after:bg-orange-500 after:rounded-tl-[5px] after:rounded-bl-[5px]
    `,
    variants: {
        color: {
            red: "bg-red-500 before:bg-red-500 after:bg-red-500",
            blue: "bg-sky-500 before:bg-sky-500 after:bg-sky-500",
            green: "bg-green-500 before:bg-green-500 after:bg-green-500",
            white: "bg-white before:bg-white-500 after:bg-white-500 text-black",
        },
        defaultVariants: {
            color: 'red'
        },
    },
});

const ItemListPanel = ({data}: any) => {
    const plan = GetPlanImage(data.planId)
    const color: any = plan !== undefined ? plan.color : 'red'

    return (
        <Link to={'/items/'+data.uuid}>
            <div className="relative w-full before:content-[''] before:block before:pt-[100%] rounded-md">
                <div
                    className={planTv({ color: color })}>
                    {plan && plan.displayName}
                </div>
                <LazyLoadImage
                    src={data.thumbnail}
                    className="absolute w-full h-full top-0 left-0 object-cover object-center rounded-md"
                    alt={data.name}
                />
            </div>
        </Link>
    );
};


const ProducerPanel = ({data}:ProducerPanelProps) => {
    return(
        <Link to={'/producers/'+data.uuid}>
            <div className="border-2 rounded-md shadow-lg">
                <div className="relative w-full before:content-[''] before:block before:pt-[100%]">
                    <LazyLoadImage
                        src={data.imgPath}
                        className="absolute w-full h-full top-0 left-0 object-cover object-center rounded-tl-md rounded-tr-md"
                        alt={data.organizationName}
                    />
                </div>
                <div className="p-2">
                    <p className="leading-8 text-xs">{data.address1 + data.address2}</p>
                    <p>{data.organizationName}</p>
                </div>
            </div>
        </Link>
    )
}

const ProducerShowPanel = (props: {data: ProducerType}) => {
	const { userData } = useAuth()
	const [favoriteStatus, setFavoriteStatus] = useState(
		props.data.favorite_producers.some((producer:any) => producer.myUuid === userData.uuid)
	)
	const favoriteRegister = useRegisterFavoriteProducer();
	const favoriteDeregister = useDeregisterFavoriteProducer();

	const handleFavorite = () => {
		if (favoriteStatus){
			favoriteDeregister.mutate({producerUuid:props.data.uuid})//解除処理
		}else{
			favoriteRegister.mutate({producerUuid:props.data.uuid})//登録処理
		}
		setFavoriteStatus(!favoriteStatus)
	}

    return (
        <div className="p-4 border-2 bg-white md:flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="w-[64px] h-[64px]">
                    <img src={props.data.imgPath} className="w-full h-full object-cover rounded-full"
                         alt="farmerImg"/>
                </div>
                <div className="">
                    <p className="tex-sm mb-2">{`${props.data.address1}${props.data.address2}`}</p>
                    <p className="text-lg">{props.data.organizationName}</p>
                </div>
            </div>
            <div className="text-center mt-4 md:w-2/3 md:text-right md:mt-0">
				{favoriteStatus ? (
					<ItemFavoriteButton value={'登録解除'} status={true} type={'button'} onClick={handleFavorite}/>
				) : (
					<ItemFavoriteButton value={'登録する'} status={false} type={'button'} onClick={handleFavorite}/>
				)}
            </div>
        </div>
    )
}

export {
    ItemListPanel,
    ProducerPanel,
    ProducerShowPanel,
};
