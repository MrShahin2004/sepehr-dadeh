<!-- src/views/pishfarakhan/Pishfarakhan-step-7.vue -->
<template>
  <div class="min-h-screen" dir="rtl">
    <!-- ==== Header (copied from step 6) ==== -->
    <header class="relative overflow-hidden">
      <div class="top-navbar h-32 w-full flex items-center justify-center">
        <div class="absolute left-4 top-2 flex items-center space-x-2">
          <img
              src="@/assets/images/khamenei.png"
              class="w-50 h-auto object-contain"
              alt="Iranian figures"
          />
        </div>

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

        <div class="absolute right-4 top-2 flex flex-col items-center">
          <img
              src="@/assets/images/education.svg"
              class="w-40 h-auto object-contain"
              alt="Iranian emblem"
          />
        </div>
      </div>
    </header>

    <!-- ==== Main ==== -->
    <main class="main-container mx-auto max-w-[98%] px-4 py-6 bg-gray-100 rounded-xl">
      <!-- ==== Progress bar (current step: 7) ==== -->
      <section class="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div class="relative">
          <div class="absolute top-4 left-0 right-0 h-0.5 bg-gray-200 z-0">
            <div class="h-full bg-teal-500 z-0" :style="{ width: progressWidth }"></div>
          </div>

          <div class="flex items-center justify-between relative z-10">
            <div
                v-for="(step, index) in steps"
                :key="index"
                class="flex flex-col items-center"
            >
              <div
                  class="w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold mb-2 bg-white relative z-20"
                  :class="index + 1 === 7
                  ? 'bg-teal-500 border-teal-500 text-white'
                  : 'bg-gray-100 border-gray-300 text-gray-500'"
              >
                {{ index + 1 }}
              </div>
              <span class="text-xs text-center text-gray-600">{{ step }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- ==== Main content ==== -->
      <section class="bg-white rounded-lg shadow-sm p-6">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <!-- LEFT: PDF Viewer -->
          <div class="lg:col-span-8">
            <div class="rounded-xl border border-gray-200 p-0">
              <div class="h-[520px] w-full">
                <template v-if="pdfUrl">
                  <embed :src="pdfUrl" type="application/pdf" class="w-full h-full rounded-xl"/>
                </template>
                <template v-else>
                  <div class="w-full h-full flex items-center justify-center text-gray-400">
                    مدرکی برای نمایش وجود ندارد
                  </div>
                </template>
              </div>
            </div>
          </div>

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
                <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600">
                  :کد شناسه یکتا
                </span>
              </div>
            </div>

            <!-- Upload section -->
            <div class="rounded-xl border border-gray-200 p-4">
              <div class="text-gray-700 font-medium mb-4">
                بارگذاری مستندات پرداخت
              </div>

              <div class="flex items-center gap-3">
                <input
                    ref="fileInput"
                    type="file"
                    accept="application/pdf"
                    class="hidden"
                    @change="onFileChange"
                />
                <button
                    type="button"
                    class="px-4 py-2 rounded-md bg-indigo-500 hover:bg-indigo-600 text-white transition"
                    @click="triggerFile"
                >
                  بارگذاری
                </button>
                <span v-if="fileName" class="text-xs text-gray-600 truncate" :title="fileName">
                  {{ fileName }}
                </span>
              </div>

              <!-- File chip (name + size + close) -->
              <div v-if="fileName" class="mt-4 flex justify-start">
                <div class="inline-flex items-stretch max-w-full flex-row-reverse">
                  <!-- Red close button (on the right) -->
                  <button
                      type="button"
                      @click="clearFile"
                      class="px-3 rounded-r-full rounded-l-none bg-red-500 hover:bg-red-600 text-white flex items-center justify-center"
                      aria-label="حذف فایل"
                      title="حذف فایل"
                  >
                    ✕
                  </button>
                  <!-- Body of chip -->
                  <div
                      class="flex items-center gap-4 px-4 py-2 border border-gray-200 bg-white shadow-sm rounded-l-full rounded-r-none max-w-[28rem]"
                  >
                    <span class="text-xs text-gray-500 whitespace-nowrap">{{ fileSize }}</span>
                    <span class="truncate text-gray-700">{{ fileName }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Installments toggle (fixed knob) -->
            <div class="rounded-xl border border-gray-200 p-4">
              <div class="flex items-center justify-between">
                <span class="text-gray-700">امکان قسط بندی پرداخت</span>

                <button
                    type="button"
                    role="switch"
                    :aria-checked="installments ? 'true' : 'false'"
                    @click="installments = !installments"
                    class="relative inline-flex h-7 w-12 rounded-full p-1 overflow-hidden transition-colors duration-200"
                    :class="installments ? 'bg-teal-500' : 'bg-gray-300'"
                >
                  <span
                      class="absolute top-1 left-1 h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-200"
                      :class="installments ? 'translate-x-5' : 'translate-x-0'"
                  />
                </button>
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
                  canSubmit ? 'bg-[#154ec1] hover:bg-[#154ec1]/90' : 'bg-[#a3b3ff] cursor-not-allowed'
                ]"
              >
                ثبت
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- ==== Footer (copied from step 6) ==== -->
    <hr/>
    <div class="login-footer">
      <div class="footer-links flex justify-center items-center gap-x-[1rem]">
        <router-link to="/"
        ><a class="text-white transition hover:cursor-pointer hover:text-blue-500"
        >حریم خصوصی</a
        ></router-link
        >
        <router-link to="/"
        ><a class="text-white transition hover:cursor-pointer hover:text-blue-500"
        >نظرسنجی‌ها</a
        ></router-link
        >
        <router-link to="/"
        ><a class="text-white transition hover:cursor-pointer hover:text-blue-500"
        >پیوندها</a
        ></router-link
        >
        <router-link to="/"
        ><a class="text-white transition hover:cursor-pointer hover:text-blue-500"
        >فراخوان‌ها</a
        ></router-link
        >
        <router-link to="/"
        ><a class="text-white transition hover:cursor-pointer hover:text-blue-500"
        >آمارها</a
        ></router-link
        >
        <router-link to="/"
        ><a class="text-white transition hover:cursor-pointer hover:text-blue-500"
        >صفحه اصلی</a
        ></router-link
        >
      </div>
      <div class="footer-desc flex justify-center items-center">
        <p class="text-[white]">© کلیه حقوق این پایگاه به سپهر داده تعلق دارد</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed, onBeforeUnmount, ref} from 'vue'
