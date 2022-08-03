let gameSquares = document.querySelectorAll('.board-square:not(.white)');
let redPieces = document.querySelectorAll('.red-piece');
let whitePieces = document.querySelectorAll('.white-piece')

console.log(redPieces);
console.log(whitePieces);
console.log(gameSquares);

for (let i = 0; i < redPieces.length; i++){
    redPieces[i].addEventListener('click', () => {
        console.log(i);
        for(let i = 0; i < gameSquares.length; i++){
            if(gameSquares[i].classList.contains('selected')){
                gameSquares[i].classList.remove('selected');
            }
        }
        console.log(gameSquares[i]);
        gameSquares[i + 3].classList.add('selected');
        gameSquares[i + 4].classList.add('selected');
    })
}