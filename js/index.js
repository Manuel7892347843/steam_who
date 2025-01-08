//Lista delle persone potenzialmente indovinabili
const persone = [
    { nomeCompleto: 'Albert Einstein',tedesco: true, fisico: true, Teoria_della_relatività: true, nobel: true },
    { nomeCompleto: 'Isaac Newton', inglese: true, fisico: true, leggi_di_Newton: true},
    { nomeCompleto: 'Galileo Galilei', italiano: true, fisico: true, astronomo: true, filosofo: true, matematico: true, inventore: true},
    { nomeCompleto: 'Nikola Tesla', serbo: true, inventore: true, fisico: true, ingegnere: true, elettrico: true },
    { nomeCompleto: 'Marie Curie', polacco: true, fisica: true, chimico: true, radiazioni: true, nobel: true },
    { nomeCompleto: 'Leonardo da Vinci', italiano: true, artista: true, inventore: true, scienziato: true, matematico: true },
    { nomeCompleto: 'Thomas Edison', statunitense: true ,inventore: true, elettrico: true, chimico: true },
    { nomeCompleto: 'Michael Faraday', inglese: true, fisico: true, chimico: true},
    { nomeCompleto: 'Alessandro Volta', italiano: true, fisico: true, chimico: true},
    { nomeCompleto: 'Antoine Lavoisier', francese: true, chimico: true,  biologo: true },
    { nomeCompleto: 'Johannes Kepler', tedesco: true, astronomo: true, matematico: true, astrologo: true },
    { nomeCompleto: 'Max Planck', tedesco: true, fisico: true, nobel: true, Teoria_dei_quanti: true },
    { nomeCompleto: 'Werner Heisenberg', tedesco: true, fisico: true, nobel: true, Principio_di_indeterminazione: true},
    { nomeCompleto: 'Erwin Schrödinger', austriaco: true, fisico: true, nobel: true },
    { nomeCompleto: 'Louis Pasteur', francese: true, chimico: true, biologo: true, medico: true },
    { nomeCompleto: 'Marcello Malpighi', italiano: true, biologo: true, medico: true },
    { nomeCompleto: 'Nicolaus Copernicus', polacco: true, astronomo: true, matematico: true, medico: true },
    { nomeCompleto: 'Tim Berners-Lee', inglese: true, informatico: true, WWW: true, Turing: true},
    { nomeCompleto: 'Alan Turing', inglese: true, matematico: true, filosofo: true, logico: true, criptografo: true},
    { nomeCompleto: 'Katherine Johnson', statunitense: true, matematico: true, fisico: true, scienziato: true, NASA: true}
];

//Lista delle domande da chiedere all'utente
const domande = [
    'Il personaggio è serbo?',
    'Il personaggio è polacco?',
    'Il personaggio è italiano?',
    'Il personaggio è inglese?',
    'Il personaggio è tedesco?',
    'Il personaggio è francese?',
    'Il personaggio è austriaco?',
    'Il personaggio è statunitense?',
    'Il personaggio è un fisico?',
    'Il personaggio è un artista?',
    'Il personaggio è un inventore?',
    'Il personaggio è un chimico?',
    'Il personaggio è un astronomo?',
    'Il personaggio è un filosofo?',
    'Il personaggio è un matematico?',
    'Il personaggio è un ingegnere?',
    'Il personaggio è un astrologo?',
    'Il personaggio è un medico?',
    'Il personaggio è un biologo?',
    'Il personaggio è un scienziato?',
    'Il personaggio è un informatico?',
    'Il personaggio è un logico?',
    'Il personaggio è un criptografo?',
    'Il personaggio ha scoperto l\'elettricità?',
    'Il personaggio ha creato le Leggi di Newton?',
    'Il personaggio ha creato la Teoria della relatività?',
    'Il personaggio ha creato la Teoria di quanti?',
    'Il personaggio ha creato il Principio di indeterminazione?',
    'Il personaggio ha vinto un premio Nobel?',
    'Il personaggio ha vinto un premio Turing?',
    'Il personaggio ha scoperto le radiazioni?',
    'Il personaggio ha creato il WWW (World Wide Web)?',
    'Il personaggio ha lavorato alla Nasa?'
];

