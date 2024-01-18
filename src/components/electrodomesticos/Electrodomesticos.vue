<template>
  <b-breadcrumb>
    <b-nav vertical class="pt-5">
      <b-nav-item>
        <b-link :to="{ name: 'cocina' }"> Cocina </b-link>
      </b-nav-item>
      <b-nav-item>
        <b-link :to="{ name: 'estufas' }"> Estufas </b-link>
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
          text: "cocina",
          href: "#/cocina",
          name: "cocina",
        },
        {
          text: "estufas",
          href: "#/estufas",
          name: "estufas",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
