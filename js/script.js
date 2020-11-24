// ********************************************** \\
  // !CD FROM BOOLEAN API & CATEGORIES FILTERING \\
// *********************************************** \\

const spoty = new Vue ({
    el: '#spoty-api',
    data: {
        // Array di cd inizializzato nei data e che verrà popolato con i dati provenienti dalla API
        cds: [],
    },
    created() {
        // Targhettizziamo la API
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
        // Situazione di successo nella chiamata API, popolo il mio array cds. La API che utilizzo è già strutturata come un array di oggetti quindi devo solo fare un'assegnazione, in pratica assegnare all'array da me inizializzato (cds) ciò che c'è nella array  della API all'interno dei data alla voce response. In questo processo per facilitarmi il lavoro posso utilizzare POSTMAN!
        .then( response => {
            this.cds = response.data.response;
        })
        // Situazione di errore nella chiamata API
        .catch( error => {
            console.log(error);
        });
    },
})