<!-- src/views/pishfarakhan/Pishfarakhan-step-5.vue -->
<template>
  <div class="min-h-screen bg-neutral-50" dir="rtl">
    <main class="mx-auto max-w-7xl px-4 py-10">
      <StepperHeader :steps="steps" :current="5" />
      <div class="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div class="lg:col-span-9">
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
                  <label class="block text-sm text-gray-600 mb-1"
                    >نام پدر:</label
                  >
                  <div class="flex gap-2">
                    <input
                      type="text"
                      class="flex-1 rounded-md border border-gray-300 px-3 py-2"
                      placeholder="علی"
                    />
                    <select
                      class="w-24 rounded-md border border-gray-300 px-2 py-2 text-sm"
                    >
                      <option>آقا</option>
                      <option>خانم</option>
                    </select>
                  </div>
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
                    >شماره ملی:</label
                  >
                  <input
                    type="text"
                    class="w-full rounded-md border border-gray-300 px-3 py-2"
                    placeholder="0922880000"
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
                      placeholder="انتخاب کنید"
                    />
                    <span
                      class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                      >📅</span
                    >
                  </div>
                </div>
                <div>
                  <label class="block text-sm text-gray-600 mb-1"
                    >تلفن ثابت:</label
                  >
                  <input
                    type="text"
                    class="w-full rounded-md border border-gray-300 px-3 py-2"
                    placeholder="05130000000"
                  />
                </div>
                <div>
                  <label class="block text-sm text-gray-600 mb-1"
                    >تلفن همراه:</label
                  >
                  <input
                    type="text"
                    class="w-full rounded-md border border-gray-300 px-3 py-2"
                    placeholder="09150000000"
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
        <aside class="lg:col-span-3">
          <div class="space-y-3">
            <div class="rounded-xl bg-white shadow p-4">
              <div class="text-sm text-gray-500">کد شناسه یکتا:</div>
              <div class="text-lg font-semibold text-gray-800 mt-1">
                {{ contractId }}
              </div>
            </div>
            <button
              class="w-full rounded-lg bg-blue-600 hover:bg-blue-700 text-white py-2"
            >
              بارگذاری مجوز اداره کل
            </button>
            <button
              class="w-full rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white py-2"
            >
              بارگذاری
            </button>
            <button
              class="w-full rounded-lg bg-teal-600 hover:bg-teal-700 text-white py-2"
              @click="goNext"
            >
              ثبت
            </button>
          </div>
        </aside>
      </div>
      <div class="mt-4 flex items-center justify-between">
        <button
          class="px-4 py-2 rounded-lg bg-gray-200 text-gray-800"
          @click="goPrev"
        >
          قبلی
        </button>
        <button
          class="px-4 py-2 rounded-lg bg-teal-600 text-white"
          @click="goNext"
        >
          بعدی
        </button>
      </div>
    </main>
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

function goPrev() {
  window.location.href = `/pishfarakhan/step-4/${contractId.value}`;
}

function goNext() {
  window.location.href = `/pishfarakhan/step-6/${contractId.value}`;
}
</script>

<script>
export default {
  components: {
    StepperHeader: {
      props: { steps: Array, current: Number },
      template: `
        <section class="bg-white rounded-xl shadow border border-gray-100 p-4">
          <div class="relative h-0.5 bg-gray-200 rounded">
            <div class="absolute inset-y-0 right-0 bg-teal-500 rounded"
                 :style="{ width: ((current-1)/(steps.length-1))*100 + '%' }"></div>
          </div>
          <ol class="mt-4 grid grid-cols-8 gap-4 text-center">
            <li v-for="(s, i) in steps" :key="i" class="space-y-1">
              <div class="mx-auto w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm"
                   :class="i+1 < current ? 'bg-teal-500 border-teal-500 text-white'
                        : i+1 === current ? 'bg-white border-teal-500 text-teal-600'
                        : 'bg-gray-100 border-gray-200 text-gray-400'">
                {{ i + 1 }}
              </div>
              <div class="text-xs text-gray-600">{{ s }}</div>
            </li>
          </ol>
        </section>
      `,
    },
  },
};
</script>
