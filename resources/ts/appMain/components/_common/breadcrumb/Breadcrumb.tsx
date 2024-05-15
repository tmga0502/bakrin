import React from 'react';
import {Link} from "react-router-dom";
import useBreadcrumbs from 'use-react-router-breadcrumbs'

// 別ファイルに書き出すとエラーになるのでここに記載すること
const routes = [
    {path: '/', breadcrumb: 'TOP'},
    {path: '/items', breadcrumb: 'アイテム一覧'},
    {path: '/items/:itemId', breadcrumb: '詳細'},
    {path: '/items/:itemId/request', breadcrumb: '申請'},
    {path: '/producers', breadcrumb: '生産者一覧'},
    {path: '/producers/:producerId', breadcrumb: '詳細'},

    {path: '/myitem', breadcrumb: 'アイテム管理'},
    {path: '/myitem/new', breadcrumb: '新規登録'},
    {path: '/myitem/show/:itemID', breadcrumb: '詳細'},
    {path: '/myitem/edit/:itemID', breadcrumb: '編集'},

    {path: '/receiveApplication', breadcrumb: '申請依頼'},
    {path: '/receiveApplication/:receiveId', breadcrumb: '申請確認'},

    {path: '/trade', breadcrumb: '取引一覧'},
    {path: '/trade/:tradeId', breadcrumb: '取引詳細'},

    {path: '/mypage', breadcrumb: 'マイページ'},
    {path: '/mypage/myfavorite', breadcrumb: 'お気に入り'},
    {path: '/mypage/invoice', breadcrumb: '請求書'},
    {path: '/mypage/tradeHistory', breadcrumb: '交換履歴'},
    {path: '/mypage/profile', breadcrumb: '基本情報'},
    {path: '/contact', breadcrumb: 'お問い合わせ'},
    {path: '/info', breadcrumb: 'お知らせ'},
    {path: '/info/:infoId', breadcrumb: '詳細'},
    // {path: '/engineers/:engineerID', breadcrumb: 'エンジニア詳細'},
]

const Breadcrumb = () => {
    const breadcrumbs = useBreadcrumbs(routes)

    return (
        <div className="w-full h-10 rounded bg-lightYellow py-2 px-4 mb-6">
            {breadcrumbs.map(({match, breadcrumb, location}, index) => {
                // 最後のパスはリンクしないようにする
                const pathNames = location.pathname.split('/').filter((x) => x)
                const last = index === pathNames.length
                return last ? (
                    <label key={index}>
                        <span key={match.pathname}>{breadcrumb}</span>
                    </label>
                ) : (
                    <Link key={index} to={match.pathname} className="hover:opacity-60">
                        {breadcrumb}
                        <span className="text-gray-500 mx-2"><i className="fas fa-chevron-right"></i></span>
                    </Link>
                )
            })}
        </div>
    );
};

export default Breadcrumb;
