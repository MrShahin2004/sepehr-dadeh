<!-- src/views/pishfarakhan/Pishfarakhan-step-8-edit.vue -->
<template>
  <div class="min-h-screen bg-neutral-50" dir="rtl">
    <main class="mx-auto max-w-7xl px-4 py-10">
      <StepperHeader :steps="steps" :current="8"/>
      <div class="mt-4 rounded-xl bg-white shadow p-6 min-h-[340px] flex items-center justify-center text-gray-500">
        نسخه ویرایش مرحله ۸
      </div>
    </main>
  </div>
</template>

<script setup>
const steps = [
  'مجوز اداره کل', 'نامه کارشناسی', 'فرآیند درخواست', 'نتایج مزایده',
  'مشخصات', 'اطلاعات قرارداد', 'مستندات پرداخت', 'قرارداد'
]
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
                   :class="'bg-white border-teal-500 text-teal-600'">
                8
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
