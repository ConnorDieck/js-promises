const baseURL = 'http://deckofcardsapi.com/api/deck'

//1
// $.getJSON(`${baseURL}/new/shuffle/?deck_count=1`)
//     .then(data => {
//     console.log("Deck Shuffled");
//     return $.getJSON(`${baseURL}/${data.deck_id}/draw/?count=1`)
//     })
//     .then(resp => {
//         let card = resp.cards[0];
//         console.log(`${card.value} of ${card.suit}`)
//     })

//2
// const cards = [];
// $.getJSON(`${baseURL}/new/shuffle/?deck_count=1`)
//     .then(data => {
//     console.log("Deck Shuffled");
//     return $.getJSON(`${baseURL}/${data.deck_id}/draw/?count=1`);
//     })
//     .then(resp1 => {
//         cards.push(resp1.cards[0]);
//         return $.getJSON(`${baseURL}/${resp1.deck_id}/draw/?count=1`);
//     })
//     .then(resp2 => {
//         cards.push(resp2.cards[0]);
//         // console.log(cards);
//         cards.forEach(card => {
//             console.log(`${card.value} of ${card.suit}`);
//         })
//     })

//3
let deckId = null;
let $btn = $('button');

$.getJSON(`${baseURL}/new/shuffle/?deck_count=1`).then(data => {
    deckId = data.deck_id;
    $btn.show();
})

$btn.on('click', function () {
    $.getJSON(`${baseURL}/${deckId}/draw/?count=1`)
        .then(data => {
            console.log(data.remaining);
            let $cardImg = $(`<img src="${data.cards[0].image}"></img>`)
            $('#cards').append($cardImg)
            if (data.remaining === 0) $btn.remove();
        });
})