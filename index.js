var button = document.querySelector('button');

button.addEventListener('click', function() {

    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;

    var toPlayer1 = document.querySelector('.img1');
    var toPlayer2 = document.querySelector('.img2');

    toPlayer1.setAttribute('src', `dice${dice1}.png`);
    toPlayer2.setAttribute('src', `dice${dice2}.png`);
    console.log(dice1)

    if (dice1 > dice2) {
        var results = document.querySelector('h1');
        results.innerHTML = `<u>Dice #1 WINS with ${dice1}</u>`

        var player1Rest = document.querySelector('.p1').innerHTML = `<strike>You Win!</strike>`
        var player2Rest = document.querySelector('.p2').innerText = `You lose!`

    } else if (dice2 > dice1) {
        var results = document.querySelector('h1');
        results.innerHTML = `<u>Dice #2 WINS with ${dice2}</u>`

        var player1Rest = document.querySelector('.p1').innerText = `You lose!`
        var player2Rest = document.querySelector('.p2').innerHTML = `<strike>You Win!</strike>`
    } else if (dice2 == dice1) {
        var results = document.querySelector('h1');
        results.innerHTML = `<u>Draw!</u>`

        var player1Rest = document.querySelector('.p1').innerHTML = `<strike>Draw!</strike>`
        var player2Rest = document.querySelector('.p2').innerHTML = `<strike>Draw!</strike>`
    }
})