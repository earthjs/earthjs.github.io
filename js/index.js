var p = earthjs({width: 700, height: 500});
p.register(earthjs.plugins.graticulePlugin());
p.register(earthjs.plugins.autorotatePlugin(10));
p.register(earthjs.plugins.worldPlugin('./d/world-110m.json'));
p.ready(function(){
    p.svgDraw();

})
