<!-- src/views/pishfarakhan/Pishfarakhan-step-8.vue -->
<template>
  <div class="min-h-screen bg-neutral-50" dir="rtl">
    <main class="mx-auto max-w-7xl px-4 py-10">
      <StepperHeader :steps="steps" :current="8"/>
      <div class="mt-4 grid grid-cols-1 gap-4">
        <div class="rounded-xl bg-white shadow p-6 min-h-[340px]">
          <div v-if="fileUrl" class="w-full h-[70vh]">
            <iframe :src="fileUrl" class="w-full h-full rounded-lg border"/>
          </div>
          <div v-else class="h-[260px] flex items-center justify-center text-gray-500">
            در حال پردازش ...
          </div>
        </div>
        <div>
          <button class="px-4 py-2 rounded-lg bg-teal-600 text-white" @click="submitFrm">ثبت</button>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue'
// import {useRoute} from 'vue-router'

const steps = [
  'مجوز اداره کل', 'نامه کارشناسی', 'فرآیند درخواست', 'نتایج مزایده',
  'مشخصات', 'اطلاعات قرارداد', 'مستندات پرداخت', 'قرارداد'
]
// const route = useRoute()
const fileUrl = ref(null)

onMounted(async () => {
  // TODO: replace with real backend fetch for base64/pdf
  // Here we just simulate no file until backend is wired.
  fileUrl.value = null
})

async function submitFrm() {
  // TODO: finalize and navigate (e.g., to /cartable)
  // window.location.href = '/cartable'
  alert('ثبت شد')
}
</script>

<script>
export default {
  components: {
    StepperHeader: {
      props: {steps: Array, current: Number},
      template: `
        <section class="bg-white rounded-xl shadow border border-gray-100 p-4">
          <div class="relative h-0.5 bg-gray-200 rounded">
            <div class="absolute inset-y-0 right-0 bg-teal-500 rounded"
                 :style="{ width: ((current-1)/(steps.length-1))*100 + '%' }"></div>
          </div>
          <ol class="mt-4 grid grid-cols-8 gap-4 text-center">
            <li v-for="(s, i) in steps" :key="i" class="space-y-1">
              <div class="mx-auto w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm"
                   :class="i+1 < current ? 'bg-teal-500 border-teal-500 text-white'
                      : i+1 === current ? 'bg-white border-teal-500 text-teal-600'
                      : 'bg-gray-100 border-gray-200 text-gray-400'">
                {{ i + 1 }}
              </div>
              <div class="text-xs text-gray-600">{{ s }}</div>
            </li>
          </ol>
        </section>
      `
    }
  }
}
</script>
