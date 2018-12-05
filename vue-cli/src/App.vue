<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>

<template>
  <div>
    <header>
    <Navigation></Navigation>
    </header>
    <div class="outerModule">
      <div>
    <main>
    <h2>Here you can desing your own navigation bar</h2>
    <component :is="checkComponent" />
    </main>
    </div>
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
import Maker from './components/Maker'
import About from './components/About'
import Guide from './components/Guide'
import Contact from './components/Contact'
import Designer from './components/Designer'
import Htmlbox from './components/Htmlbox'
import Cssbox from './components/Cssbox'
import router from './router/index'


export default {
  name: 'app',
  components: {
    'Navigation': Navigation,
    'Maker': Maker,
    'Guide': Guide,
    'Contact': Contact,
    'Designer': Designer,
    'Htmlbox': Htmlbox,
    'Cssbox': Cssbox,
    'About': About
  },
  data () {
    return {
      msg: 'Welcome to Navigation bar generator!'
    }
  },
  computed: {
    checkComponent() {
      if (this.$route.path === '/maker')
      {
        return Maker
      }
      if (this.$route.path === '/about')
      {
        return About
      }
      if (this.$route.path === '/guide')
      {
        return Guide
      }
      if (this.$route.path === '/contact')
      {
        return Contact
      }
    }
  },
  methods : {

  },
  created() {
    console.log("created")
    console.log(this.$route)
  }
}
</script>

<style src="./assets/Styling.css">
</style>
