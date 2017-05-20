// https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson
// https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson
// https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php
const eQuakeApp = () => {
    const _ = {world: null, equake: null};
    return {
        name: 'eQuakeApp',
        urls: [
            './d/world-110m.json',
            'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson',
        ],
        onReady(err, world, equake) {
            _.world = world;
            _.equake = equake;
            this.eQuakeApp.mag(3);
            this.worldCanvas.data({world});
        },
        onInit() {
            this.register(earthjs.plugins.commonPlugins());
            this.register(earthjs.plugins.pingsCanvas());
            this.register(earthjs.plugins.dotsCanvas());
            this.register(earthjs.plugins.barPlugin());
            this.commonPlugins.addChecker('showPings:Pings:showPings'.split(':'));
            this.commonPlugins.addChecker('showDots:EQuake:showDots'.split(':'));
        },
        mag(mag) {
            const features = _.equake.features.filter(d => d.properties.mag>=mag);
            this.barPlugin.data({features});
            this.dotsCanvas.data({features});
            this.pingsCanvas.data({features});
            this.svgDraw();
        },
    }
}
earthjs.plugins.eQuakeApp = eQuakeApp;

// countryNames
