<!-- src/views/pishfarakhan/Pishfarakhan-step-1.vue -->
<template>
  <div class="min-h-screen" dir="rtl">
    <!-- Header exactly like DashBoard.vue -->
    <header class="relative overflow-hidden">
      <div class="top-navbar h-32 w-full flex items-center justify-center">
        <!-- Left image (Iranian flag with figures) -->
        <div class="absolute left-4 top-2 flex items-center space-x-2">
          <img
              src="@/assets/images/khamenei.png"
              class="w-50 h-auto object-contain"
              alt="Iranian figures"
          />
        </div>

        <!-- Center text -->
        <div class="text-center text-white leading-relaxed">
          <router-link to="/">
            <h1
                class="main-title text-3xl text-shadow-[0_4px_10px_black] text-[var(--main-title)]"
            >
              پایگاه اطلاعات قرار دادهای اداره کل آموزش و پرورش استان خراسان
              رضوی
            </h1>
          </router-link>
        </div>

        <!-- Right image (Iranian emblem) -->
        <div class="absolute right-4 top-2 flex flex-col items-center">
          <img
              src="@/assets/images/education.svg"
              class="w-40 h-auto object-contain"
              alt="Iranian emblem"
          />
        </div>
      </div>
    </header>

    <main
        class="main-container mx-auto max-w-[98%] px-4 py-6 bg-gray-100 rounded-xl"
    >
      <!-- Step indicators with progress bar -->
      <div
          class="bg-teal-500 text-white rounded-lg shadow p-4 flex items-center justify-between mb-6 mx-auto max-w-[98%] px-4"
      >
        <span class="text-sm">اطلاعیه های اخیر</span>
        <span class="px-3 py-1 bg-teal-600 rounded text-sm"
        >admin : کارشناس ثبت</span
        >
      </div>

      <section class="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div class="relative">
          <!-- Progress bar line -->
          <div class="absolute top-4 left-0 right-0 h-0.5 bg-gray-200 z-0">
            <div
                class="h-full bg-teal-500 transition-all duration-300 z-0"
                :style="{ width: progressWidth }"
            ></div>
          </div>

          <!-- Step indicators -->
          <div class="flex items-center justify-between relative z-10">
            <div
                v-for="(step, index) in steps"
                :key="index"
                class="flex flex-col items-center"
            >
              <component
                  :is="index + 1 < currentStep ? 'router-link' : 'div'"
                  :to="index + 1 < currentStep ? { name: 'PishfarakhanStep', params: { step: index + 1, id: $route.params.id } } : undefined"
                  class="step-dot"
                  :class="dotClass(index + 1)"
                  style="text-decoration: none; margin-bottom: 0.5rem;"
              >
                {{ index + 1 }}
              </component>
              <span class="text-xs text-center text-gray-600">{{ step }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Main content area - SWAPPED: Processing on left, Form on right -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div class="lg:col-span-1">
          <div class="bg-white rounded-lg shadow-sm p-6">
            <!-- Unique ID -->
            <div class="mb-6">
              <label class="block text-sm font-medium text-gray-700 mb-2"
              >کد شناسه یکتا</label
              >
              <div
                  class="bg-gray-100 px-4 py-3 rounded-lg text-gray-800 font-mono"
              >
                {{ contractId }}
              </div>
            </div>

            <!-- Upload section -->
            <div class="mb-6">
              <label class="block text-sm font-medium text-gray-700 mb-2"
              >بارگزاری مجوز اداره کل</label
              >
              <input
                  ref="fileInput"
                  type="file"
                  class="hidden"
                  accept="application/pdf"
                  @change="onPick"
              />
              <button
                  class="w-full bg-blue-600 hover:bg-blue-700 text-white cursor-pointer py-2 px-4 rounded-lg transition-colors"
                  @click="$refs.fileInput.click()"
              >
                بارگذاری
              </button>
              <!-- ADD: selected-file chip just below the Upload button -->
              <div
                  v-if="selectedFile"
                  class="mt-4 flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-3 py-2 shadow-sm w-full"
              >
                <button
                    type="button"
                    @click="clearSelectedFile"
                    class="cursor-pointer flex-shrink-0 w-7 h-7 rounded-lg bg-red-500 text-white flex items-center justify-center"
                    aria-label="حذف فایل"
                    title="حذف فایل"
                >
                  ✕
                </button>

                <div
                    class="flex-shrink-0 text-xs text-gray-500 w-16 text-center leading-tight"
                >
                  <div class="font-medium">{{ selectedFile.sizeKB }}</div>
                  <div>KB</div>
                </div>

                <div
                    class="text-sm text-gray-800 truncate"
                    :title="selectedFile.name"
                >
                  {{ selectedFile.name }}
                </div>
              </div>
            </div>

            <!-- Submit button -->
            <button
                class="w-full bg-blue-600 hover:bg-blue-700 text-white cursor-pointer py-3 px-4 rounded-lg font-medium transition-colors"
                @click="goNext"
            >
              ثبت
            </button>
          </div>
        </div>

        <div class="lg:col-span-2">
          <div class="bg-white rounded-lg shadow-sm p-4 h-96">
            <!-- PDF Viewer -->
            <div v-if="pdfUrl" class="w-full h-full">
              <iframe
                  :src="pdfUrl"
                  class="w-full h-full rounded-lg border border-gray-200"
                  frameborder="0"
              />
            </div>

            <!-- Processing message when no PDF -->
            <div v-else class="h-full flex items-center justify-center">
              <div class="text-center text-gray-500">
                <div class="text-2xl mb-4">در حال پردازش ...</div>
                <div class="text-sm">لطفاً فایل PDF را انتخاب کنید</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer exactly like HomePage.vue -->
    <hr/>
    <div class="login-footer">
      <div class="footer-links flex justify-center items-center gap-x-[1rem]">
        <router-link to="/">
          <a
              class="text-white transition hover:cursor-pointer hover:text-blue-500"
          >حریم خصوصی</a
          >
        </router-link>
        <router-link to="/">
          <a
              class="text-white transition hover:cursor-pointer hover:text-blue-500"
          >نظرسنجی‌ها</a
          >
        </router-link>
        <router-link to="/">
          <a
              class="text-white transition hover:cursor-pointer hover:text-blue-500"
          >پیوندها</a
          >
        </router-link>
        <router-link to="/">
          <a
              class="text-white transition hover:cursor-pointer hover:text-blue-500"
          >فراخوان‌ها</a
          >
        </router-link>
        <router-link to="/">
          <a
              class="text-white transition hover:cursor-pointer hover:text-blue-500"
          >آمارها</a
          >
        </router-link>
        <router-link to="/">
          <a
              class="text-white transition hover:cursor-pointer hover:text-blue-500"
          >صفحه اصلی</a
          >
        </router-link>
      </div>
      <div class="footer-desc flex justify-center items-center">
        <p class="text-[white]">
          © کلیه حقوق این پایگاه به سپهر داده تعلق دارد
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed, onBeforeUnmount, ref} from "vue";
import {useRoute} from "vue-router";

