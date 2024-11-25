export type PlanType = {
    map(arg0: (plan: PlanType) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode;
    id               :number,
    name             :string,  //プラン名
	display_name     :string,  //表示名
	badge_color      :string,  //バッチ等の色
	badge_text_color :string,  //バッチ等の文字色
}
