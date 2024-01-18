<template>
  <b-breadcrumb >
    <b-nav vertical class="pt-5">
  <b-nav-item>
    <b-link :to="{name: 'electronicos'}">
       Electrónicos
    </b-link>
  </b-nav-item>
   <b-nav-item>
    <b-link :to="{name: 'videojuegos'}">
        Juegos de video
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
            text: 'electronicos',
            href: '#/electronicos',
            name:"electronicos"
          },
          {
            text: 'videojuegos',
            href: '#/videojuegos',
            name: "videojuegos"
          },
        ]
      }
    }
}
</script>

<style>

</style>