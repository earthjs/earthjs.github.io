var g = earthjs();
g.register(earthjs.plugins.graticulePlugin());
g.register(earthjs.plugins.autorotatePlugin(10));
g.register(earthjs.plugins.worldPlugin('/d/world-110m.json'));
g.ready(function(){
    g.svgDraw();
})
