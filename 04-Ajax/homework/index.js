
// Variables
let boton = $('#boton');
let lista = $('#lista');
let imagen = $('#image');
let inputSearch = $('#inputSearch');
let btnSearch = $('#btnSearch');
let amigoSearched = $('#amigoSearch');
let btnDelete = $('#delete');
let inputDelete = $('#inputDelete');


// Peticiones
let getAmigos = () => {

    $.get({
        url: 'http://localhost:5000/amigos',
        success: (data) => {

            for (const amigo of data) {
                let listaAmigos = $(`<li>${amigo.name}</li>`)
                lista.append(listaAmigos)
                
            }

            imagen.css('display', 'none');

            boton.attr('disabled', 'true');

        },
        error: (error) => {
            console.log(error)
        }
    })
}




let searchAmigoById = (id) => {

    $.get({
        url: `http://localhost:5000/amigos/${id}`,
        success: (data) => {
            
            amigoSearched.text(data.name)
        
        },
        error: (err) => {
            console.log(err)
        }
    })
}




let deleteAmigoById = (id) => {

    lista.empty();

    $.ajax({
        url: `http://localhost:5000/amigos/${id}`,
        method: 'DELETE',
        success: (data) => {

            for (const amigo of data) {
                let listaAmigos = $(`<li>${amigo.name}</li>`)
                lista.append(listaAmigos)
                
            }

        },
        error: (err) => {
            console.log(err)
        }
    })
}






// Eventos
boton.click(() => {

    getAmigos()

})

btnSearch.click(() => {

    searchAmigoById(inputSearch.val())
})


btnDelete.click(() => {
    deleteAmigoById(inputDelete.val())
})
