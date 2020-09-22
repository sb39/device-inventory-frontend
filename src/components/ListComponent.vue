<template>
  <div class="list-group table bg-white">
    <table class="mx-auto" v-if="devices.length > 0">
      <thead>
        <tr>
          <th>Device Id</th>
          <th>Device Serial Number</th>
          <th>Device Type</th>
        </tr>
      </thead>
      <tbody class="list">
        <tr v-for="device in devices" v-bind:key="device.id">
          <td>{{ device.device_id }}</td>
          <td>{{ device.device_serial_number }}</td>
          <td>{{ device.device_type }}</td>
        </tr>
      </tbody>
    </table>
    <div class="alert alert-danger" role="alert" v-else>
      No matching data
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListComponent',
  props: ['devices'],
};
</script>

<style scoped>
.list::-webkit-scrollbar {
  display: none;
}
</style>
