const const1 = document.getElementById('pokemonsDiv');

function generatePokemon(id) {
    let url = "https://pokeapi.co/api/v2/pokemon/" + id;
    const apiCall = fetch(url).then(response => response.json())
    return apiCall;
}

function generatePokemons() {
    var newArray = [];
    for (i=0; i < 4; i++) {
    newArray[i] = generatePokemon(i + 1);
    }
    Promise.all(newArray).then(objects => {
        for (z = 0; z < objects.length; z++) {
            showData(objects[z], z + 1);
        }
    })
}

function showData(data, imageID) {
    let newVar = "";
    for (let i = 0; i < data.abilities.length; i++) {
        if (i==0) {
            newVar = " " + data.abilities[0].ability.name;
        } else {
            newVar = newVar + ", " + data.abilities[i].ability.name;
        }   
    }

    let newVar2 = "";
    for (let m = 0; m < data.moves.length; m++) {
        if(m==0) {
            newVar2 = " " + data.moves[0].move.name;
        } else if (m <= 1) {
            newVar2 = newVar2 + ", " + data.moves[m].move.name;
        } else {
            break;
        }
    }

    let let1 = document.createElement('div');
    let1.id = "PokId"
    let let2 = document.createElement('img');
    let2.src = "https://pokeres.bastionbot.org/images/pokemon/" + imageID + ".png";
    let let3 = document.createElement('p');
    let3.id = "namePok"
    let3.innerText = "Name:"
    let let4 = document.createElement('p');
    let4.id = "abilitiesPok"
    let4.innerText = "Abilities:"
    let let5 = document.createElement('p');
    let5.id = "movesPok"
    let5.innerText = "Moves:"
    let1.appendChild(let2);
    let1.appendChild(let3);
    let1.appendChild(let4);
    let1.appendChild(let5);
    const1.appendChild(let1);

    let3.innerText = let3.innerText + " " + data.species.name;
    let4.innerText = let4.innerText + newVar;
    let5.innerText = let5.innerText + newVar2;
}