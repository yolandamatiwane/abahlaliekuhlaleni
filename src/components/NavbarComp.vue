<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a class="navbar-brand" href="#">Hidden brand</a>
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link to="/"> Home</router-link>
                </li>
                <!-- <li class="nav-item">
                    <router-link to="/home"> Dummy</router-link>
                </li> -->
                <li class="nav-item">
                    <a @click.prevent="$emit('scollTo','about')" href="#"> About</a>
                </li>
                <li class="nav-item">
                    <router-link to="/services"> Services</router-link>
                </li>
                <li class="nav-item">
                    <a to="/contact"> Contact</a>
                </li>
                <li class="nav-item">
                    <router-link></router-link>
                </li>
            </ul>
            <!-- <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form> -->
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
    nav {
    padding: 30px;
    }

    nav a {
    font-weight: bold;
    color: #2c3e50;
    }

    nav a.router-link-exact-active {
    color: #42b983;
    }
    
</style>