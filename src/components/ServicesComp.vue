<template>
  <div class="container-fluid text-center" id="servicesDiv">
    <h1>Services We Offer</h1>
    <div class="container text-center">
      <div class="row">
        <div class="col-12 col-md-4">
          <div class="card" id="soup">
            <div class="background">
              <h5>Soup Kitchen</h5>
              <a class="btn btn-outline-light"> Learn More</a>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="card" id="es">
            <div class="background">
              <h5>Emotional Support</h5>
              <router-link to="/support" class="btn btn-outline-light" href="#">
                Learn More</router-link
              >
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="card" id="gardening">
            <div class="background">
              <h5>Gardening</h5>
              <a class="btn btn-outline-light"> Learn More</a>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-4" id="img">
          <div class="card" id="beads">
            <div class="background">
              <h5>Making Beads</h5>
              <a class="btn btn-outline-light"> Learn More</a>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4" id="txt">
          <div class="card" id="schools">
            <div class="background">
              <h5>Offering Support to Schools</h5>
              <a class="btn btn-outline-light"> Learn More</a>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="card" id="police">
            <div class="background">
              <h5>Offering Support to Police Stations</h5>
              <a class="btn btn-outline-light"> Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    navigateToSupport() {
      this.$router.push("/support");
    },
  },
};
</script>
<style scoped>
/* #servicesDiv{
    min-height: 100vh;
    padding: 20px;
} */

/* .background {
  background: rgba(255, 255, 255, 0.57);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.7px);
  -webkit-backdrop-filter: blur(5.7px);
  border: 1px solid rgba(255, 255, 255, 0.3);
} */

.container-fluid {
  background-color: #0e3f50;
  color: white;
  min-height: 100vh;
  padding: 20px;
}
#gardening {
  background-image: url(data:image/jpeg;base64,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);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}


#es {
  background-image: url(https://www.mcleanhospital.org/sites/default/files/styles/cta_1x/public/shared/GettyImages-1198217377-video.jpg?itok=Qd5A93x1);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* backdrop-filter: blur(4px); */
}
/* #es:hover{
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(4px);
    background-color: red;

} */
#soup {
  background-image: url(https://baptistnews.com/wp-content/uploads/2022/01/115004326_m-720x400.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
#beads {
  background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqK-oDKpl2buJDLhku9HYHxdvy21Ljw5M9Xg&s);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
#schools {
  background-image: url(https://homestead.org.za/wp-content/uploads/2021/10/IMG_0046-1.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
#police {
  /* background-image: url(https://live.staticflickr.com/108/270278416_b9b6181a50_b.jpg); */
  background-image: url(https://www.saps.gov.za/newsroom/selthumbnail.php?id=39586);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.card {
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

/* #es:hover{
    background-color: rbg(0,0,0,0.8);
}

#soup:hover{
    background-color: rgb(0,0,0,0.8);
    z-index: 900;
}

#beads:hover{
    background-color: rgb(0,0,0,0.8);
}

#schools:hover{
    background-color: rgb(0,0,0,0.8);
}

#police:hover{
    background-color: rgb(0,0,0,0.8);
} */
</style>
