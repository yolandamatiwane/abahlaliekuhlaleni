<template>
    <div class="card">
        <div class="overlay">
            <h3>Welcome to</h3>
            <h1>Organization's Name</h1>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .card{
        background-image: url('https://cdn.pixabay.com/photo/2023/07/05/20/12/ai-generated-8109142_640.jpg');
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        min-height: 100vh;
        color: white;
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