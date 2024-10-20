<template>
    <div class="container-fluid text-center">
        <div class="container text-center">
            <h1>Contact us </h1>
            <div class="row">
                <div class=" col-12 col-md-5" id="form">
                    <form>
                        <!-- Send us a message -->
                        <div class="mb-3">
                            <label for="exampleInputName1" class="form-label">Name and Surname</label>
                            <input type="text" class="form-control" id="exampleInputName1" aria-describedby="NameHelp">
                            <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                            <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button type="submit" class="btn btn-light">Submit</button>
                        <!-- <button type="reset" class="btn btn-light">Clear</button> -->
                        
                    </form>
                </div>
                <div class=" col-12 col-md-5">
                    <h5>
                        <i class="bi bi-envelope-at"></i> email@address.com
                    </h5>
                    <h5>
                        <i class="bi bi-telephone"></i> 021 695 0030
                    </h5>
                    <h5>
                        <i class="bi bi-phone-vibrate"></i>
                    </h5>
                    <h5>
                        <i class="bi bi-geo-alt"></i> Langa, Cape Town, 7455
                    </h5>
                    <h5>
                        <i class="bi bi-pin-map-fill"></i>
                    </h5>
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
.container-fluid{
    height: 100vh;
    background-color: rgb(123, 193, 233);
    padding: 55px;
}
.container{
    background-color: #0e3f50;
    height: 500px;
    border-radius: 10px;
    color: white;
}
#form{
    padding: 50px;
}
</style>