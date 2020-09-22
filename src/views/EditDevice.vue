<template>
  <div>
    <b-card title="Edit Devices" class="edit mx-auto px-5">
      <div class="row">
        <router-link to="/devices"
          ><b-icon icon="arrow-left" aria-hidden="true" class="float-left" />
          <p class="d-inline">Back to Inventory</p></router-link
        >
      </div>
      <b-form @submit="editDevice">
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
              v-model="device_serial_number"
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
              v-model="assignment_date"
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
          <input type="submit" class="btn btn-outline-primary" value="Edit" />
        </div>
      </b-form>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'EditDevice',
  props: ['device'],
  data() {
    return {
      device_id: '',
      device_serial_number: '',
      device_type: '',
      assigned_to: '',
      assigned_by: '',
      assignment_date: '',
      submission_date: '',
    };
  },
  created() {
    const {
      device_id,
      device_serial_number,
      device_type,
      assigned_to,
      assigned_by,
      assignment_date,
      submission_date,
      id,
      deleted,
    } = this.$route.params.data;
    this.device_id = device_id;
    this.device_serial_number = device_serial_number;
    this.device_type = device_type;
    this.assigned_to = assigned_to;
    this.assigned_by = assigned_by;
    this.id = id;
    this.deleted = deleted;
    this.assignment_date = [
      assignment_date.split('-').pop(),
      assignment_date.split('-')[0],
      assignment_date.split('-')[1],
    ].join('-');
    this.submission_date = submission_date;
  },
  methods: {
    editDevice(event) {
      event.preventDefault();
      const newObj = {
        device_id: this.device_id,
        device_serial_number: this.device_serial_number,
        device_type: this.device_type,
        assigned_to: this.assigned_to,
        assigned_by: this.assigned_by,
        assignment_date: this.assignment_date,
        submission_date: this.submission_date,
      };
      newObj.id = this.id;
      newObj.deleted = this.deleted;
      console.log(newObj);
      this.$emit('edit-device', newObj);
      this.$router.push({ name: 'DeviceListing' });
    },
  },
};
</script>

<style scoped>
.edit {
  margin-top: 2%;
  max-width: 63%;
  text-align: center;
}
.input-field {
  padding: 0.5em 0;
}
</style>
