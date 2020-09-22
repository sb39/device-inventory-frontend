<template>
  <div class="container lander">
    <b-card title="Search for devices" class="auth mx-auto p-5">
      <b-input-group>
        <template v-slot:prepend>
          <b-input-group-text>Instant Search :</b-input-group-text>
        </template>
        <b-form-input
          id="search_bar"
          v-model="device_input"
          v-on:update="searchChange"
          placeholder="Enter Device ID..."
          @focus="display_flag = true"
          v-on:blur="display_flag = false"
          aria-describedby="inputHelpText"
        ></b-form-input>
      </b-input-group>
      <small id="inputHelpText" class="row form-text text-muted">
        Note: Device ID's are case-sensitive and should exactly match with the
        one's available.
      </small>
      <ListComponent
        id="list_view"
        class="col-md-10"
        v-if="display_flag"
        v-bind:devices="filtered"
      />
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
import ListComponent from '../components/ListComponent';

export default {
  name: 'Home',
  props: ['filtered'],
  components: {
    ListComponent,
  },
  data() {
    return {
      display_flag: false,
      device_input: '',
    };
  },
  methods: {
    searchChange() {
      this.$emit('search-change', this.device_input);
    },
  },
};
</script>

<style scoped>
.lander {
  margin-top: 8%;
  max-width: 63%;
  text-align: center;
}
#list_view::-webkit-scrollbar {
  display: none;
}
#list_view {
  z-index: 1;
  position: absolute;
  height: 70%;
  overflow: scroll;
}
#list_view {
  visibility: visible;
}
#symbol_show {
  z-index: 1;
}
</style>
