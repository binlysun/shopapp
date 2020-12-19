(function(doc, win) {
        var docEL = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function() {
                var clientWidth = docEL.clientWidth;
                if (!clientWidth) return;
                docEL.style.fontSize = 15 * (clientWidth / 320) + "px";
            };
        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false)
        doc.addEventListener("DOMContentLoaded", recalc, false)
    }

)(document, window);