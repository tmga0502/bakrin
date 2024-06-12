import React from 'react';
import {useLogout} from "@/ts/_api/query/AuthQuery";
import {Link} from "react-router-dom";
import {PageTitle} from "@/ts/components/ui/title/Title";
import { MyPageMenu } from './_constants';
import Button from "@/ts/components/pages/mainApp/MyPage/Top/features/Button";
import {MainAppLayout} from "@/ts/components/ui/layout";

const MyPageTop = () => {
	const logout = useLogout()
	const handleLogout = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		logout.mutate()
	}
	return (
		<MainAppLayout>
			<PageTitle en={'MY PAGE'} jp={'マイページ'}/>
			<div className="max-w-[500px] mx-auto">
				{MyPageMenu.map((menu:{name:string, link:string}, index:number) => {
					if(menu.name === 'ログアウト'){
						return (
							<form onSubmit={handleLogout} key={index}>
								<button type="submit" className={'w-full'}>
									<Button name={menu.name}/>
								</button>
							</form>
						)
					}
					return(
						<Link to={menu.link} key={index}>
							<Button name={menu.name}/>
						</Link>
					)
				})}
			</div>
		</MainAppLayout>
	);
};

export default MyPageTop;