const selectedFile = ref(null);
const fileInput = ref(null); // matches ref="fileInput" in your <input type="file">

// Step labels (right to left)
const steps = [
  "مجوز اداره کل",
  "نامه کارشناسی",
  "فرآیند درخواست",
  "نتایج مزایده",
  "مشخصات",
  "اطلاعات قرارداد",
  "مستندات پرداخت",
  "قرارداد",
];

// progress (step 1)
const progressWidth = computed(
    () => `${((1 - 1) / (steps.length - 1)) * 100}%`
);

// ID from URL
const route = useRoute();
const contractId = computed(() => route.params.id ?? "—");

const currentStep = computed(() => {
  const s = Number(route.params.step)
  if (Number.isFinite(s)) return s
  return route.name === 'PishfarakhanStep8Edit' ? 8 : 1
})

// Class resolver for each dot (1..8)
function dotClass(n) {
  if (n < currentStep.value) return 'step-dot--done'
  if (n === currentStep.value) return 'step-dot--current'
  return 'step-dot--todo'
}

// PDF preview URL (object URL)
const pdfUrl = ref(null);
let objectUrl = null;

function onPick(e) {
  const f = e.target.files?.[0];
  if (!f) return;

  if (objectUrl) URL.revokeObjectURL(objectUrl);
  objectUrl = URL.createObjectURL(f);
  pdfUrl.value = objectUrl;

  selectedFile.value = {
    name: f.name,
    sizeKB: (f.size / 1024).toFixed(2),
  };
}

// ADD: clear chip + reset input + remove preview URL
function clearSelectedFile() {
  try {
    if (fileInput?.value) fileInput.value.value = null;
  } catch (error) {
    console.log(error);
  }

  if (objectUrl) {
    URL.revokeObjectURL(objectUrl);
    objectUrl = null;
  }

  pdfUrl.value = null;
  selectedFile.value = null;
}

function goNext() {
  // Only proceed if a PDF has been chosen (viewer URL is set)
  if (!pdfUrl.value) {
    toast.error("هیچ مدرکی بارگذاری نشده است.", {position: "top-right"});
    return;
  }

  // proceed to step 2 with the same id
  window.location.href = `/pishfarakhan/step-2/${encodeURIComponent(
      contractId.value
  )}`;
}

onBeforeUnmount(() => {
  if (objectUrl) URL.revokeObjectURL(objectUrl);
});
</script>

<style scoped>
:root {
  --main-title: #dcb417;
}

.main-title {
  font-family: IranNastaliq, sans-serif;
}

.main-container {
  margin-bottom: 4rem;
}

.top-navbar {
  background: #0059e7;
  background: radial-gradient(
      circle,
      rgba(0, 89, 231, 1) 0%,
      rgba(43, 16, 88, 1) 100%
  );
}

hr {
  color: white;
  margin-bottom: 1rem;
}

.step-dot {
  width: 2rem; /* 32px */
  height: 2rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.875rem; /* text-sm */
  position: relative;
  transition: transform .15s ease, box-shadow .2s ease, background-color .2s ease, color .2s ease;
}

/* 1) PASSED steps – like screenshot #1 (green filled, white number) */
.step-dot--done {
  background-color: #16a34a; /* tailwind emerald-600-ish */
  color: #fff;
  border: 2px solid transparent;
}

/* 2) UPCOMING steps – like screenshot #2 (soft gray) */
.step-dot--todo {
  background-color: #e9eff5; /* soft gray fill */
  color: #8795a1; /* muted number */
  border: 2px solid #d6dee6; /* subtle ring */
}

/* 3) CURRENT step – like screenshot #3 (teal with double ring) */
.step-dot--current {
  background-color: #2fb7c2; /* teal fill */
  color: #fff;
  /* two rings: a thin white inner, then teal outer */
  box-shadow: 0 0 0 3px #ffffff,
  0 0 0 7px rgba(47, 183, 194, 0.85);
  transform: translateZ(0); /* crisp edges */
}
</style>
