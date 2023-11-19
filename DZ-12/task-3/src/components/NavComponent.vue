<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light" id="navbar">
    <router-link class="navbar-brand mr-5" to="/">Best IT Company</router-link>
    <button class="navbar-toggler" type="button">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link class="nav-link" to="/">Головна</router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link" to="/employees">
            Працівники
          </router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link" to="/candidates">
            Кандідати
          </router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link" to="/meets">Співбесіди</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavComponent",
};
</script>
