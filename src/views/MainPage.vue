<template>
  <div class="main">
    <div class="content">
      <Main />
      <AuthModal />
      <Services />
    </div>
  </div>
</template>

<script>
import Main from '@/components/MainComponent.vue'
import Services from '@/components/ServicesComponent.vue'
import AuthModal from '@/components/auth/LoginModal.vue'

export default {
  components: {
    Main,
    Services,
    AuthModal
  }
}
</script>

<style>

</style>