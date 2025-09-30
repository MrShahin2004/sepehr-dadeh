<template>
  <component v-if="Cmp" :is="Cmp" :key="$route.fullPath"/>
  <div v-else class="min-h-screen flex items-center justify-center text-gray-500" dir="rtl">
    در حال بارگذاری...
  </div>
</template>

<script setup>
import {useRoute, useRouter} from 'vue-router'
import {ref, watchEffect} from 'vue'

const route = useRoute()
const router = useRouter()
const Cmp = ref(null)

watchEffect(async () => {
  // clamp the step to 1..8
  const raw = Number(route.params.step)
  const step = Number.isFinite(raw) ? Math.min(8, Math.max(1, raw)) : 1
  if (raw !== step) {
    // normalize the URL if out of bounds
    router.replace({name: 'PishfarakhanStep', params: {step, id: route.params.id}})
    return
  }
  // dynamic import of the right step file
  Cmp.value = (await import(`@/views/pishfarakhan/Pishfarakhan-step-${step}.vue`)).default
})
</script>
