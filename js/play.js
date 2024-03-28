const urlParams = new URLSearchParams(window.location.search);
const gameURL = urlParams.get('game');
fetch('data.json')
    .then(response => response.json()) // Parse the data to a JavaScript object
    .then(response => {
        const game = response.games.find(game => game.game_url === gameURL);
        document.getElementById("game-area").setAttribute("src", game?.url);
        document.getElementById("game-title").textContent = game?.name;
        var fullScreen = document.getElementById("open-full-screen");
        if (game?.is_full_screen) {
            fullScreen.style.display = "none";
        }
    }).catch(error => console.error('Error:', error));
