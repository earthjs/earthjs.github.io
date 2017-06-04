var g = earthjs({width: 1200, height: 900});
g.register(earthjs.plugins.eQuakeApp());
g.ready(function() {
    g.svgDraw();
});
