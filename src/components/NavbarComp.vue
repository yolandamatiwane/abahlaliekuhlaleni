<template>
    <nav class="navbar navbar-expand-lg" id="navbar">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a class="navbar-brand" href="#"><img src="https://yolandamatiwane.github.io/personalProjectImages/editedLogo_processed.jpg"></a>
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link :to="{path: '/', hash:'#home'}"> Home</router-link>
                </li>
                <li class="nav-item">
                    <a href="#about"> About Us</a>
                </li>
                <li class="nav-item">
                    <a href="#services"> Services</a>
                </li>
                <li class="nav-item">
                    <a href="#gallery"> Gallery</a>
                </li>
                <li class="nav-item">
                    <a href="#members"> Members</a>
                </li>
                <li class="nav-item">
                    <a href="#contact"> Contact</a>
                </li>
                <!-- <li class="nav-item">
                    <router-link to="/contact">contact</router-link>
                </li> -->
            </ul>
            </div>
        </div>
    </nav>
</template>
<script>
// import router from '@/router';

export default {
    name:'NavbarComp'
}
</script>
<style scoped>
    nav{
        background-color: #29c1e3;
        /* background-color: rgb(72, 72, 72); */
    }
    img{
        width:200px;
        height: 60px;
    }
    nav a {
        font-weight: bold;
        color:  #EDECEC;
        padding: 8px;
        font-size: 20px;
        text-decoration: none;
        font-weight: 900;
    }

    nav a.link-exact-active {
        color: #BADBE6; 
    }
    
</style>