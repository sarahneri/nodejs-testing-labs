class Service {
     async makeRequest(url) {
        return (await fetch(url)).json()
    
    
    }
 async getPlanets(url) {
    const data = await this.makeRequest(url)
    return {
         name: 'data.name',
        surface_water: 'data.surface_water',
        appearedIn: 'data.films.length'
 }
 }
}

module.exports = Service