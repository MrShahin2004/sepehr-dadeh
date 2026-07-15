<template>
  <div class="min-h-screen" dir="rtl">
    <!-- Top banner -->
    <header class="relative overflow-hidden">
      <div class="top-navbar h-32 w-full flex items-center justify-center">
        <!-- Left image (Iranian flag with figures) -->
        <div class="absolute left-4 top-2 flex items-center space-x-2">
          <img
            src="@/assets/images/khamenei.png"
            class="w-50 h-auto object-contain"
            alt="Iranian figures"
          />
        </div>

        <!-- Center text -->
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

        <!-- Right image (Iranian emblem) -->
        <div class="absolute right-4 top-2 flex flex-col items-center">
          <img
            src="@/assets/images/education.svg"
            class="w-40 h-auto object-contain"
            alt="Iranian emblem"
          />
        </div>
      </div>
    </header>

    <div class="w-full">
      <main class="mx-auto max-w-[98%] px-4 py-6 bg-gray-100 rounded-xl">
        <!-- Admin info bar -->
        <div
          class="bg-teal-500 text-white rounded-lg shadow p-4 flex items-center justify-between mb-6"
        >
          <span class="text-sm">اطلاعیه های اخیر</span>
          <span class="px-3 py-1 bg-teal-600 rounded text-sm"
            >Shahin Hashemi : کارشناس ثبت</span
          >
        </div>

        <!-- Action buttons and search bar -->
        <div class="flex justify-between lg:flex-row gap-4 mb-6">
          <!-- Contracts Management Dashboard title -->
          <div class="text-right flex">
            <h2 class="text-xl font-semibold text-gray-800 leading-7">
              داشبورد مدیریت قراردادها
            </h2>
          </div>

          <div class="flex-1 max-w-xl">
            <div class="relative h-[100%]">
              <input
                type="text"
                placeholder="جستجوی قرارداد..."
                class="w-full h-[100%] rounded-lg border border-gray-300 bg-white py-2 pr-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              <span class="absolute left-3 top-2.5 text-gray-400">🔍</span>
            </div>
          </div>

          <div class="flex gap-3">
            <button
              @click="GoToCreateUser"
              class="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 text-sm cursor-pointer"
            >
              کاربر جدید
            </button>
            <button
              @click="GoToCartable"
              class="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 text-sm cursor-pointer"
            >
              کارتابل
            </button>
            <button
              @click="GoToEditContractText"
              class="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 text-sm cursor-pointer"
            >
              ویرایش متن قرارداد
            </button>
          </div>
        </div>

        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8"
        >
          <div class="bg-white rounded-xl shadow-md overflow-hidden">
            <div class="p-5">
              <div class="flex items-center">
                <div class="bg-blue-500 p-3 rounded-lg">
                  <documenttexticon
                    class="w-8 h-8 text-white"
                  ></documenttexticon>
                </div>
                <div class="mr-4">
                  <p class="text-sm font-medium text-gray-500 truncate">
                    کل قراردادها
                  </p>
                  <p class="mt-1 text-2xl font-semibold text-gray-900"></p>
                </div>
              </div>
            </div>
            <div class="px-5 py-3 bg-gray-50">
              <a
                href="/cartable/all"
                class="text-sm font-medium text-teal-600 hover:text-teal-900 flex items-center justify-end"
              >
                مشاهده جزئیات
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="w-4 h-4 mr-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="bg-white rounded-xl shadow-md overflow-hidden">
            <div class="p-5">
              <div class="flex items-center">
                <div class="bg-green-500 p-3 rounded-lg">
                  <shoppingcarticon
                    class="w-8 h-8 text-white"
                  ></shoppingcarticon>
                </div>
                <div class="mr-4">
                  <p class="text-sm font-medium text-gray-500 truncate">
                    فروش اموال منقول
                  </p>
                  <p class="mt-1 text-2xl font-semibold text-gray-900"></p>
                </div>
              </div>
            </div>
            <div class="px-5 py-3 bg-gray-50">
              <a
                href="/cartable/movable"
                class="text-sm font-medium text-teal-600 hover:text-teal-900 flex items-center justify-end"
              >
                مشاهده جزئیات
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="w-4 h-4 mr-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="bg-white rounded-xl shadow-md overflow-hidden">
            <div class="p-5">
              <div class="flex items-center">
                <div class="bg-yellow-500 p-3 rounded-lg">
                  <gavelicon class="w-8 h-8 text-white"></gavelicon>
                </div>
                <div class="mr-4">
                  <p class="text-sm font-medium text-gray-500 truncate">
                    فروش اموال غیر منقول
                  </p>
                  <p class="mt-1 text-2xl font-semibold text-gray-900"></p>
                </div>
              </div>
            </div>
            <div class="px-5 py-3 bg-gray-50">
              <a
                href="/cartable/immovable"
                class="text-sm font-medium text-teal-600 hover:text-teal-900 flex items-center justify-end"
              >
                مشاهده جزئیات
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="w-4 h-4 mr-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="bg-white rounded-xl shadow-md overflow-hidden">
            <div class="p-5">
              <div class="flex items-center">
                <div class="bg-purple-500 p-3 rounded-lg">
                  <scaleicon class="w-8 h-8 text-white"></scaleicon>
                </div>
                <div class="mr-4">
                  <p class="text-sm font-medium text-gray-500 truncate">
                    اجاره
                  </p>
                  <p class="mt-1 text-2xl font-semibold text-gray-900"></p>
                </div>
              </div>
            </div>
            <div class="px-5 py-3 bg-gray-50">
              <a
                href="/cartable/rental"
                class="text-sm font-medium text-teal-600 hover:text-teal-900 flex items-center justify-end"
              >
                مشاهده جزئیات
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="w-4 h-4 mr-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Contract category cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <KpiCard color="bg-purple-500" title="اجاره" />
          <KpiCard color="bg-yellow-400" title="فروش اموال غیر منقول" />
          <KpiCard color="bg-green-500" title="فروش اموال منقول" />
          <KpiCard color="bg-blue-500" title="کل قراردادها" />
        </div>

        <!-- Bottom panels -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
                  مشاهده همه <span class="mr-1">˂</span>
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

          <!-- Upcoming payments -->
          <div class="bg-white rounded-lg shadow p-6">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-lg font-semibold text-gray-800">
                پرداخت های پیش رو
              </h3>
              <a
                href="#"
                class="text-blue-600 hover:text-blue-800 text-sm flex items-center"
              >
                مشاهده همه <span class="mr-1">></span>
              </a>
            </div>
            <p class="text-gray-600">هیچ پرداختی در هفته آینده وجود ندارد</p>
          </div>
        </div>

        <!-- Footer -->
        <footer class="mt-10">
          <div class="footer-navbar text-white rounded-lg px-6 py-8">
            <nav
              class="flex flex-wrap gap-x-6 gap-y-2 justify-center text-sm mb-4"
            >
              <router-link to="/">
                <a class="text-[white] hover:text-blue-600 transition"
                  >صفحه اصلی</a
                >
              </router-link>
              <router-link to="/">
                <a class="text-[white] hover:text-blue-600 transition"
                  >آمارها</a
                >
              </router-link>
              <router-link to="/">
                <a class="text-[white] hover:text-blue-600 transition"
                  >فراخوانها</a
                >
              </router-link>
              <router-link to="/">
                <a class="text-[white] hover:text-blue-600 transition"
                  >پیوندها</a
                >
              </router-link>
              <router-link to="/">
                <a class="text-[white] hover:text-blue-600 transition"
                  >نظرسنجی ها</a
                >
              </router-link>
              <router-link to="/">
                <a class="text-[white] hover:text-blue-600 transition"
                  >حریم خصوصی</a
                >
              </router-link>
            </nav>
            <div class="text-center text-xs">
              <p class="mb-1">تعلق دارد ۱۴۰۱ کلیه حقوق این پایگاه به</p>
              <p>طراحی تولید و توسعه توسط سپهر داده</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashBoard",
  components: {
    KpiCard: {
      props: { title: String, color: String },
      template: `
        <div class="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden h-32 flex flex-col">
          <div class="px-5 pt-5 pb-4 relative">
            <span :class="['absolute right-5 top-5 w-4 h-4 rounded-full', color]"></span>
            <div class="text-center">
              <span class="text-gray-700 text-sm">{{ title }}</span>
            </div>
          </div>
          <div class="mt-auto bg-gray-50 px-5 py-3 border-t border-gray-200">
            <a href="#" class="text-teal-600 hover:text-teal-800 text-sm inline-flex items-center">
              <span class="ml-2">‹</span>
              مشاهده جزئیات
            </a>
          </div>
        </div>
      `,
    },
  },
  methods: {
    GoToCartable() {
      this.$router.push("/cartable");
    },
    GoToCreateUser() {
      this.$router.push("/admin/create/user");
    },
    GoToEditContractText() {
      this.$router.push("/admin/edit/contract/template");
    },
  },
};
</script>

<style>
.main-title {
  font-family: IranNastaliq, sans-serif;
}

.top-navbar,
.footer-navbar {
  background: #0059e7;
  background: radial-gradient(
    circle,
    rgba(0, 89, 231, 1) 0%,
    rgba(43, 16, 88, 1) 100%
  );
}
</style>
