<template>
  <div>
    <q-drawer
      v-model="drawer"
      show-if-above
      :mini="!drawer || miniState"
      @click.capture="drawerClick"
      :width="200"
      :breakpoint="500"
      bordered
      content-class="bg-grey-3"
    >
      <q-scroll-area class="fit">
        <q-list padding>
          <q-item
            v-for="link in dashDrawItem"
            :key="link.label"
            :to="{ name: link.route }"
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-icon :name="link.icon" />
            </q-item-section>

            <q-item-section>
              {{ link.label }}
            </q-item-section>
          </q-item>

        </q-list>
      </q-scroll-area>
      <div
        class="q-mini-drawer-hide absolute"
        style="top: 15px; right: -17px"
      >
        <q-btn
          dense
          round
          unelevated
          color="accent"
          icon="chevron_left"
          @click="miniState = true"
        />
      </div>
    </q-drawer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      miniState: false,
      dashDrawItem: [
        {
          route: 'dashboard',
          label: 'Dashboard',
          icon: 'home'
        },
        {
          route: 'dashboard',
          label: 'asd',
          icon: 'android'
        },
        {
          route: 'dashboard',
          label: 'qwe',
          icon: 'face'
        }
      ]
    }
  },

  methods: {
    drawerClick (e) {
      if (this.miniState) {
        this.miniState = false
        e.stopPropagation()
      }
    }
  }
}
</script>
