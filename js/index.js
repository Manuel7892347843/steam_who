class IndovinaChi {
    constructor() {
        this.personaggi = [
            {
                nome: "Albert Einstein",
                maschio: true,
                nato_prima_1900: true,
                europeo: true,
                scientifico: true,
                artista: false,
                scrittore: false,
                politico: false,
                nobel: true
            },
            {
                nome: "Marie Curie",
                maschio: false,
                nato_prima_1900: true,
                europeo: true,
                scientifico: true,
                artista: false,
                scrittore: false,
                politico: false,
                nobel: true
            },
            {
                nome: "Pablo Picasso",
                maschio: true,
                nato_prima_1900: true,
                europeo: true,
                scientifico: false,
                artista: true,
                scrittore: false,
                politico: false,
                nobel: false
            },
            {
                nome: "Frida Kahlo",
                maschio: false,
                nato_prima_1900: false,
                europeo: false,
                scientifico: false,
                artista: true,
                scrittore: false,
                politico: false,
                nobel: false
            },
            {
                nome: "Barack Obama",
                maschio: true,
                nato_prima_1900: false,
                europeo: false,
                scientifico: false,
                artista: false,
                scrittore: false,
                politico: true,
                nobel: true
            },
            {
                nome: "Isaac Newton",
                maschio: true,
                nato_prima_1900: true,
                europeo: true,
                scientifico: true,
                artista: false,
                scrittore: false,
                politico: false,
                nobel: false
            },
            {
                nome: "William Shakespeare",
                maschio: true,
                nato_prima_1900: true,
                europeo: true,
                scientifico: false,
                artista: false,
                scrittore: true,
                politico: false,
                nobel: false
            },
            {
                nome: "Leonardo da Vinci",
                maschio: true,
                nato_prima_1900: true,
                europeo: true,
                scientifico: true,
                artista: true,
                scrittore: false,
                politico: false,
                nobel: false
            },
            {
                nome: "Cleopatra",
                maschio: false,
                nato_prima_1900: true,
                europeo: false,
                scientifico: false,
                artista: false,
                scrittore: false,
                politico: true,
                nobel: false
            },
            {
                nome: "Malala Yousafzai",
                maschio: false,
                nato_prima_1900: false,
                europeo: false,
                scientifico: false,
                artista: false,
                scrittore: true,
                politico: false,
                nobel: true
            },
            {
                nome: "Galileo Galilei",
                maschio: true,
                nato_prima_1900: true,
                europeo: true,
                scientifico: true,
                artista: false,
                scrittore: false,
                politico: false,
                nobel: false
            },
            {
                nome: "Ada Lovelace",
                maschio: false,
                nato_prima_1900: true,
                europeo: true,
                scientifico: true,
                artista: false,
                scrittore: false,
                politico: false,
                nobel: false
            },
            {
                nome: "Vincent van Gogh",
                maschio: true,
                nato_prima_1900: true,
                europeo: true,
                scientifico: false,
                artista: true,
                scrittore: false,
                politico: false,
                nobel: false
            },
            {
                nome: "Steve Jobs",
                maschio: true,
                nato_prima_1900: false,
                europeo: false,
                scientifico: true,
                artista: false,
                scrittore: false,
                politico: false,
                nobel: false
            },
            {
                nome: "J.K. Rowling",
                maschio: false,
                nato_prima_1900: false,
                europeo: true,
                scientifico: false,
                artista: false,
                scrittore: true,
                politico: false,
                nobel: false
            },
            {
                nome: "Elon Musk",
                maschio: true,
                nato_prima_1900: false,
                europeo: false,
                scientifico: true,
                artista: false,
                scrittore: false,
                politico: false,
                nobel: false
            },
            {
                nome: "Mahatma Gandhi",
                maschio: true,
                nato_prima_1900: true,
                europeo: false,
                scientifico: false,
                artista: false,
                scrittore: false,
                politico: true,
                nobel: false
            },
            {
                nome: "Jane Austen",
                maschio: false,
                nato_prima_1900: true,
                europeo: true,
                scientifico: false,
                artista: false,
                scrittore: true,
                politico: false,
                nobel: false
            },
            {
                nome: "Martin Luther King Jr.",
                maschio: true,
                nato_prima_1900: false,
                europeo: false,
                scientifico: false,
                artista: false,
                scrittore: true,
                politico: true,
                nobel: true
            },
            {
                nome: "Cristoforo Colombo",
                maschio: true,
                nato_prima_1900: true,
                europeo: true,
                scientifico: false,
                artista: false,
                scrittore: false,
                politico: false,
                nobel: false
            }
        ];

        this.domande = [
            { testo: "La persona è di sesso maschile?", chiave: "maschio" },
            { testo: "La persona è nata prima del 1900?", chiave: "nato_prima_1900" },
            { testo: "La persona è europea?", chiave: "europeo" },
            { testo: "La persona è famosa per le sue scoperte scientifiche?", chiave: "scientifico" },
            { testo: "La persona è un artista?", chiave: "artista" },
            { testo: "La persona è uno scrittore?", chiave: "scrittore" },
            { testo: "La persona è un politico?", chiave: "politico" },
            { testo: "La persona ha vinto un premio Nobel?", chiave: "nobel" }
        ];

        this.domandaCorrente = 0;
        this.domandeChieste = 0;
    }

    // Metodo per filtrare i personaggi
    filtraPersonaggi(chiave, risposta) {
        this.personaggi = this.personaggi.filter(personaggio => personaggio[chiave] === risposta);
    }

    // Metodo per ottenere la prossima domanda
    getDomandaCorrente() {
        return this.domande[this.domandaCorrente]?.testo || null;
    }

    // Metodo per gestire la risposta alla domanda
    rispondiDomanda(risposta) {
        if (this.domandaCorrente < this.domande.length) {
            const domanda = this.domande[this.domandaCorrente];
            this.filtraPersonaggi(domanda.chiave, risposta);
            this.domandaCorrente++;
            this.domandeChieste++;
        }
    }

    // Metodo per verificare lo stato del gioco
    verificaFineGioco() {
        if (this.personaggi.length === 1) {
            return `La persona che stai pensando è: ${this.personaggi[0].nome}`;
        } else if (this.personaggi.length === 0) {
            return "Non ci sono personaggi che corrispondono alla tua descrizione!";
        } else if (this.domandaCorrente >= this.domande.length) {
            return "Non sono riuscito a indovinare. Prova di nuovo!";
        }
        return null;
    }
}

// Inizializza il gioco
const gioco = new IndovinaChi();

// Funzione per gestire la prossima domanda
function prossimaDomanda(risposta) {
    const domandaElement = document.getElementById("domanda");
    const nDomandeChiesteElement = document.getElementById("nDomandeChieste");

    // Rispondi alla domanda corrente
    gioco.rispondiDomanda(risposta);

    // Aggiorna il numero di domande chieste
    nDomandeChiesteElement.textContent = `Domande chieste: ${gioco.domandeChieste}`;

    // Controlla se il gioco è finito
    const messaggioFine = gioco.verificaFineGioco();
    if (messaggioFine) {
        domandaElement.textContent = messaggioFine;
        document.getElementById("si-button").disabled = true;
        document.getElementById("no-button").disabled = true;
        return;
    }

    // Mostra la prossima domanda
    const prossimaDomanda = gioco.getDomandaCorrente();
    if (prossimaDomanda) {
        domandaElement.textContent = prossimaDomanda;
    }
}

// Mostra la prima domanda all'avvio
document.getElementById("domanda").textContent = gioco.getDomandaCorrente();