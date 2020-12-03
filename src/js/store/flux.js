const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: []
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
			}
		}
	};
};

export default getState;
