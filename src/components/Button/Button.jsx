import './Button.css';
import React, { memo } from 'react';

function Button({ children, onClick}) {
	return (
        <button className='button accent' onClick={onClick}>{children}</button>
    );
}
export default memo(Button);

// import './Button.css';
// import { memo } from 'react';

// function Button({ children, onClick }) {
// 	console.log('Button');
// 	return (
// 		<button className='button accent' onClick={onClick}>{children}</button>
// 	);
// }

// export default memo(Button);