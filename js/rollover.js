/*eslint-env browser*/

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

var createRollover = function (img, secondUrl, secondAlt) {
    "use strict";
    var firstUrl, firstAlt, image;
    firstUrl = img.src;
    firstAlt = img.alt;
    image = new Image();
    image.src = secondUrl;
    var mouseover = function () {
        img.src = secondUrl;
        img.alt = secondAlt;
    };
    var mouseout = function () {
        img.src = firstUrl;
        img.alt = firstAlt;
    };
    evt.attach(img, "mouseover", mouseover);
    evt.attach(img, "mouseout", mouseout)
};

window.addEventListener("load", function () {
    "use strict";
    createRollover($("img1"), "images/wakeboard.jpg", "zak wakeboards with his boat");
    createRollover($("img2"), "images/race.jpg", "zak stays active  so he can race");
});