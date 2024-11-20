import SelectUser from '../SelectUser/SelectUser';
import Logo from '../Logo/Logo';

import './Header.module.css'



const logos = ['./logo.svg', '/vite.svg'];

function Header() {

	return (
		// <img src"/logo.svg" alt="logo" />
		<>
			<Logo image={logos[0]} />
			<SelectUser />
		</>
	);
}

export default Header;

// ----------------------------------------------------------------

// import './Header.module.css';

// const changeUser = (e) => {
// 	console.log('Change user:', e.target.value);
//     // setUserId(Number(e.target.value));
//     // localStorage.setItem('userId', e.target.value);
// }

// import { useState } from 'react';
// import Button from '../Button/Button';
// import SelectUser from '../SelectUser/SelectUser';
// import './Header.module.css';
// import Logo from '../Logo/Logo';

// const logos = ['./logo.svg', './vite.svg'];

// function Header({}) {
// 	const [LogoIndex, setLogoIndex] = useState(0);

// 	const togglelogo = () => {
// 		setLogoIndex((state) => Number(!state));
//     };
	
// 	return (
// 		<>
// 		<Logo image={logos[LogoIndex]}/>
// 		{/* <img className="Logo" src={logos[LogoIndex]} alt="logo" /> */}
//        <SelectUser />
// 	   {/* <Button onClick={togglelogo}> Змінити лого</Button> */}
// 		</>
// 	);
// }

// export default Header;