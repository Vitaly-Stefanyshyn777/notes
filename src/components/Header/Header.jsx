// // import SelectUser from '../SelectUser/SelectUser';
// // import Logo from '../Logo/Logo';

// import './Header.module.css'



// // const logos = ['/logo.svg', '/vite.svg'];

// function Header() {

// 	return (
// 		<img src"/logo.svg" alt="logo" />
// 		// <>
// 		// 	<Logo image={logos[0]} />
// 		// 	<SelectUser />
// 		// </>
// 	);
// }

// export default Header;



import './Header.module.css';

function Header() {
	return (
		<img className="Logo" src="./logo.svg" alt="logo" />
	);
}

export default Header;