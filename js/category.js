var games = [];
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category');
document.getElementById("category-title").textContent = mapCategoryTitle(category?.toLowerCase());
fetch('data.json')
    .then(response => response.json()) // Parse the data to a JavaScript object
    .then(response => {
        games = response.games;
        //Load the new games
        const categoryContainer = document.querySelector('.games-list-container');
        const categoryGames = games?.filter(game => {
            const categories = game.categories?.split(',')?.map(category => category.toLowerCase());
            if (category === 'New' || category === 'Trending') {
                return true;
            }

            return categories?.includes(category?.toLowerCase());
        })?.sort((a,b) => {
            if (category === 'New') {
                return b.id - a.id;
            }
            return b.order - a.order;
        });

        if (categoryGames.length === 0) {
            document.getElementById("no-games").style.display = "block";
        } else {
            appendItems(categoryGames, categoryContainer);
        }
    }).catch(error => console.error('Error:', error));

function mapCategoryTitle(gameUrl) {
    switch (gameUrl) {
        case 'car':
            return 'Car Games';
        case 'skill':
            return 'Skill Games';
        case 'running':
            return 'Running Games';
        case '3d':
            return '3D Games';
        case 'shooting':
            return 'Shooting Games';
        case 'multiplayer':
            return 'Multiplayer Games';
        case 'racing':
            return 'Racing Games';
        case 'moto':
            return 'Moto Games';
        case 'stickman':
            return 'Stickman Games';
        case 'adventure':
            return 'Adventure Games';
        case 'puzzle':
            return 'Puzzle Games';
        case 'sports':
            return 'Sports Games';
        case 'new':
            return 'New Games';
        case 'trending':
            return 'Trending Games';
    }
}

