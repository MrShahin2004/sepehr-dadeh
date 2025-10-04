<!-- src/views/pishfarakhan/Pishfarakhan-step-7.vue -->
<template>
  <div class="min-h-screen" dir="rtl">
    <!-- ==== Header (same as step 6) ==== -->
    <header class="relative overflow-hidden">
      <div class="top-navbar h-32 w-full flex items-center justify-center">
        <div class="absolute left-4 top-2 flex items-center space-x-2">
          <img src="@/assets/images/khamenei.png" class="w-50 h-auto object-contain" alt="Iranian figures"/>
        </div>

        <div class="text-center text-white leading-relaxed">
          <router-link to="/">
            <h1 class="main-title text-3xl text-shadow-[0_4px_10px_black] text-[var(--main-title)]">
              پایگاه اطلاعات قرار دادهای اداره کل آموزش و پرورش استان خراسان رضوی
            </h1>
          </router-link>
        </div>

        <div class="absolute right-4 top-2 flex flex-col items-center">
          <img src="@/assets/images/education.svg" class="w-40 h-auto object-contain" alt="Iranian emblem"/>
        </div>
      </div>
    </header>

    <!-- ==== Main ==== -->
    <main class="main-container mx-auto max-w-[98%] px-4 py-6 bg-gray-100 rounded-xl">
      <!-- Progress (current step: 7) -->
      <section class="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div class="relative">
          <div class="absolute top-4 left-0 right-0 h-0.5 bg-gray-200 z-0">
            <div class="h-full bg-teal-500 z-0" :style="{ width: progressWidth }"></div>
          </div>

          <div class="flex items-center justify-between relative z-10">
            <div v-for="(step, index) in steps" :key="index" class="flex flex-col items-center">
              <div
                  class="w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold mb-2 bg-white relative z-20"
                  :class="index + 1 === 7 ? 'bg-teal-500 border-teal-500 text-white' : 'bg-gray-100 border-gray-300 text-gray-500'"
              >
                {{ index + 1 }}
              </div>
              <span class="text-xs text-center text-gray-600">{{ step }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Content -->
      <section class="bg-white rounded-lg shadow-sm p-6">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <!-- RIGHT: Controls -->
          <div class="lg:col-span-4 space-y-5">
            <!-- Unique Code -->
            <div class="rounded-xl border border-gray-200 p-4">
              <div class="relative">
                <input
                    :value="recordId"
                    readonly
                    dir="ltr"
                    class="w-full rounded-lg border border-gray-300 px-3 py-2 pr-28 bg-gray-50 text-gray-800 focus:outline-none"
                />
                <span dir="ltr" class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600">:کد شناسه یکتا</span>
              </div>
            </div>

            <!-- Upload section -->
            <div class="rounded-xl border border-gray-200 p-4">
              <div class="text-gray-700 font-medium mb-4">بارگذاری مستندات پرداخت</div>

              <div class="flex items-center gap-3">
                <input
                    ref="fileInput"
                    type="file"
                    accept="application/pdf"
                    multiple
                    class="hidden"
                    @change="onFileChange"
                />
                <button
                    type="button"
                    class="px-4 py-2 rounded-md bg-indigo-500 hover:bg-indigo-600 text-white transition cursor-pointer"
                    @click="triggerFile"
                >
                  بارگذاری
                </button>
              </div>

              <!-- Chips list (stacked, newest last) -->
              <div class="mt-4 space-y-3">
                <div
                    v-for="f in files"
                    :key="f.id"
                    class="flex justify-start"
                >
                  <div
                      class="inline-flex items-center flex-row-reverse rounded-full border border-gray-200 bg-white shadow-sm overflow-hidden"
                  >
                    <!-- Close button (right) -->
                    <button
                        type="button"
                        @click="removeFile(f.id)"
                        class="w-9 h-9 flex items-center justify-center rounded-full mx-2 text-white cursor-pointer"
                        style="background-color:#ff4d4f"
                        aria-label="حذف فایل"
                        title="حذف فایل"
                    >
                      ✕
                    </button>

                    <!-- Size (two lines) -->
                    <div class="px-2 py-2 text-xs leading-4 text-gray-600 text-center">
                      <div class="font-medium">{{ f.sizeKB }}</div>
                      <div class="uppercase">KB</div>
                    </div>

                    <!-- Filename (click to preview) -->
                    <button
                        type="button"
                        class="px-4 py-2 max-w-[26rem] text-right hover:opacity-90"
                        @click="selectFile(f)"
                        :title="f.name"
                    >
                      <span class="truncate block text-gray-700">{{ f.name }}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Installments toggle + dynamic items -->
            <div class="rounded-xl border border-gray-200 p-4">
              <div class="flex items-center justify-between">
                <span class="text-gray-700">امکان قسط بندی پرداخت</span>

                <button
                    type="button"
                    role="switch"
                    :aria-checked="installments ? 'true' : 'false'"
                    @click="installments = !installments"
                    class="relative inline-flex h-7 w-12 rounded-full p-1 overflow-hidden
                     transition-colors duration-200 cursor-pointer"
                    :class="installments ? 'bg-[#154ec1]' : 'bg-gray-300'"
                >
                  <span
                      class="absolute top-1 left-1 h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-200"
                      :class="installments ? 'translate-x-5' : 'translate-x-0'"
                  />
                </button>
              </div>

              <!-- Dynamic installments list -->
              <div v-if="installments" class="mt-3 space-y-2">
                <div
                    v-for="(item) in installmentItems"
                    :key="item.id"
                    class="flex items-center gap-2"
                >
                  <!-- delete (close) -->
                  <button
                      type="button"
                      class="w-8 h-8 flex items-center justify-center rounded-full
                       bg-red-500 text-white hover:bg-red-600 cursor-pointer"
                      title="حذف"
                      @click="removeInstallment(item.id)"
                  >
                    <i class="fas fa-trash"></i>
                  </button>

                  <!-- date picker -->
                  <DatePicker
                      v-model="item.date"
                      format="jYYYY/jMM/jDD"
                      display-format="jYYYY/jMM/jDD"
                      :auto-submit="true"
                      :editable="true"
                      :input-class="'w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500'"
                      class="w-full"
                  />

                  <!-- amount -->
                  <input
                      v-model.number="item.amount"
                      type="number"
                      min="0"
                      class="w-36 rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 text-left"
                      placeholder="0"
                      dir="ltr"
                  />
                </div>

                <!-- add new -->
                <div class="text-center pt-2">
                  <button
                      type="button"
                      class="text-[#154ec1] hover:underline cursor-pointer"
                      @click="addInstallment"
                  >
                    افزودن قسط جدید
                  </button>
                </div>
              </div>
            </div>

            <!-- Submit -->
            <div class="rounded-xl border border-gray-200 p-4">
              <button
                  type="button"
                  :disabled="!canSubmit"
                  @click="goNext"
                  :class="[
                  'w-full rounded-md text-white py-2 text-sm tracking-wide transition',
                  canSubmit ? 'bg-[#154ec1] hover:bg-[#154ec1]/90 cursor-pointer' : 'bg-[#a3b3ff] cursor-not-allowed'
                ]"
              >
                ثبت
              </button>
            </div>
          </div>

          <!-- LEFT: PDF Tabs + Viewer -->
          <div class="lg:col-span-8">
            <div class="rounded-xl border border-gray-200 p-0">
              <!-- Tabs: horizontally scrollable when overflowing -->
              <div class="px-3 py-2 border-b border-gray-200 bg-gray-50 rounded-t-xl overflow-x-auto">
                <div class="inline-flex items-center gap-2 whitespace-nowrap min-w-max">
                  <template v-if="files.length">
                    <button
                        v-for="(f, idx) in files"
                        :key="f.id"
                        type="button"
                        class="shrink-0 px-3 py-1.5 rounded-full text-sm transition cursor-pointer"
                        :class="isActive(f) ? 'bg-[#154ec1] text-white' : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100'"
                        @click="selectFile(f)"
                    >
                      سند پرداخت {{ idx + 1 }}
                    </button>
                  </template>
                </div>
              </div>

              <!-- Viewer -->
              <div class="h-[600px] w-full">
                <template v-if="selectedPdfUrl">
                  <embed :src="selectedPdfUrl" type="application/pdf" class="w-full h-full rounded-b-xl"/>
                </template>
                <template v-else>
                  <div class="w-full h-full flex items-center justify-center text-gray-400">
                    مدرکی برای نمایش وجود ندارد
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- ==== Footer (same as step 6) ==== -->
    <hr/>
    <div class="login-footer">
      <div class="footer-links flex justify-center items-center gap-x-[1rem]">
        <router-link to="/"><a class="text-white transition hover:cursor-pointer hover:text-blue-500">حریم خصوصی</a>
        </router-link>
        <router-link to="/"><a class="text-white transition hover:cursor-pointer hover:text-blue-500">نظرسنجی‌ها</a>
        </router-link>
        <router-link to="/"><a class="text-white transition hover:cursor-pointer hover:text-blue-500">پیوندها</a>
        </router-link>
        <router-link to="/"><a class="text-white transition hover:cursor-pointer hover:text-blue-500">فراخوان‌ها</a>
        </router-link>
        <router-link to="/"><a class="text-white transition hover:cursor-pointer hover:text-blue-500">آمارها</a>
        </router-link>
        <router-link to="/"><a class="text-white transition hover:cursor-pointer hover:text-blue-500">صفحه اصلی</a>
        </router-link>
      </div>
      <div class="footer-desc flex justify-center items-center">
        <p class="text-[white]">© کلیه حقوق این پایگاه به سپهر داده تعلق دارد</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed, onBeforeUnmount, ref} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import DatePicker from 'vue3-persian-datetime-picker';

