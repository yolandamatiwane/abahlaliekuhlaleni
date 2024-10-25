<template>
    <div class="container-fluid text-center" id="servicesDiv">
        <h1>Services We Offer</h1>
        <div class="container text-center">
            <div class="row">
                <div class="col-12 col-md-4" id="img">
                    <div class="card">
                        Soup Kitchen
                        <button class="btn btn-outline-light"> Learn More</button>
                    </div>
                </div>
                <div class="col-12 col-md-4" id="txt">
                    <div class="card">
                        Emotional Support
                        <button class="btn btn-outline-light"> Learn More</button>
                    </div>
                </div>
                <div class="col-12 col-md-4">
                    <div class="card">
                        Gardenining
                        <button class="btn btn-outline-light"> Learn More</button>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-4" id="img">
                    <div class="card">
                        Making Beads
                        <button class="btn btn-outline-light"> Learn More</button>
                    </div>
                </div>
                <div class="col-12 col-md-4" id="txt">
                    <div class="card">
                        Offering Support to Schools
                        <button class="btn btn-outline-light"> Learn More</button>
                    </div>
                </div>
                <div class="col-12 col-md-4">
                    <div class="card">
                        Offering Support to Police Stations
                        <button class="btn btn-outline-light"> Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
#servicesDiv{
    min-height: 100vh;
    padding: 20px;
}
.container-fluid{
    background-color: #0e3f50;
    color: white;
}
.card{
    height: 250px;
    margin-bottom: 20px;
    padding: 100px;
    background-color: rgb(123, 193, 233);
    text-align: center;
    font-weight: 600;
    color: white;
    transition: all 0.7s ease;
}
.btn {
    width: 50%;
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%) translateY(20px);
  opacity: 0;
  transition: all 1s ease;
}

.card:hover .btn {
  transform: translateX(-50%) translateY(0);
  opacity: 1;
}


.card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  transform: scale(1.1);
}
    
</style>