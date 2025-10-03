<!-- src/views/pishfarakhan/Pishfarakhan-step-6.vue -->
<template>
  <div class="min-h-screen" dir="rtl">
    <!-- ==== Header (exactly the same markup used in previous steps) ==== -->
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
      <!-- Admin info bar -->
      <div
          class="bg-teal-500 text-white rounded-lg shadow p-4 flex items-center justify-between mb-6 mx-auto max-w-[98%] px-4"
      >
        <span class="text-sm">اطلاعیه های اخیر</span>
        <span class="px-3 py-1 bg-teal-600 rounded text-sm"
        >admin : کارشناس ثبت</span
        >
      </div>

      <!-- ==== Progress bar (same style as previous steps) | Current step: 6 ==== -->
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
                  :class="index + 1 === 6
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

      <!-- ==== Content card (exactly as in your third screenshot) ==== -->
      <section class="bg-white rounded-lg shadow-sm p-6">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <!-- Left: Preview panel -->
          <!-- Right: Form -->
          <div class="lg:col-span-7 space-y-5">
            <!-- اطلاعات قرارداد -->
            <div class="rounded-xl border border-gray-200">
              <div class="px-5 py-4 border-b border-gray-200 text-gray-700 font-medium">
                اطلاعات قرارداد
              </div>

              <div class="p-5 space-y-5">
                <!-- موضوع قرارداد -->
                <div>
                  <label class="block text-sm text-gray-600 mb-2">عنوان قرارداد</label>
                  <div class="relative">
                    <select
                        v-model="form.subject"
                        class="w-full appearance-none rounded-lg border border-gray-300 bg-white px-3 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                      <option value="" disabled>انتخاب کنید</option>
                      <option v-for="opt in subjectOptions" :key="opt" :value="opt">{{ opt }}</option>
                    </select>
                    <svg
                        class="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                    </svg>
                  </div>
                </div>

                <!-- عنوان قرارداد -->
                <div>
                  <label class="block text-sm text-gray-600 mb-2">عنوان قرارداد</label>
                  <input
                      v-model="form.title"
                      type="text"
                      class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder=""
                  />
                </div>

                <!-- تاریخ‌ها -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm text-gray-600 mb-2">از تاریخ</label>
                    <div class="relative">
                      <DatePicker
                          v-model="form.fromDate"
                          format="jYYYY/jMM/jDD"
                          display-format="jYYYY/jMM/jDD"
                          :auto-submit="true"
                          :editable="true"
                          :input-class="'w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500'"
                      />
                      <span class="absolute right-3 top-2.5">
                        <i class="fa-regular fa-calendar-days text-gray-500"></i>
                      </span>
                    </div>
                  </div>

                  <div>
                    <label class="block text-sm text-gray-600 mb-2">تا تاریخ</label>
                    <div class="relative">
                      <DatePicker
                          v-model="form.toDate"
                          format="jYYYY/jMM/jDD"
                          display-format="jYYYY/jMM/jDD"
                          :auto-submit="true"
                          :editable="true"
                          :input-class="'w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500'"
                      />
                      <span class="absolute right-3 top-2.5">
                        <i class="fa-regular fa-calendar-days text-gray-500"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- ناظر قرارداد -->
            <div class="rounded-xl border border-gray-200">
              <div class="px-5 py-4 border-b border-gray-200 text-gray-700 font-medium">
                ناظر قرارداد
              </div>
              <div class="p-5">
                <label class="block text-sm text-gray-600 mb-2">نام ناظر</label>
                <input
                    v-model="form.supervisor"
                    type="text"
                    class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </div>

            <!-- نوع تضمین قرارداد -->
            <div>
              <label class="block text-sm text-gray-600 mb-2">نوع تضمین قرارداد</label>
              <div class="relative">
                <select
                    v-model="form.guarantee"
                    class="w-full appearance-none rounded-lg border border-gray-300 bg-white px-3 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="" disabled>انتخاب کنید</option>
                  <option v-for="g in guaranteeOptions" :key="g" :value="g">{{ g }}</option>
                </select>
                <svg
                    class="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </div>
            </div>

            <!-- ثبت اطلاعات -->
            <div class="pt-2">
              <button
                  type="button"
                  @click="saveAndNext"
                  class="w-full rounded-md bg-indigo-300 hover:bg-indigo-400 transition text-white py-2 text-sm tracking-wide"
              >
                ثبت اطلاعات
              </button>
            </div>
          </div>

          <div class="lg:col-span-5">
            <div class="rounded-xl border border-gray-200">
              <div class="px-5 py-4 border-b border-gray-200 text-gray-700 font-medium">
                پیش نمایش اطلاعات قرارداد
              </div>

              <div class="divide-y divide-gray-200">
                <div class="flex items-center justify-between px-5 py-3 text-gray-600">
                  <span class="text-sm">موضوع قرارداد:</span>
                  <span class="text-sm font-medium text-gray-800">
                    {{ preview.subject || '---' }}
                  </span>
                </div>

                <div class="flex items-center justify-between px-5 py-3 text-gray-600">
                  <span class="text-sm">مدت قرارداد:</span>
                  <span class="text-sm font-medium text-gray-800">
                    {{ preview.duration || '---' }}
                  </span>
                </div>

                <div class="flex items-center justify-between px-5 py-3 text-gray-600">
                  <span class="text-sm">ناظر قرارداد:</span>
                  <span class="text-sm font-medium text-gray-800">
                    {{ preview.supervisor || '---' }}
                  </span>
                </div>

                <div class="flex items-center justify-between px-5 py-3 text-gray-600">
                  <span class="text-sm">نوع تضمین:</span>
                  <span class="text-sm font-medium text-gray-800">
                    {{ preview.guarantee || '---' }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- ==== Footer (exactly the same markup used in previous steps) ==== -->
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
import {computed, reactive, watch} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import DatePicker from 'vue3-persian-datetime-picker'
import moment from 'moment-jalaali'

const route = useRoute()
const router = useRouter()

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

const form = reactive({
  subject: '',
  title: '',
  fromDate: '',
  toDate: '',
  supervisor: '',
  guarantee: ''
})

const subjectOptions = ['خدمات', 'کالا', 'پیمانکاری', 'اجاره', 'سایر']
const guaranteeOptions = ['چک تضمینی', 'ضمانت‌نامه بانکی', 'سفته', 'ودیعه نقدی', 'سایر']

const preview = reactive({
  subject: '',
  duration: '',
  supervisor: '',
  guarantee: ''
})

const progressWidth = computed(() => `${(6 - 1) / (steps.length - 1) * 100}%`)

watch(
    () => [form.subject, form.supervisor, form.guarantee, form.fromDate, form.toDate],
    () => {
      preview.subject = form.subject
      preview.supervisor = form.supervisor
      preview.guarantee = form.guarantee

      if (form.fromDate && form.toDate) {
        try {
          const start = moment(form.fromDate, 'jYYYY/jMM/jDD')
          const end = moment(form.toDate, 'jYYYY/jMM/jDD')
          const days = end.diff(start, 'days')
          preview.duration = days > -1 ? `${days} روز` : '---'
        } catch {
          preview.duration = '---'
        }
      } else {
        preview.duration = '---'
      }
    },
    {immediate: true}
)

function saveAndNext() {
  const id = route.params.id
  router.push(`/pishfarakhan/step-7/${id}`)
}
</script>

<style scoped>
.main-container {
  margin-bottom: 4rem;
}
</style>
