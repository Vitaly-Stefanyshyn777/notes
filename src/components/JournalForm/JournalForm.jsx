// import styles from './JournalForm.module.css';
// import { useEffect, useReducer, useRef } from 'react';
// import Button from '../Button/Button';
// import cn from 'classnames';
// import { formReducer, INITIAL_STATE } from './JournalForm.state';
// import Input from '../Input/Input';

// function JournalForm({ onSubmit }) {
//   const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
//   const { isValid, isFormReadyToSubmit, values } = formState;
// const titleRef = useRef ();
// const dateRef = useRef ();
// const postRef = useRef ();

// const focuError = (isValid) => {
// switch (true) {
//   case isValid.title:
//     titleRef.current.focus();
//     break;
//     case isValid.data:
//       dateRef.current.focus();
//       break;
//       case isValid.post:
//         postRef.current.focus();
//         break;
// } 
//   };

//   // Валідація форми
//   useEffect(() => {
//     let timerId;
//     if (!isValid.date || !isValid.post || !isValid.title) {
//       focuError(isValid)
//       timerId = setTimeout(() => {
//         dispatchForm({ type: 'RESET_VALIDITY' });
//       }, 5000);
//     }

//     return () => {
//       clearTimeout(timerId);
//     };
//   }, [isValid]);

//   // Відправлення форми після перевірки
//   useEffect(() => {
//     if (isFormReadyToSubmit) {
//       onSubmit(values);
//       dispatchForm({ type: 'SUBMIT' }); // Зміна стану до відправки форми
//       dispatchForm({ type: 'CLEAR' }); // Скидання стану після успішного відправлення
//     }
//   }, [isFormReadyToSubmit, onSubmit, values]);

// const onChange = (e) => {
//   dispatchForm({ type: 'SET_VALUE', payload: { [e.target.name]: e.target.value } });
// }
//   const addJournalItem = (e) => {
//     e.preventDefault();

//     // const formData = new FormData(e.target);
//     // const formProps = Object.fromEntries(formData);
//     dispatchForm({ type: 'SUBMIT' });
//     dispatchForm({ type: 'FILL', payload: formProps });
//   };

//   return (
//     <form className={styles['journal-form']} onSubmit={addJournalItem}>
//       <div className={styles['form-row']}>
//         <Input
//           type="text"
//           onChange={onChange}
//           ref={titleRef}
//           isValid={!isValid.title}
//           name="title"
//           value={values.title}
//           appearance="title"
//           placeholder="Title"
//         />
//       </div>

//       <div className={styles['form-row']}>
//         <label htmlFor="date" className={styles['form-label']}>
//           <img src="./calendar.svg" alt="calendar icon" className={styles['calendar-icon']} />
//           <span>Дата</span>
//         </label>
//         <Input
//           type="date"
//           name="date"
//           id="date"
//           ref={dateRef}
//           isValid={!isValid.date}
//           onChange={onChange}
//           value={values.date}
//         />
//       </div>

//       <div className={styles['form-row']}>
//         <label htmlFor="tag" className={styles['form-label']}>
//           <img src="./folder.svg" alt="folder icon" className={styles['calendar-icon']} />
//           <span>Макети</span>
//         </label>
//         <Input
//           type="text"
//           value={values.tag}
//           // isValid={!isValid.tag}
//           onChange={onChange}
//           name="tag"
//           id="tag"
//           placeholder="Tag"
//           className={cn(styles['input'], {
//             [styles['invalid']]: !isValid.tag,
//           })}
//         />
//       </div>

//       <textarea
//         name="post"
//         value={values.post}
//         onChange={onChange}
//         ref={postRef}
//         cols="30"
//         rows="10"
//         placeholder="Your post"
//         isValid={!isValid.post}
//       ></textarea>

//       <Button text="Зберегти" />
//     </form>
//   );
// }

