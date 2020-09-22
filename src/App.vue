<template>
  <div id="app">
    <Header />
    <router-view
      v-on:new-device="addDevices"
      v-bind:devices="devices"
      v-bind:filtered="filtered"
      v-on:search-change="searchInput"
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
import axios from 'axios';

export default {
  name: 'App',
  components: {
    Header,
  },
  data() {
    return {
      devices: [],
      filtered: [],
    };
  },
  created() {
    axios
      .get('https://device-inventory.azurewebsites.net/devices')
      .then((response) => {
        this.devices = response.data;
      })
      .catch((err) => console.log(err));
  },
  methods: {
    addDevices(obj) {
      Vue.$vToastify.success('Device has been added !');
      axios
        .post('https://device-inventory.azurewebsites.net/devices', obj)
        .then((response) => {
          this.devices.push(response.data);
          this.$forceUpdate();
        })
        .catch((err) => {
          Vue.$vToastify.error('Device creation Failed !');
          console.log(err);
        });
    },
    editDevice(obj) {
      this.devices = this.devices.map((e) => {
        if (e.id === obj.id) {
          e = obj;
        }
        return e;
      });
      axios
        .patch(
          `https://device-inventory.azurewebsites.net/devices/${obj.id}`,
          obj,
        )
        .then(() => {
          this.devices.filter((e) => e.id === obj.id)[0] = obj;
          Vue.$vToastify.success('Device has been updated !');
          this.$forceUpdate();
        })
        .catch((err) => {
          Vue.$vToastify.error('Device updation Failed !');
          console.log(err);
        });
    },
    deleteDevice(id) {
      this.devices = this.devices.map((e) => {
        if (e.id === id) {
          e.deleted = 1;
        }
        return e;
      });
      axios
        .delete(`https://device-inventory.azurewebsites.net/devices/${id}`)
        .then(() => {
          Vue.$vToastify.success('Device has been deleted !');
        })
        .catch((err) => {
          console.log(err);
          Vue.$vToastify.error('Device deletion Failed !');
        });
    },
    searchInput(input) {
      this.filtered = this.devices.filter((item) => item.device_id === input);
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
