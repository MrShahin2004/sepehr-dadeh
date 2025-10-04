<!-- src/views/pishfarakhan/Pishfarakhan-step-8-edit.vue -->
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

      <!-- Editor -->
      <section class="bg-white rounded-lg shadow-sm p-6">
        <div class="border rounded-lg">
          <!-- very light toolbar -->
          <div class="flex items-center gap-3 p-2 border-b">
            <button class="px-2 py-1 hover:bg-gray-100 rounded" @click="cmd('bold')"><strong>B</strong></button>
            <button class="px-2 py-1 hover:bg-gray-100 rounded" @click="cmd('italic')"><em>I</em></button>
            <button class="px-2 py-1 hover:bg-gray-100 rounded" @click="cmd('underline')"><u>U</u></button>
            <div class="h-6 w-px bg-gray-300 mx-1"></div>
            <button class="px-2 py-1 text-sm hover:bg-gray-100 rounded" @click="cmd('insertOrderedList')">1.</button>
            <button class="px-2 py-1 text-sm hover:bg-gray-100 rounded" @click="cmd('insertUnorderedList')">•</button>
            <div class="h-6 w-px bg-gray-300 mx-1"></div>
            <button class="px-2 py-1 text-sm hover:bg-gray-100 rounded" @click="cmd('justifyRight')">↦</button>
            <button class="px-2 py-1 text-sm hover:bg-gray-100 rounded" @click="cmd('justifyCenter')">↔︎</button>
            <button class="px-2 py-1 text-sm hover:bg-gray-100 rounded" @click="cmd('justifyLeft')">↤</button>
            <div class="ml-auto text-sm text-gray-500">
              B Tit:
              <select v-model="fontSel" class="border rounded px-2 py-1">
                <option value="normal">Normal</option>
                <option value="h1">H1</option>
                <option value="h2">H2</option>
              </select>
            </div>
          </div>

          <div ref="editor" class="min-h-[220px] p-4 focus:outline-none" contenteditable @input="onInput"/>
        </div>

        <div class="mt-6">
          <button @click="saveAndGo" class="w-full py-3 rounded-lg bg-blue-600
           hover:bg-blue-700 text-white cursor-pointer">
            ذخیره و PDF
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
import {computed, onMounted, ref} from 'vue'
import {useRoute, useRouter} from 'vue-router'

const steps = [
  'مجوز اداره کل', 'نامه کارشناسی', 'فرآیند درخواست', 'نتایج مزایده',
  'مشخصات', 'اطلاعات قرارداد', 'مستندات پرداخت', 'قرارداد'
]
const route = useRoute()
const router = useRouter()

const editor = ref(null)
const rawText = ref('')
const fontSel = ref('normal')
const progressWidth = computed(() => ((8 - 1) / (steps.length - 1)) * 100 + '%')

function cmd(name) {
  document.execCommand(name, false, null)
}

function onInput() {
  rawText.value = (editor.value?.innerText || '').trim()
}

onMounted(() => {
  const key = 'pf_s8_txt_' + (route.params.id || '')
  const old = localStorage.getItem(key)
  if (old) {
    editor.value.innerText = old;
    rawText.value = old
  }
})

function saveAndGo() {
  const id = route.params.id
  localStorage.setItem('pf_s8_txt_' + (id || ''), rawText.value || '')
  router.push({name: 'PishfarakhanStep', params: {step: 8, id}})
}
</script>

<style scoped>
.main-container {
  margin-bottom: 4rem;
}
</style>
