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
          class="w-[99%] max-w-[1100px] bg-[#cbe9f6] rounded-2xl p-0 sm:p-0 overflow-hidden"
      >
        <!-- header bar -->
        <div
            class="w-full bg-[#48b3bd] text-white flex items-center justify-between px-4 sm:px-6 py-3"
        >
          <button
              class="bg-[#3aa6b0] hover:bg-[#2f8f97] transition rounded-md px-3 py-1 text-sm"
          >
            اطلاعیه های اخیر
          </button>
          <div class="flex items-center gap-2">
            <span class="bg-green-600 rounded-full px-3 py-1 text-xs sm:text-sm"
            >ثبت کارشناس: admin</span
            >
          </div>
        </div>

        <!-- table container -->
        <div class="w-full bg-white p-0">
          <div class="overflow-x-auto" dir="rtl">
            <table class="min-w-full text-right">
              <thead>
              <tr class="bg-gray-100 text-gray-700 text-sm">
                <th class="py-3 px-4 border-b">عنوان</th>
                <th class="py-3 px-4 border-b">شماره درخواست</th>
                <th class="py-3 px-4 border-b">طرف قرارداد</th>
                <th class="py-3 px-4 border-b">تاریخ شروع</th>
                <th class="py-3 px-4 border-b">وضعیت</th>
                <th class="py-3 px-4 border-b">دانلود اطلاعات</th>
                <th class="py-3 px-4 border-b">
                  <input type="checkbox" class="w-4 h-4"/>
                </th>
              </tr>
              </thead>
              <tbody>
              <tr
                  v-for="item in paginatedAgreements"
                  :key="item.id"
                  class="odd:bg-white even:bg-gray-50 text-sm text-gray-700"
              >
                <td class="py-3 px-4 border-b">{{ item.title }}</td>
                <td class="py-3 px-4 border-b">{{ item.id }}</td>
                <td class="py-3 px-4 border-b">{{ item.description }}</td>
                <td class="py-3 px-4 border-b">{{ item.date }}</td>
                <td class="py-3 px-4 border-b">
                    <span
                        class="bg-yellow-400 text-gray-800 rounded-full px-3 py-1 text-xs"
                    >درحال اجرا</span
                    >
                </td>
                <td class="py-3 px-4 border-b">
                  <button
                      class="text-blue-600 hover:text-blue-800"
                      title="دانلود"
                  >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-5 h-5"
                    >
                      <path
                          fill-rule="evenodd"
                          d="M11.47 3.97a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 1 1-1.06 1.06l-2.72-2.72V15a.75.75 0 0 1-1.5 0V6.81l-2.72 2.72a.75.75 0 1 1-1.06-1.06l4.5-4.5ZM4.5 19.5A2.25 2.25 0 0 0 6.75 21h10.5A2.25 2.25 0 0 0 19.5 18.75v-2.25a.75.75 0 0 1 1.5 0v2.25A3.75 3.75 0 0 1 17.25 22.5H6.75A3.75 3.75 0 0 1 3 18.75v-2.25a.75.75 0 0 1 1.5 0v3Z"
                          clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </td>
                <td class="py-3 px-4 border-b">
                  <input type="checkbox" class="w-4 h-4"/>
                </td>
              </tr>
              <tr v-if="paginatedAgreements.length === 0">
                <td colspan="7" class="text-center text-gray-500 py-6">
                  موردی یافت نشد
                </td>
              </tr>
              </tbody>
            </table>
          </div>

          <!-- pagination -->
          <div class="flex justify-center my-4 gap-2">
            <button
                class="cursor-pointer"
                style="margin-bottom: 1rem"
                v-for="page in totalPages"
                :key="page"
                @click="currentPage = page"
                :class="[
                'px-3 py-1 rounded-md',
                currentPage === page
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 hover:bg-gray-300',
              ]"
            >
              {{ page }}
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
  <hr/>
  <div class="login-footer">
    <div class="footer-links flex justify-center items-center gap-x-[1rem]">
      <a class="text-white transition hover:cursor-pointer" href="#"
      >حریم خصوصی</a
      >
      <a class="text-white transition hover:cursor-pointer" href="#"
      >نظرسنجی‌ها</a
      >
      <a class="text-white transition hover:cursor-pointer" href="#">پیوندها</a>
      <a class="text-white transition hover:cursor-pointer" href="#"
      >فراخوان‌ها</a
      >
      <a class="text-white transition hover:cursor-pointer" href="#">آمارها</a>
      <a class="text-white transition hover:cursor-pointer" href="#"
      >صفحه اصلی</a
      >
    </div>
    <div class="footer-desc flex justify-center items-center">
      <p class="text-[white]">© کلیه حقوق این پایگاه به سپهر داده تعلق دارد</p>
    </div>
  </div>
</template>

<script>
import agreements from "@/data/agreements.js";

export default {
  name: "AdminPanel",
  data() {
    return {
      agreements,
      currentPage: 1,
      itemsPerPage: 10,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.agreements.length / this.itemsPerPage);
    },
    paginatedAgreements() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.agreements.slice(start, end);
    },
  },
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
