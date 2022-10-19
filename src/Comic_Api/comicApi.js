const data = [
    {
        id: 1,
        title: "Amazing Fantasy #15",
        portada: "https://i.annihil.us/u/prod/marvel/i/mg/7/00/5d924ca64c787/clean.jpg",
        precio: 3000,
        descripcion: "Entrega número 15 de Amazing Fantasy donde se cuentan varias historias de marvel incluida la aparicion de El Sorprendente Spider-Man por primera vez en los comics contando la historia de como el joven Peter Parker es mordido por una araña que le proporsiona fantasticos poderes que debe aprender a dominar",
        stock: 10,
        categoria: "marvel",
    },
    {
        id: 2,
        title: "Deadpool Kills the Marvel Universe",
        portada: "https://i.annihil.us/u/prod/marvel/i/mg/3/40/5730e351bd592/clean.jpg",
        precio: 2800,
        descripcion: "¿Qué pasaría si todo lo que pensabas que era divertido sobre Deadpool fuera realmente inquietante? ¿Qué pasaría si decidiera matar a todos y todo lo que conforma el Universo Marvel? ¿Y si realmente lo logró? ¿Sería divertido para ti? ¡El mercenario bocazas da un giro a lo retorcido en un cómic de terror como ningún otro!",
        stock: 10,
        categoria: "marvel",
    },
    {
        id: 3,
        title: "Ms. Marvel Volume 1: No Normal",
        portada: "https://i.annihil.us/u/prod/marvel/i/mg/f/e0/59af130256160/clean.jpg",
        precio: 2300,
        descripcion: "Marvel Comics presenta a la nueva Ms. Marvel, ¡la heroína innovadora que se ha convertido en una sensación internacional! Kamala Khan es una chica ordinaria de la ciudad de Jersey, hasta que de repente se ve facultada con dones extraordinarios. Pero, ¿quién es realmente la nueva Ms. Marvel? ¿Adolescente? ¿Musulmán? ¿Inhumano? ¡Descubre cómo conquista el Universo Marvel!",
        stock: 10,
        categoria: "marvel",
    },
    {
        id: 4,
        title: "Hulk: Gray",
        portada: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ2BGVcCswofkgpy5n8Hsi0mGlZF16n9lP7_zXCSaTdHNEZkeBU",
        precio: 3100,
        descripcion: "Historieta de Hulk en la que escuchamos a Bruce Banner recordar como fueron sus primeros momentos como Hulk, contando algunos secretos y curiosidades que no vimos en el afamado Hulk #1",
        stock: 10,
        categoria: "marvel",
    },
    {
        id: 5,
        title: "Captain America: Trial of Captain America",
        portada: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRJBSUfdkhSK_pvCVSc73V5CHZorsP1hiqKJrwVQkvBD0ChP3DY",
        precio: 3200,
        descripcion: "Bucky Barnes, el antiguo y futuro Soldado de Invierno, tomó el manto del Capitán América después de la aparente muerte de Steve Rogers. ¡Pero ahora Steve ha vuelto, y los dos Caps deben decidir cuál de ellos empuñará el escudo! Como el Gran Director, el Barón Zemo y Sin dificultan la vida de los héroes, Steve asume un nuevo rol como jefe de S.H.I.E.L.D. ¡Y el pasado secreto de Bucky queda expuesto al mundo! ¡Ahora, Steve debe correr para evitar que Bucky sea tragado por un gulag ruso! Pero cuando ocurran tragedias y el Escuadrón Serpiente regrese, ¿Steve tendrá la fuerza para seguir adelante?",
        stock: 10,
        categoria: "marvel",
    },
    {
        id: 6,
        title: "Batman: La Broma Asesina",
        portada: "https://imagessl3.casadellibro.com/a/l/t7/23/9788416660223.jpg",
        precio: 3500,
        descripcion: "La broma asesina relata los orígenes del supervillano más carismático del mundo del cómic, el Joker, y ofrece una inolvidable interpretación sobre la perturbadora relación entre el Hombre Murciélago y su mayor enemigo. Una retorcida historia de locura y perseverancia en la que el Príncipe Payaso del Crimen lleva al límite al Caballero Oscuro y al Comisario Gordon.",
        stock: 10,
        categoria: "dc",
    },
    {
        id: 7,
        title: "Superman Doomsday",
        portada: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRxrdwXEWb3pUW1qS0X3fkctkKKQyBuOJtaBJTiOMZOnDHnYnX",
        precio: 2900,
        descripcion: "Superman viaja al mundo de pesadilla de Apokolips para enfrentarse a Doomsday, la criatura que le costó la vida al Hombre de Acero. Con la ayuda de la misteriosa Waverider que viaja en el tiempo, Superman finalmente descubre la impactante verdad sobre el origen de su mayor enemigo. ¡Y justo cuando cree que el terror finalmente ha terminado, el gigante asesino regresa a la Tierra aún más poderoso que nunca!",
        stock: 10,
        categoria: "dc",
    },
    {
        id: 8,
        title: "Dragon Ball Super",
        portada: "https://mangaplus.shueisha.co.jp/drm/title/200025/title_thumbnail_portrait_list/14359.jpg?key=d35d720eaf52bb568dbc2c9442ab293a&duration=86400",
        precio: 2900,
        descripcion: "El tiempo transcurre, desde aquella gran batalla entre Goku y Majin Boo... ¡¡Ahora, en un mundo que recuperó la paz, se aproxima una nueva batalla!! ¿¡Viene este nuevo enemigo desde el Sexto universo!? Una nueva y completa serie de Dragon Ball, en donde un después es escrito, en un proyecto original de Akira Toriyama.",
        stock: 10,
        categoria: "manga",
    },
    {
        id: 9,
        title: "Demon Slayer #1",
        portada: "https://m.media-amazon.com/images/I/81ZNkhqRvVL.jpg",
        precio: 2700,
        descripcion: "En el Japón de la era Taisho, Tanjiro Kamado es un niño bondadoso que se gana la vida vendiendo carbón. Pero su vida pacífica se hace añicos cuando un demonio mata a toda su familia. Su hermana pequeña, Nezuko, es la única superviviente, ¡pero ella misma se ha transformado en un demonio! Tanjiro emprende un peligroso viaje para encontrar la manera de devolver a su hermana a la normalidad y destruir al demonio que arruinó su vida.",
        stock: 10,
        categoria: "manga",
    },
    {
        id: 10,
        title: "Demon Slayer #2",
        portada: "https://m.media-amazon.com/images/I/81PxvdB+vZL.jpg",
        precio: 2800,
        descripcion: "En el Japón de la era Taisho, Tanjiro Kamado es un niño bondadoso que se gana la vida vendiendo carbón. Pero su vida pacífica se hace añicos cuando un demonio mata a toda su familia. Su hermana pequeña, Nezuko, es la única superviviente, ¡pero ella misma se ha transformado en un demonio! Tanjiro emprende un peligroso viaje para encontrar la manera de devolver a su hermana a la normalidad y destruir al demonio que arruinó su vida.",
        stock: 10,
        categoria: "manga",
    },
    {
        id: 11,
        title: "Berserk #1",
        portada: "https://otakuteca.com/images/books/cover/5bc80d3ce44c3.jpg",
        precio: 2500,
        descripcion: "Guts, un ex-mercenario conocido como el Espadachín Negro, y en búsqueda de su venganza. Luego de una tumultuosa infancia, él finalmente encuentra a alguien a quien respeta y en quien puede confiar; y todo se desmorona cuando esta persona le arrebata todo lo importante para él, con el propósito de cumplir sus propios deseos. Ahora, siendo portador de la marca, Guts se encuentra condenado a un destino en el que es implacablemente perseguido por seres demoníacos. Encaminado en una terrible misión llena de desgracia, Guts, armado con una espada gigante y una fuerza monstruosa, no dejará que nada lo detenga,",
        stock: 10,
        categoria: "manga",
    },
]

export function getComics(){
    return new Promise((resolve) => {
        setTimeout(() => resolve(data), 2000)
    })
}

export function getUnComic(idParams) {
    return new Promise((resolve) => {
        let comicReq = data.find( (comic) => {
            return comic.id === Number(idParams)
        })
        setTimeout(() => resolve(comicReq), 2000)
    })
}

export function getComicsByCategory(categoryId) {
    return new Promise((resolve) => {
        let filterComics = data.filter( item => item.categoria === categoryId)
        setTimeout(() => resolve(filterComics), 2000)
    })
}