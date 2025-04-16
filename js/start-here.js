$(document).ready(function () {
    console.log("start-here.js loaded ✅");

    $('.seasons a').click(function (e) {
        e.preventDefault();

        const season = $(this).attr("href").toLowerCase();
        console.log("Season clicked:", season);

        $('link[rel="stylesheet"]').first().attr('href', `css/${season}.css`);

        $('#logo').attr('src', `images/${season}.gif`);

        
        $('#wear').attr('src', `images/${season}-wear.jpg`);

        
        const slogans = {
            spring: "Leap into our Spring Wear!",
            summer: "Sizzle in Summer Style!",
            fall: "Fall into Fashion!",
            winter: "Wrap Up with Winter Warmth!"
        };

        $('h3').text(slogans[season] || "Outfitter for All Seasons!");
    });
});
