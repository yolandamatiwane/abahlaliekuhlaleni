<template>
  <div class="background">
    <div class="overlay">
      <nav-comp @click="scrollToSection"/>
      <home-comp id="home"/>
    </div>
  </div>
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

<style scoped>
    #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      background-color: #76B7CD;
    }
    .background{
      background-image: url('https://cdn.pixabay.com/photo/2023/07/05/20/12/ai-generated-8109142_640.jpg');
      background-attachment: fixed;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      min-height: 100vh;
        /* color: white; */
    }
    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.468); /* This is the dark layer */
    }


</style>
