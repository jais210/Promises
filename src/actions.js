import store from './store'

export async function search (text) {
    const url = text;
    fetch(url)
    .then(result=>result.json())
    .then(result=> {
        let items = [...store.getState().items];
        let newPlanet = items.concat({
            name : res.pl_name,
            density : res.pl_dens            
        });
        store.setState({
            items : newPlanet
        })
    })
}

export async function getPlanets() {
    const url = "data/earth-like-result.json";
    fetch(url)
    .then(res=> res.json())
    .then(res => {
        res.result.map(planet =>{
            return(search(planet));
        })
    })
}