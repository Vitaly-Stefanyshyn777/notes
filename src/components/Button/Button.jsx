import './Button.css';
import React, { memo } from 'react';

function Button({ text, onClick}) {
	return (
        <button className='button accent' onClick={onClick}>{text}</button>
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