import React from 'react';
import Breadcrumb from "@/ts/appMain/components/_common/breadcrumb/Breadcrumb";
import {PageTitle} from "@/ts/appMain/components/_ui/title/Title";
import {MainLayout} from "@/ts/appMain/components/_common/layout/Layout";
import {IoMdArrowDropright} from "react-icons/io";
import {Link} from "react-router-dom";

const InfoData = [
    {
        'id': 1,
        'title': 'お知らせ1',
        'body': 'お知らせ1の本文お知らせ1の本文お知らせ1の本文お知らせ1の本文お知らせ1の本文お知らせ1の本文お知らせ1の本文お知らせ1の本文お知らせ1の本文'
    },
    {
        'id': 2,
        'title': 'お知らせ2',
        'body': 'お知らせ2の本文お知らせ2の本文お知らせ2の本文お知らせ2の本文お知らせ2の本文お知らせ2の本文お知らせ2の本文お知らせ2の本文お知らせ2の本文'
    },
    {
        'id': 3,
        'title': 'お知らせ3',
        'body': 'お知らせ3の本文お知らせ3の本文お知らせ3の本文お知らせ3の本文お知らせ3の本文お知らせ3の本文お知らせ3の本文お知らせ3の本文お知らせ3の本文'
    },
    {
        'id': 4,
        'title': 'お知らせ4',
        'body': 'お知らせ4の本文お知らせ4の本文お知らせ4の本文お知らせ4の本文お知らせ4の本文お知らせ4の本文お知らせ4の本文お知らせ4の本文お知らせ4の本文'
    },
]

const InfoListFeatures = () => {
    return (
        <MainLayout>
            <Breadcrumb/>
            <PageTitle en={'TOPICS'} jp={'お知らせ'}/>
            {InfoData.map(info => (
                <Link to={'/info/' + info.id} key={info.id}>
                    <div className="px-4 py-2 mb-4 border-b-2">
                        <div className="flex justify-between items-center">
                            <p>{info.title}</p>
                            <p>
                                <IoMdArrowDropright className="text-xl"/>
                            </p>
                        </div>
                    </div>
                </Link>
            ))}
        </MainLayout>
    );
};

export default InfoListFeatures;
