<template>
  <b-breadcrumb>
    <b-nav vertical class="pt-5">
      <b-nav-item>
        <b-link :to="{ name: 'industriales' }"> Industriales </b-link>
      </b-nav-item>
      <b-nav-item>
        <b-link :to="{ name: 'limpieza' }"> limpieza</b-link>
      </b-nav-item>
    </b-nav>
  </b-breadcrumb>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "industriales",
          href: "#/industriales",
          name: "industriales",
        },
        {
          text: "limpieza",
          href: "#/limpieza",
          name: "limpieza",
        },
      ],
    };
  },
};
</script>

<style></style>
