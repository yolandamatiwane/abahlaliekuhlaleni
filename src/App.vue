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
  <div class="scroll-to-top" @click="scrollToTop">
    ↑
  </div>
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
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
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
      background-color: #ECF0F1;
    }
    .background{
      background-image: url('https://abahloboekuhlaleni.org/wp-content/uploads/2023/05/255467698_244806844300322_5718746574384773261_n.jpg');
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
    .scroll-to-top {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: #76B7CD;
      color: white;
      border-radius: 50%;
      padding: 10px;
      cursor: pointer;
      font-size: 24px;
      z-index: 1000;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
      transition: background-color 0.3s;
    }
    .scroll-to-top:hover {
      background-color: #4e8ba5;
    }

</style>
