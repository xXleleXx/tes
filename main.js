let angka = 0;
let count = document.getElementById("count");

count.onclick = function () {
  angka++;
  count.innerHTML = `<button id="count">Click : ${angka}</button>`;
  if (angka == 17) {
    document.getElementById("body").innerHTML = `<style>
    * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.card {
  width: 640px;
  height: 400px;
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  -webkit-perspective: 1200px;
  perspective: 1200px;
  transition: 1s;
}
.card:hover {
  transform: rotate(-5deg);
}
.card:hover .outside {
  transform: rotateY(-130deg);
}
.outside,
.inside {
  height: 100%;
  width: 50%;
  position: absolute;
  left: 50.1%;
}
.inside {
  background: linear-gradient(to right, #e7e7e7, #ffffff 30%);
  line-height: 3;
  padding: 0 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  left: 50%;
}
.outside {
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  z-index: 1;
  transform-origin: left;
  transition: 2s;
  cursor: pointer;
}
.front,
.back {
  height: 100%;
  width: 100%;
  position: absolute;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: rotateX(0deg);
}
.front {
  background-color: #ffffff;
}
.back {
  transform: rotateY(180deg);
  background: linear-gradient(to left, #e7e7e7, #ffffff 30%);
}
.cake {
  width: 100%;
  position: absolute;
  bottom: 30px;
}
.top-layer,
.middle-layer,
.bottom-layer {
  height: 80px;
  width: 240px;
  background-repeat: repeat;
  background-size: 60px 100px;
  background-position: 28px 0;
  background-image: linear-gradient(
      transparent 50px,
      #fedbab 50px,
      #fedbab 60px,
      transparent 60px
    ),
    radial-gradient(circle at 30px 5px, #994c10 30px, #fcbf29 31px);
  border-radius: 10px 10px 0 0;
  position: relative;
  margin: auto;
}
.middle-layer {
  transform: scale(0.85);
  top: 6px;
}
.top-layer {
  transform: scale(0.7);
  top: 26px;
}
.candle {
  height: 45px;
  width: 15px;
  background: repeating-linear-gradient(
    45deg,
    #fd3018 0,
    #fd3018 5px,
    #ffa89e 5px,
    #ffa89e 10px
  );
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  bottom: 202px;
}
.candle:before {
  content: "";
  position: absolute;
  height: 16px;
  width: 16px;
  background-color: #ffa500;
  border-radius: 0 50% 50% 50%;
  bottom: 48px;
  transform: rotate(45deg);
  left: -1px;
}
.outside p {
  font-size: 23px;
  text-transform: uppercase;
  margin-top: 30px;
  text-align: center;
  letter-spacing: 6px;
  color: #000046;
}
.inside .t {
  font-size: 70px;
  line-height: 120px;
  position: absolute;
  right: 235px;
  top: 250px;
}

.inside .s {
  font-size: 70px;
  line-height: 120px;
  position: absolute;
  left: 235px;
  top: 250px;
}

.inside img {
  max-width: 100px;
}
  </style>

  <body>
    <div class="card">
      <div class="outside">
        <div class="front">
          <p>Happy Birthday <br> Chelsea</p>
          <div class="cake">
            <div class="top-layer"></div>
            <div class="middle-layer"></div>
            <div class="bottom-layer"></div>
            <div class="candle"></div>
          </div>
        </div>
        <div class="back"></div>
      </div>
      <div class="inside">
        <p>Selamat ulang tahun mbak semoga panjang umur dan sehat selalu. Kiranya Tuhan memberkati<span style="font-size:25px">&#128591;</span></p>
        <img src="C.jpg">
        <h1 class="t">&#129395;</h1>
        <h1 class="s">&#127873;</h1>
      </div>
    </div>`
  }
}
