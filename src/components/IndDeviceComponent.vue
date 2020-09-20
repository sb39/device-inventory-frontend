<template>
  <tr>
    <td>{{ device.device_id }}</td>
    <td>{{ device.serial_number }}</td>
    <td>{{ device.device_type }}</td>
    <td>{{ device.assigned_to }}</td>
    <td>{{ device.assigned_by }}</td>
    <td>{{ device.assigned_date }}</td>
    <td>{{ device.submission_date }}</td>
    <td>
      <b-icon
        class="editIcon"
        icon="pencil-square"
        @click="$emit('edit-device', device.uuid)"
        aria-hidden="true"
      ></b-icon>
    </td>
    <td>
      <b-icon
        class="deleteIcon"
        icon="trash"
        @click="$emit('del-device', device.uuid)"
        aria-hidden="true"
      ></b-icon>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'IndDeviceComponent',
  props: ['device'],
};
</script>

<style scoped>
.deleteIcon:hover,
.editIcon:hover {
  cursor: pointer;
}
</style>