// export default JournalForm;
// ----------------------------------------------------------------------------------------
// import styles from './JournalForm.module.css';
// import { useContext, useEffect, useReducer, useRef } from 'react';
// import Button from '../Button/Button';
// import cn from 'classnames';
// import { formReducer, INITIAL_STATE } from './JournalForm.state';
// import Input from '../Input/Input';
// import { UserContext } from '../../context/user.context';

// function JournalForm({ onSubmit, data }) {
//   const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
//   const { isValid, isFormReadyToSubmit, values } = formState;
//   const titleRef = useRef ();
//   const dateRef = useRef ();
//   const postRef = useRef ();
//   const { userId } = useContext (UserContext);
//       // ----------------------------------------------------------------

//   // const [items, setItems] = useLocalStorage(`data-${userId}`);

//       // ----------------------------------------------------------------

// // -----------------мій-код--------------------------------------------------------


// const focuError = (isValid) => {
// switch (true) {
//   case isValid.title:
//       titleRef.current.focus();
//       break;
//       case isValid.data:
//       dateRef.current.focus();
//       break;
//       case isValid.post:
//       postRef.current.focus();
//       break;
// } 
//   };

//   useEffect(() => {
//     dispatchForm({ type: 'SET_VALUE', payload: { ...data} });
//   }, [data])

//   // Валідація форми
//   useEffect(() => {
//     let timerId;
//     if (!isValid.date || !isValid.post || !isValid.title) {
//       focuError(isValid)
//       timerId = setTimeout(() => {
//         dispatchForm({ type: 'RESET_VALIDITY' });
//       }, 5000);
//     }

//     return () => {
//       clearTimeout(timerId);
//     };
//   }, [isValid]);

//   // Відправлення форми після перевірки
//   useEffect(() => {
//     if (isFormReadyToSubmit) {
//       onSubmit(values);
//       dispatchForm({ type: 'SUBMIT' }); // Зміна стану до відправки форми
//       dispatchForm({ type: 'CLEAR' }); // Скидання стану після успішного відправлення
//       dispatchForm({ type: 'SET_VALUE', payload: { userId } });
//     }
//   }, [isFormReadyToSubmit, onSubmit, values, userId]);

//   useEffect(() => {
//     dispatchForm({ type: 'SET_VALUE', payload: { userId } });
//   }, [userId])

// const onChange = (e) => {
//   dispatchForm({ type: 'SET_VALUE', payload: { [e.target.name]: e.target.value } });
// }
//   const addJournalItem = (e) => {
//     e.preventDefault();

//     // ----------------------------------------------------------------

//     // const newItem = {
//     //   post: values.post,
//     //   title: values.title,
//     //   date: new Date(values.date),
//     //   id: items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1,
//     //   userId, // Додаємо прив'язку до поточного userId
//     // };

//     // setItems([...items, newItem]);

//     // // Викликаємо onSubmit (якщо потрібна додаткова обробка вище)
//     // onSubmit(newItem);

//     // ----------------------------------------------------------------

//     // const formData = new FormData(e.target);
//     // const formProps = Object.fromEntries(formData);
//     dispatchForm({ type: 'SUBMIT' });
//     dispatchForm({ type: 'FILL', payload: formProps });

//     // ----------------------------------------------------------------

//     // const onChange = (e) => {
//     //   dispatchForm({ type: 'SET_VALUE', payload: { [e.target.name]: e.target.value } });
//     // };
//       // ----------------------------------------------------------------
      
//           // ----------------------------------------------------------------

//           // onSubmit({ ...formProps, userId });

//           // ----------------------------------------------------------------

//   };


//   // ----------------------------
//   // setItems([...items, newItem]); // Зберігаємо новий елемент у LocalStorage
//   // onSubmit(newItem); // Передаємо новий
//   // -------------------------------
//   return (


//         <form className={styles['journal-form']} onSubmit={addJournalItem}>
//           {/* {userId} */}
//       <div className={styles['form-row']}>
        
