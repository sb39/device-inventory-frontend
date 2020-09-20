<template>
  <div class="container lander">
    <b-card title="Search for devices" class="auth mx-auto p-5">
      <b-input-group>
        <template v-slot:prepend>
          <b-input-group-text>Device Name :</b-input-group-text>
        </template>
        <b-form-input></b-form-input>
      </b-input-group>
      <p class="text-left">
        <router-link to="/devices/create"
          >Device doesn't exist ? Create a new entry</router-link
        >
      </p>
      <div class="row">
        <router-link to="/devices" class="btn btn-outline-primary mx-auto"
          >Inventory <b-icon icon="arrow-right" aria-hidden="true"
        /></router-link>
      </div>
    </b-card>
  </div>
</template>
<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
.lander {
  margin-top: 8%;
  max-width: 63%;
  text-align: center;
}
</style>
