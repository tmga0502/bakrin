export type PlanType = {
    map(arg0: (plan: PlanType) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode;
    id              : number,
    name            : string,  //プラン名
	displayName     : string,  //表示名
	badgeColor      : string,  //バッチ等の色
	badgeTextColor  : string,  //バッチ等の文字色
}