//         <Input
//           type="text"
//           ppearance="title"
//           onChange={onChange}
//           ref={titleRef}
//           isValid={isValid.title}
//           name="title"
//           value={values.title}
//           appearance="title"
//           placeholder="Title"
//         />
// {data?.id && (
//   <button className={styles['delete']} type="button" onClick={deleteJournalItem}>
//     <img src="/archive.svg" alt="Кнопка удалить" />
//   </button>
// )}

// {data?.id && (
//   <button
//     className={styles['delete']}
//     type="button"
//     onClick={() => console.log('Deleted item with ID:', data.id)}
//   >
//     <img src="/archive.svg" alt="Кнопка удалить" />
//   </button>
// )}

//       </div>

//       <div className={styles['form-row']}>
//         <label htmlFor="date" className={styles['form-label']}>
//           <img src="./calendar.svg" alt="calendar icon" className={styles['calendar-icon']} />
//           <span>Дата</span>
//         </label>
//         <Input
//           type="date"
//           name="date"
//           id="date"
//           ref={dateRef}
//           isValid={isValid.date}
//           onChange={onChange}
//           value={
//             values.date && !isNaN(new Date(values.date)) // перевірка
//               ? new Date(values.date).toISOString().slice(0, 10) // якщо валідна дата
//               : '' // якщо значення відсутнє або некоректне
//           }
//         />
//       </div>

//       <div className={styles['form-row']}>
//         <label htmlFor="tag" className={styles['form-label']}>
//           <img src="./folder.svg" alt="folder icon" className={styles['calendar-icon']} />
//           <span>Макети</span>
//         </label>
//         <Input
//           type="text"
//           value={values.tag}
//           onChange={onChange}
//           name="tag"
//           id="tag"
//           placeholder="Tag"
//           className={cn(styles['input'], {
//             [styles['invalid']]: !isValid.tag,
//           })}
//         />
//       </div>

//       {/* <textarea
//         name="post"
//         value={values.post}
//         onChange={onChange}
//         ref={postRef}
//         id=""
//         cols="30"
//         rows="10"
//         isValid={isValid.title}
//         placeholder="Your post"
//         className={cn({
//           [styles['invalid']]: !isValid.post
//         })}
//       ></textarea> */}
//      	<textarea
//       ref={postRef}
//       name="post"
//       id=""
//       onChange={onChange}
//       value={values.post}
//       cols="30" rows="10"
//       className={cn(styles['input'], {
// 			[styles['invalid']]: !isValid.post
// 			})}></textarea>


//       <Button> Зберегти </Button>
//       {/* <Button text="Зберегти" /> */}
//     </form>

    

//   );
// }

// export default JournalForm;
// -----------------мій-код--------------------------------------------------------

// ----------------

// import styles from './JournalForm.module.css';
// import { useEffect, useReducer } from 'react';
// import Button from '../Button/Button';
// import cn from 'classnames';
// import { formReducer, INITIAL_STATE } from './JournalForm.state';

// // const INITIAL_STATE = {
// //   title: 'true',
// //   date: 'true',
// //   tag: 'true',
// //   post: 'true',
// // };

// function JournalForm({ onSubmit }) {
//   const [formState, dispatchForm] = useReducer (formReducer, INITIAL_STATE)
//   const { isValid } = formState
//   // const [fromValidState, setFormValidState] = useState({
//     // title: true,
//     // date: true,
//     // tag: true,
//     // post: true,
//   }
// // );

//   useEffect(() => {
//     let timerId;
//     if (!isValid.date || !isValid.post || !isValid.title) {
//       timerId = setTimeout(() => {
//         dispatchForm({ type: 'RESET_VALIDITY' });
//       // setFormValidState(INITIAL_STATE)
//       }, 500);
    
//     }
//     return () => {
//       clearTimeout(timerId);
//     };
//   }, [fromValidState]);
  
//   const [inputData, setInputData] = useState('');
//   const [state, setState] = useState({
//     age: '31'
//   });
  
//   const [state2, setState2] = useState([1, 2, 3]);

