
  $( ( ) => {
    showPokemons();
  });

  const url = 'https://pokeapi.co/api/v2/pokemon/';

  let BackGroundPokemon = {
    'width': '100%', 
    'maxWidth': '900px',
    'height': '300px',
    'background': 'rgb(240, 240, 240)',
    'padding': '30px'
  };

  let getPokemons = async () => {
    let pokemon = localStorage.getItem( 'pokemonName' ); 
    try {
      const response = await axios.get( `https://pokeapi.co/api/v2/pokemon/${ pokemon }` );
        if( pokemon === response.data.name || response.data.id ) {           
           return response.data;
        }
    } 
    catch( e ) {
      console.log( e );
    };
  };

  let statusPokemon = async () => {
    let pokemon = await getPokemons();
    const { id, name, height, weight, sprites, types } = pokemon;

    let dcToMeters = convertDecimeterToMeters( height );

    let hgToKg = convertHectogramToKg( weight );

    $( '#pokeName' ).html( name.toUpperCase() );
    $( '.img' ).attr( 'src', `${ sprites.other.dream_world.front_default }` ).css( BackGroundPokemon );
    $( '.id' ).html( 'PokeID : ' + `<label>  ${ id } </label>` );
    $( '.name' ).html( 'Nome : ' + `<label> ${ name } </label>` );
    $( '.types' ).html( 'Tipo : ' + `<label> ${ types[0].type.name } </label>` );
    $( '.height' ).html( 'Altura : ' + `<label> ${ dcToMeters } m </label>` );
    $( '.weight' ).html( 'Peso : ' + `<label> ${ hgToKg } kg </label>` );
  };

  let statusPointPokemon = async () => {
    let pokemon = await getPokemons();
    const { stats } = pokemon;
    let list = '';

    stats.forEach( ( item ) => {
      switch ( item !== '' ) {
        case 1, 
        item.stat.name === 'hp':          
          list = `<li>
                    ${ item.stat.name }
                    <div class="progress">
                      <div class='progress-bar progress-bar-striped progress-bar-animated bg-danger' role="progressbar" 
                          style="width: ${ item.base_stat }%" 
                          aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"> ${ item?.base_stat } 
                      </div>
                    </div>
                  </li>`;
          $( '.fightStatus' ).html( list );
        break;

        case 2, 
        item.stat.name === 'attack':
          list = `<li>
                    ${ item.stat.name }
                    <div class="progress">
                      <div class='progress-bar progress-bar-striped progress-bar-animated' role="progressbar" 
                          style="width: ${ item.base_stat }%" 
                          aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"> ${ item.base_stat } 
                      </div>
                    </div>
                  </li>`;

          $( '.fightStatus' ).append( list );
        break;

        case 3, 
        item.stat.name === 'defense':
          list = `<li>
                    ${ item.stat.name }
                    <div class="progress">
                      <div class='progress-bar progress-bar-striped progress-bar-animated bg-secondary' role="progressbar" 
                          style="width: ${ item.base_stat }%" 
                          aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"> ${ item.base_stat } 
                      </div>
                    </div>
                  </li>`;

          $( '.fightStatus' ).append( list );
        break;

        case 4, 
        item.stat.name === 'special-attack':
          list = `<li>
                    ${ item.stat.name }
                    <div class="progress">
                      <div class='progress-bar progress-bar-striped progress-bar-animated bg-success' role="progressbar" 
                          style="width: ${ item.base_stat }%" 
                          aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"> ${ item.base_stat } 
                      </div>
                    </div>
                  </li>`;

          $( '.fightStatus' ).append( list );
        break;

        case 5, 
        item.stat.name === 'special-defense':
          list = `<li>
                    ${ item.stat.name }
                    <div class="progress">
                      <div class='progress-bar progress-bar-striped progress-bar-animated bg-dark' role="progressbar" 
                          style="width: ${ item.base_stat }%" 
                          aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"> ${ item.base_stat } 
                      </div>
                    </div>
                  </li>`;

          $( '.fightStatus' ).append( list );
        break;

        case 6, 
        item.stat.name === 'speed':
            list = `<li>
                      ${ item.stat.name }
                      <div class="progress">
                        <div class='progress-bar progress-bar-striped progress-bar-animated bg-info' role="progressbar" 
                            style="width: ${ item.base_stat }%" 
                            aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"> ${ item.base_stat } 
                        </div>
                      </div>
                    </li>`;

            $( '.fightStatus' ).append( list );
          break;     
      }
    });
  };
  
  let abilitiesPokemon = async () => {
    let pokemon = await getPokemons();
    const { abilities } = pokemon;

    let abilityList = '';

    abilities.forEach( ( abilities ) => {
      abilityList += `${ abilities.ability.name } - `;              
      $( '.abilities' ).html( 'Habilidades: ' + `<label> ${ abilityList } </label>` );
    });
  };

  let convertDecimeterToMeters = ( height ) => {
    const dcToMeters = height / 10;
      return dcToMeters;
  };

  let convertHectogramToKg = ( weight ) => {
    const hgToKg = weight / 10;
      return hgToKg;
  };

  let showPokemons = async () => {
    await statusPokemon();
    await abilitiesPokemon();
    await statusPointPokemon();
    
    $( '.pokemonStatus' ).css( { 'display': 'flex' } );
  };