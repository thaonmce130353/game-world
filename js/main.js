var games = [];
fetch('data.json')
    .then(response => response.json()) // Parse the data to a JavaScript object
    .then(response => {
        games = response.games;
        //Load the new games
        const newGamesContainer = document.querySelector('.new-games-container');
        const newGames = games?.sort((a,b) => b.id - a.id)?.slice(0,18);
        appendItems(newGames, newGamesContainer);

        //Load the popular games
        const trendingContainer = document.querySelector('.trending-games-container');
        const trendingGames = games.sort((a,b) => b.order - a.order)?.slice(0,18);
        appendItems(trendingGames, trendingContainer);
    }).catch(error => console.error('Error:', error));

