<template>
  <div>
    <table class="list-group table mx-auto">
      <tbody
        v-bind:key="device.id"
        v-for="device in devices"
        class="list-group-item row mx-auto"
      >
        <thead>
          <th>Device Id</th>
          <th>Device Serial Number</th>
          <th>Device Type</th>
        </thead>
        <tr>
          <td>{{ device.device_id }}</td>
          <td>{{ device.device_serial_number }}</td>
          <td>{{ device.device_type }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ListComponent',
  props: ['devices'],
};
</script>

<style scoped></style>
