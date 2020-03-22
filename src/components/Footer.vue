<template>
  <!-- Footer -->
  <footer class="text-center">
    <img
      class="footer-root-logo"
      src="@/assets/images/main-logo/main-logo-animated-white.svg"
      alt="Root Logo"
    />
    <p class="font-weight-bold r-fs-24">Living, learning, & leveling up one day at a time.</p>
    <p class="font-size-18">Handcrafted by &copy; 2019, John Rafael M. Arias</p>
    <a href="https://www.facebook.com/one4arias?ref=bookmarks">
      <q-avatar class="social-media-icons">
        <img
          src="http://www.olvschooldc.net/wp-content/uploads/2014/07/facebook.png"
          alt="Facebook"
        />
      </q-avatar>
    </a>
    <a href="https://github.com/John-Arias">
      <q-avatar class="social-media-icons">
        <img
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          alt="Github"
        />
      </q-avatar>
    </a>
    <a href="https://www.youtube.com/channel/UCKhiYIV1YmY2yCi4GARXFJg?view_as=subscriber">
      <q-avatar class="social-media-icons">
        <img src="https://www.seoclerk.com/pics/647926-1JzejF1546580004.png" alt="Youtube" />
      </q-avatar>
    </a>
    <a href="https://my.indeed.com/p/johnrafaelmantillaa-ckgi9rw/profile">
      <q-avatar class="social-media-icons">
        <img
          src="https://media.licdn.com/dms/image/C560BAQF14ZBBM7LT8g/company-logo_200_200/0?e=2159024400&v=beta&t=E_OjnEggTFbzWYHxt65bT4m_ABUyeKSC5LKvOKfSE-w"
          alt="Indeed"
        />
      </q-avatar>
    </a>
    <a href="https://www.jobstreet.com.ph/">
      <q-avatar class="social-media-icons">
        <img
          src="https://is2-ssl.mzstatic.com/image/thumb/Purple123/v4/2c/c0/cb/2cc0cbd1-275b-db04-9af0-c065d0f4554f/AppIcon-0-1x_U007emarketing-0-85-220-0-4.png/246x0w.jpg"
          alt="Jobstreet"
        />
      </q-avatar>
    </a>
  </footer>
</template>

<style scoped>
/* Footer */
footer {
  padding: 5em;
  color: #fafafa;
  background: #104f5e; /* fallback for old browsers */
  background: -webkit-gradient(
    to left,
    #96d3e3,
    #104f5e
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-gradient(
    to left,
    #96d3e3,
    #104f5e
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.footer-root-logo {
  height: 150px;
  width: 150px;
}

.social-media-icons {
  height: 50px;
  width: 50px;
  margin: 10px;
  transition: 0.3s All ease;
}

.social-media-icons:hover {
  box-shadow: 0 14px 28px rgba(255, 255, 255, 0.25),
    0 10px 10px rgba(255, 255, 255, 0.22);
}

.social-media-icons img {
  height: 100%;
  width: 100%;
}
</style>