//   const inputChange = (event) => {
//     setInputData(event.target.value);
//   };

//   const addJournalItem = (e) => {
//     e.preventDefault();
    
//     const formData = new FormData(e.target);
//     const formProps = Object.fromEntries(formData);
    
//     let isFormValid = true;

//     // Validate title
//     if (!formProps.title?.trim().length) {
//       setFormValidState(prevState => ({ ...prevState, title: false }));
//       isFormValid = false;
//     } else {
//       setFormValidState(prevState => ({ ...prevState, title: true }));
//     }

//     // Validate text
//     if (!formProps.post?.trim().length) {
//       setFormValidState(prevState => ({ ...prevState, post: false }));
//       isFormValid = false;
//     } else {
//       setFormValidState(prevState => ({ ...prevState, post: true }));
//     }

//     // Validate date
//     if (!formProps.date?.trim().length) {
//       setFormValidState(prevState => ({ ...prevState, date: false }));
//       isFormValid = false;
//     } else {
//       setFormValidState(prevState => ({ ...prevState, date: true }));
//     }

//     if (!isFormValid) return;

//     onSubmit(formProps);
//     console.log(formProps);
//   };

//   return (
//     <form className={styles['journal-form']} onSubmit={addJournalItem}>
// 		<div>
// 		<input
//         type="text"
//         name="title"
//         className={cn(styles['input-title'], {
// 			[styles['invalid']]: !formState.title
// 		})}
//         placeholder="Title"
//       />
// 		</div>
// 		<div className={styles['form-row']}>
// 		<label htmlFor="date"
// 		 className={styles['form-label']}>
//     <img src="./calendar.svg" alt="calendar icon" className={styles['calendar-icon']} />
//     <span>Дата</span>
//   </label>
//   <input
//     type="date"
//     name="date"
//     id="date"
//     className={`${styles.input} ${formState.date ? '' : styles.invalid}`}
//   />
// </div>

// <div className={styles['form-row']}>
//   <label htmlFor="tag" className={styles['form-label']}>
//     <img src="./folder.svg" alt="Іконки папки" className={styles['calendar-icon']} />
//     <span>Макети</span>
//   </label>
//   <input
//         type="text"
// 		name="tag"
//         id="tag"
//         // className={styles['input']}
//         className={cn(styles['input'], {
// 			[styles['invalid']]: !fromValidState.title
// 		})}
//         placeholder="Title"
//       />
// </div>

//       {/* <div>{state.age}</div>
//       <div>{state2.length}</div> */}

//       {/* <input
//         type="text"
//         name="title"
//         className={cn(styles['input'], {
// 			[styles['invalid']]: !fromValidState.title
// 		})}
//         placeholder="Title"
//       /> */}
//       {/* <input
//         type="date"
//         name="date"
// 		id='date'
// 		className={cn(styles['date'], {
// 			[styles['invalid']]: !fromValidState.date
// 		})}
//       /> */}
//       {/* <input type="text" name="tag" placeholder="Tag" /> */}
//       <textarea
//         name="post"
// 		id=""
//         cols="30"
//         rows="10"
//         placeholder="Your post"
// 		className={cn(styles['input'], {
// 			[styles['invalid']]: !fromValidState.post
// 		})}
//       ></textarea>
      
//       <Button text="Зберегти" />
//     </form>
//   );
// // }

// export default JournalForm;

// ----------------------------------------------------------------------------------


// return (
//     <form className={styles['journal-form']} onSubmit={addJournalItem}>
// 		{state.age}
// 		{state2.length}
//       <input type="text" name="title" style={{ border: fromValidState.title ? 'undefined' : '1px solid red'}} placeholder="Title" />
//       <input type="date" name="date" style={{ border: fromValidState.date ? 'undefined' : '1px solid red'}} placeholder="Title" />
//       <input type="text" name="tag" />
//       <textarea name="text" id='' cols="30" rows="10" placeholder="Your post" style={{ border: fromValidState.title ? 'undefined' : '1px solid red'}} ></textarea>
//       <Button text="Зберегти" />
//     </form>
//   );
// }


