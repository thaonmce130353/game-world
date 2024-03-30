let categoryGames = [];
var gamesPerPage = 18;

const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category');
let currentPage = urlParams.get('page') ?? 1;
document.getElementById("category-title").textContent = mapCategoryTitle(category?.toLowerCase());
fetch('data.json')
    .then(response => response.json()) // Parse the data to a JavaScript object
    .then(response => {
        const games = response.games;
        categoryGames = games?.filter(game => {
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
            displayGames();
            displayPagination();
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

function displayGames() {
    var start = (currentPage - 1) * gamesPerPage;
    var end = start + gamesPerPage;
    var gamesToDisplay = categoryGames.slice(start, end);

    const categoryContainer = document.querySelector('.games-list-container');

    $('.games-list-container').empty();

    appendItems(gamesToDisplay, categoryContainer);
}

function displayPagination() {
    var totalPages = Math.ceil(categoryGames.length / gamesPerPage);

    var pagination = $('#pagination');
    pagination.empty();

    $('<li>').addClass('page-item').append($('<a>').addClass('page-link').attr('href', `#`).html('<i class="fas fa-chevron-left"></i>').click(function(e) {
        e.preventDefault();
        if (currentPage > 1) {
            currentPage--;
            displayGames();
            displayPagination();
        }
    })).appendTo(pagination);

    for (var i = 1; i <= totalPages; i++) {
        $('<li>').addClass(i === currentPage ? 'page-item active' : 'page-item').append($('<a>').addClass('page-link').attr('href', `#`).text(i).click(function(e) {
            e.preventDefault();
            currentPage = parseInt($(this).text());
            displayGames();
            displayPagination();
        })).appendTo(pagination);
    }

    $('<li>').addClass('page-item').append($('<a>').addClass('page-link').attr('href', '#').html('<i class="fas fa-chevron-right"></i>').click(function(e) {
        e.preventDefault();
        if (currentPage < totalPages) {
            currentPage++;
            displayGames();
            displayPagination();
        }
    })).appendTo(pagination);
}

