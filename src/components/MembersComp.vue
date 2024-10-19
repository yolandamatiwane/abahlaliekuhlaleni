<template>
    <div class="container-fluid text-center">
        <h1>Members</h1>
        <div class="container text-center">
            <div class="row">
                <div class="col-12 col-md-4">
                    <div class="card" id="memCards">
                        image 1
                    </div>
                    <h4>
                        Member 1
                    </h4>
                    <p>
                        description
                    </p>
                </div>
                <div class="col-12 col-md-4">
                    <div class="card" id="memCards">
                        Image 2
                    </div>
                    <h4>
                        Member 2
                    </h4>
                    <p>
                        description
                    </p>
                </div>
                <div class="col-12 col-md-4">
                    <div class="card" id="memCards">
                        image 3
                    </div>
                    <h4>
                        Member 3
                    </h4>
                    <p>
                        description
                    </p>
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
    min-height: 100vh;
    background-color: #0e3f50;
    color: white;
}
#memCards{
    height: 300px;
    background-color: rgb(123, 193, 233);
    justify-content: center;
}
.row{
    padding-top:100px;
}

    
</style>