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
            this.eQuakeApp.mag(5);
            this.worldCanvas.data({world});
        },
        onInit() {
            this.register(earthjs.plugins.commonPlugins());
            this.register(earthjs.plugins.pingsCanvas());
            this.register(earthjs.plugins.dotsCanvas());
            this.register(earthjs.plugins.barPlugin());
            this.register(earthjs.plugins.barTooltipPlugin());
            this.commonPlugins.addChecker('showPings:Pings:showPings'.split(':'));
            this.commonPlugins.addChecker('showBars:Bars:showBars'.split(':'));
            this.commonPlugins.addChecker('showDots:Dots:showDots'.split(':'));
            var tt = this.barTooltipPlugin;
            this.barTooltipPlugin.onShow = function(d) {
                var {mag, tsunami, eventtime, place, detail} = d.properties;
                if (!eventtime) {
                    d3.json(detail, function(error, data) {
                        var {eventtime} = data.properties.products.origin[0].properties;
                        d.properties.eventtime = eventtime;
                        tt.show({properties: {mag,tsunami,eventtime,place}});
                    });
                }
                return {properties: {mag,tsunami,eventtime,place}};
            }
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
