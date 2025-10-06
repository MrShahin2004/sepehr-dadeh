<!-- src/views/pishfarakhan/Pishfarakhan-step-8.vue -->
<template>
  <div class="min-h-screen" dir="rtl">
    <!-- Header (same as step 7) -->
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

    <main class="main-container mx-auto max-w-[98%] px-4 py-6 bg-gray-100 rounded-xl">
      <!-- Admin bar -->
      <div
          class="bg-teal-500 text-white rounded-lg shadow p-4 flex items-center justify-between mb-6 mx-auto max-w-[98%] px-4">
        <span class="text-sm">اطلاعیه های اخیر</span>
        <span class="px-3 py-1 bg-teal-600 rounded text-sm">admin : کارشناس ثبت</span>
      </div>

      <!-- Progress (current: 8) -->
      <section class="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div class="relative">
          <div class="absolute top-4 left-0 right-0 h-0.5 bg-gray-200 z-0">
            <div class="h-full bg-teal-500 z-0" :style="{ width: progressWidth }"></div>
          </div>
          <div class="flex items-center justify-between relative z-10">
            <div v-for="(step, index) in steps" :key="index" class="flex flex-col items-center">
              <div
                  class="w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold mb-2 bg-white relative z-20"
                  :class="index + 1 === 8 ? 'bg-teal-500 border-teal-500 text-white' : 'bg-gray-100 border-gray-300 text-gray-500'">
                {{ index + 1 }}
              </div>
              <span class="text-xs text-center text-gray-600">{{ step }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- PDF viewer -->
      <section class="bg-white rounded-lg shadow-sm p-6">
        <div v-if="fileUrl" class="w-full h-[70vh]">
          <iframe :src="fileUrl" class="w-full h-full rounded-lg border"/>
        </div>
        <div v-else class="h-[260px] flex items-center justify-center text-gray-500">در حال پردازش ...</div>

        <div class="mt-6 flex gap-3">
          <router-link
              class="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300"
              :to="{ name: 'PishfarakhanStep8Edit', params: { id: $route.params.id } }"
          >
            ویرایش
          </router-link>
          <button class="px-4 py-2 rounded-md bg-teal-600 hover:bg-teal-700 text-white cursor-pointer" @click="submitFrm">
            ثبت
          </button>
        </div>
      </section>
    </main>

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
import {computed, onBeforeUnmount, onMounted, ref} from 'vue'
import {useRoute} from 'vue-router'
import pdfMake from "@digicole/pdfmake-rtl/build/pdfmake"
// import pdfMake from 'pdfmake/build/pdfmake'
// import ArabicReshaper from 'arabic-reshaper' // New import for reshaping Persian text
// فونت‌های فارسی داخل پروژه
import yekanRegUrl from '@/assets/fonts/Yekan/YekanBakh-Regular.ttf?url'
import yekanBoldUrl from '@/assets/fonts/Yekan/YekanBakh-Bold.ttf?url'

const route = useRoute()
const fileUrl = ref(null)
const steps = ['مجوز اداره کل', 'نامه کارشناسی', 'فرآیند درخواست', 'نتایج مزایده', 'مشخصات', 'اطلاعات قرارداد', 'مستندات پرداخت', 'قرارداد']
const progressWidth = computed(() => ((8 - 1) / (steps.length - 1)) * 100 + '%')

// ArrayBuffer → base64 برای pdfMake.vfs
function ab2b64(ab) {
  let s = '', b = new Uint8Array(ab)
  for (let i = 0; i < b.length; i++) s += String.fromCharCode(b[i])
  return btoa(s)
}

// فونت فارسی را داخل vfs امبد کن تا در PDF استفاده شود
async function ensureYekanFont() {
  if (pdfMake.vfs && pdfMake.vfs['YekanBakh-Regular.ttf']) return
  const [regBuf, boldBuf] = await Promise.all([
    fetch(yekanRegUrl).then(r => r.arrayBuffer()),
    fetch(yekanBoldUrl).then(r => r.arrayBuffer()),
  ])
  pdfMake.vfs = pdfMake.vfs || {}
  pdfMake.vfs['YekanBakh-Regular.ttf'] = ab2b64(regBuf)
  pdfMake.vfs['YekanBakh-Bold.ttf'] = ab2b64(boldBuf)
  pdfMake.fonts = {
    YekanBakh: {
      normal: 'YekanBakh-Regular.ttf',
      bold: 'YekanBakh-Bold.ttf',
      italics: 'YekanBakh-Regular.ttf',
      bolditalics: 'YekanBakh-Bold.ttf',
    },
    // ← alias لازم برای باندل pdfmake-rtl
    Nillima: {
      normal: 'YekanBakh-Regular.ttf',
      bold: 'YekanBakh-Bold.ttf',
      italics: 'YekanBakh-Regular.ttf',
      bolditalics: 'YekanBakh-Bold.ttf',
    }
  }
}

// متن خام را به پاراگراف‌های RTL تبدیل و PDF بساز
async function makePdfWithYekan(text) {
  await ensureYekanFont(); // همان تابعی که TTFها را به vfs می‌ریزد

  const lines = (text || '').split(/\r?\n/);
  const content = lines.map(l => ({
    text: l && l.trim() ? l : ' ',
    style: 'persian',
    margin: [0, 0, 0, 8],
  }));

  const dd = {
    pageSize: 'A4',
    pageMargins: [72, 72, 72, 72],
    pageDirection: 'rtl',                // جهت صفحه
    defaultStyle: {font: 'YekanBakh', fontSize: 12},
    styles: {
      persian: {alignment: 'right', rtl: true} // rtl برای خود متن
    },
    content
  };

  return new Promise(resolve => pdfMake.createPdf(dd).getBlob(resolve));
}

onMounted(async () => {
  // متن ذخیره‌شده از صفحهٔ ادیت
  const txt = localStorage.getItem('pf_s8_txt_' + (route.params.id || '')) || ''
  const blob = await makePdfWithYekan(txt)
  fileUrl.value = URL.createObjectURL(blob)
})

onBeforeUnmount(() => {
  if (fileUrl.value) URL.revokeObjectURL(fileUrl.value)
})

function submitFrm() {
  alert('ثبت شد')
}
</script>

<style scoped>
.main-container {
  margin-bottom: 4rem;
}
</style>