import Button from '../Button/Button';
import { useContext, useEffect, useReducer, useRef } from 'react';
import cn from 'classnames';
import { INITIAL_STATE, formReducer } from './JournalForm.state';
import Input from '../Input/Input';
import { UserContext } from '../../context/user.context';
import styles from './JournalForm.module.css';

function JournalForm({ onSubmit, data, onDelete }) {
	const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
	const { isValid, isFormReadyToSubmit, values } = formState;
	const titleRef = useRef();
	const dateRef = useRef();
	const postRef = useRef();
	const { userId } = useContext(UserContext);

	const focusError = (isValid) => {
		switch(true) {
		case !isValid.title:
			titleRef.current.focus();
			break;
		case !isValid.date:
			dateRef.current.focus();
			break;
		case !isValid.post:
			postRef.current.focus();
			break;
		}
	};

	useEffect(() => {
		if (!data) {
			dispatchForm({ type: 'CLEAR' });
			dispatchForm({ type: 'SET_VALUE', payload: { userId }});
		}
		dispatchForm({ type: 'SET_VALUE', payload: { ...data }});
	}, [data]);

	useEffect(() => {
		let timerId;
		if (!isValid.date || !isValid.post || !isValid.title) {
			focusError(isValid);
			timerId = setTimeout(() => {
				dispatchForm({ type: 'RESET_VALIDITY' });
			}, 2000);
		}
		return () => {
			clearTimeout(timerId);
		};
	}, [isValid]);

	useEffect(() => {
		if (isFormReadyToSubmit) {
			onSubmit(values);
			dispatchForm({ type: 'CLEAR' });
			dispatchForm({ type: 'SET_VALUE', payload: { userId }});
		}
	}, [isFormReadyToSubmit, values, onSubmit, userId]);

	useEffect(() => {
		dispatchForm({ type: 'SET_VALUE', payload: { userId }});
	}, [userId]);

	const onChange = (e) => {
		dispatchForm({ type: 'SET_VALUE', payload: { [e.target.name]: e.target.value }});
	};

	const addJournalItem = (e) => {
		e.preventDefault();
		dispatchForm({ type: 'SUBMIT' });
	};

	const deleteJournalItem = () => {
		onDelete(data.id);
		dispatchForm({ type: 'CLEAR' });
		dispatchForm({ type: 'SET_VALUE', payload: { userId }});
	};

	return (
		<form className={styles['journal-form']} onSubmit={addJournalItem}>
			<div className={styles['form-row']}>
				<Input appearence="title" type='text' ref={titleRef} onChange={onChange} value={values.title} name='title' isValid={!isValid.title}/>
				{data?.id && <button className={styles['delete']} type="button" onClick={deleteJournalItem}>
					<img src="./archive.svg" alt="Кнопка видалити" />
				</button>}
			</div>
			<div className={styles['form-row']}>
				<label htmlFor="date" className={styles['form-label']}>
					<img src='./calendar.svg' alt='Іконка календаря'/>
					<span>Дата</span>
				</label>
				<Input type='date' ref={dateRef} onChange={onChange} name='date' value={values.date ? new Date(values.date).toISOString().slice(0, 10) : ''} id="date" isValid={!isValid.title}/>
			</div>
			<div className={styles['form-row']}>
				<label htmlFor="tag" className={styles['form-label']}>
					<img src='./folder.svg' alt='Іконка папки'/>
					<span>Мітки</span>
				</label>
				<Input type='text' onChange={onChange} id="tag" value={values.tag} name='tag' />
			</div>
			<textarea ref={postRef} name="post" id="" onChange={onChange} value={values.post} cols="30" rows="10" className={cn(styles['input'], {
				[styles['invalid']]: !isValid.post
			})}></textarea>
			<Button>Зберегти</Button>
		</form>
	);
}

export default JournalForm;


