// let imageChamp = document.querySelector('.heroes')
let champList = document.querySelector('.champions')
let champAblts = document.querySelector('.champAbilities')
let textSpan = document.getElementById('champ')
let role = document.getElementById('LoL')

// let button = document.getElementById('btn')


let champions = [{
    name: 'Aatrox',
    role: 'Fighter',
    description: 'The Darkin Blade',
    image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg',
    champAbi:[{
        name:'DeathBringer Stance',
        type:'Passive',
        description:"Aatrox's next basic attack deals bonus physical damage and heals him, based on the target's max health.",
    },  {
        name:'The Darkin Blade',
        type:'Active',
        description:"Aatrox slams his greatsword down, dealing physical damage. He can swing three times, each with a different area of effect.",
    },  {
        name:'Infernal Chains',
        type:'Active',
        description:"Aatrox smashes the ground, dealing damage to the first enemy hit. Champions and large monsters have to leave the impact area quickly or they will be dragged to the center and take the damage again.",
    },  {
        name:'Umbral Dash',
        type:'Active',
        description:"Passively, Aatrox heals when damaging enemy champions. On activation, he dashes in a direction.",
    }, {
        name:'World Ender',
        type:'Active',
        description:"Aatrox unleashes his demonic form, fearing nearby enemy minions and gaining attack damage, increased healing, and Move Speed. If he gets a takedown, this effect is extended."
    }]
    },  {
        name: 'Leblanc',
        role: 'Mage',
        description: 'The Deceiver',
        image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Leblanc_0.jpg',
    champAbi:[{
        name:'Mirror Image',
        type:'Passive',
        description:"Aatrox's next basic attack deals bonus physical damage and heals him, based on the target's max health.",
    },  {
        name:'sheesh',
        type:'Active',
        description:"When LeBlanc drops below 40% Health, she becomes invisible for 1 second and creates a Mirror Image that deals no damage and lasts for up to 8 seconds.",
    },  {
        name:'Sigil Of Malice',
        type:'Active',
        description:"Aatrox smashes the ground, dealing damage to the first enemy hit. Champions and large monsters have to leave the impact area quickly or they will be dragged to the center and take the damage again.",
    },  {
        name:'Umbral Dash',
        type:'Active',
        description:"ey dash go brrrrr"
    }]
    },  {
        name: 'Riven',
        role: 'Fighter',
        description: 'The Exile',
        image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Riven_0.jpg',
    champAbi:[{
        name:'Runic Blade',
        type:'Passive',
        description:"Aatrox's next basic attack deals bonus physical damage and heals him, based on the target's max health.",
    },  {
        name:'Runic Blade',
        type:'Active',
        description:"Aatrox slams his greatsword down, dealing physical damage. He can swing three times, each with a different area of effect.",
    },  {
        name:'Infernal Chains',
        type:'Active',
        description:"Aatrox smashes the ground, dealing damage to the first enemy hit. Champions and large monsters have to leave the impact area quickly or they will be dragged to the center and take the damage again.",
    },  {
        name:'Umbral Dash',
        type:'Active',
        description:"Passively, Aatrox heals when damaging enemy champions. On activation, he dashes in a direction.",
    }, {
        name:'World Ender',
        type:'Active',
        description:"Aatrox unleashes his demonic form, fearing nearby enemy minions and gaining attack damage, increased healing, and Move Speed. If he gets a takedown, this effect is extended."
    }]
    },  {
        name: 'Akali',
        role: 'Assassin',
        description: 'The Rogue Assassin',
        image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg',
    champAbi:[{
        name:"Assassin's Mark",
        type:'Passive',
        description:"Aatrox's next basic attack deals bonus physical damage and heals him, based on the target's max health.",
    },  {
        name:'The Darkin Blade',
        type:'Active',
        description:"Aatrox slams his greatsword down, dealing physical damage. He can swing three times, each with a different area of effect.",
    },  {
        name:'Infernal Chains',
        type:'Active',
        description:"Aatrox smashes the ground, dealing damage to the first enemy hit. Champions and large monsters have to leave the impact area quickly or they will be dragged to the center and take the damage again.",
    },  {
        name:'Umbral Dash',
        type:'Active',
        description:"Passively, Aatrox heals when damaging enemy champions. On activation, he dashes in a direction.",
    }, {
        name:'World Ender',
        type:'Active',
        description:"Aatrox unleashes his demonic form, fearing nearby enemy minions and gaining attack damage, increased healing, and Move Speed. If he gets a takedown, this effect is extended."
    }]
    },  {
        name:'Gangplank',
        role:'Fighter',
        description:'The Saltwater Scourge',
        image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gangplank_0.jpg',
    champAbi:[{
        name:'Trial By Fire',
        type:'Passive',
        description:"Aatrox's next basic attack deals bonus physical damage and heals him, based on the target's max health.",
    },  {
        name:'The Darkin Blade',
        type:'Active',
        description:"Aatrox slams his greatsword down, dealing physical damage. He can swing three times, each with a different area of effect.",
    },  {
        name:'Infernal Chains',
        type:'Active',
        description:"Aatrox smashes the ground, dealing damage to the first enemy hit. Champions and large monsters have to leave the impact area quickly or they will be dragged to the center and take the damage again.",
    },  {
        name:'Umbral Dash',
        type:'Active',
        description:"Passively, Aatrox heals when damaging enemy champions. On activation, he dashes in a direction.",
    }, {
        name:'World Ender',
        type:'Active',
        description:"Aatrox unleashes his demonic form, fearing nearby enemy minions and gaining attack damage, increased healing, and Move Speed. If he gets a takedown, this effect is extended."
    }]
}]

champAblts.style.display = 'none'

champions.forEach((champ) => {
    let img = document.createElement('img')
    img.className = 'heroImage'
    img.src = champ.image
    let get = champ.champAbi

    img.addEventListener('click', () =>{
        // console.log(champ.champAbi)
        // let conv = JSON.stringify(champ.champAbi)
        // console.log(conv)

        let generateHTML = Object.keys(get).reduce((accum, currkey)=> accum + `
            <div class = "champInfo">
            <br>
            <div class = "champName">
                <span id = "styleName">${get[currkey].name}</span>
            </div>
            <div class = "desc">
                <span id = "styleDesc">
                    ${get[currkey].type}
                    ${get[currkey].description}
                </span>
            </div>
            </div>
        `, '')

        document.getElementById('container').innerHTML = generateHTML


        textSpan.textContent = champ.name
        role.textContent = champ.description
        champList.style.display = 'none'
        champAblts.style.display = 'block'
    })
    champList.appendChild(img)
})


// champions.abilities.forEach((champSkill) =>{
//     let skillImg = document.createElement('img')
//     skillImg.className = 'abilitiesList'
//     skillImg.src = champSkill.abilities.image

//     skillImg.addEventListener('click', () =>{
//         console.log(champSkill.abilities)
//     })
//     champAbilities.appendChild(skillImg)   
// })



