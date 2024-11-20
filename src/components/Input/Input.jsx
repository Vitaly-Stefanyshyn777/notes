// import { forwardRef } from 'react';
// import styles from './Input.module.css';
// import cn from 'classnames';

// const Input = forwardRef(function Input({ className, isValid = true, appearance, ...props }, ref) {
//   return (
//     <input
//       {...props}
//       ref={ref}
//       className={cn(className, styles['input'], {
//         [styles['invalid']]: !isValid, // Поле підсвічується лише якщо воно невалідне
//         [styles['input-title']]: appearance === 'title',
// 		[styles['input']]: appearance == 'text'
//       })}
//     />
//   );
// });

// export default Input;



// import { forwardRef } from 'react';
// import styles from './Input.module.css';
// import cn from 'classnames';

// const Input = forwardRef(function Input({ isValid, appearence = 'text', className, ...props }, ref) {
// 	return (
// 		<input ref={ref} className={cn(className, {
// 			[styles['invalid']]: isValid,
// 			[styles['input-title']]: appearence == 'title',
// 			[styles['input']]: appearence == 'text'
// 		})} {...props}/>
// 	);
// });

// export default Input;



import { forwardRef } from 'react';
import styles from './Input.module.css';
import cn from 'classnames';

const Input = forwardRef(function Input({ isValid, appearence = 'text', className, ...props }, ref) {
	return (
		<input ref={ref} className={cn(className, {
			[styles['invalid']]: isValid,
			[styles['input-title']]: appearence == 'title',
			[styles['input']]: appearence == 'text'
		})} {...props}/>
	);
});

export default Input;

