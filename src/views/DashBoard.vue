<template>
  <div class="min-h-screen bg-gray-100" dir="rtl">
    <!-- Top banner -->
    <header class="relative overflow-hidden">
      <div
          class="bg-gradient-to-r from-blue-800 to-blue-700 h-32 w-full flex items-center justify-center"
      >
        <!-- Left image (Iranian flag with figures) -->
        <div class="absolute left-4 top-2 flex items-center space-x-2">
          <img
              src="@/assets/images/khamenei.png"
              class="w-20 h-auto object-contain"
              alt="Iranian figures"
          />
        </div>

        <!-- Center text -->
        <div class="text-center text-white leading-relaxed">
          <h1 class="text-xl font-bold">
            پایگاه اطلاعات قرار دادهای اداره کل آموزش و پرورش استان خراسان رضوی
          </h1>
        </div>

        <!-- Right image (Iranian emblem) -->
        <div class="absolute right-4 top-2 flex flex-col items-center">
          <img
              src="@/assets/images/education.svg"
              class="w-16 h-auto object-contain"
              alt="Iranian emblem"
          />
          <p class="text-xs text-white text-center mt-1 leading-tight">
            جمهوری اسلامی ایران<br/>
            وزارت آموزش و پرورش<br/>
            اداره ی کل آموزش و پرورش خراسان رضوی
          </p>
        </div>
      </div>
    </header>

    <main class="mx-auto max-w-7xl px-4 py-6">
      <!-- Admin info bar -->
      <div
          class="bg-teal-500 text-white rounded-lg shadow p-4 flex items-center justify-between mb-6"
      >
        <span class="px-3 py-1 bg-teal-600 rounded text-sm"
        >admin : کارشناس ثبت</span
        >
        <span class="text-sm">اطلاعیه های اخیر</span>
      </div>

      <!-- Action buttons and search bar -->
      <div class="flex flex-col lg:flex-row gap-4 mb-6">
        <div class="flex gap-3">
          <button
              class="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 text-sm"
          >
            کاربر جدید
          </button>
          <button
              class="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 text-sm"
          >
            کارتابل
          </button>
          <button
              class="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 text-sm"
          >
            ویرایش متن قرارداد
          </button>
        </div>

        <div class="flex-1 max-w-md">
          <div class="relative">
            <input
                type="text"
                placeholder="جستجوی قرارداد..."
                class="w-full rounded-lg border border-gray-300 bg-white py-2 pr-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
            <span class="absolute left-3 top-2.5 text-gray-400">🔍</span>
          </div>
        </div>
      </div>

      <!-- Contract category cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <KpiCard color="bg-purple-500" title="اجاره"/>
        <KpiCard color="bg-yellow-400" title="فروش اموال غیر منقول"/>
        <KpiCard color="bg-green-500" title="فروش اموال منقول"/>
        <KpiCard color="bg-blue-500" title="کل قراردادها"/>
      </div>

      <!-- Bottom panels -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Upcoming payments -->
        <div class="bg-white rounded-lg shadow p-6">
          <h3 class="text-lg font-semibold text-gray-800 mb-4">
            پرداخت های پیش رو
          </h3>
          <p class="text-gray-600">هیچ پرداختی در هفته آینده وجود ندارد</p>
        </div>

        <!-- Latest contracts -->
        <div class="bg-white rounded-lg shadow">
          <div class="p-6 border-b border-gray-200">
            <div class="flex items-center justify-between">
              <h3 class="text-lg font-semibold text-gray-800">
                آخرین قراردادها
              </h3>
              <a
                  href="#"
                  class="text-blue-600 hover:text-blue-800 text-sm flex items-center"
              >
                مشاهده همه <span class="mr-1">‹</span>
              </a>
            </div>
          </div>
          <div class="p-6">
            <div class="overflow-x-auto">
              <table class="w-full text-sm">
                <thead class="text-gray-600">
                <tr class="border-b border-gray-200">
                  <th class="py-3 pr-4 text-right font-medium">
                    نام قرارداد
                  </th>
                  <th class="py-3 px-4 text-right font-medium">نوع</th>
                  <th class="py-3 px-4 text-right font-medium">تاریخ</th>
                  <th class="py-3 pl-4 text-right font-medium">وضعیت</th>
                </tr>
                </thead>
                <tbody class="text-gray-800">
                <tr class="border-b border-gray-100">
                  <td class="py-4 pr-4">—</td>
                  <td class="py-4 px-4">
                      <span
                          class="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-blue-800 text-xs"
                      >منقول</span
                      >
                  </td>
                  <td class="py-4 px-4">۱۴۰۴/۶/۲۹</td>
                  <td class="py-4 pl-4">
                      <span
                          class="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-gray-800 text-xs"
                      >در حال اجرا</span
                      >
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <footer class="mt-10">
        <div
            class="bg-gradient-to-r from-blue-800 to-blue-700 text-white rounded-lg px-6 py-8"
        >
          <nav
              class="flex flex-wrap gap-x-6 gap-y-2 justify-center text-sm mb-4"
          >
            <a href="#" class="hover:underline">صفحه اصلی</a>
            <a href="#" class="hover:underline">آمارها</a>
            <a href="#" class="hover:underline">فراخوانها</a>
            <a href="#" class="hover:underline">پیوندها</a>
            <a href="#" class="hover:underline">نظرسنجی ها</a>
            <a href="#" class="hover:underline">حریم خصوصی</a>
          </nav>
          <div class="text-center text-xs">
            <p class="mb-1">تعلق دارد ۱۴۰۱ کلیه حقوق این پایگاه به</p>
            <p>طراحی تولید و توسعه توسط سپهر داده</p>
          </div>
        </div>
      </footer>
    </main>
  </div>
</template>

<script>
export default {
  name: "DashBoard",
  components: {
    KpiCard: {
      props: {title: String, color: String},
      template: `
        <div class="bg-white rounded-lg shadow p-4">
          <div class="flex items-center justify-between mb-4">
            <span class="text-gray-700 font-medium">{{ title }}</span>
            <span :class="['w-8 h-8 rounded', color]"></span>
          </div>
          <div class="mt-auto">
            <a href="#" class="text-blue-600 hover:text-blue-800 text-sm inline-flex items-center">
              مشاهده جزئیات <span class="mr-1">></span>
            </a>
          </div>
        </div>
      `,
    },
  },
};
</script>
