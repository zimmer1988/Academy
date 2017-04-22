import React from 'react';

import './user-item.css';

const UserItem = (props) => {
	/**
	* return {string}
	*/
	const handleName = () => {
		const { user: { name: { first, last } } } = props;
		const userNameArr = [];

		if(first) userNameArr.push(first);
		if(last) userNameArr.push(last);
		return userNameArr.join(' ');	
	}

	const { user, handleActive, userCls } = props;
	console.log(user);
	return (
		<div className={userCls()} onClick={() => handleActive()}>
			<p className="user-name">
				{
					handleName()
				}
			</p>
			<p className="user-location"></p>
		</div>
	);
}

export default UserItem;
