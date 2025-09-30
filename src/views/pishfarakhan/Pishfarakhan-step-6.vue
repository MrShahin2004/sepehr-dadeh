<!-- src/views/pishfarakhan/Pishfarakhan-step-6.vue -->
<template>
  <div class="min-h-screen bg-neutral-50" dir="rtl">
    <main class="mx-auto max-w-7xl px-4 py-10">
      <StepperHeader :steps="steps" :current="6"/>
      <div class="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div class="lg:col-span-9">
          <div class="rounded-xl bg-white shadow p-6 min-h-[340px] flex items-center justify-center text-gray-500">
            مرحله ۶ — اطلاعات قرارداد
          </div>
        </div>
        <aside class="lg:col-span-3">
          <div class="space-y-3">
            <div class="rounded-xl bg-white shadow p-4">
              <div class="text-sm text-gray-500">کد شناسه یکتا:</div>
              <div class="text-lg font-semibold text-gray-800 mt-1">{{ contractId }}</div>
            </div>
            <button class="w-full rounded-lg bg-blue-600 hover:bg-blue-700 text-white py-2">بارگذاری مجوز اداره کل
            </button>
            <button class="w-full rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white py-2">بارگذاری</button>
            <button class="w-full rounded-lg bg-teal-600 hover:bg-teal-700 text-white py-2" @click="goNext">ثبت</button>
          </div>
        </aside>
      </div>
      <div class="mt-4 flex items-center justify-between">
        <button class="px-4 py-2 rounded-lg bg-gray-200 text-gray-800" @click="goPrev">قبلی</button>
        <button class="px-4 py-2 rounded-lg bg-teal-600 text-white" @click="goNext">بعدی</button>
      </div>
    </main>
  </div>
</template>

<script setup>
import {computed} from 'vue'
import {useRoute} from 'vue-router'

const steps = [
  'مجوز اداره کل', 'نامه کارشناسی', 'فرآیند درخواست', 'نتایج مزایده',
  'مشخصات', 'اطلاعات قرارداد', 'مستندات پرداخت', 'قرارداد'
]
const route = useRoute()
const contractId = computed(() => route.params.id ?? '—')

function goPrev() {
  window.location.href = `/pishfarakhan/step-5/${contractId.value}`
}

function goNext() {
  window.location.href = `/pishfarakhan/step-7/${contractId.value}`
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
