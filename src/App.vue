<template>
  <div id="app">
    <Header />
    <router-view
      v-on:new-device="addDevices"
      v-bind:devices="devices"
      v-on:edit-device="editDevice"
      v-on:del-device="deleteDevice"
    />
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Vue from 'vue';
import Header from './components/layouts/Header';

export default {
  name: 'App',
  components: {
    Header,
  },
  data() {
    return {
      devices: [
        {
          uuid: 'as-546asdada-5',
          device_id: 1,
          serial_number: 'ABC1233',
          device_type: 'mobile',
          assigned_to: 'self',
          assigned_by: 'self',
          assigned_date: '09-09-2020',
          submission_date: '09-09-2020',
        },
        {
          uuid: 'as-546asdada-4',
          device_id: 2,
          serial_number: 'ABC1233',
          device_type: 'mobile',
          assigned_to: 'self',
          assigned_by: 'self',
          assigned_date: '09-09-2020',
          submission_date: '09-09-2020',
        },
        {
          uuid: 'as-546asdada-3',
          device_id: 3,
          serial_number: 'ABC1233',
          device_type: 'mobile',
          assigned_to: 'self',
          assigned_by: 'self',
          assigned_date: '09-09-2020',
          submission_date: '09-09-2020',
        },
        {
          uuid: 'as-546asdada-2',
          device_id: 4,
          serial_number: 'ABC1233',
          device_type: 'mobile',
          assigned_to: 'self',
          assigned_by: 'self',
          assigned_date: '09-09-2020',
          submission_date: '09-09-2020',
        },
        {
          uuid: 'as-546asdada-1',
          device_id: 5,
          serial_number: 'ABC1233',
          device_type: 'mobile',
          assigned_to: 'self',
          assigned_by: 'self',
          assigned_date: '09-09-2020',
          submission_date: '09-09-2020',
        },
      ],
    };
  },
  methods: {
    addDevices(obj) {
      Vue.$vToastify.success('Device has been added !');
      this.devices.push(obj);
    },
    editDevice(id) {
      console.log(id);
    },
    deleteDevice(id) {
      Vue.$vToastify.success('Device has been deleted !');
      this.devices = this.devices.filter((e) => e.uuid !== id);
    },
  },
};
</script>

<style scoped>
#app {
  background: linear-gradient(-25deg, #23a6d5, #3371aa, #ffffff, #3371aa);
  min-height: 100vh;
  max-height: 100%;
  background-size: cover;
  -webkit-animation: gradientBG 10s ease infinite;
  animation: gradientBG 10s ease infinite;
}
@-webkit-keyframes gradientBG {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@keyframes gradientBG {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
