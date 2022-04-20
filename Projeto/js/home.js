
  const url = 'https://pokeapi.co/api/v2/pokemon/';

  let bgs = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#D5D5D4',
    fairy: '#FCEAFF',
    poison: '#98D7',
    bug: '#F8D5A3',
    dragon: '#97B3E6',
    psychic: '#EAEDA1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    rock: '#e9c7a5',
    normal: 'whitesmoke',
  };

  let startAtId = 1;
  let limitedAtId = 8;

  let toastNotification = () => {
    let toast = $( '#toastsButton' ).css( { margin: 'auto', display: 'block' } );

      toast.show();
    setTimeout( ( ) => {
      toast.hide(); 
    }, 2500 );
  };

  let searchPokemonByName = async () => {
    let inputValue = $( '#pokemon' ).val();
    let toLowerCaseString = inputValue.toLowerCase();

    localStorage.setItem( 'pokemonName' , toLowerCaseString );

    let pokemonName = localStorage.getItem( 'pokemonName' );

    try { 
      const response = await axios.get( `${ url + pokemonName }` );
        if( pokemonName === response.data.name || response.data.id ) {
          window.location.href = 'index.html';
          cleanInput = $( '#pokemon' ).val( '' );
          return response.data;
        }; toastNotification();
    } 
    catch( e ) {
          console.log( e );
          toastNotification();
    };
  };

  let getStatusByPokemonId = ( id ) => {
    let pokemonId = id;
    saveId = localStorage.setItem( 'pokemonName', pokemonId );
    window.location.href = 'index.html';
  };
  
  let getPokemon = async ( id ) => {
    try {
      const response = await axios.get( `https://pokeapi.co/api/v2/pokemon/${ id }` );
        await showPokemons( response.data );
    } catch( e ) {
        console.log( e );
    };
  };

  let getMorePokemons = async ( startAtId, limitedAtId ) => {
    for ( let a = startAtId; a <= startAtId + limitedAtId; a ++ ) {
          await getPokemon( a );
    };
  };  getMorePokemons( startAtId, limitedAtId );

  let loadMorePokemons = async () => {
    startAtId += 9;
    await getMorePokemons( startAtId, limitedAtId );
  };

  let showPokemons = async ( pokemons ) => {
    let pokemonList = '';

    switch ( pokemons.types[0].type.name !== '' ) {
      case 1, 
      pokemons.types[0].type.name == 'fire':
            pokemonList = `<button
                              onclick="getStatusByPokemonId(${ pokemons.id })"                                                                        
                              class="pokemonCard" style="background: ${bgs.fire}">
                              <img src="${ pokemons.sprites.other.dream_world.front_default }">                           
                              <p> ${ pokemons.name } </p>
                              <span> PokeID: ${ pokemons.id } </span>
                            </button>
                          `
  
              $( '.pokemonList' ).append( pokemonList );
      break;
  
      case 2, 
      pokemons.types[0].type.name == 'water':
            pokemonList = `<button 
                              onclick="getStatusByPokemonId(${ pokemons.id })"
                              class="pokemonCard" style="background: ${bgs.water}" >
                              <img src='${ pokemons.sprites.other.dream_world.front_default }' >
                              <p> ${ pokemons.name } </p>
                              <span> PokeID: ${ pokemons.id } </span>
                            </button>
                          `
  
          $( '.pokemonList' ).append( pokemonList );
      break;
  
      case 3, 
      pokemons.types[0].type.name == 'grass':
            pokemonList = `<button 
                              onclick="getStatusByPokemonId(${ pokemons.id })"               
                              class="pokemonCard" style="background: ${bgs.grass}" >
                              <img src='${ pokemons.sprites.other.dream_world.front_default }' >
                              <p> ${ pokemons.name } </p>
                              <span> PokeID: ${ pokemons.id } </span>
                            </button>
                          `
  
          $( '.pokemonList' ).append( pokemonList );
      break;
  
      case 4, 
      pokemons.types[0].type.name == 'electric':
            pokemonList = `<button 
                              onclick="getStatusByPokemonId(${ pokemons.id })"                  
                              class="pokemonCard" style="background: ${bgs.electric}" >
                              <img src='${ pokemons.sprites.other.dream_world.front_default }' >
                              <p> ${ pokemons.name } </p>
                              <span> PokeID: ${ pokemons.id } </span>
                            </button>
                          `
  
          $( '.pokemonList' ).append( pokemonList );
      break;
  
      case 5, 
      pokemons.types[0].type.name == 'ground':
            pokemonList = `<button 
                              onclick="getStatusByPokemonId(${ pokemons.id })"  
                              class="pokemonCard" style="background: ${bgs.ground}" >
                              <img src='${ pokemons.sprites.other.dream_world.front_default }' >
                              <p> ${ pokemons.name } </p>
                              <span> PokeID: ${ pokemons.id } </span>
                            </butt>
                          `
  
          $( '.pokemonList' ).append( pokemonList );
      break;
  
      case 6, 
      pokemons.types[0].type.name == 'fairy':
            pokemonList = `<button 
                              onclick="getStatusByPokemonId(${ pokemons.id })"
                              class="pokemonCard" style="background: ${bgs.fairy}" >
                              <img src='${ pokemons.sprites.other.dream_world.front_default }' >
                              <p> ${ pokemons.name } </p>
                              <span> PokeID: ${ pokemons.id } </span>
                            </button>
                          `
  
          $( '.pokemonList' ).append( pokemonList );
      break;
  
      case 7, 
      pokemons.types[0].type.name == 'poison':
            pokemonList = `<button 
                              onclick="getStatusByPokemonId(${ pokemons.id })"
                              class="pokemonCard" style="background: ${bgs.poison}" >
                              <img src='${ pokemons.sprites.other.dream_world.front_default }' >
                              <p> ${ pokemons.name } </p>
                              <span> PokeID: ${ pokemons.id } </span>
                            </button>
                          `
  
          $( '.pokemonList' ).append( pokemonList );
      break;
  
      case 8, 
      pokemons.types[0].type.name == 'bug':
            pokemonList = `<button 
                              onclick="getStatusByPokemonId(${ pokemons.id })"
                              class="pokemonCard" style="background: ${bgs.bug}" >
                              <img src='${ pokemons.sprites.other.dream_world.front_default }' >
                              <p> ${ pokemons.name } </p>
                              <span> PokeID: ${ pokemons.id } </span>
                            </button>
                          `
  
          $( '.pokemonList' ).append( pokemonList );
      break;
  
      case 9, 
      pokemons.types[0].type.name == 'dragon':
        pokemonList = `<button 
                          onclick="getStatusByPokemonId(${ pokemons.id })"
                          class="pokemonCard" style="background: ${bgs.dragon}" >
                          <img src='${ pokemons.sprites.other.dream_world.front_default }' >
                          <p> ${ pokemons.name } </p>
                          <span> PokeID: ${ pokemons.id } </span>
                        </button>
                      `
  
      $( '.pokemonList' ).append( pokemonList );
      break;
  
      case 10, 
      pokemons.types[0].type.name == 'psychic':
        pokemonList = `<button 
                          onclick="getStatusByPokemonId(${ pokemons.id })"
                          class="pokemonCard" style="background: ${bgs.psychic}" >
                          <img src='${ pokemons.sprites.other.dream_world.front_default }' >
                          <p> ${ pokemons.name } </p>
                          <span> PokeID: ${ pokemons.id } </span>
                        </butt>
                      `
  
      $( '.pokemonList' ).append( pokemonList );
      break;
  
      case 11, 
      pokemons.types[0].type.name == 'flying':
        pokemonList = `<button 
                          onclick="getStatusByPokemonId(${ pokemons.id })"
                          class="pokemonCard" style="background: ${bgs.flying}" >
                          <img src='${ pokemons.sprites.other.dream_world.front_default }' >
                          <p> ${ pokemons.name } </p>
                          <span> PokeID: ${ pokemons.id } </span>
                        </butt>
                      `
  
      $( '.pokemonList' ).append( pokemonList );
      break;
  
      case 12, 
      pokemons.types[0].type.name == 'fighting':
        pokemonList = `<button 
                          onclick="getStatusByPokemonId(${ pokemons.id })"
                          class="pokemonCard" style="background: ${bgs.fighting}" >
                          <img src='${ pokemons.sprites.other.dream_world.front_default }' >
                          <p> ${ pokemons.name } </p>
                          <span> PokeID: ${ pokemons.id } </span>
                        </button>
                      `
  
      $( '.pokemonList' ).append( pokemonList );
      break;
  
      case 13, 
      pokemons.types[0].type.name == 'rock':
        pokemonList = `<button 
                          onclick="getStatusByPokemonId(${ pokemons.id })"
                          class="pokemonCard" style="background: ${bgs.rock}" >
                          <img src='${ pokemons.sprites.other.dream_world.front_default }' >
                          <p> ${ pokemons.name } </p>
                          <span> PokeID: ${ pokemons.id } </span>
                        </butt>
                      `
  
      $( '.pokemonList' ).append( pokemonList );
      break;
   
      default: 
        pokemonList = `<button
                          onclick="getStatusByPokemonId(${ pokemons.id })"
                          class="pokemonCard" style="background: ${bgs.normal}" >
                          <img src='${ pokemons.sprites.other.dream_world.front_default }' >
                          <p> ${ pokemons.name } </p>
                          <span> PokeID: ${ pokemons.id } </span>
                        </button>
                      `
  
      $( '.pokemonList' ).append( pokemonList );
    };
  };