<template>
  <div id="app">
    <div id="sidespace">
      <div id="centered">
        <hr>
        <div class="halves">
          <div class="left">
            <img id="logo" src="images/logo_small.jpg" />
          </div>
          <div class="right">
            <p id="current-offer"><em>Refer a friend and get $5 off your next visit!</em></p>
          </div>
        </div>
        <hr>
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

#sidespace {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none1 centered none2";
  margin-bottom: 50px;
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
  background-color: #CBC3E3;
  width: 100%;
}

.menu-item {
  border-right: 1px solid black;
  margin: 0px;
  padding: 0px 20px;
}

.menu-text {
  font-size: 1.6em;
}
</style>
