import React from 'react';
import {ListBoxType} from "./ListBox.type";
import {Box, ItemWrapper} from './ListBox.styles';
import {IoMdArrowDropright} from "react-icons/io";
import {Link} from "react-router-dom";

const ListBox: React.FC<ListBoxType> = ({data}) => {
	return (
		<Link to={'/info/' + data.id} key={data.id}>
			<div css={Box}>
				<div css={ItemWrapper}>
					<p>{data.title}</p>
					<p>
						<IoMdArrowDropright className="text-xl"/>
					</p>
				</div>
			</div>
		</Link>
	);
};

export default ListBox;
