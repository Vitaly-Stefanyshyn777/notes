import './App.css';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';
import JournalList from './components/JournalList/JournalList';
import Body from './layouts/Body/Body';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import { UserContextProvidev } from './context/user.context';
import { useEffect, useState } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  // Завантаження даних із localStorage один раз при першому рендерингу
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('data'));
    if (data) {
      setItems(data.map(item => ({
        ...item,
        date: new Date(item.date)
      })));
    }
  }, []);

  useEffect(() => {}, [items]);

  // Функція додавання нового елемента
  const addItem = item => {
    setItems(oldItems => [
      ...oldItems,
      {
        text: item.text,
        title: item.title,
        date: new Date(item.date),
        id: oldItems.length > 0 ? Math.max(...oldItems.map(i => i.id)) + 1 : 1,
        userId: 1 // Assuming there's a user context
      }
    ]);
  };

  return (
    <UserContextProvidev>
      <div className='app'>
        <LeftPanel>
          <Header />
          <JournalAddButton clearForm={() => setSelectedItem(null)} />
          <JournalList items={items} setItem={setSelectedItem} />
        </LeftPanel>
        <Body>
          <JournalForm onSubmit={addItem} />
        </Body>
      </div>
    </UserContextProvidev>
  );
}

export default App;

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
// import { text } from 'express';

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



	// const deleteItem = (id) => {
	// 	setItems([...items.filter(i => i.id !== id)]);
	// };

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
// 					{/* <JournalForm onSubmit={addItem} onDelete={deleteItem} data={selectedItem}/> */}
// 				</Body>
// 			</div>
// 		</UserContextProvidev>
// 	);
// }

// export default App;
