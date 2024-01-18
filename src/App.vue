<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>
<template>
  <div>
    <router-view>
    <div><div>
      <b-nav tabs align="center">
        <b-nav-item active>Active</b-nav-item>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item>Link with a long name </b-nav-item>
        <b-nav-item disabled>Disabled</b-nav-item>
      </b-nav>
    </div>
      
    </div>
    
    <template>
      <div>
        <template>
          <div>
            <b-sidebar id="sidebar-footer" aria-label="Sidebar with custom footer" shadow visible no-header>
              <div class="px-3 py-2">
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                  in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                </p>
                <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
              </div>
            </b-sidebar>
          </div>
        </template>
        
      </div>
    </template>
    
</router-view>
  </div>
</template>


<style scoped>
</style>
