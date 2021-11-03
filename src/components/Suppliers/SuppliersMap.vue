<template>
    <h1>Suppliers Map :</h1>

    <div id="map"></div>

</template>

<script>
// DON'T load Leaflet components here!
// Its CSS is needed though, if not imported elsewhere in your application.

import leaflet from "leaflet";
import { onMounted } from "@vue/runtime-core";

export default {
    name: "SuppliersMap",

    setup() {
        let mymap;

        onMounted(() => {
            mymap = leaflet.map('map').setView([51.505, -0.09], 13);

            leaflet.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidmlyZ2lueSIsImEiOiJja3ZpMzd0ZWowMW9sMndudmNybnpkd3FoIn0.8jmpbCKzbnv3hdAvMuyaLQ', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
                id: 'mapbox/streets-v11',
                tileSize: 512,
                zoomOffset: -1,
                accessToken: 'pk.eyJ1IjoidmlyZ2lueSIsImEiOiJja3ZpMzd0ZWowMW9sMndudmNybnpkd3FoIn0.8jmpbCKzbnv3hdAvMuyaLQ'
            }).addTo(mymap);
        })

    }//,
  // async beforeMount() {
  //   // HERE is where to load Leaflet components!
  //   const { circleMarker } = await import("leaflet/dist/leaflet-src.esm");
  //
  //   // And now the Leaflet circleMarker function can be used by the options:
  //   this.geojsonOptions.pointToLayer = (feature, latLng) =>
  //       circleMarker(latLng, { radius: 8 });
  //   this.mapIsReady = true;
  // },
};
</script>

<style>

#map {
    height: 100vh;
}

</style>