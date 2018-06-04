/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'access_time': '&#xe8b5;',
            'query_builder': '&#xe8b5;',
            'schedule': '&#xe8b5;',
            'account_circle': '&#xe853;',
            'android': '&#xe859;',
            'arrow_forward': '&#xe5c8;',
            'bubble_chart': '&#xe6dd;',
            'check': '&#xe5ca;',
            'copyright': '&#xe90c;',
            'dehaze': '&#xe3c7;',
            'error': '&#xe000;',
            'event': '&#xe24f;',
            'insert_invitation': '&#xe24f;',
            'extension': '&#xe87b;',
            'favorite': '&#xe87d;',
            'fingerprint': '&#xe90d;',
            'folder': '&#xe2c7;',
            'folder_open': '&#xe2c8;',
            'grain': '&#xe3ea;',
            'high_quality': '&#xe024;',
            'home': '&#xe88a;',
            'insert_emoticon': '&#xe420;',
            'mood': '&#xe420;',
            'tag_faces': '&#xe420;',
            'keyboard_arrow_left': '&#xe314;',
            'keyboard_arrow_right': '&#xe315;',
            'label': '&#xe892;',
            'label_outline': '&#xe893;',
            'loyalty': '&#xe89a;',
            'menu': '&#xe5d2;',
            'person': '&#xe7fd;',
            'remove_red_eye': '&#xe8f4;',
            'visibility': '&#xe8f4;',
            'rss_feed': '&#xe0e5;',
            'sentiment_dissatisfied': '&#xe811;',
            'sentiment_neutral': '&#xe812;',
            'sentiment_satisfied': '&#xe813;',
            'sentiment_very_dissatisfied': '&#xe814;',
            'sentiment_very_satisfied': '&#xe815;',
            'toc': '&#xe8de;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/icon-/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
