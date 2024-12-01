import React from 'react';
import MainTitle from "@adminLayouts/title/MainTitle/MainTitle";
import MainCard from "@adminLayouts/Card/MainCard/MainCard";
import ContainerSm from "@adminLayouts/container/ContainerSm/ContainerSm";
import {Link} from "react-router-dom";
import {useRecoilValue} from "recoil";
import {IsAuthDataStates} from "@/react/app/adminApp/states/AuthStates";
import {useAdminLogout} from "@/react/api/query/AuthAdminQuery";

const SettingTopContents = () => {
	const authUserData = useRecoilValue(IsAuthDataStates)
	const logout = useAdminLogout()

	const handleLogout = () => {
		logout.mutate()
	}

	return (
		<div>
			<MainTitle title={'設定'}/>

			<ContainerSm>
				{authUserData.role === 0 && (
					<>
						<Link to={'/admin/setting/userList'}>
							<div className={'text-bakDark mb-6 hover:cursor-pointer hoveropacity-80'}>
								<MainCard>
									ユーザー一覧
								</MainCard>
							</div>
						</Link>
						<Link to={'/admin/setting/newUser'}>
							<div className={'text-bakDark mb-6 hover:cursor-pointer hoveropacity-80'}>
								<MainCard>
									ユーザー登録
								</MainCard>
							</div>
						</Link>
					</>
				)}
				<div className={'text-bakDark mb-6 hover:cursor-pointer hover:opacity-80'} onClick={handleLogout}>
					<MainCard>
						ログアウト
					</MainCard>
				</div>
			</ContainerSm>
		</div>
	);
};

export default SettingTopContents;
