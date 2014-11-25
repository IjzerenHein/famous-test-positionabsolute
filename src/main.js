/**
 * This Source Code is licensed under the MIT license. If a copy of the
 * MIT-license was not distributed with this file, You can obtain one at:
 * http://opensource.org/licenses/mit-license.html.
 *
 * @author: Hein Rutjes (IjzerenHein)
 * @license MIT
 * @copyright Gloey Apps, 2014
 */

/*global define, Please, console*/
/*eslint no-console:0 no-use-before-define:0*/

define(function(require) {

    //<webpack>
    require('famous-polyfills');
    require('famous/core/famous.css');
    require('./styles.css');
    require('./index.html');
    //</webpack>

    var Engine = require('famous/core/Engine');
    var Modifier = require('famous/core/Modifier');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var HeaderFooterLayout = require('famous/views/HeaderFooterLayout');
    var InputSurface = require('famous/surfaces/InputSurface');
    var Scrollview = require('famous/views/Scrollview');

    //
    // layout
    //
    var mainContext = Engine.createContext();
    var layout = new HeaderFooterLayout({
        footerSize: 50
    });
    mainContext.add(layout);

    //
    // input
    //
    var input = new InputSurface({
        placeholder: 'type here on iOS8 and Android..'
    });
    layout.footer.add(new Modifier({
        transform: Transform.translate(0, 0, 10)
    })).add(input);

    //
    // scrollview
    //
    var scrollView = new Scrollview();
    layout.content.add(scrollView);
    var surfaces = [];
    scrollView.sequenceFrom(surfaces);
    for (var i = 0; i < 20; i++) {
        var surface = new Surface({
            size: [undefined, 100],
            classes: ['surface'],
            content: 'surface'
        });
        surface.pipe(scrollView);
        surfaces.push(surface);
    }
});
