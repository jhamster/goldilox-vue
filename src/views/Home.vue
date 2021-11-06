<template>
  <div>
    <div class="overlay">
      <img class="cover" src="images/cassidy_cover.JPG" />
      <div class="text_container">
        <p class="image_text">
          Goldilox Hair Salon is a great place to get your hair trimmed,
          colored, or styled for that big event.
        </p>
      </div>
    </div>
    <div class="one-col">
      <div class="image_title_set">
        <img src="images/laura_before.JPG" />
        <p class="image_description">Before</p>
      </div>
      <div class="image_title_set">
        <img src="images/laura_after.JPG" />
        <p class="image_description">After</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
.overlay {
  position: relative;
}

.cover {
  width: 100%;
  margin: 10px 0px;
}

.text_container {
  position: absolute;
  left: 5vw;
  bottom: 15vh;
  width: 20vw;
}

.image_text {
  font-size: 2.4em;
  color: #FDFDFE;
  font-style: italic;
}

.one-col {
  margin-top: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.image_description {
  font-size: 1.8em;
  margin:auto;
  text-align: center;
}
</style>
