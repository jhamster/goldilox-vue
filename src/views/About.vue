<template>
  <div class="about">
    <div class='overlay'>
      <img class='about_img' src='\images\mary_cover.JPG'/>
      <div class='about-txt'>
        <p class='about-image_text'>Hi! I’m Mary! I’m a Wife, Momma and I love doing hair!
          I offer Cuts, Colors and Waxing services. Please visit my <a href="/schedule">calendar</a>
          to schedule an appointment<br>
          Feel free to take a look at some of the work I have done by visiting my
          <a href="https://www.instagram.com/goldilox.hair.salon/">instagram account</a></p>
      </div>
    </div>
    <div id="image-filler"></div>
  </div>
</template>

<style>
.about_img {
  position: absolute;
  height: 80vh;
  width: 100vw;
  object-fit: cover;
  left: -20vw;
  top: 0vh;
}

.about-txt {
  background-color: #CBC3E3;
  position: absolute;
  left: -5vw;
  top: 15vh;
  width: 30vw;
  padding: 15px;
}

.about-image_text {
  font-size: 2.2em;
  color: #0C2D48;
  font-style: italic;
}

#image-filler {
  height: 80vh;
}
</style>
