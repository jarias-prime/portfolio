<template>
  <div>

    <q-page-container>
      <q-page>
        <!-- Banner Map -->
        <div id='map'></div>

        <!-- Contact Details -->
        <p class="rs-fs-26 mt-1 pos-center">Thanks for taking the time to reach out. How can I help you today?</p>

        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-6 p-2">
            <q-card class="get-in-touch">
              <div class="col-xs-12 col-sm-12 col-md-12 teal">
                <p class="rs-fs-18 white-text p-1 pos-center">Get In Touch</p>
              </div>
              <div class="divider-art divider-art-icon">
                <div class="shadow"></div>
              </div>
              <q-card-section>
                <div class="row">
                  <div class="col-xs-12 col-sm-12 col-md-12 p-1">
                    <q-avatar
                      class="contact-icons inline"
                      color="teal"
                      text-color="white"
                      icon="email"
                      style="margin-right: 10px"
                    />
                    <p class="rs-fs-14 inline">root.jarias@gmail.com</p>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-12 p-1">
                    <q-avatar
                      class="contact-icons inline"
                      color="teal"
                      text-color="white"
                      icon="phone"
                      style="margin-right: 10px"
                    />
                    <p class="rs-fs-14 inline">0921-698-0972</p>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-6 p-2">
            <q-card class="inquire">
              <div class="col-xs-12 col-sm-12 col-md-12 teal">
                <p class="rs-fs-18 white-text p-1 pos-center">Have a question? Please inquire below</p>
              </div>
              <div class="divider-art divider-art-icon">
                <div class="shadow"></div>
              </div>
              <q-card-section>
                <form @submit.prevent.stop="developers_authentication">
                  <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-6 p-1">
                      <p class="rs-fs-16 black-light-text font-weight-bold">Name</p>
                      <q-input
                        clearable
                        filled
                        color="teal"
                        v-model="name"
                      />
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-6 p-1">
                      <p class="rs-fs-16 black-light-text font-weight-bold">Email</p>
                      <q-input
                        clearable
                        filled
                        color="teal"
                        v-model="email"
                      />
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-12 p-1">
                      <p class="rs-fs-16 black-light-text font-weight-bold">Message</p>
                      <q-input
                        v-model="message"
                        filled
                        color="teal"
                        type="textarea"
                      />
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-12 p-1 pos-center">
                      <q-btn class="border-teal border-rd-20 hover-teal width-50 height-80 font-weight-bold">Submit</q-btn>
                    </div>
                  </div>
                </form>
              </q-card-section>
            </q-card>
          </div>
        </div>

      </q-page>
    </q-page-container>

  </div>
</template>

<style>
#map {
  height: calc(10em + 30vmin);
  width: 100%;
  border-bottom-left-radius: 700em 100em;
  border-bottom-right-radius: 700em 100em;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.e-marker {
  transform-origin: bottom center;
  cursor: pointer;
}

.e-marker__marker {
  fill: #fff;
}

.e-marker__icon {
  fill: #fff;
}

.e-marker__image {
  transform: scale(0);
  transform-origin: 50% 50%;
}

.e-marker__circle {
  display: none;
}

.e-marker__text {
  font-size: 12px;
  font-family: brandon-grotesque, sans-serif;
  text-align: center;
  opacity: 0;
  color: #fff;
  fill: #fff;
  transform-origin: 50% 50%;
  alignment-baseline: middle;
  text-anchor: middle;
}

.contact-icons {
  height: calc(0.5em + 3vmin);
  width: calc(0.5em + 3vmin);
}

.get-in-touch {
  width: 80%;
  margin: auto;
}

.inquire {
  width: 80%;
  margin: auto;
}

.divider-art-icon {
  margin: auto;
  width: 100%;
  position: relative;
}

.divider-art {
  width: 80%;
}

.divider-art-icon .shadow {
  overflow: hidden;
  margin-top: -1.2em;
  height: 20px;
}

.divider-art-icon .shadow:after {
  content: "";
  display: block;
  margin: -25px auto 0;
  width: 100%;
  height: 25px;
  border-radius: 125px/12px;
  box-shadow: 0 0 20px black;
}
</style>

<script>
import mapboxgl from 'mapbox-gl'

