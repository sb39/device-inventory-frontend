<template>
  <div>
    <b-card title="Sign In With" class="auth mx-auto p-5">
      <b-form>
        <div class="d-flex row">
          <b-input-group class="input-field">
            <template v-slot:prepend>
              <b-input-group-text>Username :</b-input-group-text>
            </template>
            <b-form-input></b-form-input>
          </b-input-group>

          <b-input-group class="input-field">
            <template v-slot:prepend>
              <b-input-group-text>Password :</b-input-group-text>
            </template>
            <b-form-input></b-form-input>
          </b-input-group>
        </div>
        <div class="d-flex justify-content-center pt-3">
          <b-button variant="btn btn-outline-primary">Login</b-button>
        </div>
      </b-form>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'Authentication',
};
</script>

<style scoped>
.auth {
  margin-top: 8%;
  max-width: 63%;
  text-align: center;
}
.input-field {
  padding: 0.5em 0;
}
</style>
