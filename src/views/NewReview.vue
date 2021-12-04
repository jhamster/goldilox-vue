<template>
  <div class="NewReview">
    <h1>We appreciate you taking the time to give your honest feedback!</h1>
    <div class="form">
      <input v-model="title" placeholder="Title" />
      <p></p>
      <textarea v-model="review_body">Review Body</textarea>
      <p></p>
      <input v-model="first_name" placeholder="First Name" />
      <p></p>
      <input v-model="last_name" placeholder="Last Name" />
      <p></p>
      <input v-model="rating" placeholder="Rating 1-5" />
      <p></p>
    </div>
    <div class="medium-whitespace"></div>
    <button id="contact-submit" @click="submit">Submit</button>
    <div class="medium-whitespace"></div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'NewReview',
  data() {
    return {
      title: "",
      review_body: "",
      first_name: "",
      last_name: "",
      rating: "",
    }
  },
  methods: {
    async submit() {
      try {
        const current = new Date();
        await axios.post('/api/reviews', {
          title: this.title,
          review_body: this.review_body,
          rating: this.rating,
          timestamp: `${current.getMonth()+1}-${current.getDate()}-${current.getFullYear()}`,
          author: this.first_name + " " + this.last_name,
        });
        this.$router.push('/reviews');
      } catch (error) {
        console.log(error);
      }
    },
  },
}
</script>


<style>
.medium-whitespace {
  margin: 20px;
}
label {
  font-size: 1.2em;
}
</style>
