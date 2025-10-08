<!-- src/views/pishfarakhan/Pishfarakhan-step-3.vue -->
<template>
  <div class="min-h-screen" dir="rtl">
    <!-- Header (same as step-1/2) -->
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
      <!-- Admin info bar -->
      <div
          class="bg-teal-500 text-white rounded-lg shadow p-4 flex items-center justify-between mb-6 mx-auto max-w-[98%] px-4"
      >
        <span class="text-sm">اطلاعیه های اخیر</span>
        <span class="px-3 py-1 bg-teal-600 rounded text-sm"
        >admin : کارشناس ثبت</span
        >
      </div>

      <!-- Step indicators with progress bar (current step: 3) -->
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

      <!-- Main content -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Right panel: controls -->
        <div class="lg:col-span-1 order-last lg:order-first">
          <div class="bg-white rounded-lg shadow-sm p-6 space-y-6">
            <!-- Unique ID -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2"
              >کد شناسه یکتا</label
              >
              <div
                  class="bg-gray-100 px-4 py-3 rounded-lg text-gray-800 font-mono"
              >
                {{ contractIdFa }}
              </div>
            </div>

            <!-- Request type choices (as in screenshots) -->
            <div>
              <div class="text-center sm:text-right mb-3 text-gray-700">
                نوع فرآیند درخواست
              </div>
              <div class="flex flex-wrap gap-2 justify-center sm:justify-start">
                <button
                    v-for="opt in processOptions"
                    :key="opt"
                    class="px-5 py-2 rounded-xl border transition-colors cursor-pointer"
                    :class="
                    proc === opt
                      ? 'bg-[rgba(21,78,193,0.18)] text-[rgb(21,78,193)] border-[rgb(21,78,193)] shadow-sm'
                      : 'bg-transparent text-gray-700 border-gray-300 hover:bg-[rgba(21,78,193,0.08)] hover:text-[rgb(21,78,193)] hover:border-[rgba(21,78,193,0.35)]'
                  "
                    @click="proc = opt"
                >
                  {{ opt }}
                </button>
              </div>
            </div>

            <!-- Has Setad documents? yes/no -->
            <div class="mt-6">
              <div class="text-center sm:text-right mb-3 text-gray-700">
                آیا مستندات سامانه ستاد دارد؟
              </div>
              <div class="flex flex-wrap gap-2 justify-center sm:justify-start">
                <button
                    v-for="opt in yesNoOptions"
                    :key="opt.label"
                    class="px-5 py-2 rounded-xl border transition-colors cursor-pointer"
                    :class="
                    hasMostanad === opt.value
                      ? 'bg-[rgba(21,78,193,0.18)] text-[rgb(21,78,193)] border-[rgb(21,78,193)] shadow-sm'
                      : 'bg-transparent text-gray-700 border-gray-300 hover:bg-[rgba(21,78,193,0.08)] hover:text-[rgb(21,78,193)] hover:border-[rgba(21,78,193,0.35)]'
                  "
                    @click="hasMostanad = opt.value"
                >
                  {{ opt.label }}
                </button>
              </div>
            </div>

            <!-- SHOW ONLY WHEN 'بلی' IS ACTIVE -->
            <div
                v-if="hasMostanad === true"
                class="mt-4 rounded-xl bg-white shadow p-4"
            >
              <div class="flex items-center justify-between">
                <h3 class="text-gray-700">بارگذاری مستندات سامانه ستاد</h3>

                <!-- hidden input -->
                <input
                    ref="setadInput"
                    type="file"
                    class="hidden"
                    accept="application/pdf"
                    @change="onSetadPick"
                />

                <button
                    class="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
                    @click="$refs.setadInput.click()"
                >
                  بارگذاری
                </button>
              </div>
              <!-- chip -->
              <div
                  v-if="selectedSetadPdf"
                  class="mt-4 flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-3 py-2 shadow-sm w-fit"
              >
                <button
                    type="button"
                    @click="clearSetad"
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
                    {{ (selectedSetadPdf.size / 1024).toFixed(2) }}
                  </div>
                  <div>KB</div>
                </div>

                <div
                    class="text-sm text-gray-800 truncate max-w-[220px]"
                    :title="selectedSetadPdf.name"
                >
                  {{ selectedSetadPdf.name }}
                </div>
              </div>
            </div>

            <!-- Upload contract text; drives left PDF viewer -->
            <div class="rounded-xl bg-white shadow p-5 border border-gray-200">
              <div class="flex items-center justify-between mb-3">
                <div class="text-gray-700">بارگذاری متن قرارداد</div>
                <div class="text-xs text-blue-600 cursor-pointer select-none">
                  نمونه متن قرارداد doc.
                </div>
              </div>
              <input
                  ref="contractInput"
                  type="file"
                  accept="application/pdf"
                  class="hidden"
                  @change="onPickContract"
              />
              <div class="flex justify-end">
                <button
                    type="button"
                    class="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
                    @click="$refs.contractInput.click()"
                >
                  بارگذاری
                </button>
              </div>
            </div>

            <!-- hidden input -->
            <input
                ref="contractDocInput"
                type="file"
                class="hidden"
                accept="application/pdf"
                @change="onContractDocPick"
            />

            <!-- chip -->
            <div
                v-if="contractDocChip"
                class="mt-4 flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-3 py-2 shadow-sm w-fit"
            >
              <button
                  type="button"
                  @click="clearContractDoc"
                  class="flex-shrink-0 w-7 h-7 rounded-lg bg-red-500 text-white flex items-center justify-center cursor-pointer"
                  aria-label="حذف فایل"
                  title="حذف فایل"
              >
                ✕
              </button>

              <div
                  class="flex-shrink-0 text-xs text-gray-500 w-16 text-center leading-tight"
              >
                <div class="font-medium">{{ contractDocChip.sizeKB }}</div>
                <div>KB</div>
              </div>

              <div
                  class="text-sm text-gray-800 truncate max-w-[220px]"
                  :title="contractDocChip.name"
              >
                {{ contractDocChip.name }}
              </div>
            </div>

            <!-- Upload newspaper ad (optional visual) -->
            <div class="rounded-xl bg-white shadow p-5 border border-gray-200">
              <div class="flex items-center justify-between mb-3">
                <div class="text-gray-700">بارگذاری آگهی روزنامه</div>
                <div class="text-xs text-blue-600 cursor-pointer select-none">
                  متن روزنامه doc.
                </div>
              </div>
              <input
                  ref="newsInput"
                  type="file"
                  accept="application/pdf"
                  class="hidden"
              />
              <div class="flex justify-end">
                <button
                    type="button"
                    class="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
                    @click="$refs.newspaperInput.click()"
                >
                  بارگذاری
                </button>
              </div>
            </div>

            <!-- hidden input -->
            <input
                ref="newspaperInput"
                type="file"
                class="hidden"
                accept="application/pdf"
                @change="onNewspaperPick"
            />

            <!-- chip -->
            <div
                v-if="newspaperChip"
                class="mt-4 flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-3 py-2 shadow-sm w-fit"
            >
              <button
                  type="button"
                  @click="clearNewspaper"
                  class="flex-shrink-0 w-7 h-7 rounded-lg bg-red-500 text-white flex items-center justify-center cursor-pointer"
                  aria-label="حذف فایل"
                  title="حذف فایل"
              >
                ✕
              </button>

              <div
                  class="flex-shrink-0 text-xs text-gray-500 w-16 text-center leading-tight"
              >
                <div class="font-medium">{{ newspaperChip.sizeKB }}</div>
                <div>KB</div>
              </div>

              <div
                  class="text-sm text-gray-800 truncate max-w-[220px]"
                  :title="newspaperChip.name"
              >
                {{ newspaperChip.name }}
              </div>
            </div>

            <!-- External note -->
            <div
                class="rounded-xl bg-white shadow p-5 border border-gray-200 text-sm text-gray-700"
            >
              متقاضیان جهت دریافت مجوز نشریه به سامانه جامع رسانه‌های کشوری
              مراجعه فرمایید:
              <a
                  href="https://e-rasaneh.ir"
                  target="_blank"
                  class="text-blue-600 hover:text-blue-800"
              >e-rasaneh.ir</a
              >
            </div>

            <div>
              <button
                  type="button"
                  class="w-full bg-blue-600 hover:bg-blue-700 text-white cursor-pointer py-3 px-4 rounded-lg"
                  @click="goNext"
              >
                ثبت
              </button>
            </div>
          </div>
        </div>

        <!-- Left panel: PDF viewer with tab controls -->
        <div class="lg:col-span-2">
          <div class="bg-white rounded-lg shadow-sm p-4 overflow-hidden">
            <!-- tabs -->
            <div
                class="flex flex-wrap gap-2 justify-center sm:justify-start mb-4"
            >
              <button
                  v-for="opt in pdfTabs"
                  :key="opt.key"
                  class="px-5 py-2 rounded-xl border transition-colors cursor-pointer"
                  :class="
                  activeTab === opt.key
                    ? 'bg-[rgba(21,78,193,0.18)] text-[rgb(21,78,193)] border-[rgb(21,78,193)] shadow-sm'
                    : 'bg-transparent text-gray-700 border-gray-300 hover:bg-[rgba(21,78,193,0.08)] hover:text-[rgb(21,78,193)] hover:border-[rgba(21,78,193,0.35)]'
                "
                  @click="activeTab = opt.key"
              >
                {{ opt.label }}
              </button>
            </div>

            <div v-if="displayedPdfUrl" class="w-full">
              <iframe
                  :src="displayedPdfUrl"
                  class="w-full h-[105vh] rounded-lg border border-gray-200 block"
                  frameborder="0"
              />
            </div>
            <div v-else class="h-[70vh] flex items-center justify-center">
              <div class="text-center text-gray-500">
                مدرکی برای نمایش وجود ندارد
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer (same as step-1/2) -->
    <hr/>
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
import {computed, ref} from "vue";
import {useRoute} from "vue-router";
import {toast} from "vue3-toastify";

