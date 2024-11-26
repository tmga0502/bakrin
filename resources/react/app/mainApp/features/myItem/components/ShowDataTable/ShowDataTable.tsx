import React from 'react';
import {ImageStyle, ImageWrapper} from './ShowDataTable.styles';
import {Table, Tbody, Td, Tr} from "@mainLayouts/table";
import {Budge} from "@mainElements/budge";
import ItemPlanBadge from "@mainElements/budge/ItemPlanBadge/ItemPlanBadge";
import {ItemDataType} from "@mainFeatures/myItem/types";
import {ImageDeleteModal} from "@mainFeatures/myItem/components";
import {createImageUrl} from "@/react/app/mainApp/functions/formatter";

const ShowDataTable: React.FC<ItemDataType> = ({itemData}) => {
	const status = itemData.status === 1 ? <Budge color={'success'} value={'公開'}/> : <Budge color={'danger'} value={'非公開'}/>;
	const plan = <ItemPlanBadge plan={itemData.plan}/>
	return (
		<Table>
			<Tbody>
				<Tr>
					<Td text={'カテゴリー'} heading={true}/>
					<Td text={itemData.category.name} heading={false}/>
				</Tr>

				<Tr>
					<Td text={'種類'} heading={true}/>
					<Td text={itemData.variety.name} heading={false}/>
				</Tr>

				<Tr>
					<Td text={'アイテム名'} heading={true}/>
					<Td text={itemData.name} heading={false}/>
				</Tr>

				<Tr>
					<Td text={'数量'} heading={true}/>
					<Td text={itemData.count + itemData.unit.name} heading={false}/>
				</Tr>
				<Tr>
					<Td text={'目安数量'} heading={true}/>
					<Td text={itemData.guide_count + itemData.guide_unit.name} heading={false}/>
				</Tr>
				<Tr>
					<Td text={'プラン'} heading={true}/>
					<Td text={plan} heading={false}/>
				</Tr>
				<Tr>
					<Td text={'アイテム説明'} heading={true}/>
					<Td text={
						itemData.description.split('\n').map((line, index) => (
							<React.Fragment key={index}>
								{line}
								<br />
							</React.Fragment>
						))
					} heading={false}/>
				</Tr>
				<Tr>
					<Td text={'発送可能日'} heading={true}/>
					<Td text={`${itemData.shipping_start}月${itemData.shipping_start_part}から${itemData.shipping_end}月${itemData.shipping_end_part}`} heading={false}/>
				</Tr>
				<Tr>
					<Td text={'ステータス'} heading={true}/>
					<Td text={status} heading={false}/>
				</Tr>
				<Tr>
					<Td text={'サムネイル'} heading={true}/>
					<Td text={<img src={createImageUrl(itemData.thumbnail_path)} css={ImageStyle} alt={'thumbnail'}/>} heading={false}/>
				</Tr>
				{itemData.images.map((image: any, index: number) => (
					<Tr key={image.id}>
						<Td text={`画像${index+1}`} heading={true}/>
						<Td text={
							<div css={ImageWrapper} >
								<img src={createImageUrl(image.image_path)} css={ImageStyle} alt={`image${index + 1}`}/>
								<ImageDeleteModal imageId={image.id}/>
							</div>
						} heading={false}/>
					</Tr>
				))}
			</Tbody>
		</Table>
	);
};

export default ShowDataTable;