export default {
  mounted () {
    initGeolocation()

    // Map Configuration
    mapboxgl.accessToken =
      'pk.eyJ1Ijoicm9vdC1qYXJpYXMiLCJhIjoiY2syazFkcmFhMTVrZTNubnZxOGRqd2s3ZCJ9.NkoN240EQVxj84Fbr2ZEaw'
    let map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v10',
      zoom: 3,
      center: [121.0173248, 14.594253]
    })

    // Initialize geolocation
    function initGeolocation () {
      if (navigator.geolocation) {
        // Call getCurrentPosition with success and failure callbacks
        navigator.geolocation.getCurrentPosition(success, fail)
      } else {
        alert('Sorry, your browser does not support geolocation services.')
      }
    }

    // Make a directions request
    function getRoute (end) {
      // make a directions request using driving profile
      let start = [121.017000, 14.671028]
      let url = 'https://api.mapbox.com/directions/v5/mapbox/driving/' + start[0] + ',' + start[1] + ';' +
        end[0] +
        ',' + end[1] + '?steps=true&geometries=geojson&access_token=' + mapboxgl.accessToken

      // make an XHR request https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
      let req = new XMLHttpRequest()
      req.responseType = 'json'
      req.open('GET', url, true)
      req.onload = function () {
        let data = req.response.routes[0]
        let route = data.geometry.coordinates
        let geojson = {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: route
          }
        }
        // if the route already exists on the map, reset it using setData
        if (map.getSource('route')) {
          map.getSource('route').setData(geojson)
        } else {
          map.addLayer({
            id: 'route',
            type: 'line',
            source: {
              type: 'geojson',
              data: {
                type: 'Feature',
                properties: {},
                geometry: {
                  type: 'LineString',
                  coordinates: geojson
                }
              }
            },
            layout: {
              'line-join': 'round',
              'line-cap': 'round'
            },
            paint: {
              'line-color': '#009688',
              'line-width': 5,
              'line-opacity': 0.75
            }
          })
        }
      }
      req.send()
    }

    function success (position) {
      if (position !== null || position !== undefined) {
        // Current Longitude and Latitude
        let long = position.coords.longitude
        let lat = position.coords.latitude

        // An arbitrary
        let destination = [121.017000, 14.671028]

        map.on('load', function () {
          // Initialize detination
          getRoute(destination)

          map.loadImage('https://a.tiles.mapbox.com/v4/marker/pin-m+000.png?access_token=pk.eyJ1IjoicWVydGlzIiwiYSI6IjNjMnFWaWcifQ.T3wJBXWarfTog8c-ooB5Ig',
            function (error, image) {
              if (error) throw error
              map.addImage('map-marker', image)
              map.addSource('point', {
                'type': 'geojson',
                'data': {
                  'type': 'FeatureCollection',
                  'features': [
                    {
                      'type': 'Feature',
                      'geometry': {
                        'type': 'Point',
                        'coordinates': destination
                      }
                    }
                  ]
                }
              })
              map.addLayer({
                'id': 'points',
                'type': 'symbol',
                'source': 'point',
                'layout': {
                  'icon-image': 'map-marker',
                  'icon-size': 1
                }
              })
            }
          )

          // let coords = [long, lat]
          let coords = [120.8298843, 15.4117242]

          let end = {
            type: 'FeatureCollection',
            features: [{
              type: 'Feature',
              properties: {},
              geometry: {
                type: 'Point',
                coordinates: coords
              }
            }]
          }

          if (map.getLayer('end')) {
            map.getSource('end').setData(end)
          } else {
            map.addLayer({
              id: 'end',
              type: 'circle',
              source: {
                type: 'geojson',
                data: {
                  type: 'FeatureCollection',
                  features: [{
                    type: 'Feature',
                    properties: {},
                    geometry: {
                      type: 'Point',
                      coordinates: coords
                    }
                  }]
                }
              },
              paint: {
                'circle-radius': 10,
                'circle-color': '#f30'
              }
            })
          }
          getRoute(coords)

          // // Map fit 2 point coordinates
          let geojson = {
            'type': 'FeatureCollection',
            'features': [{
              'type': 'Feature',
              'geometry': {
                'type': 'LineString',
                'properties': {},
                'coordinates': [
                  [120.8298843, 15.4117242],
                  [long, lat]
                ]
              }
            }]
          }

          // Geographic coordinates of the LineString
          let coordinates = geojson.features[0].geometry.coordinates

          // Pass the first coordinates in the LineString to `lngLatBounds` &
          // wrap each coordinate pair in `extend` to include them in the bounds
          // result. A letiation of this technique could be applied to zooming
          // to the bounds of multiple Points or Polygon geomteries - it just
          // requires wrapping all the coordinates with the extend method.
          let bounds = coordinates.reduce(function (bounds, coord) {
            return bounds.extend(coord)
          }, new mapboxgl.LngLatBounds(coordinates[0], coordinates[0]))

          map.fitBounds(bounds, {
            padding: 80
          })
        })
      } else {
        fail()
      }
    }

    function fail () {
      alert('Could not obtain location')
    }
  },
  data () {
    return {
      name: '',
      email: '',
      message: ''
    }
  }

}
</script>
