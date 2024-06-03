import React from 'react';
import {MainLayout} from "@/ts/appMain/components/_common/layout/Layout";
import Breadcrumb from "@/ts/appMain/components/_common/breadcrumb/Breadcrumb";
import Form from "@/ts/appMain/components/features/myItem/edit/components/Form";
import {useParams} from "react-router-dom";
import {useGetItem} from "@/ts/_api/query/ItemQuery";
import Loader from "@/ts/appMain/components/_common/loader/Loader";

const MyItemEditFeatures = () => {
    const params = useParams()
    const {data, status} = useGetItem(params.itemUuid)

    if (status === 'success'){
        console.log(data)
        return (
            <MainLayout>
                <Breadcrumb/>

                <div className="max-w-[500px] mx-auto mb-48">
                    <Form data={data}/>
                </div>
            </MainLayout>
        );
    }else{
        <Loader/>
    }

};

export default MyItemEditFeatures;
