<!-- src/views/pishfarakhan/Pishfarakhan-step-5.vue -->
<template>
  <div class="min-h-screen" dir="rtl">
    <!-- Header (same as step-4) -->
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

    <main
      class="main-container mx-auto max-w-[98%] px-4 py-6 bg-gray-100 rounded-xl"
    >
      <!-- Step indicators with progress bar (current step: 5) -->
      <section class="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div class="relative">
          <div class="absolute top-4 left-0 right-0 h-0.5 bg-gray-200 z-0">
            <div
              class="h-full bg-teal-500 z-0"
              :style="{ width: progressWidth }"
            ></div>
          </div>
          <div class="flex items-center justify-between relative z-10">
            <div
              v-for="(step, index) in steps"
              :key="index"
              class="flex flex-col items-center"
            >
              <div
                class="w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold mb-2 bg-white relative z-20"
                :class="
                  index + 1 === 5
                    ? 'bg-teal-500 border-teal-500 text-white'
                    : 'bg-gray-100 border-gray-300 text-gray-500'
                "
              >
                {{ index + 1 }}
              </div>
              <span class="text-xs text-center text-gray-600">{{ step }}</span>
            </div>
          </div>
        </div>
      </section>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Right panel: controls -->
        <div class="lg:col-span-1 order-last lg:order-first">
          <div class="bg-white rounded-lg shadow-sm p-6 space-y-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >کد شناسه یکتا</label
              >
              <div
                class="bg-gray-100 px-4 py-3 rounded-lg text-gray-800 font-mono"
              >
                {{ contractId }}
              </div>
            </div>
            <div>
              <button
                type="button"
                class="w-full bg-teal-600 hover:bg-teal-700 text-white cursor-pointer py-3 px-4 rounded-lg"
                @click="goNext"
              >
                ثبت
              </button>
            </div>
          </div>
        </div>

        <!-- Left panel: form with tabs -->
        <div class="lg:col-span-2">
          <div class="rounded-xl bg-white shadow p-0 overflow-hidden">
            <header
              class="flex items-center justify-between border-b border-gray-100 px-4 sm:px-6 py-4"
            >
              <div class="text-sm text-gray-700 flex items-center gap-2">
                <span class="font-medium">مشخصات طرفین قرارداد</span>
                <select
                  class="bg-white border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option>انتخاب کنید</option>
                  <option>طرف اول</option>
                  <option>طرف دوم</option>
                </select>
              </div>
              <div class="inline-flex rounded-full bg-gray-100 p-1">
                <button
                  type="button"
                  class="px-4 py-1.5 text-sm rounded-full transition"
                  :class="
                    activeTab === 'person'
                      ? 'bg-teal-600 text-white shadow'
                      : 'text-gray-700 hover:text-teal-700'
                  "
                  @click="activeTab = 'person'"
                >
                  حقیقی
                </button>
                <button
                  type="button"
                  class="px-4 py-1.5 text-sm rounded-full transition"
                  :class="
                    activeTab === 'company'
                      ? 'bg-teal-600 text-white shadow'
                      : 'text-gray-700 hover:text-teal-700'
                  "
                  @click="activeTab = 'company'"
                >
                  حقوقی
                </button>
              </div>
            </header>

            <!-- حقیقی -->
            <section v-show="activeTab === 'person'" class="px-4 sm:px-6 py-6">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label class="block text-sm text-gray-600 mb-1">نام:</label>
                  <input
                    type="text"
                    class="w-full rounded-md border border-gray-300 px-3 py-2"
                    placeholder="علی"
                  />
                </div>
                <div>
                  <label class="block text-sm text-gray-600 mb-1"
                    >نام خانوادگی:</label
                  >
                  <input
                    type="text"
                    class="w-full rounded-md border border-gray-300 px-3 py-2"
                    placeholder="علیرضاده"
                  />
                </div>
                <div>
                  <label class="block text-sm text-gray-600 mb-1">جنسیت:</label>
                  <select
                    class="w-full rounded-md border border-gray-300 px-2 py-2 text-sm"
                  >
                    <option>انتخاب کنید</option>
                    <option>مرد</option>
                    <option>زن</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm text-gray-600 mb-1"
                    >نام پدر:</label
                  >
                  <input
                    type="text"
                    class="w-full rounded-md border border-gray-300 px-3 py-2"
                    placeholder="علی"
                  />
                </div>
                <div>
                  <label class="block text-sm text-gray-600 mb-1"
                    >تاریخ تولد:</label
                  >
                  <div class="relative">
                    <input
                      type="text"
                      class="w-full rounded-md border border-gray-300 px-3 py-2 pr-10"
                      placeholder="dd-----yyyy"
                    />
                    <span
                      class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                      >📅</span
                    >
                  </div>
                </div>
                <div>
                  <label class="block text-sm text-gray-600 mb-1"
                    >شماره ملی:</label
                  >
                  <input
                    type="text"
                    class="w-full rounded-md border border-gray-300 px-3 py-2"
                    placeholder="۰۹۲۲۸۸۰۰۰۰"
                  />
                </div>
                <div>
                  <label class="block text-sm text-gray-600 mb-1">ایمیل:</label>
                  <input
                    type="email"
                    class="w-full rounded-md border border-gray-300 px-3 py-2"
                    placeholder="info@sepehr-dad.com"
                  />
                </div>
                <div>
                  <label class="block text-sm text-gray-600 mb-1">همراه:</label>
                  <input
                    type="text"
                    class="w-full rounded-md border border-gray-300 px-3 py-2"
                    placeholder="0915......"
                  />
                </div>
                <div>
                  <label class="block text-sm text-gray-600 mb-1">شغل:</label>
                  <input
                    type="text"
                    class="w-full rounded-md border border-gray-300 px-3 py-2"
                    placeholder="پیمانکار"
                  />
                </div>
                <div>
                  <label class="block text-sm text-gray-600 mb-1"
                    >تلفن ثابت:</label
                  >
                  <input
                    type="text"
                    class="w-full rounded-md border border-gray-300 px-3 py-2"
                    placeholder="0513......"
                  />
                </div>
                <div>
                  <label class="block text-sm text-gray-600 mb-1"
                    >کد پستی:</label
                  >
                  <input
                    type="text"
                    class="w-full rounded-md border border-gray-300 px-3 py-2"
                    placeholder="1234567890"
                  />
                </div>
                <div>
                  <label class="block text-sm text-gray-600 mb-1"
                    >تضمین قرارداد:</label
                  >
                  <button
                    class="inline-flex items-center rounded-md bg-blue-600 text-white px-3 py-2 text-sm"
                  >
                    بارگذاری
                  </button>
                </div>
                <div>
                  <label class="block text-sm text-gray-600 mb-1"
                    >کارت ملی:</label
                  >
                  <button
                    class="inline-flex items-center rounded-md bg-blue-600 text-white px-3 py-2 text-sm"
                  >
                    بارگذاری
                  </button>
                </div>
                <div class="md:col-span-3">
                  <label class="block text-sm text-gray-600 mb-1">آدرس:</label>
                  <input
                    type="text"
                    class="w-full rounded-md border border-gray-300 px-3 py-2"
                    placeholder="خراسان رضوی مشهد خیابان امام خمینی"
                  />
                </div>
              </div>
            </section>

            <section v-show="activeTab === 'company'" class="px-4 sm:px-6 py-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm text-gray-600 mb-1"
                    >نام شرکت:</label
                  >
                  <input
                    type="text"
                    class="w-full rounded-md border border-gray-300 px-3 py-2"
                    placeholder="اداره آموزش پرورش"
                  />
                </div>
                <div>
                  <label class="block text-sm text-gray-600 mb-1"
                    >شناسه ملی:</label
                  >
                  <input
                    type="text"
                    class="w-full rounded-md border border-gray-300 px-3 py-2"
                    placeholder="1234567890"
                  />
                </div>
                <div>
                  <label class="block text-sm text-gray-600 mb-1"
                    >محل ثبت:</label
                  >
                  <input
                    type="text"
                    class="w-full rounded-md border border-gray-300 px-3 py-2"
                    placeholder="مشهد"
                  />
                </div>
                <div>
                  <label class="block text-sm text-gray-600 mb-1"
                    >شماره ثبت:</label
                  >
                  <input
                    type="text"
                    class="w-full rounded-md border border-gray-300 px-3 py-2"
                    placeholder="123456"
                  />
                </div>
                <div class="md:col-span-2">
                  <label class="block text-sm text-gray-600 mb-1"
                    >شرح فعالیت:</label
                  >
                  <input
                    type="text"
                    class="w-full rounded-md border border-gray-300 px-3 py-2"
                    placeholder="پیمانکار"
                  />
                </div>
                <div>
                  <label class="block text-sm text-gray-600 mb-1">شعبه:</label>
                  <div class="flex gap-2">
                    <select
                      class="w-28 rounded-md border border-gray-300 px-2 py-2 text-sm"
                    >
                      <option>استان</option>
                    </select>
                    <input
                      type="text"
                      class="flex-1 rounded-md border border-gray-300 px-3 py-2"
                      placeholder="مشهد"
                    />
                  </div>
                </div>
                <div>
                  <label class="block text-sm text-gray-600 mb-1"
                    >ایمیل شرکت:</label
                  >
                  <input
                    type="email"
                    class="w-full rounded-md border border-gray-300 px-3 py-2"
                    placeholder="info@sepehr-dad.com"
                  />
                </div>
                <div>
                  <label class="block text-sm text-gray-600 mb-1">تلفن:</label>
                  <input
                    type="text"
                    class="w-full rounded-md border border-gray-300 px-3 py-2"
                    placeholder="05130000000"
                  />
                </div>
                <div>
                  <label class="block text-sm text-gray-600 mb-1"
                    >کد پستی:</label
                  >
                  <input
                    type="text"
                    class="w-full rounded-md border border-gray-300 px-3 py-2"
                    placeholder="1234567890"
                  />
                </div>
                <div
                  class="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  <div>
                    <label class="block text-sm text-gray-600 mb-1"
                      >آخرین آگهی:</label
                    >
                    <button
                      class="inline-flex items-center rounded-md bg-blue-600 text-white px-3 py-2 text-sm"
                    >
                      بارگذاری
                    </button>
                  </div>
                  <div>
                    <label class="block text-sm text-gray-600 mb-1"
                      >اساسنامه:</label
                    >
                    <button
                      class="inline-flex items-center rounded-md bg-blue-600 text-white px-3 py-2 text-sm"
                    >
                      بارگذاری
                    </button>
                  </div>
                </div>
                <div class="md:col-span-2">
                  <label class="block text-sm text-gray-600 mb-1">آدرس:</label>
                  <input
                    type="text"
                    class="w-full rounded-md border border-gray-300 px-3 py-2"
                    placeholder="خراسان رضوی مشهد خیابان امام خمینی"
                  />
                </div>
                <div class="md:col-span-2">
                  <textarea
                    rows="3"
                    class="w-full rounded-md border border-gray-300 px-3 py-2"
                    placeholder="یادداشت"
                  ></textarea>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer (same as step-4) -->
    <hr />
    <div class="login-footer">
      <div class="footer-links flex justify-center items-center gap-x-[1rem]">
        <router-link to="/"
          ><a
            class="text-white transition hover:cursor-pointer hover:text-blue-500"
            >حریم خصوصی</a
          ></router-link
        >
        <router-link to="/"
          ><a
            class="text-white transition hover:cursor-pointer hover:text-blue-500"
            >نظرسنجی‌ها</a
          ></router-link
        >
        <router-link to="/"
          ><a
            class="text-white transition hover:cursor-pointer hover:text-blue-500"
            >پیوندها</a
          ></router-link
        >
        <router-link to="/"
          ><a
            class="text-white transition hover:cursor-pointer hover:text-blue-500"
            >فراخوان‌ها</a
          ></router-link
        >
        <router-link to="/"
          ><a
            class="text-white transition hover:cursor-pointer hover:text-blue-500"
            >آمارها</a
          ></router-link
        >
        <router-link to="/"
          ><a
            class="text-white transition hover:cursor-pointer hover:text-blue-500"
            >صفحه اصلی</a
          ></router-link
        >
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
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

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
const route = useRoute();
const contractId = computed(() => route.params.id ?? "—");
const activeTab = ref("person");
const progressWidth = computed(
  () => `${((5 - 1) / (steps.length - 1)) * 100}%`
);

// kept for API parity with other steps (not used on this page)
// function goPrev() {
//   window.location.href = `/pishfarakhan/step-4/${contractId.value}`;
// }

function goNext() {
  window.location.href = `/pishfarakhan/step-6/${contractId.value}`;
}
</script>

<style>
::root {
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
</style>
