import store from './store'

export async function search (text) {
    const url = text;
    fetch(url)
    .then(res=>res.json())
    .then(res=> {
        let items = [...store.getState().items];
        let newPlanet = items.concat({
            name : res.pl_name,
            dens : res.pl_dens            
        });
        store.setState({
            items : newPlanet
        })
    })
}

export async function getPlanets() {
    const url = "data/earth-like-result.json";
    fetch(url)
    .then(res => {res.json()
        console.log(res)})
    .then(res => {
        res.results.map(planet =>{
            console.log(planet)
            return(search(planet));
        })
    })
}