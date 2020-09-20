<template>
  <div>
    <b-navbar toggleable="sm" class="navbar">
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

      <b-navbar-brand>
        <img left class="logo" alt="logo_holder" src="../../assets/logo.png"
      /></b-navbar-brand>

      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-text class="p-1"
            ><router-link to="/">Home</router-link></b-nav-text
          >
          <b-nav-text class="p-1">
            <router-link to="/devices">Inventory</router-link></b-nav-text
          >
          <b-nav-text class="p-1"
            ><router-link to="/login">Account</router-link></b-nav-text
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
.logo {
  width: auto;
  height: 2em;
}
.navbar {
  background-color: rgba(0, 0, 0, 0.3);
}
.navbar a {
  color: white;
}
.navbar li:hover a:hover {
  text-decoration: underline;
  color: white;
}
.navbar a.router-link-exact-active {
  text-decoration: underline;
  color: white;
}
</style>
