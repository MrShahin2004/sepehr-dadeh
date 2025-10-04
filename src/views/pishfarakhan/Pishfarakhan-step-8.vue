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
              :to="{ name: 'PishfarakhanStep8Edit', params: { id: $route.params.id } }">
            ویرایش
          </router-link>
          <button class="px-4 py-2 rounded-md bg-teal-600 hover:bg-teal-700
            text-white cursor-pointer" @click="submitFrm">
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

const steps = [
  'مجوز اداره کل', 'نامه کارشناسی', 'فرآیند درخواست', 'نتایج مزایده',
  'مشخصات', 'اطلاعات قرارداد', 'مستندات پرداخت', 'قرارداد'
]
const route = useRoute()
const fileUrl = ref(null)
const progressWidth = computed(() => ((8 - 1) / (steps.length - 1)) * 100 + '%')

/* Tiny no-dependency PDF generator (plain text, single font) */
function makeSimplePdf(text) {
  function esc(s) {
    return s.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)')
  }

  const maxChars = 80
  const rawLines = (text || '').split(/\r?\n/)
  const lines = []
  for (const ln of rawLines) {
    if (!ln) {
      lines.push('');
      continue
    }
    for (let i = 0; i < ln.length; i += maxChars) lines.push(ln.slice(i, i + maxChars))
  }

  const objs = []
  objs.push('1 0 obj<< /Type /Catalog /Pages 2 0 R >>endobj\n')
  objs.push('2 0 obj<< /Type /Pages /Count 1 /Kids [3 0 R] >>endobj\n')
  objs.push('3 0 obj<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 5 0 R >> >> /Contents 4 0 R >>endobj\n')
  const startX = 72, startY = 770, leading = 18, fontSize = 12
  let content = 'BT\n/F1 ' + fontSize + ' Tf\n1 0 0 1 ' + startX + ' ' + startY + ' Tm\n'
  let first = true
  for (const L of lines) {
    if (!first) content += '0 -' + leading + ' Td\n'
    content += '(' + esc(L) + ') Tj\n'
    first = false
  }
  content += 'ET\n'
  const len = content.length
  objs.push('4 0 obj<< /Length ' + len + ' >>stream\n' + content + 'endstream endobj\n')
  objs.push('5 0 obj<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>endobj\n')

  let pdf = '%PDF-1.4\n', xref = 'xref\n0 ' + (objs.length + 1) + '\n0000000000 65535 f \n', off = pdf.length
  for (const o of objs) {
    xref += String(off).padStart(10, '0') + ' 00000 n \n';
    pdf += o;
    off += o.length
  }
  pdf += xref + 'trailer<< /Root 1 0 R /Size ' + (objs.length + 1) + ' >>\nstartxref\n' + off + '\n%%EOF'
  return new Blob([pdf], {type: 'application/pdf'})
}

onMounted(() => {
  const txt = localStorage.getItem('pf_s8_txt_' + (route.params.id || '')) || ''
  const blob = makeSimplePdf(txt || ' ')
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
