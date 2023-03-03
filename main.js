const parks = [
    { 
      name: "Acadia", 
      areaInSquareKm: 198.6, 
      location: { state: "Maine" } },
    {
      name: "Canyonlands",
      areaInSquareKm: 1366.2,
      location: { state: "Utah" },
    },
    {
      name: "Crater Lake",
      areaInSquareKm: 741.5,
      location: { state: "Oregon" },
    },
    {
      name: "Lake Clark",
      areaInSquareKm: 10602,
      location: { state: "Alaska" },
    },
    {
      name: "Kenai Fjords",
      areaInSquareKm: 2710,
      location: { state: "Alaska" },
    },
    {
      name: "Zion",
      areaInSquareKm: 595.9,
      location: { state: "Utah" },
    },
];

function findParkByName(parks, name) {
    return parks.find(x => x.name === name) || null
}
  
function allParksAboveCertainSize(parks, minSize) {
    return parks.every(x => x.areaInSquareKm > minSize)
}
  
function getBigParkNames(parks, minSize) {
    return parks.filter(x => x.areaInSquareKm > minSize).map(x => `${x.name}`)
}
  
function doesStateHaveOneBigPark(parks, minSize, state) {
      return parks.filter(park => park.location.state === state).some(park => park.areaInSquareKm > minSize)
}

console.log(doesStateHaveOneBigPark(parks, 800, "Alaska"))
