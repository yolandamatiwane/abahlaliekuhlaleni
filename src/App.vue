<template>
  <nav-comp @scrollTo="scrollToSection"/>
  <home-comp/>
  <div  id="about">

    <about-comp/>
  </div>
  <services-comp/>
  <contact-comp/>
</template>

<script>
import NavComp from './components/NavbarComp.vue'
import HomeComp from './components/HomeComp.vue';
import AboutComp from './components/AboutComp.vue';
import ServicesComp from './components/ServicesComp.vue';
import ContactComp from './components/ContactComp.vue';
export default {
  components:{
    NavComp,
    HomeComp,
    AboutComp,
    ServicesComp,
    ContactComp
  },
  methods: {
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
