(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
})(jQuery);

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
