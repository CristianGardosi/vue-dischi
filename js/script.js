// ********************************************** \\
  // !CD FROM BOOLEAN API & CATEGORIES FILTERING \\
// *********************************************** \\

const spoty = new Vue ({
    el: '#spoty-api',
    data: {
        // Array di cd inizializzato nei data e che verrà popolato con i dati provenienti dalla API
        cds: [],
        // Inizializzo l'actual genre riferito alla mia select per il filtraggio con quello di default, ovvero all, che al caricamento della pagina e poi ad ogni richiesta specifica dell'utente di visualizzare tutti gli elementi mi mostro la collezione completa di album
        actualGenre: 'all'
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
    methods:  {
        // Funzione per il filtraggio dei cd in base al genere selezionato dall'utente, al cambio di genere richiedo ogni volta i dati alla mia API (in modo da non perdere ad ogni selezione quelli che vengono di volta in volta scremati) ovviamente se la scelta dell'utente ricade su all mostro tutto il contenuto dell'array passato dalla API altrimenti FILTRO solo gli elementi appartenenti al genere scelto
        filterGenre() {
            // Targhettizziamo la API
            axios.get('https://flynn.boolean.careers/exercises/api/array/music')
            .then( response => {
                // Creo una variabile let, poichè se sono sul all mostro tutto il contenuto della mia API (let cdList = response.data.response), ma se sono su un altro genere lo devo scremare (e quindi cambiare) di volta in volta
                let cdList = response.data.response
                // Caso in cui ho qualcosa di diverso da ALL filtro i miei cd confrontando il genre che mi viene passato all'interno della API per ogni cd al genre che l'utente ha selezionato utilizzando una delle opzioni della select e li faccio coincidere
                if (this.actualGenre !== 'all') {
                    cdList = cdList.filter(cd => {
                        return cd.genre.toLowerCase() === this.actualGenre;
                    });
                }
                // Caso in cui ho ALL, il mio array cds è uguale all'intera lista di elem nell'array
                this.cds = cdList
            })
            // Situazione di errore nella chiamata API
            .catch( error => {
                console.log(error);
            });
        } 
    }
})