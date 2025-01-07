const persone = [
    { nomeCompleto: 'Albert Einstein', serbo: false, polacco: false, italiano: false, inglese: false, tedesco: true, fisico: true, artista: false, inventore: false, leggi_di_Newton: false, elettricità: false, Teoria_della_relatività: true, nobel: true },
    { nomeCompleto: 'Isaac Newton', serbo: false, polacco: false, italiano: false, inglese: true, tedesco: false, fisico: true, artista: false, inventore: false, leggi_di_Newton: true, elettricità: false, Teoria_della_relatività: false, nobel: false },
    { nomeCompleto: 'Galileo Galilei', serbo: false, polacco: false, italiano: true, inglese: false, tedesco: false, fisico: false, artista: false, inventore: false, leggi_di_Newton: false, elettricità: false, Teoria_della_relatività: false, nobel: false },
    { nomeCompleto: 'Nikola Tesla', serbo: true, polacco: false, italiano: false, inglese: false, tedesco: false, fisico: false, artista: false, inventore: true, leggi_di_Newton: false, elettricità: true, Teoria_della_relatività: false, nobel: false },
    { nomeCompleto: 'Marie Curie', serbo: false, polacco: true, italiano: false, inglese: false, tedesco: false, fisico: false, artista: false, inventore: false, leggi_di_Newton: false, elettricità: false, Teoria_della_relatività: false, nobel: true },
    { nomeCompleto: 'Leonardo da Vinci', serbo: false, polacco: false, italiano: true, inglese: false, tedesco: false, fisico: false, artista: true, inventore: true, leggi_di_Newton: false, elettricità: false, Teoria_della_relatività: false, nobel: false },
    { nomeCompleto: 'Nicolaus Copernicus', serbo: false, polacco: true, italiano: false, inglese: false, tedesco: false, fisico: false, artista: false, inventore: false, leggi_di_Newton: false, elettricità: false, Teoria_della_relatività: false, nobel: false },
    { nomeCompleto: 'Wolfgang Amadeus Mozart', serbo: false, polacco: false, italiano: true, inglese: false, tedesco: false, fisico: false, artista: true, inventore: false, leggi_di_Newton: false, elettricità: false, Teoria_della_relatività: false, nobel: false },
    { nomeCompleto: 'Johann Sebastian Bach', serbo: false, polacco: false, italiano: false, inglese: false, tedesco: true, fisico: false, artista: true, inventore: false, leggi_di_Newton: false, elettricità: false, Teoria_della_relatività: false, nobel: false },
    { nomeCompleto: 'Ludwig van Beethoven', serbo: false, polacco: false, italiano: false, inglese: false, tedesco: true, fisico: false, artista: true, inventore: false, leggi_di_Newton: false, elettricità: false, Teoria_della_relatività: false, nobel: false }
];

const domande = [
    'Il personaggio è serbo?',
    'Il personaggio è polacco?',
    'Il personaggio è italiano?',
    'Il personaggio è inglese?',
    'Il personaggio è tedesco?',
    'Il personaggio è un fisico?',
    'Il personaggio è un artista?',
    'Il personaggio è un inventore?',
    'Il personaggio ha scoperto le leggi di Newton?',
    'Il personaggio ha scoperto l\'elettricità?',
    'Il personaggio ha scoperto la Teoria della relatività?',
    'Il personaggio ha vinto un premio Nobel?'
];

// Associazione delle domande alle chiavi dell'oggetto persona
const mappaDomande = {
    'Il personaggio è serbo?': 'serbo',
    'Il personaggio è polacco?': 'polacco',
    'Il personaggio è italiano?': 'italiano',
    'Il personaggio è inglese?': 'inglese',
    'Il personaggio è tedesco?': 'tedesco',
    'Il personaggio è un fisico?': 'fisico',
    'Il personaggio è un artista?': 'artista',
    'Il personaggio è un inventore?': 'inventore',
    'Il personaggio ha scoperto le leggi di Newton?': 'leggi_di_Newton',
    'Il personaggio ha scoperto l\'elettricità?': 'elettricità',
    'Il personaggio ha scoperto la Teoria della relatività?': 'Teoria_della_relatività',
    'Il personaggio ha vinto un premio Nobel?': 'nobel'
};

let nDomande = 0;
let personeFiltrate = [...persone]; // Inizia con tutte le persone
let conteggioRisposteVere = Array(persone.length).fill(0); // Inizializza un array per tenere traccia delle risposte vere
let indiceCorrente = 0; // Dichiarato per tracciare la posizione nelle persone filtrate

// Funzione per mostrare la domanda corrente
function mostraDomanda() {
    if (nDomande < domande.length && personeFiltrate.length > 0) {
        // Trova la prossima persona valida
        while (indiceCorrente < personeFiltrate.length && personeFiltrate[indiceCorrente] === null) {
            indiceCorrente++; // Salta gli elementi null
        }

        if (indiceCorrente < personeFiltrate.length) {
            document.getElementById('domanda').innerText = domande[nDomande];
            document.getElementById('nDomandeChieste').innerText = `Domande chieste: ${nDomande + 1}`;
        } else {
            document.getElementById('domanda').innerText = 'Non ci sono più persone valide!';
            stampaPersonaggioIndovinato(); // Chiama la funzione per stampare il personaggio
        }
    } else {
        document.getElementById('domanda').innerText = 'Non ci sono più domande o persone valide!';
        stampaPersonaggioIndovinato(); // Chiama la funzione per stampare il personaggio
    }
}

// Funzione per stampare il nome del personaggio con il maggior numero di risposte vere
function stampaPersonaggioIndovinato() {
    // Trova il numero massimo di risposte vere
    let maxRisposteVere = Math.max(...conteggioRisposteVere);

    // Trova l'indice del personaggio con il massimo numero di risposte vere
    let indicePersonaggioIndovinato = conteggioRisposteVere.indexOf(maxRisposteVere);

    // Stampa il nome del personaggio con il massimo numero di risposte vere
    if (maxRisposteVere > 0) {
        console.log(`Il personaggio che stai pensando potrebbe essere: ${persone[indicePersonaggioIndovinato].nomeCompleto}`);
        document.getElementById('domanda').innerText = `Il personaggio che stai pensando è: ${persone[indicePersonaggioIndovinato].nomeCompleto}`;
    } else {
        console.log('Nessuna persona corrisponde alle risposte date.');
        document.getElementById('domanda').innerText = 'Nessuna persona corrisponde alle risposte date.';
    }
}

// Funzione da chiamare quando si clicca "Sì" o "No"
function rispostaDomanda(risposta) {
    if (nDomande < domande.length && personeFiltrate.length > 0) {
        const domandaCorrente = domande[nDomande];
        const chiave = mappaDomande[domandaCorrente]; // Ottieni la chiave della domanda

        // Controlla la risposta per la persona corrente
        for (let i = 0; i < personeFiltrate.length; i++) {
            if (personeFiltrate[i] !== null) {
                const persona = personeFiltrate[i];

                if ((risposta === 'Si' && !persona[chiave]) || (risposta === 'No' && persona[chiave])) {
                    personeFiltrate[i] = null; // Escludi la persona
                } else {
                    conteggioRisposteVere[i]++; // Incrementa il conteggio delle risposte vere
                }
            }
        }

        nDomande++; // Passa alla prossima domanda
        mostraDomanda(); // Mostra la prossima domanda
    }
}

// Inizializzazione
document.addEventListener('DOMContentLoaded', () => {
    mostraDomanda();
});