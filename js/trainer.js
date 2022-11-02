window.addEventListener('load', () => {
    getPokemonTrainer()
})

async function getPokemonTrainer() {
    try {
        const userId = getLocalStorage('user').id;
        const response = await get(`mypokemons/${userId}`);
        const pokemons = await response.json();

        
          
            
          

    } catch (error) {

    }

}