const selectedSetadPdf = ref(null);
const contractPdfUrl = ref(null);
const contractDocChip = ref(null);
const newspaperChip = ref(null);

const setadInput = ref(null);
const contractInput = ref(null);
const newspaperInput = ref(null);

let contractDocUrl = null;
let newspaperUrl = null;

const isPdf = (file) =>
    !!file && (file.type === "application/pdf" || /\.pdf$/i.test(file.name));

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

// Format Persian digits for UI display
const toFaDigits = (x) => String(x ?? "").replace(/\d/g, d => "۰۱۲۳۴۵۶۷۸۹"[d]);
const contractIdFa = computed(() => toFaDigits(contractId.value));

const processOptions = ["اموال منقول", "اموال غیر منقول", "اجاره"];
const proc = ref("اموال منقول");

// Tabs for main PDF viewer
const pdfTabs = [
  {key: "contract", label: "متن قرارداد"},
  {key: "newspaper", label: "روزنامه"},
  {key: "setad", label: "ستاد"},
];
const activeTab = ref("contract");

// Reactive URLs for viewer
const newspaperPdfUrl = ref(null);
const setadPdfUrl = ref(null);

const displayedPdfUrl = computed(() => {
  if (activeTab.value === "contract") return contractPdfUrl.value;
  if (activeTab.value === "newspaper") return newspaperPdfUrl.value;
  if (activeTab.value === "setad") return setadPdfUrl.value;
  return null;
});