import {useRoute, useRouter} from 'vue-router'

const route = useRoute()
const router = useRouter()

/* ---------- Progress bar data ---------- */
const steps = [
  'مجوز اداره کل',
  'نامه کارشناسی',
  'فرآیند درخواست',
  'نتایج مزایده',
  'مشخصات',
  'اطلاعات قرارداد',
  'مستندات پرداخت',
  'قرارداد'
]
const progressWidth = computed(() => `${(7 - 1) / (steps.length - 1) * 100}%`)

/* ---------- Right column state ---------- */
const recordId = computed(() => route.params.id || '')

const fileInput = ref(null)
const fileName = ref('')
const fileSize = ref('')
const pdfUrl = ref('')
let objectUrl = '' // for URL.revokeObjectURL
const installments = ref(false)

function triggerFile() {
  fileInput.value?.click()
}

function formatBytes(bytes) {
  if (!bytes && bytes !== 0) return ''
  const units = ['B', 'KB', 'MB', 'GB', 'TB']
  let i = 0
  let val = bytes
  while (val >= 1024 && i < units.length - 1) {
    val /= 1024
    i++
  }
  return `${val.toFixed(2)} ${units[i]}`
}

function onFileChange(e) {
  const file = e.target.files?.[0]
  if (!file) return
  if (file.type !== 'application/pdf') {
    alert('فقط فایل PDF مجاز است.')
    e.target.value = ''
    return
  }
  fileName.value = file.name
  fileSize.value = formatBytes(file.size)
  if (objectUrl) URL.revokeObjectURL(objectUrl)
  objectUrl = URL.createObjectURL(file)
  pdfUrl.value = objectUrl
}

function clearFile() {
  if (fileInput.value) fileInput.value.value = ''
  fileName.value = ''
  fileSize.value = ''
  pdfUrl.value = ''
  if (objectUrl) {
    URL.revokeObjectURL(objectUrl)
    objectUrl = ''
  }
}

onBeforeUnmount(() => {
  if (objectUrl) URL.revokeObjectURL(objectUrl)
})

/* Enable submit only if a PDF is chosen */
const canSubmit = computed(() => !!pdfUrl.value)

function goNext() {
  if (!canSubmit.value) return
  const id = route.params.id
  router.push(`/pishfarakhan/step-8/${id}`)
}
</script>

<style scoped>
.main-container {
  margin-bottom: 4rem;
}
</style>
