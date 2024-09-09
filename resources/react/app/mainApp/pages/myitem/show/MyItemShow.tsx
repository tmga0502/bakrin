import {MainAppLayout} from "@/react/app/mainApp/features/layout";
import {PageTitle} from "@/react/app/mainApp/components/title";
import {Link, useParams} from "react-router-dom";
import {useGetItem} from "@/react/api/query/ItemQuery";
import Loader from "@/react/app/mainApp/features/loader/Loader";
import {ShowTd} from "@/react/app/mainApp/components/table";
import {MainButton} from "@/react/app/mainApp/components/button";
import {AddImageModal, DataDeleteModal, ImageDeleteModal} from "@/react/app/mainApp/pages/myitem/show/features";

const MyItemShowPage = () => {
	const params = useParams()
	const {data} = useGetItem(params.itemUuid)
	if(data === undefined) return <Loader/>

	const status = data.status === 0 ? '公開' : '非公開';

	return (
	  <MainAppLayout>
		  <PageTitle en={'MY ITEM SHOW'} jp={'アイテム詳細'}/>
		  <div className="max-w-[500px] mx-auto">
			  <table className={'w-full'}>
				  <tbody>
				  <ShowTd title={'カテゴリー'} data={data.category.name}/>
				  <ShowTd title={'アイテム名'} data={data.name}/>
				  <ShowTd title={'数量'} data={data.count + data.unit.name}/>
				  <ShowTd title={'目安数量'} data={data.guideCount + data.guide_unit.name}/>
				  <ShowTd title={'プラン'} data={data.plan.name}/>
				  <ShowTd title={'アイテム説明'} data={data.description}/>
				  <ShowTd title={'発送可能日'} data={`${data.shippingStart}月${data.shippingStartPart}から${data.shippingEnd}月${data.shippingEndPart}`}/>
				  <ShowTd title={'ステータス'} data={status}/>
				  <ShowTd title={'サムネイル'} data={<img src={data.thumbnail} className={'w-1/2'} alt={'thumbnail'}/> }/>
				  {data.images.map((image: any, index: number) => (
					  <ShowTd title={`画像${index+1}`} key={image.id}  data={
						  <div className={'flex items-center gap-4'}>
							  <img src={image.path} className={'w-1/2'} alt={`image${index+1}`}/>
							  <ImageDeleteModal imageId={image.id}/>
						  </div>
					  }　/>
				  ))}
				  </tbody>
			  </table>
			  <div className={'md:flex md:items-center text-center gap-6 mt-6'}>
				  <AddImageModal dateId={data.id}/>
				  <Link to={'edit'} className={'block w-full mb-6'}>
					  <MainButton value={'編集'} width={'full'} color={'success'} type={'button'}/>
				  </Link>
				  <DataDeleteModal dateId={data.id}/>
			  </div>
		  </div>
	  </MainAppLayout>
	);
};

export default MyItemShowPage;
