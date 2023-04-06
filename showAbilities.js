let imageChamp = document.querySelectorAll('.heroImage')
// let button = document.getElementById('btn')

// console.log(champ)
// console.dir(champ)

let champions = [{
    name: 'Aatrox',
    role: 'Fighter',
    description: 'The Darkin Blade'
},  {
    name: 'Leblanc',
    role: 'Mage',
    description: 'The Deceiver'
},  {
    name: 'Riven',
    role: 'Fighter',
    description: 'The Exile'
},  {
    name: 'Akali',
    role: 'Assassin',
    description: 'The Rogue Assassin'
},  {
    name:'Gangplank',
    role:'Fighter',
    description:'The Saltwater Scourge'
}]

// imageChamp = Array.from(imageChamp)

let arr = [...imageChamp];

// arr[0] = champions[0]
// arr[1] = champions[1]
// arr[2] = champions[2]
// arr[3] = champions[3]
// arr[4] = champions[4]

imageChamp.forEach((champ) => {
    champ.addEventListener('click', () =>{
        
    })
})

console.log(check)
