import React from 'react';

const RowButton = ({ onClick, direction }) => {
	return (
		<div className={`row-button row-button--${direction}`} onClick={onClick}>
			{direction === 'right' ? (
				<span className={` fas fa-angle-right`}></span>
			) : (
				<span className={` fas fa-angle-left`}></span>
			)}
		</div>
	);
};

export default RowButton;
