var games = [];
fetch('data.json')
    .then(response => response.json()) // Parse the data to a JavaScript object
    .then(response => {
        games = response.games;
        //Load the new games
        const newGamesContainer = document.querySelector('.new-games-container');
        const newGames = games.sort((a,b) => a.id - b.id);
        appendItems(newGames, newGamesContainer);

        //Load the popular games
        const trendingContainer = document.querySelector('.trending-games-container');
        const trendingGames = games.sort((a,b) => a.order - b.order);
        appendItems(trendingGames, trendingContainer);
    }).catch(error => console.error('Error:', error));

function appendItems(items, parentElement) {
    for (let item of items) {
        // Create a new div element for each item
        const div = document.createElement('div');
        div.className = 'col-lg-2 col-md-3 col-6 grid-3';

        // Set the inner HTML of the div to the item's properties
        div.innerHTML = `
                <a href="play.html?game=${item.game_url}">
                    <div class="game-item">
                        <div class="list-game">
                            <div class="list-thumbnail">
                                <img src="${item.image}" class="lazyload" alt="${item.name}">
                            </div>
                        </div>
                    </div>
                </a>`;

        // Append the div to the parent container
        parentElement.appendChild(div);
    }
}

