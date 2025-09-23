<template>
  <div class="w-full flex flex-col items-center">
    <header class="flex justify-between w-full px-4 sm:px-8 pt-4">
      <img
          class="w-[191px] h-[100px]"
          src="../assets/images/khamenei.png"
          alt="Khamenei"
      />
      <img
          class="w-[130px] h-[130px]"
          src="../assets/images/education.svg"
          alt="Education"
          style="margin-right: 1rem"
      />
    </header>

    <router-link to="/">
      <h1
          class="text-[36px] text-[var(--main-title)] text-shadow-[0_4px_10px_black] text-center mt-4"
          style="font-family: IranNastaliq, sans-serif"
      >
        پایگاه اطلاعات قراردادهای اداره کل آموزش و پرورش استان خراسان رضوی
      </h1>
    </router-link>

    <main class="w-full flex justify-center items-start mt-10 px-4 pb-16">
      <div
          class="w-[99%] max-w-[1400px] bg-white rounded-lg shadow-lg overflow-hidden"
      >
        <!-- Main content area with light blue background -->
        <div class="bg-[#e6f3ff] p-6">
          <div class="flex gap-6 h-full">
            <!-- Left Panel -->
            <div class="w-64 bg-[#48b3bd] rounded-lg p-4 text-white">
              <div class="text-center mb-4">
                <h3 class="text-lg font-semibold mb-2">admin : کارشناس ثبت</h3>
                <div
                    class="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center"
                >
                  <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path
                        fill-rule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
              <!-- Decorative wave -->
              <div class="mt-4">
                <svg class="w-full h-8" viewBox="0 0 200 30" fill="none">
                  <path
                      d="M0 15 Q50 5 100 15 T200 15"
                      stroke="white"
                      stroke-width="2"
                      fill="none"
                  />
                </svg>
              </div>
            </div>

            <!-- Center Table Area -->
            <div class="flex-1 bg-white rounded-lg shadow-sm">
              <!-- Table Header -->
              <div class="bg-gray-50 px-6 py-4 border-b">
                <h2 class="text-lg text-right font-semibold text-gray-800">
                  لیست قراردادها
                </h2>
              </div>

              <!-- Table -->
              <div class="overflow-x-auto">
                <table class="w-full text-right">
                  <thead>
                  <tr class="bg-gray-100 text-gray-700 text-sm">
                    <th class="py-3 px-4 border-b font-medium">
                      دانلود اطلاعات
                    </th>
                    <th class="py-3 px-4 border-b font-medium">وضعیت</th>
                    <th class="py-3 px-4 border-b font-medium">تاریخ شروع</th>
                    <th class="py-3 px-4 border-b font-medium">
                      شماره درخواست
                    </th>
                    <th class="py-3 px-4 border-b font-medium">عنوان</th>
                    <th class="py-3 px-4 border-b font-medium">
                      طرف قرارداد
                    </th>
                    <th class="py-3 px-4 border-b font-medium">ردیف</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr
                      v-for="(item, index) in paginatedAgreements"
                      :key="item.id"
                      class="border-b hover:bg-blue-100"
                  >
                    <td class="py-3 px-4">
                      <button
                          class="text-blue-600 hover:text-blue-800 p-1 rounded"
                      >
                        <svg
                            class="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                          <path
                              fill-rule="evenodd"
                              d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </td>
                    <td class="py-3 px-4">
                        <span
                            class="bg-yellow-400 text-gray-800 px-3 py-1 rounded text-xs font-medium"
                        >در حال اجرا</span
                        >
                    </td>
                    <td class="py-3 px-4 text-sm text-gray-700">
                      {{ item.date }}
                    </td>
                    <td class="py-3 px-4 text-sm text-gray-700">
                      {{ item.id }}
                    </td>
                    <td class="py-3 px-4 text-sm text-gray-700">
                      {{ item.title }}
                    </td>
                    <td class="py-3 px-4 text-sm text-gray-500">-</td>
                    <td class="py-3 px-4 text-sm text-gray-700">
                      {{ (currentPage - 1) * itemsPerPage + index + 1 }}
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>

              <!-- Action Buttons -->
              <div class="px-6 py-4 border-t bg-gray-50">
                <div class="flex flex-wrap gap-2 justify-center">
                  <button
                      @click="GoToDashboard"
                      class="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition"
                  >
                    صفحه داشبورد
                  </button>
                  <router-link
                      to="/"
                      class="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition"
                  >
                    صفحه اصلی
                  </router-link>
                  <router-link
                      to="/new-contract"
                      class="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition"
                  >
                    جدید
                  </router-link>
                  <button
                      class="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition"
                  >
                    ادامه
                  </button>
                  <button
                      class="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition"
                  >
                    خاتمه / بایگان
                  </button>
                </div>
              </div>

              <!-- Pagination -->
              <div class="px-6 py-3 border-t bg-white">
                <div class="flex justify-center gap-1">
                  <button
                      class="cursor-pointer"
                      v-for="page in totalPages"
                      :key="page"
                      @click="currentPage = page"
                      :class="[
                      'px-3 py-1 rounded text-sm font-medium transition',
                      currentPage === page
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 hover:bg-gray-300 text-gray-700',
                    ]"
                  >
                    {{ page }}
                  </button>
                </div>
              </div>
            </div>

            <!-- Right Panel -->
            <div class="w-64 bg-[#48b3bd] rounded-lg p-4 text-white">
              <div class="text-center mb-4">
                <h3 class="text-lg font-semibold mb-2">اطلاعیه های اخیر</h3>
              </div>

              <!-- Announcements List -->
              <div class="space-y-3">
                <div
                    class="flex justify-end items-center gap-2 p-2 bg-white/10 rounded"
                >
                  <span class="text-sm text">قسمتی از فضای ورزشی کاظمیان</span>
                </div>
                <div
                    class="flex justify-end items-center gap-2 p-2 bg-white/10 rounded"
                >
                  <span class="text-sm">ds</span>
                </div>
                <div
                    class="flex justify-end items-center gap-2 p-2 bg-white/10 rounded"
                >
                  <span class="text-sm">fd</span>
                </div>
                <div
                    class="flex justify-end items-center gap-2 p-2 bg-white/10 rounded"
                >
                  <span class="text-sm">dsad</span>
                </div>
                <div
                    class="flex justify-end items-center gap-2 p-2 bg-white/10 rounded"
                >
                  <span class="text-sm">ds</span>
                </div>
                <div
                    class="flex justify-end items-center gap-2 p-2 bg-white/10 rounded"
                >
                  <span class="text-sm">تست</span>
                </div>
                <div
                    class="flex justify-end items-center gap-2 p-2 bg-white/10 rounded"
                >
                  <span class="text-sm">test</span>
                </div>
                <div
                    class="flex justify-end items-center gap-2 p-2 bg-white/10 rounded"
                >
                  <span class="text-sm">dsad</span>
                </div>
                <div
                    class="flex justify-end items-center gap-2 p-2 bg-white/10 rounded"
                >
                  <span class="text-sm">dsa</span>
                </div>
                <div
                    class="flex justify-end items-center gap-2 p-2 bg-white/10 rounded"
                >
                  <span class="text-sm">test</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Search Bar -->
        <div class="bg-gray-100 px-6 py-3 border-t">
          <div class="flex justify-end items-center gap-2 relative">
            <router-link
                to="/search"
                class="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm"
            >
              جستجو بر اساس موضوع قرارداد
            </router-link>
          </div>
        </div>
      </div>
    </main>
  </div>
  <hr/>
  <div class="login-footer">
    <div class="footer-links flex justify-center items-center gap-x-[1rem]">
      <router-link to="/">
        <a class="text-white transition hover:cursor-pointer" href="#"
        >حریم خصوصی</a
        >
      </router-link>
      <router-link to="/">
        <a class="text-white transition hover:cursor-pointer" href="#"
        >نظرسنجی‌ها</a
        >
      </router-link>
      <router-link to="/">
        <a class="text-white transition hover:cursor-pointer" href="#">پیوندها</a>
      </router-link>
      <router-link to="/">
        <a class="text-white transition hover:cursor-pointer" href="#"
        >فراخوان‌ها</a
        >
      </router-link>
      <router-link to="/">
        <a class="text-white transition hover:cursor-pointer" href="#">آمارها</a>
      </router-link>
      <router-link to="/">
        <a class="text-white transition hover:cursor-pointer" href="#"
        >صفحه اصلی</a
        >
      </router-link>
    </div>
    <div class="footer-desc flex justify-center items-center">
      <p class="text-[white]">© کلیه حقوق این پایگاه به سپهر داده تعلق دارد</p>
    </div>
  </div>
</template>

<script>
import agreements from "@/data/agreements.js";

export default {
  name: "CarTable",
  data() {
    return {
      agreements,
      currentPage: 1,
      itemsPerPage: 10,
    };
  },
  computed: {
    mergedAgreements() {
      const userContracts = JSON.parse(
          localStorage.getItem("userContracts") || "[]"
      );
      const normalizedUsers = userContracts.map((c) => ({
        id: c.id,
        title: c.title,
        description: c.description,
        date: c.date,
      }));
      return [...normalizedUsers, ...this.agreements];
    },
    totalPages() {
      return Math.ceil(this.mergedAgreements.length / this.itemsPerPage);
    },
    paginatedAgreements() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.mergedAgreements.slice(start, end);
    },
  },
  methods: {
    GoToDashboard() {
      this.$router.push({name: "DashBoard"});
    }
  }
};
</script>

<style>
hr {
  color: white;
}

.footer-links {
  margin-bottom: 1rem;
}

.footer-desc {
  margin-bottom: 1rem;
}
</style>
