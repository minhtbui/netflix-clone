import React from 'react';

function RowButton({ onClick, type, position }) {
	return (
		<div className='row-buttons'>
			<span
				className={`row-button row-button-${position} fas fa-angle-left`}></span>
			<span
				className={`row-button row-button-${position} fas fa-angle-right`}></span>
		</div>
	);
}

export default RowButton;
