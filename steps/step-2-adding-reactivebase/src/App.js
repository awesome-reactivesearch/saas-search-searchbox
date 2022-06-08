import './App.css';
import { ReactiveBase } from '@appbaseio/reactivesearch';

function App() {
	return (
		<ReactiveBase
			app='good-books-ds'
			url='https://6a0ae3a3a8d4:6a3f508d-169b-4ed7-9680-20658120930f@appbase-demo-ansible-abxiydt-arc.searchbase.io'
			enableAppbase
			appbaseConfig={{
				recordAnalytics: true,
				userId: 'jon',
			}}
			themePreset='light'
		></ReactiveBase>
	);
}

export default App;