const route = useRoute();
const router = useRouter();

/* Progress data */
const steps = [
  'مجوز اداره کل',
  'نامه کارشناسی',
  'فرآیند درخواست',
  'نتایج مزایده',
  'مشخصات',
  'اطلاعات قرارداد',
  'مستندات پرداخت',
  'قرارداد'
];
const progressWidth = computed(() => `${(7 - 1) / (steps.length - 1) * 100}%`);

/* Right column state */
const recordId = computed(() => route.params.id || '');

/* Multiple files list */
const files = ref([]); // [{id, name, sizeKB, url}]
const fileInput = ref(null);
const installments = ref(false);
const selectedPdfUrl = ref('');
let nextId = 1;

function triggerFile() {
  fileInput.value?.click();
}

function onFileChange(e) {
  const list = Array.from(e.target.files || []);
  if (!list.length) return;

  list.forEach(file => {
    if (file.type !== 'application/pdf') return;
    const url = URL.createObjectURL(file);
    const item = {
      id: nextId++,
      name: file.name,
      sizeKB: (file.size / 1024).toFixed(2),
      url
    };
    files.value.push(item);
    selectedPdfUrl.value = url; // auto-select newest
  });

  if (fileInput.value) fileInput.value.value = '';
}

function removeFile(id) {
  const idx = files.value.findIndex(f => f.id === id);
  if (idx === -1) return;
  const removed = files.value[idx];
  URL.revokeObjectURL(removed.url);
  files.value.splice(idx, 1);

  if (selectedPdfUrl.value === removed.url) {
    selectedPdfUrl.value = files.value.length ? files.value[files.value.length - 1].url : '';
  }
}

function selectFile(f) {
  selectedPdfUrl.value = f.url;
}

function isActive(f) {
  return selectedPdfUrl.value === f.url;
}

onBeforeUnmount(() => {
  files.value.forEach(f => URL.revokeObjectURL(f.url));
});

const canSubmit = computed(() => files.value.length > 0);

function goNext() {
  if (!canSubmit.value) return;
  const id = route.params.id;
  router.push(`/pishfarakhan/step-8/${id}`);
}

/* ===== Installments (dynamic rows) ===== */
const installmentItems = ref([]); // [{id, date, amount}]
let nextInstallmentId = 1;

function addInstallment() {
  installmentItems.value.push({
    id: nextInstallmentId++,
    date: '',
    amount: 0
  });
}

function removeInstallment(id) {
  const idx = installmentItems.value.findIndex(x => x.id === id);
  if (idx !== -1) installmentItems.value.splice(idx, 1);
}
</script>

<style scoped>
.main-container {
  margin-bottom: 4rem;
}
</style>