const yesNoOptions = [
  {label: "بلی", value: true},
  {label: "خیر", value: false},
];
const hasMostanad = ref(false);

const progressWidth = computed(
    () => `${((3 - 1) / (steps.length - 1)) * 100}%`
);

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

function onPickContract(e) {
  const f = e.target.files?.[0];
  if (!f) return;
  if (!isPdf(f)) {
    toast.error("لطفاً یک فایل PDF بارگذاری کنید.", {position: "top-right"});
    e.target.value = "";
    return;
  }
  if (contractDocUrl) URL.revokeObjectURL(contractDocUrl);
  contractDocUrl = URL.createObjectURL(f);
  contractPdfUrl.value = contractDocUrl;
  contractDocChip.value = {
    name: f.name,
    sizeKB: (f.size / 1024).toFixed(2),
  };
  activeTab.value = "contract";
}

function onSetadPick(e) {
  const f = e.target.files?.[0];
  if (!f) return;
  if (!isPdf(f)) {
    toast.error("لطفاً یک فایل PDF بارگذاری کنید.", {position: "top-right"});
    e.target.value = "";
    selectedSetadPdf.value = null;
    return;
  }
  selectedSetadPdf.value = f;
  if (setadPdfUrl.value) URL.revokeObjectURL(setadPdfUrl.value);
  setadPdfUrl.value = URL.createObjectURL(f);
  activeTab.value = "setad";
}

function clearSetad() {
  if (setadInput.value) setadInput.value.value = "";
  selectedSetadPdf.value = null;
  if (setadPdfUrl.value) {
    URL.revokeObjectURL(setadPdfUrl.value);
    setadPdfUrl.value = null;
  }
}

function onNewspaperPick(e) {
  const f = e.target.files?.[0];
  if (!f) return;
  if (!isPdf(f)) {
    toast.error("لطفاً یک فایل PDF بارگذاری کنید.", {position: "top-right"});
    e.target.value = "";
    return;
  }
  if (newspaperUrl) URL.revokeObjectURL(newspaperUrl);
  newspaperUrl = URL.createObjectURL(f);
  newspaperChip.value = {
    name: f.name,
    sizeKB: (f.size / 1024).toFixed(2),
  };
  newspaperPdfUrl.value = newspaperUrl;
  activeTab.value = "newspaper";
}

function clearContractDoc() {
  if (contractInput.value) contractInput.value.value = "";
  if (contractDocUrl) {
    URL.revokeObjectURL(contractDocUrl);
    contractDocUrl = null;
  }
  contractPdfUrl.value = null;
  contractDocChip.value = null;
}

function clearNewspaper() {
  if (newspaperInput.value) newspaperInput.value.value = "";
  if (newspaperUrl) {
    URL.revokeObjectURL(newspaperUrl);
    newspaperUrl = null;
  }
  if (newspaperPdfUrl.value) {
    URL.revokeObjectURL(newspaperPdfUrl.value);
    newspaperPdfUrl.value = null;
  }
  newspaperChip.value = null;
}

function goNext() {
  // Require contract text and newspaper to be selected
  const hasContract = !!contractDocChip.value;
  const hasNewspaper = !!newspaperChip.value;
  if (!hasContract || !hasNewspaper) {
    toast.error("لطفاً فایل‌های 'متن قرارداد' و 'آگهی روزنامه' را بارگذاری کنید.", {position: "top-right"});
    return;
  }

  // If 'بلی' selected for Setad docs, ensure Setad file is provided
  if (hasMostanad.value === true && !selectedSetadPdf.value) {
    toast.error("با انتخاب گزینه 'بلی'، بارگذاری مستندات سامانه ستاد الزامی است.", {position: "top-right"});
    return;
  }

  window.location.href = `/pishfarakhan/step-4/${encodeURIComponent(
      contractId.value
  )}`;
}
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
