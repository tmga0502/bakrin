import React from 'react';
import {PageTitle} from "@/ts/appMain/components/_ui/title/Title";
import Breadcrumb from "@/ts/appMain/components/_common/breadcrumb/Breadcrumb";
import {MainLayout} from "@/ts/appMain/components/_common/layout/Layout";
import List from "./components/List";
import {useLogout} from "@/ts/_api/query/AuthQuery";
import {useIsLoading} from "@/ts/hooks/IsLoadingContext";
import {FaRegArrowAltCircleRight} from "react-icons/fa";

const mypageMenu = [
    {name:'お気に入り', link:'myfavorite'},
    {name:'欲しいもの', link:''},
    {name:'交換履歴', link:'tradeHistory'},
    {name:'請求書', link:'invoice'},
    {name:'基本情報', link:'profile'},
    {name:'ログアウト', link:'/'},
]

const MyPageFeatures = () => {
    const logout = useLogout()
    const { setIsLoading } = useIsLoading()
    const handleLogout = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true)
        logout.mutate()
    }
    return (
        <MainLayout>
            <PageTitle en={'MY PAGE'} jp={'マイページ'}/>
            <Breadcrumb/>
            <div className="max-w-[500px] mx-auto">
                {mypageMenu.map((menu:{name:string, link:string}, index:number) => {
                    if(menu.name === 'ログアウト'){
                        return (
                            <form onSubmit={handleLogout} key={index}>
                                <button className={'block w-full'}>
                                    <div className="w-full border rounded-md bg-white p-4 flex justify-between items-center mb-4 shadow-md hover:opacity-80">
                                        <p className="m-0">{menu.name}</p>
                                        <FaRegArrowAltCircleRight className="text-xl"/>
                                    </div>
                                </button>
                            </form>
                        )
                    }
                    return(
                        <List name={menu.name} link={menu.link} key={index}/>
                    )
                })}
            </div>
        </MainLayout>
    );
};

export default MyPageFeatures;
