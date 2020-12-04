const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			path: ""
		},
		actions: {
			loadingData: str => {
				fetch("https://swapi.dev/api/" + str + "/")
					.then(res => res.json())
					.then(data =>
						setStore({
							[str]: data.results
						})
					)
					.catch(error => console.log(error));
			},
			addUrl: str => {
				const state = getStore();
				setStore({ ...state, path: str });
			},
			getDetail: url => {
				fetch(url)
					.then(res => res.json())
					.then(data => console.log(data))
					.catch(error => console.log(error));
			}
		}
	};
};

export default getState;
