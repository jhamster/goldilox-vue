<template>
  <div class="schedule">
    <h5 id="Schedule-Header">For an estimate of time: see the list below Calendar</h5>
    <vue-calendly url="https://calendly.com/goldiloxsalon" :height="700"></vue-calendly>
    <div class="one-col" id="schedule-lists">
      <div class="list-with-header">
        <h4 class="list-title">10 Minutes</h4>
        <ul>
          <li>Eyebrow wax</li>
          <li>Lip wax</li>
        </ul>
      </div>
      <div class="list-with-header">
        <h4 class="list-title">30 Minutes</h4>
        <ul>
          <li>Men's Cut</li>
        </ul>
      </div>
      <div class="list-with-header">
        <h4 class="list-title">1 Hour</h4>
        <ul>
          <li>Women's Cut (with styling)</li>
          <li>Scalp Treatment</li>
          <li>Deep Condition</li>
        </ul>
      </div>
      <div class="list-with-header">
        <h4 class="list-title">2 Hours or More</h4>
        <ul>
          <li>Highlights</li>
          <li>Full Color</li>
          <li>Balayage</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "schedule",
  methods: {
    update_calendar() {

    },
  },
};
</script>

<style>
.list-title {
  font-size: 2.2em;
  margin-bottom: 5px;
  margin-top: 15px;
}

.list-with-header {
  margin-left: 40px;
}

.list-with-header li {
  padding: 0px;
  margin-top: 5px;
  font-size: 1.2em;
}

</style>
