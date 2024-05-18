const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			vehicles: [],
			planets: [],
			favorites: []
			
		},
		actions: {
			// // Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },
			// loadSomeData: () => {
			// 	/**
			// 		fetch().then().then(data => setStore({ "foo": data.bar }))
			// 	*/
			// },
			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

			// 	//reset the global store
			// 	setStore({ demo: demo });
			// }

			getPeople: async () => {
				const response = await fetch("https://www.swapi.tech/api/people/");
				if(!response.ok) {
					throw new Error(response.status, response.statusText);
				}
				const data = await response.json();
				setStore({people: data.results});
			},
			getPeopleDetails: () => {

			},
			getVehicles: async () => {
				const response = await fetch("https://www.swapi.tech/api/vehicles/");
				if(!response.ok) {
					throw new Error(response.status, response.statusText);
				}
				const data = await response.json();
				setStore({vehicles: data.results});
			}, 
			getVehicleDetails: () => {}, 
			getPlanets: async () => {
				const response = await fetch("https://www.swapi.tech/api/planets/");
				if(!response.ok) {
					throw new Error(response.status, response.statusText);
				}
				const data = await response.json();
				setStore({planets: data.results});
			},
			getPlanetDetails: () => {},
			addFavorite: () => {},
			removeFavorite: () => {}

		}
	};
};

export default getState;
