var g = earthjs();
g.register(earthjs.plugins.graticuleSvg());
g.register(earthjs.plugins.autorotatePlugin(10));
g.register(earthjs.plugins.worldSvg('/d/world-110m.json'));
g.ready(function(){
    g.create();
})
