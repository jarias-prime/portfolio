<template>
  <div>
    <q-layout view="lHh lpr lFf">
      <!-- Header -->
      <CMPT-Header />

      <q-page-container>
        <q-page>
          <!-- Banner Map -->
          <div id='map'></div>

          <!-- Contact Details -->
          <p class="r-fs-26 mt-1 pos-center">Thanks for taking the time to reach out. How can I help you today?</p>

          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-6 p-2">
              <q-card class="my-card">
                <div class="col-xs-12 col-sm-12 col-md-12 teal">
                  <p class="r-fs-18 white-text p-1 pos-center">Get In Touch</p>
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
                      <p class="r-fs-14 inline">root.jarias@gmail.com</p>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-12 p-1">
                      <q-avatar
                        class="contact-icons inline"
                        color="teal"
                        text-color="white"
                        icon="phone"
                        style="margin-right: 10px"
                      />
                      <p class="r-fs-14 inline">0921-698-0972</p>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6 p-2">
              <q-card class="my-card">
                <div class="col-xs-12 col-sm-12 col-md-12 teal">
                  <p class="r-fs-18 white-text p-1 pos-center">Have a question? Please enquire below</p>
                </div>
                <div class="divider-art divider-art-icon">
                  <div class="shadow"></div>
                </div>
                <q-card-section>
                  <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-6 p-1">
                      <p class="r-fs-16 black-light-text font-weight-bold">Name</p>
                      <q-input
                        clearable
                        filled
                        color="teal"
                        v-model="name"
                      />
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-6 p-1">
                      <p class="r-fs-16 black-light-text font-weight-bold">Email</p>
                      <q-input
                        clearable
                        filled
                        color="teal"
                        v-model="email"
                      />
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-12 p-1">
                      <p class="r-fs-16 black-light-text font-weight-bold">Message</p>
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
                </q-card-section>
              </q-card>
            </div>
          </div>

          <!-- Footer -->
          <CMPT-Footer />
        </q-page>
      </q-page-container>
    </q-layout>

    <!-- Dialog - Start a Project Dialog -->
    <CMPT-StartProjectDialog />

  </div>
</template>

<style>
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
export default {
  mounted () {
    mapboxgl.accessToken = 'pk.eyJ1Ijoicm9vdC1qYXJpYXMiLCJhIjoiY2syazFkcmFhMTVrZTNubnZxOGRqd2s3ZCJ9.NkoN240EQVxj84Fbr2ZEaw'
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v10',
      zoom: 12,
      center: [121.0169715, 14.6709527]
    })

    map.on('load', function () {
      map.loadImage('https://upload.wikimedia.org/wikipedia/commons/0/0a/Marker_location.png', function (error, image) {
        if (error) throw error
        map.addImage('map-icon', image)
        map.addLayer({
          'id': 'points',
          'type': 'symbol',
          'source': {
            'type': 'geojson',
            'data': {
              'type': 'FeatureCollection',
              'features': [{
                'type': 'Feature',
                'geometry': {
                  'type': 'Point',
                  'coordinates': [121.017000, 14.671028]
                }
              }]
            }
          },
          'layout': {
            'icon-image': 'map-icon',
            'icon-size': 1
          }
        })
      })
    })
  },
  data () {
    return {
      // Inputs returned data
      name: '',
      email: '',
      message: ''
    }
  }

}
</script>

<style scoped>
#map {
  height: calc(10em + 30vmin);
  width: 100%;
  border-bottom-left-radius: 700em 100em;
  border-bottom-right-radius: 700em 100em;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.contact-icons {
  height: calc(0.5em + 3vmin);
  width: calc(0.5em + 3vmin);
}
</style>
