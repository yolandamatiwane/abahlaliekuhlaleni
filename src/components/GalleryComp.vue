<template>
    <div class="container-fluid text-center">
        <h1>Gallery</h1>
        <div class="container text-center">
            <div class="row">
                <div class="col-12 col-md-4">
                    <div class="card" id="smCard1">
                        image 1
                    </div>
                    <div class="card" id="smCard2">
                        image 2
                    </div>
                </div>
                <div class="col-12 col-md-4">
                    <div class="card" id="bgCards">
                        Image 3
                    </div>
                </div>
                <div class="col-12 col-md-4">
                    <div class="card" id="smCard3">
                        image 4
                    </div>
                    <div class="card" id="smCard4">
                        image 5
                    </div>
                </div>
            </div>
        </div>
        <button class="btn">View More <i class="bi bi-arrow-right"></i> </button>

        
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.container-fluid{
    min-height: 100vh;
    background-color: rgb(123, 193, 233);
    color: white;
}
.card{
    background-color: #0e3f50;
    justify-content: center;
    color: white;
}
#smCard1, #smCard2,#smCard3, #smCard4{
    height: 223px;
    margin-bottom: 25px;
}
#smCard1{
    background-image: url('https://yolandamatiwane.github.io/personalProjectImages/WhatsApp%20Image%202024-10-12%20at%2014.21.54.jpeg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
#bgCards{
    height: 470px;
    margin-bottom: 25px;
}
    
</style>