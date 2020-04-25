<template>
  <div id="app">
    <!-- Header -->
    <q-layout view="hHh Lpr lff">

      <!-- Top Header | Navigation -->
      <Header />

      <!-- Side Navigation | Dashboard Drawer -->
      <DashDrawer />

      <!-- Main Content -->
      <router-view></router-view>

      <!-- Footer -->
      <Footer />

      <!-- Start Project Dialog Box -->
      <StartProjectDialog />
    </q-layout>
  </div>
</template>

<script>
// Global Component Registers
import Header from '../components/Header'
import Footer from '../components/Footer.vue'
import DashDrawer from '../components/DashDrawer.vue'
import StartProjectDialog from '../components/StartProjectDialog.vue'

export default {
  components: {
    Header, Footer, DashDrawer, StartProjectDialog
  }
}
</script>
