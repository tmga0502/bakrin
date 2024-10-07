import React from 'react';
import {DataTableType} from "./DataTable.type";
import {ImageStyle, ImageWrapper} from './DataTable.styles';
import {Table, Tbody, Td, Tr} from "@/react/app/mainApp/components/layout/table";
import {Budge} from "@/react/app/mainApp/components/elements/budge";
import ItemPlanBadge from "@/react/app/mainApp/components/elements/budge/ItemPlanBadge/ItemPlanBadge";
import MainButton from "@/react/app/mainApp/components/elements/button/MainButton/MainButton";

const DataTable: React.FC<DataTableType> = ({data}) => {
	const status = data.status === 0 ? <Budge color={'success'} value={'公開'}/> : <Budge color={'danger'} value={'非公開'}/>;
	const plan = <ItemPlanBadge plan={data.plan}/>
	return (
		<Table>
			<Tbody>
				<Tr>
					<Td text={'カテゴリー'} heading={true}/>
					<Td text={data.category.name} heading={false}/>
				</Tr>

				<Tr>
					<Td text={'アイテム名'} heading={true}/>
					<Td text={data.name} heading={false}/>
				</Tr>

				<Tr>
					<Td text={'数量'} heading={true}/>
					<Td text={data.count + data.unit.name} heading={false}/>
				</Tr>
				<Tr>
					<Td text={'目安数量'} heading={true}/>
					<Td text={data.guideCount + data.guide_unit.name} heading={false}/>
				</Tr>
				<Tr>
					<Td text={'プラン'} heading={true}/>
					<Td text={plan} heading={false}/>
				</Tr>
				<Tr>
					<Td text={'アイテム説明'} heading={true}/>
					<Td text={data.description} heading={false}/>
				</Tr>
				<Tr>
					<Td text={'発送可能日'} heading={true}/>
					<Td text={`${data.shippingStart}月${data.shippingStartPart}から${data.shippingEnd}月${data.shippingEndPart}`} heading={false}/>
				</Tr>
				<Tr>
					<Td text={'ステータス'} heading={true}/>
					<Td text={status} heading={false}/>
				</Tr>
				<Tr>
					<Td text={'サムネイル'} heading={true}/>
					<Td text={<img src={data.thumbnail} css={ImageStyle} alt={'thumbnail'}/>} heading={false}/>
				</Tr>
				{data.images.map((image: any, index: number) => (
					<Tr key={image.id}>
						<Td text={`画像${index+1}`} heading={true}/>
						<Td text={
							<div css={ImageWrapper} >
								<img src={image.path} css={ImageStyle} alt={`image${index + 1}`}/>
								<MainButton text={'削除'} color={'danger'} size={'sm'} type={'button'}/>
								{/*<ImageDeleteModal imageId={image.id}/>*/}
							</div>
						} heading={false}/>
					</Tr>
				))}
			</Tbody>
		</Table>
	);
};

export default DataTable;
