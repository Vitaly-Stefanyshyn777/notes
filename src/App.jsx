
// import './App.css';
// import Header from './components/Header/Header';
// import JournalAddButton from './components/JournalAddButton/JournalAddButton';
// import JournalForm from './components/JournalForm/JournalForm';
// import JournalList from './components/JournalList/JournalList';
// import Body from './layouts/Body/Body';
// import LeftPanel from './layouts/LeftPanel/LeftPanel';
// import { UserContextProvider } from './context/user.context'; // Перевір назву
// import { useLocalStorage } from './hooks/use-localstorage.hook'; // Додано імпорт
// // import { useState } from 'react';

// function mapItems(items) {
//   if (!items) {
//     return [];
//   }

//   return items.map(i => ({
//     ...i,
//     date: new Date(i.date),
//   }));
// }

// function App() {
//   const [items, setItems] = useLocalStorage('data');
//   // const [selectedItem, setSelectedItem] = useState(null); // Додано визначення стану

//   // Функція додавання нового елемента
//   const addItem = item => {
//     setItems([
//       ...mapItems(items),
//       {
//         text: item.text,
//         title: item.title,
//         date: new Date(item.date),
//         id: items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1, // Виправлено oldItems на items
//         userId: 1, // Assuming there's a user context
//       },
//     ]);
//   };

//   return (
//     <UserContextProvider>
//       <div className="app">
//         <LeftPanel>
//           <Header />
//           <JournalAddButton clearForm={() => setSelectedItem(null)} />
//           <JournalList items={mapItems(items || [])} /> {/* Перевірка items */}
//         </LeftPanel>
//         <Body>
//           <JournalForm onSubmit={addItem} />
//         </Body>
//       </div>
//     </UserContextProvider>
//   );
// }

// export default App;

// ----------------------------------------------------------------

// // import { useLocalStorage } from '../../hooks/use-localstorage.hook'; // Правильний шлях до вашого хука
// import './App.css';
// import Header from './components/Header/Header';
// import JournalAddButton from './components/JournalAddButton/JournalAddButton';
// import JournalForm from './components/JournalForm/JournalForm';
// import JournalList from './components/JournalList/JournalList';
// import Body from './layouts/Body/Body';
// import LeftPanel from './layouts/LeftPanel/LeftPanel';
// import { UserContextProvidev } from './context/user.context';
// // import {} from './hooks/use-localstorage.hook';
// import { useLocalStorage } from './hooks/use-localstorage.hook';
// // import { useState } from 'react';
// // import { useEffect, useState } from 'react';

// // function mapItems (items) {
// //   if (!items)
// //     return [];
// // }
// //   return items.map(i => ({
// //     ...i,
// //     date: new Date(i.date),
// //     // id: item.id,
// //     // userId: item.userId
// //     // text: item.text,
// //     // title: item.title,
// //     // date: new Date(item.date),
// //     // id: item.id,
// //     // userId: item.userId
// //   }));

// // export const mockData = {
// //   "data-1": [
// //     {
// //       post: "Примітка 1",
// //       title: "Заголовок 1",
// //       date: "2024-11-17T12:00:00.000Z",
// //       id: 1,
// //       userId: 1,
// //     },
// //   ],
// //   "data-2": [
// //     {
// //       post: "Примітка 2",
// //       title: "Заголовок 2",
// //       date: "2024-11-17T13:00:00.000Z",
// //       id: 1,
// //       userId: 2,
// //     },
// //   ],
// // };

//   function mapItems(items) {
//     if (!items) {
//       return [];
//     }
  
//     return items.map(i => ({
//       ...i,
//       date: new Date(i.date),
//     }));
//   }

// function App() {
//   const [items, setItems] = useLocalStorage('data');
//   const [selectedItem, setSelectedItem] = useLocalStorage({})
  
  // const [selectedItem, setSelectedItem] = useState(null);

  // Завантаження даних із localStorage один раз при першому рендерингу
  // useEffect(() => {
  //   const data = JSON.parse(localStorage.getItem('data'));
  //   if (data) {
  //     setItems(data.map(item => ({
  //       ...item,
  //       date: new Date(item.date)
  //     })));
  //   }
  // }, []);

  // useEffect(() => {
  //   if (items.length) {
  //     localStorage.setItem('data', JSON.stringify(items));
  //   }
  // }, [items]);

  // ------------------------------------------------------

  // // Функція додавання нового елемента
  // const addItem = item => {
  //   setItems([
  //     if (!item.id) {

  //       ...mapItems(items),
  //       {
  //         // post: item.post,
  //         // title: item.title,
  //         ...item,
  //         date: new Date(item.date),
  //         id: items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1,
  //         userId: 1 // Assuming there's a user context
  //       }]);
  //     } else {
  //      setItems([...mapItems, (items).map(i => {
  //       if (i.id === item.id) {
  //         return {
  //           ...item,
  //           date: new Date(item.date)};
  //       }else{
  //         return {...item, date: new Date(item.date)};
  //       }
  //     } ]);
  //       }
  //     }

  //     }
      // ----------------------------------------------------------------
