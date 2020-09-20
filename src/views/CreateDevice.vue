<template>
  <div>
    <b-card title="Create Devices" class="devices mx-auto px-5">
      <div class="row">
        <router-link to="/devices"
          ><b-icon icon="arrow-left" aria-hidden="true" class="float-left" />
          <p class="d-inline">Back to Inventory</p></router-link
        >
      </div>
      <b-form @submit="addDevice">
        <div class="row d-flex">
          <b-form-group class="col-xs-6 col-md-6 col-lg-6 d-inline">
            <label for="device_id">Device Id</label>
            <b-input
              id="device_id"
              placeholder="Enter Device ID"
              v-model="device_id"
              required
            ></b-input>
            <label for="serial_number">Device Serial Number</label>
            <b-input
              id="serial_number"
              placeholder="Enter Device Serial Number"
              v-model="serial_number"
              required
            ></b-input>
          </b-form-group>
          <b-form-group class="col-xs-6 col-md-6 col-lg-6 d-inline">
            <label for="device_type">Device Type</label>
            <b-input
              id="inline-form-input-name"
              placeholder="Device Type"
              v-model="device_type"
              required
            ></b-input>
          </b-form-group>
        </div>
        <div class="row d-flex">
          <b-form-group class="col-xs-6 col-md-6 col-lg-6 d-inline">
            <label for="assigned_to">Assigned to</label>
            <b-input
              id="assigned_to"
              placeholder="Assigned to.."
              v-model="assigned_to"
              required
            ></b-input>
            <label for="assigned_by">Assigned by</label>
            <b-input
              id="assigned_by"
              placeholder="Assigned by.."
              v-model="assigned_by"
              required
            ></b-input>
          </b-form-group>
          <b-form-group class="col-xs-6 col-md-6 col-lg-6 d-inline">
            <label for="assigned_date">Date of Assignment</label>
            <b-form-datepicker
              id="assigned_date"
              v-model="assigned_date"
              placeholder="Choose a date"
              class="mb-2"
            ></b-form-datepicker>
            <label for="submission_date">Date of submission</label>
            <b-form-datepicker
              id="submission_date"
              v-model="submission_date"
              placeholder="Choose a date"
              class="mb-2"
            ></b-form-datepicker>
          </b-form-group>
        </div>
        <div class="d-flex justify-content-center pt-3">
          <input type="submit" class="btn btn-outline-primary" value="Create" />
        </div>
      </b-form>
    </b-card>
  </div>
</template>
<script>
import { v4 as uuid } from 'uuid';

export default {
  name: 'CreateDevice',
  data() {
    return {
      device_id: '',
      serial_number: '',
      device_type: '',
      assigned_to: '',
      assigned_by: '',
      assigned_date: new Date(),
      submission_date: '',
    };
  },
  methods: {
    dateFormatter(dateObj) {
      return new Date(dateObj)
        .toLocaleString()
        .split(',')[0]
        .replace(/\//g, '-');
    },
    addDevice(event) {
      event.preventDefault();
      const newDevice = {
        id: uuid(),
        device_id: this.device_id,
        serial_number: this.serial_number,
        device_type: this.device_type,
        assigned_to: this.assigned_to,
        assigned_by: this.assigned_by,
        assigned_date: this.dateFormatter(this.assigned_date),
        submission_date: this.submission_date,
      };
      this.$emit('new-device', newDevice);
      this.device_id = '';
      this.serial_number = '';
      this.device_type = '';
      this.assigned_to = '';
      this.assigned_by = '';
      this.assigned_date = '';
      this.submission_date = '';
    },
  },
};
</script>

<style scoped>
.devices {
  margin-top: 2%;
  max-width: 63%;
  text-align: center;
}
.input-field {
  padding: 0.5em 0;
}
</style>
