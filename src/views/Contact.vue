<template>
  <div class="contact">
    <p id="contact-title">
      We would love to hear from you! Please email us at info@mysite.com or fill
      in the form and we’ll get back to you within 24 hours.
    </p>
    <form>
      <label for="fname">First name:</label><br />
      <input type="text" id="fname" name="fname" size="50" /><br />
      <label for="lname">Last name:</label><br />
      <input type="text" id="lname" name="lname" size="50" /><br />
      <label for="email">Email:</label><br />
      <input type="text" id="email" name="email" size="50" /><br />
      <label for="msg">Type Message Here:</label><br />
      <input type="text" id="msg" name="msg" size="50" /><br />
    </form>
    <div class="medium-whitespace"></div>
    <button id="contact-submit">Submit</button>
    <div class="medium-whitespace"></div>
  </div>
</template>

<style>
.medium-whitespace {
  margin: 20px;
}
label {
  font-size: 1.2em;
}
</style>
