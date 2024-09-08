import React from 'react';
import {MainAppLayout} from "@/react/app/mainApp/features/layout";
import {ItemShowModeProvider} from "@/react/app/mainApp/pages/Item/Show/hooks/ItemContext";
import ItemShowImage from "@/react/app/mainApp/features/item/ItemShowImage/ItemShowImage";
import ItemShowDescription from "@/react/app/mainApp/features/item/ItemShowDescription/ItemShowDescription";
import {Link, useParams} from "react-router-dom";
import {useGetItem} from "@/react/api/query/ItemQuery";
import Loader from "@/react/app/mainApp/features/loader/Loader";
import {ItemType} from "@/react/types/ItemType";
import {RadioBox} from "@/react/app/mainApp/components/form";
import {MainButton} from "@/react/app/mainApp/components/button";
import {useAuth} from "@/react/app/mainApp/hooks/AuthContext";

const ItemRequestForm = () => {
	const params = useParams()
	const { data: itemData} = useGetItem(params.itemUuid);
	const { userData } = useAuth()

	if(itemData === undefined)  return <Loader/>
	return (
		<MainAppLayout>
			<ItemShowModeProvider>
				<div className="grid gap-4 lg:grid-cols-2">
					<ItemShowImage thumbnail={itemData.thumbnail} images={itemData.images}/>
					<div>
						<ItemShowDescription data={itemData}/>
						<div className="mt-8">
							<p>【交換に出すアイテムを選択してください】</p>
							<div className="my-8">
								{userData.items.map((item: ItemType) => (
									<RadioBox id={item.id} label={`${item.name}(${item.count}${item.unit.name})【${item.plan.name}】`} name={'myPlan'} key={item.id}/>
								))}
							</div>

							<div className="block text-center mt-8 mb-4">
								<Link to={''}>
									<MainButton type={'button'} color={'mainGreen'} width={'half'} value={'申請する'}/>
								</Link>

								<div className="mt-8">
									<Link to={`/items/${itemData.uuid}`}>
										<MainButton type={'button'} color={'dark'} value={'戻る'} width={'half'}/>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</ItemShowModeProvider>
		</MainAppLayout>
	);
};

export default ItemRequestForm;
