<template>
  <div>
    <q-page-container>
      <q-page>
        <!-- Banner Grettings -->
        <div
          id="banner-greetings"
          class="pos-relative"
        >
          <div class="pos-absolute-center white-text">
            <p class="font-weight-bold rs-fs-30">My Recent Work</p>
            <p class="rs-fs-20">Here are a few recent design projects. Want to see more? Email me.</p>
          </div>
        </div>

        <!-- Project Items -->
        <div class="row">
          <div class="col-xs-12 col-sm-4 col-md-3">
            <div class="project-rs-card">
              <div class="rs-card-header">
                <q-parallax
                  :height="180"
                  style="background-color: #26a9ee;"
                >
                  <template>
                    <div class="absolute column items-center">
                      <img src="https://websakay.web.app/components/images/logo-one.png" />
                    </div>
                  </template>
                </q-parallax>
              </div>
              <div class="rs-card-content">
                <div class="rs-card-title text-center font-weight-bold rs-fs-16">
                  <p>“QCPU SAKAY" – A Bus Transportation System</p>
                </div>
                <div class="rs-card-body rs-fs-12 mt-2">
                  <p>Good Ride Starts Here.</p>
                  <p>
                    QCPU Sakay is your best commuting buddy that let you commute with ease. Get an
                    all-in-one app that has Real Time Location Tracking with easy mode of payment.
                  </p>
                  <p>Just Ride, Locate, Tap and Scan to pay.</p>
                  <a
                    class="text-deco-none teal-text"
                    href="https://websakay.web.app/"
                    target="_blank"
                  >
                    <q-btn class="pos-absolute-center mt-3 border-teal border-rd-20 hover-teal">View Project</q-btn>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-4 col-md-3">
            <div class="project-rs-card">
              <div class="rs-card-header">
                <q-parallax :height="180">
                  <template v-slot:media>
                    <img src="http://www.servrevo.com/img/services/payroll-2.jpg" />
                  </template>
                  <template>
                    <div class="absolute column items-center">
                      <img
                        src="http://www.servrevo.com/img/servrevo-logo.png"
                        style="width: 60%; height: 50px"
                      />
                    </div>
                  </template>
                </q-parallax>
              </div>
              <div class="rs-card-content">
                <div class="rs-card-title text-center font-weight-bold rs-fs-16">
                  <p>ServRevo Corporation – Seats and Room Reservation System</p>
                </div>
                <div class="rs-card-body rs-fs-12 mt-2">
                  <p>ServRevo Corp. (ServRevo) is an outsourcing company providing shared services, co-working spaces, HR/Payroll, and staffing solutions.</p>
                  <p>Our bespoke offshore solutions integrate seamlessly with any business requirement - providing a full rage of services covering recruitment, human resources, payroll management and services offices.</p>
                  <a
                    class="text-deco-none teal-text"
                    href="http://www.servrevo.com/"
                    target="_blank"
                  >
                    <q-btn class="pos-absolute-center mt-3 border-teal border-rd-20 hover-teal">View Project</q-btn>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </q-page>
    </q-page-container>

  </div>
</template>

<script>
export default {
  mounted () {
    var today = new Date()
    var hourNow = today.getHours()

    if (hourNow > 18) {
      console.log('%c Good Evening!', 'color: #070707')
      document.getElementById('banner-greetings').setAttribute(
        'style', 'height: calc(10em + 30vmin); background: #314755; background: -webkit-linear-gradient(to right, #314755, #26a0da); background: linear-gradient(to right, #314755, #26a0da); border-bottom-left-radius: 700em 100em; border-bottom-right-radius: 700em 100em;')
    } else if (hourNow > 12) {
      console.log('%c Good Afternoon!', 'color: #ff9800')
      document.getElementById('banner-greetings').setAttribute(
        'style', 'height: calc(10em + 30vmin); background: #26D0CE; background: -webkit-linear-gradient(to right, #26D0CE, #1A2980); background: linear-gradient(to right, #26D0CE, #1A2980); border-bottom-left-radius: 700em 100em; border-bottom-right-radius: 700em 100em;')
    } else if (hourNow > 0) {
      console.log('%c Good Morning! ', 'color: #ffeb3b')
      document.getElementById('banner-greetings').setAttribute(
        'style', 'height: calc(10em + 30vmin); background: #348f50; background: -webkit-linear-gradient(to right, #009688, #56b4d3); background: linear-gradient(to right, #009688, #56b4d3); border-bottom-left-radius: 700em 100em; border-bottom-right-radius: 700em 100em;')
    } else {
      console.log('%c Welcome to My Projects! ', 'color: #009688')
    }
  }
}
</script>

<style scoped>
.project-rs-card {
  height: auto;
  width: 90%;
  margin-top: 10%;
  margin: 5% auto;
  background: #fefefe;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.project-rs-card:hover {
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.25), 0 6px 6px rgba(0, 0, 0, 0.22);
}

.project-rs-card .rs-card-content {
  margin: 5%;
}
</style>
