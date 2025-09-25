<!-- src/views/pishfarakhan/PishfarakhanWizard.vue -->
<template>
  <div class="min-h-screen bg-neutral-50" dir="rtl">
    <!-- ===== Header (matches your banner) ===== -->
    <header class="relative overflow-hidden">
      <div class="bg-gradient-to-l from-indigo-800 to-blue-700 h-44 w-full flex items-center justify-center">
        <!-- left & right images like your pages -->
        <img src="@/assets/images/khamenei.png" class="absolute left-4 top-4 w-28 h-auto object-contain select-none" alt="">
        <img src="@/assets/images/education.svg" class="absolute right-4 top-6 w-24 h-auto object-contain select-none" alt="">
        <div class="text-center text-yellow-200 leading-relaxed">
          <h1 class="text-2xl font-bold">پایگاه اطلاعات قراردادهای اداره کل و امور فروش</h1>
          <p class="text-xl mt-1">استان خراسان رضوی</p>
        </div>
      </div>
    </header>

    <!-- ===== Body ===== -->
    <main class="mx-auto max-w-7xl px-4 -mt-10 pb-20">
      <!-- Info strip -->
      <div class="bg-teal-400/80 text-white rounded-xl shadow p-4 flex items-center justify-between">
        <span class="px-4 py-2 bg-teal-500 rounded-lg">کارشناس ثبت: admin</span>
        <button class="bg-teal-600 hover:bg-teal-700 rounded-lg px-4 py-2">اطلاعیه های اخیر</button>
      </div>

      <!-- Main card area -->
      <section class="mt-5 bg-white rounded-xl shadow border border-gray-100 p-4">
        <!-- Stepper top line -->
        <div class="relative h-0.5 bg-gray-200 rounded">
          <div class="absolute inset-y-0 right-0 bg-teal-500 rounded"
               :style="{ width: progressWidth }"></div>
        </div>

        <!-- Step bullets/labels (exact order & look) -->
        <ol class="mt-4 grid grid-cols-8 gap-4 text-center">
          <li v-for="(s, i) in steps" :key="s.key" class="space-y-1">
            <div
                class="mx-auto w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm select-none"
                :class="i+1 < step ? 'bg-teal-500 border-teal-500 text-white'
                    : i+1 === step ? 'bg-white border-teal-500 text-teal-600'
                    : 'bg-gray-100 border-gray-200 text-gray-400'">
              {{ i+1 }}
            </div>
            <div class="text-xs text-gray-600">{{ s.title }}</div>
          </li>
        </ol>

        <!-- Content row: left big panel + right sidebar -->
        <div class="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-4">
          <!-- Left main panel (looks like your big rounded area) -->
          <div class="lg:col-span-9">
            <div class="rounded-xl bg-white shadow p-6 min-h-[340px]">
              <component :is="currentComponent" :id="id" />
            </div>
          </div>

          <!-- Right sidebar -->
          <aside class="lg:col-span-3">
            <div class="space-y-3">
              <div class="rounded-xl bg-white shadow p-4">
                <div class="text-sm text-gray-500">کد شناسه یکتا:</div>
                <div class="text-lg font-semibold text-gray-800 mt-1">{{ id }}</div>
              </div>

              <button class="w-full rounded-lg bg-blue-600 hover:bg-blue-700 text-white py-2">
                بارگذاری مجوز اداره کل
              </button>
              <button class="w-full rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white py-2">
                بارگذاری
              </button>

              <button class="w-full rounded-lg bg-teal-600 hover:bg-teal-700 text-white py-2" @click="goNext">
                ثبت
              </button>
            </div>
          </aside>
        </div>

        <!-- Nav buttons (bottom) -->
        <div class="mt-4 flex items-center justify-between">
          <button class="px-4 py-2 rounded-lg bg-gray-200 text-gray-800 disabled:opacity-40"
                  :disabled="step===1"
                  @click="goPrev">قبلی</button>
          <button class="px-4 py-2 rounded-lg bg-teal-600 text-white disabled:opacity-40"
                  :disabled="step===steps.length"
                  @click="goNext">بعدی</button>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

/** Step labels exactly like your screenshot (right→left) */
const steps = [
  { key: "permit",     title: "مجوز اداره کل" },
  { key: "letter",     title: "نامه کارشناسی" },
  { key: "process",    title: "فرآیند درخواست" },
  { key: "results",    title: "نتایج مزایده" },
  { key: "specs",      title: "مشخصات" },
  { key: "contract",   title: "اطلاعات قرارداد" },
  { key: "payments",   title: "مستندات پرداخت" },
  { key: "final",      title: "قرارداد" },
];

// Minimal step components to match the look
const Step1 = { template: `<div class="text-center text-gray-500">… در حال پردازش …</div>` };
const Step2 = { template: `<div class="text-center text-gray-500">مرحله ۲</div>` };
const Step3 = { template: `<div class="text-center text-gray-500">مرحله ۳</div>` };
const Step4 = { template: `<div class="text-center text-gray-500">مرحله ۴</div>` };
const Step5 = { template: `<div class="text-center text-gray-500">مرحله ۵</div>` };
const Step6 = { template: `<div class="text-center text-gray-500">مرحله ۶</div>` };
const Step7 = { template: `<div class="text-center text-gray-500">مرحله ۷</div>` };
const Step8 = { template: `<div class="text-center text-gray-500">مرحله ۸</div>` };
const stepMap = [Step1, Step2, Step3, Step4, Step5, Step6, Step7, Step8];

const route = useRoute();
const router = useRouter();

const step = computed(() => {
  const n = Number(route.params.step);
  return Number.isFinite(n) && n >= 1 ? n : 1;
});
const id = computed(() => route.params.id ?? "—");

/** top progress bar width (from right to left) */
const progressWidth = computed(() => `${(step.value - 1) / (steps.length - 1) * 100}%`);
const currentComponent = computed(() => stepMap[step.value - 1] || Step1);

/** navigation helpers — keep URL in sync */
function goTo(n) {
  const max = steps.length;
  const s = Math.min(Math.max(1, n), max);
  router.push({ name: "PishfarakhanStep", params: { step: s, id: id.value } });
}
function goPrev() { goTo(step.value - 1); }
function goNext() { goTo(step.value + 1); }
</script>
