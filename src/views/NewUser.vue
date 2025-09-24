<template>
  <div class="min-h-screen" dir="rtl">
    <!-- Top banner (same as dashboard for consistency) -->
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

    <div class="w-full">
      <main class="mx-auto max-w-[98%] px-4 py-6 bg-gray-100 rounded-xl">
        <!-- Admin info bar -->
        <div
          class="bg-teal-500 text-white rounded-lg shadow p-4 flex items-center justify-between mb-6"
        >
          <span class="text-sm">اطلاعیه های اخیر</span>
          <span class="px-3 py-1 bg-teal-600 rounded text-sm"
            >admin : کارشناس ثبت</span
          >
        </div>

        <!-- Page title -->
        <div class="flex items-center justify-between mb-6">
          <div>
            <h2 class="text-2xl font-semibold text-gray-800">مدیریت کاربران</h2>
            <p class="text-sm text-gray-500 mt-1">
              ایجاد، مشاهده و مدیریت کاربران سیستم
            </p>
          </div>
        </div>

        <!-- Card form container -->
        <div
          class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8"
        >
          <div class="p-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Right column -->
              <div class="space-y-5">
                <div>
                  <label class="block mb-2 text-gray-600 text-sm"
                    >نام کاربری</label
                  >
                  <input
                    type="text"
                    placeholder="Username"
                    class="w-full rounded-lg border border-gray-300 bg-white py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>
                <div>
                  <label class="block mb-2 text-gray-600 text-sm"
                    >اسم سازمان</label
                  >
                  <input
                    type="text"
                    placeholder="آموزش و پرورش"
                    class="w-full rounded-lg border border-gray-300 bg-white py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>
                <div>
                  <label class="block mb-2 text-gray-600 text-sm"
                    >گذرواژه</label
                  >
                  <input
                    type="password"
                    placeholder="•••••••"
                    class="w-full rounded-lg border border-gray-300 bg-white py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>
              </div>

              <!-- Left column -->
              <div class="space-y-5">
                <div>
                  <label class="block mb-2 text-gray-600 text-sm"
                    >نام کامل</label
                  >
                  <input
                    type="text"
                    placeholder="نام و نام خانوادگی"
                    class="w-full rounded-lg border border-gray-300 bg-white py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>
                <div>
                  <label class="block mb-2 text-gray-600 text-sm"
                    >شماره تلفن</label
                  >
                  <input
                    type="text"
                    placeholder="09123456789"
                    class="w-full rounded-lg border border-gray-300 bg-white py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>
                <div>
                  <label class="block mb-2 text-gray-600 text-sm">نقش</label>
                  <select
                    class="w-full rounded-lg border border-gray-300 bg-white py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  >
                    <option>User</option>
                    <option>Admin</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- Actions -->
            <div class="flex items-center gap-3 mt-6">
              <button
                class="px-4 py-2 rounded-lg bg-teal-600 text-white hover:bg-teal-700 text-sm"
              >
                ایجاد کاربر
              </button>
              <router-link to="/admin">
                <button
                  class="px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-900 text-sm"
                >
                  بازگشت
                </button>
              </router-link>
            </div>
          </div>
        </div>

        <!-- Users list table card -->
        <div
          class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
        >
          <div class="p-6 border-b border-gray-200">
            <h3 class="text-lg font-semibold text-gray-800">لیست کاربران</h3>
          </div>
          <div class="p-6">
            <div class="overflow-x-auto">
              <table class="w-full text-sm">
                <thead class="text-gray-600">
                  <tr class="border-b border-gray-200">
                    <th class="py-3 pr-4 text-right font-medium">نقش</th>
                    <th class="py-3 px-4 text-right font-medium">شماره تلفن</th>
                    <th class="py-3 px-4 text-right font-medium">ایمیل</th>
                    <th class="py-3 px-4 text-right font-medium">نام کامل</th>
                    <th class="py-3 px-4 text-right font-medium">نام کاربری</th>
                    <th class="py-3 pl-4 text-right font-medium">شناسه</th>
                  </tr>
                </thead>
                <tbody class="text-gray-800">
                  <tr class="border-b border-gray-100">
                    <td class="py-4 pr-4">admin</td>
                    <td class="py-4 px-4">admin</td>
                    <td class="py-4 px-4">info@sepehr-dad.com</td>
                    <td class="py-4 px-4">admin</td>
                    <td class="py-4 px-4">admin</td>
                    <td class="py-4 pl-4">
                      21c79c14-cfbd-4bc9-a65d-a2441cc564dc
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <footer class="mt-10">
          <div class="footer-navbar text-white rounded-lg px-6 py-8">
            <nav
              class="flex flex-wrap gap-x-6 gap-y-2 justify-center text-sm mb-4"
            >
              <router-link to="/">
                <a href="#" class="text-[white] hover:text-blue-600 transition"
                  >صفحه اصلی</a
                >
              </router-link>
              <router-link to="/">
                <a href="#" class="text-[white] hover:text-blue-600 transition"
                  >آمارها</a
                >
              </router-link>
              <router-link to="/">
                <a href="#" class="text-[white] hover:text-blue-600 transition"
                  >فراخوانها</a
                >
              </router-link>
              <router-link to="/">
                <a href="#" class="text-[white] hover:text-blue-600 transition"
                  >پیوندها</a
                >
              </router-link>
              <router-link to="/">
                <a href="#" class="text-[white] hover:text-blue-600 transition"
                  >نظرسنجی ها</a
                >
              </router-link>
              <router-link to="/">
                <a href="#" class="text-[white] hover:text-blue-600 transition"
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
  name: "NewUser",
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
