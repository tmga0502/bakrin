export const BreadcrumbRoutes = [
	{path: '/', breadcrumb: 'TOP'},
	{path: '/searchItemCategory', breadcrumb: 'カテゴリー検索'},
	{path: '/searchProducer', breadcrumb: '生産者検索'},
	{path: '/searchPlan', breadcrumb: 'プラン検索'},

	{path: '/items', breadcrumb: 'アイテム一覧'},
	{path: '/items/:itemId', breadcrumb: '詳細'},
	{path: '/items/:itemId/request', breadcrumb: '申請'},
	{path: '/producers', breadcrumb: '生産者一覧'},
	{path: '/producers/:producerId', breadcrumb: '詳細'},

	{path: '/myitem', breadcrumb: 'アイテム管理'},
	{path: '/myitem/new', breadcrumb: '新規登録'},
	{path: '/myitem/:itemID', breadcrumb: '詳細'},
	{path: '/myitem/:itemID/edit', breadcrumb: '編集'},

	{path: '/receiveApplication', breadcrumb: '申請依頼'},
	{path: '/receiveApplication/:receiveId', breadcrumb: '申請確認'},

	{path: '/trade', breadcrumb: '取引一覧'},
	{path: '/trade/:tradeId', breadcrumb: '取引詳細'},

	{path: '/message', breadcrumb: 'メッセージ一覧'},
	{path: '/message/:producerUuid', breadcrumb: 'メッセージ'},

	{path: '/mypage', breadcrumb: 'マイページ'},
	{path: '/mypage/myfavorite', breadcrumb: 'お気に入り'},
	{path: '/mypage/invoice', breadcrumb: '請求書'},
	{path: '/mypage/tradeHistory', breadcrumb: '交換履歴'},
	{path: '/mypage/profile', breadcrumb: '基本情報'},
	{path: '/contact', breadcrumb: 'お問い合わせ'},
	{path: '/info', breadcrumb: 'お知らせ'},
	{path: '/info/:infoId', breadcrumb: '詳細'},
]
