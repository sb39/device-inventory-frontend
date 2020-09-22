<template>
  <tr>
    <td>{{ device.device_id ? device.device_id : '-' }}</td>
    <td>
      {{ device.device_serial_number ? device.device_serial_number : '-' }}
    </td>
    <td>{{ device.device_type ? device.device_type : '-' }}</td>
    <td>{{ device.assigned_to ? device.assigned_to : '-' }}</td>
    <td>{{ device.assigned_by ? device.assigned_by : '-' }}</td>
    <td>{{ device.assignment_date ? device.assignment_date : '-' }}</td>
    <td>{{ device.submission_date ? device.submission_date : '-' }}</td>
    <td>{{ device.deleted ? '✔️' : '-' }}</td>
    <td>
      <b-icon
        class="editIcon"
        icon="pencil-square"
        @click="handleEdit(device)"
        aria-hidden="true"
      ></b-icon>
    </td>
    <td
      class=""
      v-bind:class="{
        disabled: !!device.deleted,
      }"
    >
      <b-icon
        class="deleteIcon"
        icon="trash"
        @click="$emit('del-device', device.id)"
        aria-hidden="true"
      ></b-icon>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'IndDeviceComponent',
  props: ['device'],
  methods: {
    handleEdit(device) {
      this.$router.push({ name: 'EditDevice', params: { data: device } });
    },
  },
};
</script>

<style scoped>
.deleteIcon:hover,
.editIcon:hover {
  cursor: pointer;
}
.editIcon {
  color: black;
}
.disabled {
  pointer-events: none;
  cursor: default;
  color: grey;
}
</style>
