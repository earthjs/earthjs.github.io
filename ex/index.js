var g = earthjs({width: 1200, height: 950, transparent: true, padding: 80});
g.register(earthjs.plugins.eQuakeApp());
g.ready(function() {
    g.create();
});
