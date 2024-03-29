const urlParams = new URLSearchParams(window.location.search);
const gameURL = urlParams.get('game');
fetch('data.json')
    .then(response => response.json()) // Parse the data to a JavaScript object
    .then(response => {
        const game = response.games.find(game => game.game_url === gameURL);
        document.getElementById("game-area").setAttribute("src", game?.url);
        document.getElementById("game-title").textContent = game?.name;
        var fullScreen = document.getElementById("open-full-screen");
        if (game?.lock_full_screen) {
            fullScreen.style.display = "none";
        }

        //Load the popular games
        const trendingContainer = document.querySelector('.trending-games-container');
        const trendingGames = response.games.sort((a,b) => b.order - a.order)?.slice(0,12);
        appendItems(trendingGames, trendingContainer);
    }).catch(error => console.error('Error:', error));
