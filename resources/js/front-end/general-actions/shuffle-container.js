import { rearrangeArray } from "../setup/shuffle.js"
import { removeImages } from "../image-logic/remove-images.js";
import { deck, deck_html, prizes, prizes_html } from "../setup/initialization.js";
import { oppDeck, oppDeck_html, oppPrizes, oppPrizes_html } from "../setup/opp-initialization.js";

export function triggerShufflePopup(){
    const popup = document.getElementById('shufflePopup');
    popup.style.display = 'block';
}

export function shuffleContainer(user, containerId, indices){
    let container;
    let container_html;
    if (user === 'self'){
        if (containerId === 'deck'){
            container = deck;
            container_html = deck_html;
        } else {
            container = prizes;
            container_html = prizes_html;
        }
    } else {
        if (containerId === 'deck'){
            container = oppDeck;
            container_html = oppDeck_html
        } else {
            container = oppPrizes;
            container_html = oppPrizes_html
        }
    }
    removeImages(container_html);

    container.cards = rearrangeArray(container.cards, indices);

    for (let i = 0; i < container.count; i++){
        container_html.appendChild(container.cards[i].image);
    };
    
    shufflePopup.style.display = "none";
}