// -----------------мій-код--------------------------------------------------------

//       const addItem = (item) => {
//         if (!item.id) {
//           // Додавання нового елемента
//           setItems([
//             ...mapItems(items),
//             {
//               ...item,
//               date: new Date(item.date),
//               id: items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1,
//              // userId: 1  Assuming there's a user context
//             },
//           ]);
//         } else {
//           // Оновлення існуючого елемента
//           setItems([
//             ...mapItems(items).map(i => {
//               if (i.id === item.id) {
//                 return {
//                  ...item
//                 };
//               };
//               return i;
//         })]);
//       }

//       // ...mapItems(items),
//       // {
//       //   // post: item.post,
//       //   // title: item.title,
//       //   ...item,
//       //   date: new Date(item.date),
//       //   id: items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1,
//       //   userId: 1 // Assuming there's a user context
//       // }]);
  
//   };

//   return (
//     <UserContextProvidev>
//       <div className='app'>
//         <LeftPanel>
//           <Header />
//           <JournalAddButton />
//           {/* <JournalAddButton clearForm={() => setSelectedItem(null)} /> */}
//           <JournalList items={mapItems (items)} setItem={setSelectedItem} />
//         </LeftPanel>
//         <Body>
//           <JournalForm onSubmit={addItem} data={selectedItem}/>
//         </Body>
//       </div>
//     </UserContextProvidev>
//   );
// }

// export default App;

// -----------------мій-код--------------------------------------------------------

// import './App.css';
// import Header from './components/Header/Header';
// import JournalAddButton from './components/JournalAddButton/JournalAddButton';
// import JournalForm from './components/JournalForm/JournalForm';
// import JournalList from './components/JournalList/JournalList';
// import Body from './layouts/Body/Body';
// import LeftPanel from './layouts/LeftPanel/LeftPanel';
// import { useLocalStorage } from './hooks/use-localstorage.hook';
// import { UserContextProvidev } from './context/user.context';
// import { useEffect, useState } from 'react';
// // import { text } from 'express';

// function mapItems(items) {
// 	if (!items) {
// 		return [];
// 	}
// 	return items.map(i => ({
// 		...i,
// 		date: new Date(i.date)
// 	}));
// }

// function App() {
// 	const [items, setItems] = useLocalStorage('data');
// 	const [selectedItem, setSelectedItem] = useState(null);
// 	console.log('App');

// 	const addItem = item => {
// 		if (!item.id) {
// 			setItems([...mapItems(items), {
// 				...item,
// 				date: new Date(item.date),
// 				id: items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1
// 			}]);
// 		} else {
// 			setItems([...mapItems(items).map(i => {
// 				if (i.id === item.id) {
// 					return {
// 						...item
// 					};
// 				}
// 				return i;
// 			})]);
// 		}
// 	};



// 	const deleteItem = (id) => {
// 		setItems([...items.filter(i => i.id !== id)]);
// 	};

// 	return (
// 		<UserContextProvidev>
// 			<div className='app'>
// 				<LeftPanel>
// 					<Header/>
// 					<JournalAddButton clearForm={() => setSelectedItem(null)}/>
// 					<JournalList items={mapItems(items)} setItem={setSelectedItem} />
// 				</LeftPanel>
// 				<Body>
// 					<JournalForm/>
// 					<JournalForm onSubmit={addItem} onDelete={deleteItem} data={selectedItem}/>
// 				</Body>
// 			</div>
// 		</UserContextProvidev>
// 	);
// }

// export default App;

// ----------------------------------------------------------------



import './App.css';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';
import JournalList from './components/JournalList/JournalList';
import Body from './layouts/Body/Body';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import { useLocalStorage } from './hooks/use-localstorage.hook';
import { UserContextProvidev } from './context/user.context';
import { useState } from 'react';

function mapItems(items) {
	if (!items) {
		return [];
	}
	return items.map(i => ({
		...i,
		date: new Date(i.date)
	}));
}

function App() {
	const [items, setItems] = useLocalStorage('data');
	const [selectedItem, setSelectedItem] = useState(null);

	const addItem = item => {
		if (!item.id) {
			setItems([...mapItems(items), {
				...item,
				date: new Date(item.date),
				id: items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1
			}]);
		} else {
			setItems(mapItems(items).map(i => i.id === item.id ? { ...item } : i));
		}
	};

	const deleteItem = (id) => {
		setItems(mapItems(items.filter(i => i.id !== id)));
	};

	return (
		<UserContextProvidev>
			<div className='app'>
				<LeftPanel>
					<Header />
					<JournalAddButton clearForm={() => setSelectedItem(null)} />
					<JournalList items={mapItems(items)} setItem={setSelectedItem} />
				</LeftPanel>
				<Body>
					<JournalForm onSubmit={addItem} onDelete={deleteItem} data={selectedItem || {}} />
				</Body>
			</div>
		</UserContextProvidev>
	);
}

export default App;
