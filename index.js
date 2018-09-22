function dwarfRollCall(dwarves) {
  return `1. ${dwarves[0]} 2. ${dwarves[1]} 3. ${dwarves[2]} `;
}

function summonCaptainPlanet(planeteerCalls){
  for(var i = 0; i <= planeteerCalls.length-1; i++) { 
    planeteerCalls[i] = planeteerCalls[i].toUpperCase() + " !";
  }
  return planeteerCalls;
}

function longPlaneteerCalls(words) {
  for(var i = 0; i <= words.length-1; i++) {
    if(words[i].length > 4) {
      return true
    }
    return false
  }
}

function findTheCheese(foods) { 
  for (var i = 0; i <= foods.length-1; i++) {
    if (foods[i] ==='cheddar') {
      return 'cheddar' 
    } else if (foods[i] === 'gouda') { 
      return 'gouda'
    } else if (foods[i] === 'camembert') {
      return 'camembert'
    }
  }
  return "no cheese!"
}
    
