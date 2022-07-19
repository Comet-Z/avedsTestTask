<template>
  <div class="main-services">
    <FirstCard />
    <SecondCard />
    <ThirdCard />
  </div>
</template>

<script>
import FirstCard from './services/FirstCard.vue'
import SecondCard from './services/SecondCard.vue'
import ThirdCard from './services/ThirdCard.vue'

export default {
    components: {
        FirstCard,
        SecondCard,
        ThirdCard
    }
}
</script>

<style>
.main-services {
    display: flex;
    justify-content: center;
    
    margin-top: 2rem;
    gap: 31px;
}
</style>