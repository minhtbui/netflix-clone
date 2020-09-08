import React from 'react';

const RowButton = ({ onClick, direction }) => {
	return (
		<div className={`row-button row-button--${direction}`}>
			{direction === 'right' ? (
				<span className={` fas fa-angle-right`} onClick={onClick}></span>
			) : (
				<span className={` fas fa-angle-left`} onClick={onClick}></span>
			)}
		</div>
	);
};

export default RowButton;
