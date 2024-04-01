// Il tuo compito è creare un sito e-commerce per Smartphones. 
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun prodotto. 
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS


//ESERCIZI IN JS


// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
originalTitle = document.getElementById("titolo").innerHTML


function changeTitle(isMouseOver) {
    if (isMouseOver) {
        document.getElementById("titolo").innerHTML = "Extraordinary digital experiences"
        document.getElementById("titolo").style.color = "#bd8c7d"
    } else {
        document.getElementById("titolo").innerHTML = originalTitle
        document.getElementById("titolo").style.color = "white"
    }
}


// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina

function changeBg(isMouseOver) {
    if (isMouseOver) {
        document.body.style.backgroundColor = "#bd8c7d"
    } else {
        document.body.style.backgroundColor = "#8e8e90"
    }
}

// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio

function changeAddress() {
    document.getElementById("address").innerHTML = "<br>Digital Wonders Store, <br>456 Elm Street, <br>Springfield, MA <br>54321"
}


// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella

function addClass(){
    amazonLinks = document.getElementsByTagName("a")
    for(i = 0; i < amazonLinks.length; i++) {
        amazonLinks[i].style.color = "lightsalmon"
    }
}

// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine

function imgClass(){
    productImage = document.getElementsByTagName("img")
    for(i = 0; i < productImage.length; i++) {
        productImage[i].style.visibility = "hidden"
    }
}

// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata
//HO UTILIZZATO COLORI CHE SI ADEGUASSERO BENE ALLO STILE DELLA PAGINA

function priceColorClass(){
    priceColor = document.getElementsByClassName("price")
    colors = ["lightcoral", "lightblue", "mocassin", "wheat", "khaki", "peru"]
    for(i = 0; i < priceColor.length; i++) {
        randomColor =  Math.floor(Math.random() * colors.length)
        priceColor[i].style.color = colors[randomColor]
    }
}

priceColorClass()