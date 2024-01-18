<template>
  <b-breadcrumb>
    <b-nav vertical class="pt-5">
      <b-nav-item>
        <b-link :to="{ name: 'tiendaJuguetes' }"> Tienda de juguetes </b-link>
      </b-nav-item>
      <b-nav-item>
        <b-link :to="{ name: 'electrodomesticos' }">
          Tienda de electrodomésticos
        </b-link>
      </b-nav-item>
      <b-nav-item>
        <b-link :to="{ name: 'hogar' }">
          Tienda de productos para el hogar
        </b-link>
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
          text: "tiendaJuguetes",
          href: "#/tiendaJuguetes",
          name: "tiendaJuguetes",
        },

        {
          text: "electrodomesticos",
          href: "#/electrodomesticos",
          name: "electrodomesticos",
        },
        {
          text: "hogar",
          href: "#/hogar",
          name: "hogar",
        },
      ],
    };
  },
};
</script>

<style></style>
