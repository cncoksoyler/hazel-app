<template>
  <div class="contact">
    <navbar-component></navbar-component>
    <main>
      <h1>This is theta page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sit dignissimos numquam tempora doloremque? Incidunt, magni laboriosam exercitationem vitae, non aliquid labore harum eum fuga nulla aut ex odio earum!</p>
    </main>

    <footer-component></footer-component>
  </div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

import '@/assets/tailwind.css'

export default {
  components: {
    NavbarComponent,
    FooterComponent
  }
}

</script>
