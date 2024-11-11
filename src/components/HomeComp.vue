<template>
    <div class="container-fluid">
        <div class="overlay">
            <div class="card-text">
                <h2>Welcome to Abahlali Ekuhlaleni – Empowering Our Community Together</h2>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .container-fluid{
        padding-top: 40px;
        /* background-image: url('https://media.istockphoto.com/id/1393578696/vector/profile-silhouettes-of-african-americans.jpg?s=612x612&w=0&k=20&c=WZgdC9IeX2lvRttOOyHGGCveL16b7l-AEjuzxksEdxg='); */
        background-image: url('https://img.freepik.com/premium-vector/group-portrait-black-people-african-american-men-women-black-history-month-cartoon-flat_637281-1450.jpg');
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
       /* background-color: #0066cc;
        background-color: #0e3f50; */
        min-height: 100vh;
        color: #f0f0f0;
        border: none;
    }
    .overlay::before{
        content: '';
        position: absolute;
        /* margin-top: 90px; */
        height: calc(100% - 80px);
        top: 0;
        left: 0;
        width: 100%;
        /* height: 100%; */
        background-color: rgba(0, 0, 0, 0.5); /* Adjust color and opacity as needed */
        transform: skewY(-40deg); /* Adjust the angle as needed */
        transform-origin: top left;
        z-index: 1;
    }
    /* .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.468);
    } */
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