// Associazione delle domande alle chiavi dell'oggetto persona
const mappaDomande = {
    'Il personaggio è serbo?': 'serbo',
    'Il personaggio è polacco?': 'polacco',
    'Il personaggio è italiano?': 'italiano',
    'Il personaggio è inglese?': 'inglese',
    'Il personaggio è tedesco?': 'tedesco',
    'Il personaggio è francese?': 'francese', 
    'Il personaggio è austriaco?': 'austriaco', 
    'Il personaggio è statunitense?': 'statunitense',
    'Il personaggio è un fisico?': 'fisico',
    'Il personaggio è un artista?': 'artista',
    'Il personaggio è un inventore?': 'inventore',
    'Il personaggio è un chimico?': 'chimico',
    'Il personaggio è un astronomo?': 'astronomo',
    'Il personaggio è un filosofo?': 'filosofo',
    'Il personaggio è un matematico?': 'matematico',
    'Il personaggio è un ingegnere?': 'ingegnere',
    'Il personaggio è un astrologo?': 'astrologo',
    'Il personaggio è un medico?': 'medico',
    'Il personaggio è un biologo?': 'biologo',
    'Il personaggio è un scienziato?': 'scienziato',
    'Il personaggio è un informatico?': 'informatico',
    'Il personaggio è un logico?': 'logico',
    'Il personaggio è un criptografo?': 'criptografo',
    'Il personaggio ha scoperto l\'elettricità?': 'elettrico',
    'Il personaggio ha creato le Leggi di Newton?': 'leggi_di_Newton',
    'Il personaggio ha creato la Teoria della relatività?': 'Teoria_della_relatività',
    'Il personaggio ha creato la Teoria di quanti?': 'Teoria_dei_quanti',
    'Il personaggio ha creato il Principio di indeterminazione?': 'Principio_di_indeterminazione',
    'Il personaggio ha vinto un premio Nobel?': 'nobel',
    'Il personaggio ha vinto un premio Turing?': 'Turing',
    'Il personaggio ha scoperto le radiazioni?': 'radiazioni',
    'Il personaggio ha creato il WWW (World Wide Web)?': 'WWW',
    'Il personaggio ha lavorato alla Nasa?': 'NASA'
};

let nDomande = 0; // Numero di domande fatte
let personeFiltrate = persone.slice(); // Copia dell'elenco delle persone

// Mostra la domanda attuale
function mostraDomanda() {
    if (nDomande < domande.length && personeFiltrate.length > 0) {
        // Mostra la domanda e aggiorna il contatore
        document.getElementById('domanda').innerText = domande[nDomande];
        document.getElementById('nDomandeChieste').innerText = 'Domande chieste: ' + (nDomande + 1);
    } else if (personeFiltrate.length === 1) {
        // Se è rimasta una sola persona valida, termina il gioco
        let nomePersonaggio = personeFiltrate[0].nomeCompleto;
        document.getElementById('domanda').innerText = 'Il personaggio che stai pensando è: ' + nomePersonaggio;
    } else {
        document.getElementById('domanda').innerText = 'Non ci sono più domande o persone valide!';
    }
}

// Gestisce la risposta alla domanda
function rispostaDomanda(risposta) {
    if (nDomande < domande.length && personeFiltrate.length > 0) {
        let chiave = mappaDomande[domande[nDomande]];

        // Filtra le persone in base alla risposta
        personeFiltrate = personeFiltrate.filter(persona => {
            if (risposta === 'Si') {
                return persona[chiave] === true;
            } else {
                return persona[chiave] !== true;
            }
        });

        // Controlla se rimane una sola persona
        if (personeFiltrate.length === 1) {
            let nomePersonaggio = personeFiltrate[0].nomeCompleto;
            document.getElementById('domanda').innerText = 'Il personaggio che stai pensando è: ' + nomePersonaggio;
            return; // Termina la funzione
        }

        // Incrementa il numero di domande e mostra la prossima
        nDomande++;
        mostraDomanda();
    }
}

// Avvia il gioco quando la pagina è pronta
document.addEventListener('DOMContentLoaded', function () {
    mostraDomanda();
});