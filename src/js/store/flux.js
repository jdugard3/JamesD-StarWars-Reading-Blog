const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      people: [],
      personDetails: {
        description: "",
        properties: {},
      },
      vehicles: [],
      vehicleDetails: {
        description: "",
        properties: {},
      },
      planets: [],
      planetDetails: {
        description: "",
        properties: {},
      },
      favorites: [],
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
        if (!response.ok) {
          throw new Error(response.status, response.statusText);
        }
        const data = await response.json();
        setStore({ people: data.results });
      },
      getPersonDetails: async (id) => {
        setStore({ personDetails: null });
        const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
        if (!response.ok) {
          throw new Error(response.status, response.statusText);
        }
        const data = await response.json();

        const personDetails = {
          description: data.result.description,
          properties: { ...data.result.properties },
        };
        setStore({ personDetails: personDetails });
      },

      getVehicles: async () => {
        const response = await fetch("https://www.swapi.tech/api/vehicles/");
        if (!response.ok) {
          throw new Error(response.status, response.statusText);
        }
        const data = await response.json();
        setStore({ vehicles: data.results });
      },
      getVehicleDetails: async (id) => {
        const response = await fetch(`https://www.swapi.tech/api/vehicles/${id}`);
        if (!response.ok) {
          throw new Error(response.status, response.statusText);
        }
        const data = await response.json();

        const vehicleDetails = {
          description: data.result.description,
          properties: { ...data.result.properties },
        };
        setStore({ vehicleDetails: vehicleDetails });
      },

      getPlanets: async () => {
        const response = await fetch("https://www.swapi.tech/api/planets/");
        if (!response.ok) {
          throw new Error(response.status, response.statusText);
        }
        const data = await response.json();
        setStore({ planets: data.results });
      },
      getPlanetDetails: async (id) => {
        const response = await fetch(`https://www.swapi.tech/api/planets/${id}`);
        if (!response.ok) {
          throw new Error(response.status, response.statusText);
        }
        const data = await response.json();
        const planetDetails = {
          description: data.result.description,
          properties: { ...data.result.properties },
        };
        setStore({ planetDetails: planetDetails });
      },


      addFavorite: (item) => {
        console.log(item)
        setStore({ favorites: [...getStore().favorites, item] })
      },
      removeFavorite: (item) => {
        const store = getStore()
        console.log("Before removing fav", store.favorites)
        const newFavorites = store.favorites.filter((x) => x != item)
        console.log("New favorites", newFavorites)
        setStore({
          favorites: newFavorites
        })
        console.log("After changing store favorites", store.favorites)

      },
    },
  };
};

export default getState;
