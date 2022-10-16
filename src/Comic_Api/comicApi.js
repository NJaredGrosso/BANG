const data = [
    {
        id: 1,
        title: "Amazing Fantasy #15",
        portada: "https://i.annihil.us/u/prod/marvel/i/mg/7/00/5d924ca64c787/clean.jpg",
        precio: 3000,
        descripcion: "Entrega número 15 de Amazing Fantasy donde se cuentan varias historias de marvel incluida la aparicion de El Sorprendente Spider-Man por primera vez en los comics contando la historia de como el joven Peter Parker es mordido por una araña que le proporsiona fantasticos poderes que debe aprender a dominar",
        stock: 10,
        categoria: "Marvel",
    },
    {
        id: 2,
        title: "Deadpool Kills the Marvel Universe",
        portada: "https://i.annihil.us/u/prod/marvel/i/mg/3/40/5730e351bd592/clean.jpg",
        precio: 2800,
        descripcion: "¿Qué pasaría si todo lo que pensabas que era divertido sobre Deadpool fuera realmente inquietante? ¿Qué pasaría si decidiera matar a todos y todo lo que conforma el Universo Marvel? ¿Y si realmente lo logró? ¿Sería divertido para ti? ¡El mercenario bocazas da un giro a lo retorcido en un cómic de terror como ningún otro!",
        stock: 10,
        categoria: "Marvel",
    },
    {
        id: 3,
        title: "Ms. Marvel Volume 1: No Normal",
        portada: "https://i.annihil.us/u/prod/marvel/i/mg/f/e0/59af130256160/clean.jpg",
        precio: 2300,
        descripcion: "Marvel Comics presenta a la nueva Ms. Marvel, ¡la heroína innovadora que se ha convertido en una sensación internacional! Kamala Khan es una chica ordinaria de la ciudad de Jersey, hasta que de repente se ve facultada con dones extraordinarios. Pero, ¿quién es realmente la nueva Ms. Marvel? ¿Adolescente? ¿Musulmán? ¿Inhumano? ¡Descubre cómo conquista el Universo Marvel!",
        stock: 10,
        categoria: "Marvel",
    },
    {
        id: 4,
        title: "Hulk: Gray",
        portada: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ2BGVcCswofkgpy5n8Hsi0mGlZF16n9lP7_zXCSaTdHNEZkeBU",
        precio: 3100,
        descripcion: "Historieta de Hulk en la que escuchamos a Bruce Banner recordar como fueron sus primeros momentos como Hulk, contando algunos secretos y curiosidades que no vimos en el afamado Hulk #1",
        stock: 10,
        categoria: "Marvel",
    },
    {
        id: 5,
        title: "Captain America: Trial of Captain America",
        portada: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRJBSUfdkhSK_pvCVSc73V5CHZorsP1hiqKJrwVQkvBD0ChP3DY",
        precio: 3200,
        descripcion: "Bucky Barnes, el antiguo y futuro Soldado de Invierno, tomó el manto del Capitán América después de la aparente muerte de Steve Rogers. ¡Pero ahora Steve ha vuelto, y los dos Caps deben decidir cuál de ellos empuñará el escudo! Como el Gran Director, el Barón Zemo y Sin dificultan la vida de los héroes, Steve asume un nuevo rol como jefe de S.H.I.E.L.D. ¡Y el pasado secreto de Bucky queda expuesto al mundo! ¡Ahora, Steve debe correr para evitar que Bucky sea tragado por un gulag ruso! Pero cuando ocurran tragedias y el Escuadrón Serpiente regrese, ¿Steve tendrá la fuerza para seguir adelante?",
        stock: 10,
        categoria: "Marvel",
    }
]

export function getComics(){
    return new Promise((resolve) => {
        setTimeout(() => resolve(data), 2000)
    })
}

export function getUnComic(idParams) {
    return new Promise((resolve) => {
        let comicReq = data.find((item) =>{
            return item.id === Number(idParams)
        })
        setTimeout(()=> resolve(comicReq), 2000)
    })
}

export function getComicsByCategory(idCategoryParams) {
    return new Promise((resolve) => {
        let arrayFilterComics = data.filter(
            (item) => item.categoria === idCategoryParams
        )
        setTimeout(() => resolve(arrayFilterComics), 2000)
    })
}