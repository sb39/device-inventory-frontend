<template>
  <div>
    <b-card title="Devices" class="listing mx-auto">
      <div class="card-body">
        <div class="row">
          <router-link to="/" class="">
            <b-button variant="btn btn-outline-primary"
              ><b-icon icon="arrow-left" aria-hidden="true" /> Home</b-button
            ></router-link
          >
          <router-link to="/devices/create" class="ml-auto">
            <b-button variant="btn btn-outline-primary"
              >Create Device
              <b-icon icon="arrow-right" aria-hidden="true"/></b-button
          ></router-link>
        </div>
        <DevicesComponent
          class="devicesTable"
          v-bind:devices="devices"
          v-on:edit-device="editDevice"
          v-on:del-device="deleteDevice"
        />
      </div>
    </b-card>
  </div>
</template>

<script>
import DevicesComponent from '../components/DevicesComponent';

export default {
  name: 'DeviceListing',
  props: ['devices'],
  components: {
    DevicesComponent,
  },
  methods: {
    editDevice(id) {
      this.$emit('edit-device', id);
    },
    deleteDevice(id) {
      this.$emit('del-device', id);
    },
  },
};
</script>

<style scoped>
.listing {
  margin-top: 2%;
  max-width: 63%;
  text-align: center;
}
.devicesTable {
  margin: 2em 0;
  height: 17em;
  overflow-y: scroll;
}
</style>
