<template>
  <div>
    <div v-if="devices.length">
      <table class="table">
        <thead>
          <tr>
            <th>Device ID</th>
            <th>Device S.No.</th>
            <th>Device Type</th>
            <th>Assigned To</th>
            <th>Assigned By</th>
            <th>Assignment Date</th>
            <th>Submission Date</th>
            <th>Deleted</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody v-bind:key="device.uuid" v-for="device in devices">
          <IndDeviceComponent
            v-if="device instanceof Object"
            v-bind:device="device"
            v-on:del-device="deleteDevice"
          />
        </tbody>
      </table>
    </div>
    <div v-else class="alert alert-danger">No records</div>
  </div>
</template>

<script>
import IndDeviceComponent from './IndDeviceComponent';

export default {
  name: 'DevicesComponent',
  props: ['devices'],
  components: {
    IndDeviceComponent,
  },
  methods: {
    deleteDevice(id) {
      this.$emit('del-device', id);
    },
  },
};
</script>

<style scoped></style>
