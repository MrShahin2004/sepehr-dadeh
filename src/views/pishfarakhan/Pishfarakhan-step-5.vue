<!-- src/views/pishfarakhan/Pishfarakhan-step-5.vue -->
<template>
  <div class="min-h-screen" dir="rtl">
    <!-- Header from step-4 -->
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
      <!-- Progress bar from step-4 (current step: 5) -->
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
              v-for="(s, i) in steps"
              :key="i"
              class="flex flex-col items-center"
            >
              <div
                class="w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold mb-2 bg-white relative z-20"
                :class="
                  i + 1 === 5
                    ? 'bg-teal-500 border-teal-500 text-white'
                    : 'bg-gray-100 border-gray-300 text-gray-500'
                "
              >
                {{ i + 1 }}
              </div>
              <span class="text-xs text-center text-gray-600">{{ s }}</span>
            </div>
          </div>
        </div>
      </section>
      <div class="mt-4 grid grid-cols-1 gap-4">
        <div class="lg:col-span-1">
          <div class="rounded-xl bg-white shadow p-0 overflow-hidden">
            <!-- unique id + section title row -->
            <div
              class="px-4 sm:px-6 pt-4 pb-2 flex items-center justify-start gap-6 text-sm text-gray-700"
            >
              <div class="flex items-center gap-2">
                <span
                  class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gray-100 border border-gray-300 text-gray-600"
                  >i</span
                >
                <span>مشخصات طرفین قرارداد</span>
              </div>
              <div class="flex items-center gap-2">
                <span>کد شناسه یکتا:</span>
                <span class="font-semibold">{{ contractId }}</span>
              </div>
            </div>
            <header
              class="flex items-center justify-start border-b border-gray-100 px-4 sm:px-6 py-4"
            >
              <div class="inline-flex rounded-full bg-gray-100 p-1">
                <button
                  type="button"
                  class="px-4 py-1.5 text-sm rounded-full transition cursor-pointer"
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
                  class="px-4 py-1.5 text-sm rounded-full transition cursor-pointer"
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
              <!-- contract party selector next to tabs -->
              <div class="flex items-center gap-3 mr-4">
                <span class="text-sm text-gray-700">طرف قرارداد:</span>
                <select
                  v-model="party"
                  class="w-48 bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 cursor-pointer"
                >
                  <option value="" disabled>انتخاب کنید</option>
                  <option value="tenant">مستاجر</option>
                  <option value="buyer">خریدار</option>
                </select>
              </div>
            </header>

            <section v-show="activeTab === 'person'" class="px-4 sm:px-6 py-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    >شماره ملی:</label
                  >
                  <input
                    type="text"
                    class="w-full rounded-md border border-gray-300 px-3 py-2"
                    placeholder="۰۹۲۲۸۸۰۰۰۰"
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
                    >تلفن همراه:</label
                  >
                  <input
                    type="text"
                    class="w-full rounded-md border border-gray-300 px-3 py-2"
                    placeholder="0915......"
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
                  <input
                    ref="guaranteeInput"
                    type="file"
                    accept="application/pdf"
                    class="hidden"
                    @change="onPickGuarantee"
                  />
                  <div class="flex items-center gap-3 flex-wrap">
                    <button
                      type="button"
                      class="inline-flex items-center rounded-md bg-blue-600 text-white px-3 py-2 text-sm cursor-pointer"
                      @click="$refs.guaranteeInput.click()"
                    >
                      بارگذاری
                    </button>
                    <div
                      v-if="guaranteeChip"
                      class="flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-3 py-2 shadow-sm w-fit"
                    >
                      <button
                        type="button"
                        @click="clearGuarantee"
                        class="flex-shrink-0 w-7 h-7 rounded-lg bg-red-500 text-white flex items-center justify-center cursor-pointer"
                        aria-label="حذف فایل"
                        title="حذف فایل"
                      >
                        ✕
                      </button>
                      <div
                        class="flex-shrink-0 text-xs text-gray-500 w-16 text-center leading-tight"
                      >
                        <div class="font-medium">
                          {{ guaranteeChip.sizeKB }}
                        </div>
                        <div>KB</div>
                      </div>
                      <div
                        class="text-sm text-gray-800 truncate max-w-[220px]"
                        :title="guaranteeChip.name"
                      >
                        {{ guaranteeChip.name }}
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <label class="block text-sm text-gray-600 mb-1"
                    >کارت ملی:</label
                  >
                  <input
                    ref="nationalCardInput"
                    type="file"
                    accept="application/pdf"
                    class="hidden"
                    @change="onPickNationalCard"
                  />
                  <div class="flex items-center gap-3 flex-wrap">
                    <button
                      type="button"
                      class="inline-flex items-center rounded-md bg-blue-600 text-white px-3 py-2 text-sm cursor-pointer"
                      @click="$refs.nationalCardInput.click()"
                    >
                      بارگذاری
                    </button>
                    <div
                      v-if="nationalCardChip"
                      class="flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-3 py-2 shadow-sm w-fit"
                    >
                      <button
                        type="button"
                        @click="clearNationalCard"
                        class="flex-shrink-0 w-7 h-7 rounded-lg bg-red-500 text-white flex items-center justify-center cursor-pointer"
                        aria-label="حذف فایل"
                        title="حذف فایل"
                      >
                        ✕
                      </button>
                      <div
                        class="flex-shrink-0 text-xs text-gray-500 w-16 text-center leading-tight"
                      >
                        <div class="font-medium">
                          {{ nationalCardChip.sizeKB }}
                        </div>
                        <div>KB</div>
                      </div>
                      <div
                        class="text-sm text-gray-800 truncate max-w-[220px]"
                        :title="nationalCardChip.name"
                      >
                        {{ nationalCardChip.name }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-4">
                <label class="block text-sm text-gray-600 mb-1">آدرس:</label>
                <input
                  type="text"
                  class="w-full rounded-md border border-gray-300 px-3 py-2"
                  placeholder="خراسان رضوی مشهد خیابان امام خمینی"
                />
              </div>
              <div class="mt-6 flex justify-start">
                <button
                  class="px-5 py-2.5 rounded-lg bg-teal-600 text-white cursor-pointer"
                  @click="goNext"
                >
                  ثبت
                </button>
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
                    >شماره ثبت:</label
                  >
                  <input
                    type="text"
                    class="w-full rounded-md border border-gray-300 px-3 py-2"
                    placeholder="123456"
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
                  <label class="block text-sm text-gray-600 mb-1"
                    >مرکز اصلی:</label
                  >
                  <select
                    class="w-full rounded-md border border-gray-300 px-2 py-2 text-sm"
                  >
                    <option value="" disabled>انتخاب کنید</option>
                    <option value="main-center">مرکز اصلی</option>
                    <option value="affiliate-1">شعبه 1</option>
                    <option value="affiliate-2">شعبه 2</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm text-gray-600 mb-1">شهر:</label>
                  <div class="flex gap-2">
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

    <!-- Footer from step-4 -->
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
const party = ref("");

// file inputs + chips
const guaranteeInput = ref(null);
const nationalCardInput = ref(null);
const guaranteeChip = ref(null);
const nationalCardChip = ref(null);

const isPdf = (file) =>
  !!file && (file.type === "application/pdf" || /\.pdf$/i.test(file.name));

function onPickGuarantee(e) {
  const f = e.target.files?.[0];
  if (!f) return;
  if (!isPdf(f)) {
    alert("لطفاً فقط فایل PDF انتخاب کنید");
    e.target.value = "";
    return;
  }
  guaranteeChip.value = { name: f.name, sizeKB: (f.size / 1024).toFixed(2) };
}

function clearGuarantee() {
  if (guaranteeInput.value) guaranteeInput.value.value = "";
  guaranteeChip.value = null;
}

function onPickNationalCard(e) {
  const f = e.target.files?.[0];
  if (!f) return;
  if (!isPdf(f)) {
    alert("لطفاً فقط فایل PDF انتخاب کنید");
    e.target.value = "";
    return;
  }
  nationalCardChip.value = { name: f.name, sizeKB: (f.size / 1024).toFixed(2) };
}

function clearNationalCard() {
  if (nationalCardInput.value) nationalCardInput.value.value = "";
  nationalCardChip.value = null;
}

// navigation to previous step is not presented on this step's UI
// function goPrev() {
//   window.location.href = `/pishfarakhan/step-4/${contractId.value}`;
// }

function goNext() {
  window.location.href = `/pishfarakhan/step-6/${contractId.value}`;
}
</script>

<style scoped>
.main-container {
  margin-bottom: 4rem;
}
</style>
