<template>
    <nav class="navbar navbar-expand-lg" id="navbar">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a class="navbar-brand" href="#">Hidden brand</a>
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a href="#home"> Home</a>
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
                <li class="nav-item">
                    <router-link></router-link>
                </li>
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
    #navbar {
    padding: 10px;
    background-color: #2e68a100
    }

    nav a {
    font-weight: bold;
    color: #2c3e50;
    padding: 5px;
    /* font-size: 24px; */
    text-decoration: none;
    font-weight: 900;
    /* color: #76B7CD; */
    color: #76B7CD;
    }

    nav a.link-exact-active {
    color: #BADBE6;
    }
    
</style>