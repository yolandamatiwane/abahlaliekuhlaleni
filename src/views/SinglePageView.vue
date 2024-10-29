<template>
    <div class="background">
      <div class="overlay">
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
  import HomeComp from '../components/HomeComp.vue';
  import AboutComp from '../components/AboutComp.vue';
  import ServicesComp from '../components/ServicesComp.vue';
  import ContactComp from '../components/ContactComp.vue';
  import MembersComp from '../components/MembersComp.vue';
  import GalleryComp from '../components/GalleryComp.vue';
  export default {
    components:{
      HomeComp,
      AboutComp,
      ServicesComp,
      ContactComp,
      GalleryComp,
      MembersComp
    }
  }
  </script>
<style scoped>
    
</style>