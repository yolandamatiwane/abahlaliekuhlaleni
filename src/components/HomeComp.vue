<template>
    <div class="card">
        <div class="overlay">
            <div class="card-text">
                <h3>Welcome to</h3>
                <h1>Organization's Name</h1>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .card{
        background-image: url('https://abahloboekuhlaleni.org/wp-content/uploads/2023/05/255467698_244806844300322_5718746574384773261_n.jpg');
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        min-height: 80vh;
        color: white;
        border: none;
    }
    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.468); /* This is the dark layer */
    }
    .card-text{
        text-align: center;
        padding-top: 250px;
    }
    h1{
        font-size: 80px;
    }
    h3{
        font-size: 50px;
    }
    
</style>