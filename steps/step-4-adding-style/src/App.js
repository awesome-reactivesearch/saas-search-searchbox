import { ReactiveBase, SearchBox } from '@appbaseio/reactivesearch';
import './App.css';

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
		>
			<SearchBox
				title='SearchBox'
				defaultValue=''
				dataField={['original_title', 'original_title.search']}
				componentId='BookSensor'
				highlight
				URLParams
				enablePopularSuggestions
				popularSuggestionsConfig={{
					size: 3,
					minChars: 2,
					index: 'good-books-ds',
				}}
				enableRecentSuggestions
				recentSuggestionsConfig={{
					size: 3,
					index: 'good-books-ds',
					minChars: 4,
				}}
				size={14}
				enablePredictiveSuggestions
				index='good-books-ds'
				showClear
				renderNoSuggestion='No suggestions found.'
				innerClass={{
					'suggestion-item': 'test-suggestion',
					'active-suggestion-item': 'active-test-suggestion',
					'section-header': 'section-header',
				}}
			/>
		</ReactiveBase>
	);
}

export default App;
