<template>
  <div id="app">
    <div id="sidespace">
      <div id="centered">
        <hr />
        <div class="halves">
          <div class="left">
            <img id="logo" src="images/logo_small.jpg" />
          </div>
          <div class="right">
            <p id="current-offer">
              <em>Refer a friend and get $5 off your next visit!</em>
            </p>
          </div>
        </div>
        <hr />
        <div id="menu">
          <router-link to="/">
            <div class="menu-item">
              <p class="menu-text">Home</p>
            </div>
          </router-link>
          <router-link to="/shop">
            <div class="menu-item">
              <p class="menu-text">Shop</p>
            </div>
          </router-link>
          <router-link to="/about">
            <div class="menu-item">
              <p class="menu-text">About</p>
            </div>
          </router-link>
          <router-link to="/schedule">
            <div class="menu-item">
              <p class="menu-text">Schedule</p>
            </div>
          </router-link>
          <router-link to="/contact">
            <div class="menu-item">
              <p class="menu-text">Contact</p>
            </div>
          </router-link>
          <router-link to="/faq">
            <div class="menu-item">
              <p class="menu-text">FAQ</p>
            </div>
          </router-link>
          <router-link to="/reviews">
            <div class="menu-item">
              <p class="menu-text">Reviews</p>
            </div>
          </router-link>
        </div>
        <router-view />
      </div>
    </div>
    <div id="footer">
      <div id="footer-body">
        <div class="halves">
          <div class="left">
            <p class="social-network">
              Get Connected with us on Social Network
            </p>
          </div>
          <div class="right">
            <a
              class="social-network"
              href="https://github.com/jhamster/goldilox-vue.git"
              >Github</a
            >
            <a
              class="social-network"
              href="https://www.instagram.com/goldilox.hair.salon/"
              >Instagram</a
            >
          </div>
        </div>
        <hr />
        <div class="thirds">
          <div class="tleft">
            <h5>GOLDILOX HAIR SALON</h5>
            <p id="mission-state">
              Here at Goldilox we strive for customer satisfaction. If you did
              not find what you were looking for please reach out and we will
              get back with you shortly.
            </p>
          </div>
          <div class="tmid">
            <h5>USEFUL LINKS</h5>
            <router-link to="/">
              <p class="footer-text">Home</p>
            </router-link>
            <router-link to="/shop">
              <p class="footer-text">Shop</p>
            </router-link>
            <router-link to="/about">
              <p class="footer-text">About</p>
            </router-link>
            <router-link to="/schedule">
              <p class="footer-text">Schedule</p>
            </router-link>
            <router-link to="/contact">
              <p class="footer-text">Contact</p>

            </router-link>
            <router-link to="/faq">
              <p class="footer-text">FAQ</p>
            </router-link>
          </div>
          <div class="tright">
            <h5>CONTACT</h5>
            <p>Saratoga Springs, UT, 84045, US</p>
            <p>info@example.com</p>
            <p>+ 01 234 567 89</p>
            <p>+ 01 234 567 90</p>
          </div>
        </div>
      </div>
    </div>
    <!--    <div id="nav">-->
    <!--      <router-link to="/">Home</router-link> |-->
    <!--      <router-link to="/about">About</router-link>-->
    <!--    </div>-->
    <!--    <router-view />-->
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

#sidespace,
#footer {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none1 centered none2";
}

#sidespace {
  min-height: 100vh;
}

#footer {
  background-color: #EBE7F5;
  grid-template-columns: 1fr 2.5fr 1fr;
}

#footer-body {
  grid-area: centered;
}

.social-network {
  font-size: 1.2em;
  margin: 10px;
}

#centered {
  grid-area: centered;
}

.halves {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "left right";
  margin: 20px 0px;
}

.left {
  grid-area: left;
  align-items: center;
}

.right {
  grid-area: right;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

#current-offer {
  font-size: 1.8em;
}

#logo {
  width: 90%;
}

#menu {
  display: flex;
  margin: 10px 0px;
  background-color: #cbc3e3;
  width: 100%;
}

h5 {
  font-size: 1em;
}

.menu-item {
  border-right: 1px solid black;
  margin: 0px;
  padding: 0px 20px;
}

.menu-text {
  font-size: 1.6em;
}

.thirds {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "tleft tmid tright";
  margin: 10px 8vh;
}

.tleft {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tmid {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tright {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#mission-state {
  font-size: 1.2em;
}

.footer-text {
  margin: 5px;
  font-size: 1.2em;
}

#menu a {
  text-decoration: none;
}

#menu a:hover {
  color: #222222;
}
</style>
