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
        /* padding: 40px; */
        display:flex;
        align-items: center;
        justify-content: center;
        
        /* background-image: url('https://media.istockphoto.com/id/1393578696/vector/profile-silhouettes-of-african-americans.jpg?s=612x612&w=0&k=20&c=WZgdC9IeX2lvRttOOyHGGCveL16b7l-AEjuzxksEdxg='); */
        /* background-image: url('https://img.freepik.com/premium-vector/group-portrait-black-people-african-american-men-women-black-history-month-cartoon-flat_637281-1450.jpg'); */
        background-image: url('https://raw.githubusercontent.com/yolandamatiwane/personalProjectImages/refs/heads/master/c912279c-5eee-4c0e-9c66-91dbe6d399a2.webp');
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
    .overlay{
        background-color: #5a6b5dce;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 300px;
        width: 100%;
    }
    /* .overlay::before{
        content: '';
        position: absolute;
        height: calc(100% - 80px);
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: #5a6b5d8c;
        transform: skewY(-23deg); 
        transform-origin: top left;
        z-index: 1;
    } */
    .card-text{
        text-align: center;
        justify-content: center;
        padding: 150px;
        /* padding-top: 250px; */
    }
    h1{
        font-size: 80px;
    }
    h3{
        font-size: 50px;
    }
    
</style>