<template>
  <nav-comp @click="scrollToSection"/>
  <home-comp id="home"/>
  <about-comp  id="about"/>
  <services-comp id="services"/>
  <gallery-comp id="gallery"/>
  <members-comp id="members"/>
  <contact-comp  id="contact"/>
</template>

<script>
import NavComp from './components/NavbarComp.vue'
import HomeComp from './components/HomeComp.vue';
import AboutComp from './components/AboutComp.vue';
import ServicesComp from './components/ServicesComp.vue';
import ContactComp from './components/ContactComp.vue';
import MembersComp from './components/MembersComp.vue';
import GalleryComp from './components/GalleryComp.vue';
export default {
  components:{
    NavComp,
    HomeComp,
    AboutComp,
    ServicesComp,
    ContactComp,
    GalleryComp,
    MembersComp
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
