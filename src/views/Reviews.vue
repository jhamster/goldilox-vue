<template>
  <div class="Reviews">
    <h1>See what others are saying about Goldilox Hair Salon</h1>
    <h2>Average rating {{ average_rating }} out of 5</h2>
    <router-link to="/newreview">
      <p>Write a new review</p>
    </router-link>
    <hr />
    <section class="reviews-view">
      <div class="a-review" v-for="review in reviews" :key="review.id">
        <h3>{{ review.title }}</h3>
        <p>{{ review.review_body }}</p>
        <p>Rating: {{ review.rating }} out of 5</p>
        <p>-{{ review.author }}</p>
        <p>{{ review.timestamp }}</p>
        <hr />
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
export default {
  name: "Reviews",
  data() {
    return {
      reviews: [],
      average_rating: 0,
    };
  },
  created() {
    this.getReviews();
  },
  methods: {
    async getReviews() {
      try {
        let response = await axios.get("/api/reviews");
        this.reviews = response.data;
        let total = 0;
        let count = 0;
        for (let i = 0; i < this.reviews.length; i++) {
          total += this.reviews[i].rating;
          count += 1;
        }
        if (count > 0) {
          this.average_rating = (total / count).toFixed(2);
        } else {
          this.average_rating = 5;
        }
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
.reviews-view {
  display: flex;
  flex-direction: column;
  margin-left: 25px;
  margin-right: 25px;
}
p {
  margin-left: 25px;
}
</style>
