<template>
  <!-- Dialog - Start a Project Dialog -->
  <q-dialog
    v-model="start_project_dialog"
    seamless
    position="bottom"
  >
    <q-card class="bottom-dialog">
      <q-card-section class="row items-center no-wrap">
        <div>
          <q-btn
            v-on:click="start_project_dialog_btn"
            class="float-right"
            flat
            round
            icon="close"
            v-close-popup
          />
          <img
            class="dialog-root-logo float-left"
            src="@/assets/images/main-logo/main-logo-transparent.png"
            alt="Root Logo"
          />
          <div class="row">
            <div class="col-12">
              <span class="font-size-18 text-weight-bold">Start a project</span>
            </div>
            <div class="col-12">
              <span>Interested in working together? We should queue up a chat. I’ll buy the coffee.</span>
            </div>
            <div class="col-12 text-grey">
              <span>
                Want to see more? Email me at
                <a href="mailto:root.jarias@gmail.com">root.jarias@gmail.com</a>
              </span>
            </div>
          </div>
        </div>

        <q-space />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<style scoped>
/* Dialog - Start a Project Dialog */
.bottom-dialog {
  max-width: 100%;
}

.dialog-root-logo {
  height: 70px;
  width: 70px;
  margin-right: 2em;
  top: 0;
}
</style>

<script>
export default {
  mounted () {
    let SessionedDialog = sessionStorage.getItem('start-project-dialog')

    if (SessionedDialog === 'closed') {
      this.start_project_dialog = false
    } else {
      this.start_project_dialog = true
    }
  },
  data () {
    return {
      start_project_dialog: true
    }
  },
  methods: {
    start_project_dialog_btn: function (e) {
      sessionStorage.setItem('start-project-dialog', 'closed')
    }
  }
}
</script>
