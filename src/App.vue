<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@import "./assets/css/global.css";
</style>

<script>
import { viewersRef } from '@/components/firebaseConfig'

export default {
  mounted () {
    this.get_device_data()
  },
  methods: {
    // viewersRef: viewersRef,
    get_device_data: function () {
      // Check if browser supports local storage
      if (typeof (Storage) !== 'undefined') {
        // Validate if unique key is not defined
        if (localStorage.getItem('unique-key') === null) {
          // Set device unique-key
          let date = new Date()
          let components = [
            date.getYear(),
            date.getMonth(),
            date.getDate(),
            date.getHours(),
            date.getMinutes(),
            date.getSeconds(),
            date.getMilliseconds()
          ]
          let key = components.join('')
          localStorage.setItem('unique-key', key)

          // Read from firebase database
          let keyArray = []
          viewersRef.on('value', function (snapshot) {
            snapshot.forEach(function (data) {
              let childData = data.val()
              keyArray.push(childData.uniqueKey)
            })
          })

          setTimeout(() => {
            // Check if unique key exist
            let localKey = localStorage.getItem('unique-key')
            if (keyArray.indexOf(localKey) === -1) {
              // Get device informations
              let module = {
                options: [],
                header: [navigator.platform, navigator.userAgent, navigator.appVersion, navigator.vendor, window.opera],
                dataos: [
                  { name: 'Windows Phone', value: 'Windows Phone', version: 'OS' },
                  { name: 'Windows', value: 'Win', version: 'NT' },
                  { name: 'iPhone', value: 'iPhone', version: 'OS' },
                  { name: 'iPad', value: 'iPad', version: 'OS' },
                  { name: 'Kindle', value: 'Silk', version: 'Silk' },
                  { name: 'Android', value: 'Android', version: 'Android' },
                  { name: 'PlayBook', value: 'PlayBook', version: 'OS' },
                  { name: 'BlackBerry', value: 'BlackBerry', version: '/' },
                  { name: 'Macintosh', value: 'Mac', version: 'OS X' },
                  { name: 'Linux', value: 'Linux', version: 'rv' },
                  { name: 'Palm', value: 'Palm', version: 'PalmOS' }
                ],
                dataBrowser: [
                  { name: 'Chrome', value: 'Chrome', version: 'Chrome' },
                  { name: 'Firefox', value: 'Firefox', version: 'Firefox' },
                  { name: 'Safari', value: 'Safari', version: 'Version' },
                  { name: 'Internet Explorer', value: 'MSIE', version: 'MSIE' },
                  { name: 'Opera', value: 'Opera', version: 'Opera' },
                  { name: 'BlackBerry', value: 'CLDC', version: 'CLDC' },
                  { name: 'Mozilla', value: 'Mozilla', version: 'Mozilla' }
                ],
                init: function () {
                  let agent = this.header.join(' ')
                  let os = this.matchItem(agent, this.dataos)
                  let browser = this.matchItem(agent, this.dataBrowser)

                  return { os: os, browser: browser }
                },
                matchItem: function (string, data) {
                  let i = 0
                  let j = 0
                  // let html = ''
                  let regex
                  let regexv
                  let match
                  let matches
                  let version

                  for (i = 0; i < data.length; i += 1) {
                    regex = new RegExp(data[i].value, 'i')
                    match = regex.test(string)
                    if (match) {
                      regexv = new RegExp(data[i].version + '[- /:;]([\\d._]+)', 'i')
                      matches = string.match(regexv)
                      version = ''
                      if (matches) { if (matches[1]) { matches = matches[1] } }
                      if (matches) {
                        matches = matches.split(/[._]+/)
                        for (j = 0; j < matches.length; j += 1) {
                          if (j === 0) {
                            version += matches[j] + '.'
                          } else {
                            version += matches[j]
                          }
                        }
                      } else {
                        version = '0'
                      }
                      return {
                        name: data[i].name,
                        version: parseFloat(version)
                      }
                    }
                  }
                  return { name: 'unknown', version: 0 }
                }
              }

              let e = module.init()

              // Get current date and time
              let today = new Date()
              let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
              let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
              let dateTime = date + ' ' + time

              // Insert to firebase database
              viewersRef.push({
                uniqueKey: localKey,
                // country: device_data.geoplugin_city,
                // city: device_data.geoplugin_city,
                // latitude: device_data.geoplugin_city,
                // longitude: device_data.geoplugin_city,
                osName: e.os.name,
                osVesion: e.os.version,
                browserName: e.browser.name,
                browserVersion: e.browser.version,
                userAgent: navigator.userAgent,
                appVersion: navigator.appVersion,
                platform: navigator.platform,
                vendor: navigator.vendor,
                dateVisit: dateTime
              }).then(function (e) {
                console.log('Document successfully written!')
              })
                .catch(function (error) {
                  console.error('Error writing document: ', error)
                })
            } else {
              console.log('%c Device already exist', 'color: teal;')
            }
          }, 2000)
        } else {
          console.log('%c Unique key exist', 'color: teal')
        }
      } else {
        console.log('%c Local storage does not support this browser', 'color: #f44336')
      }
    }
  }
}
</script>
