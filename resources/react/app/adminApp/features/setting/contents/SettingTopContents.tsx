import React from 'react';
import MainTitle from "@adminLayouts/title/MainTitle/MainTitle";
import MainCard from "@adminLayouts/Card/MainCard/MainCard";
import ContainerSm from "@adminLayouts/container/ContainerSm/ContainerSm";
import {Link} from "react-router-dom";
import {LinkBoxStyle} from "@adminFeatures/setting/styles/style";
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
				{authUserData.authority === 0 && (
					<>
						<Link to={'/admin/setting/userList'}>
							<div css={LinkBoxStyle}>
								<MainCard>
									ユーザー一覧
								</MainCard>
							</div>
						</Link>
						<Link to={'/admin/setting/newUser'}>
							<div css={LinkBoxStyle}>
								<MainCard>
									ユーザー登録
								</MainCard>
							</div>
						</Link>
					</>
				)}
				<div css={LinkBoxStyle} onClick={handleLogout}>
					<MainCard>
						ログアウト
					</MainCard>
				</div>
			</ContainerSm>
		</div>
	);
};

export default SettingTopContents;
