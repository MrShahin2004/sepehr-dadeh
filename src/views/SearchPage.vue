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
          style="font-family: IranNastaliq, sans-serif;"
      >
        پایگاه اطلاعات قراردادهای اداره کل آموزش و پرورش استان خراسان رضوی
      </h1>
    </router-link>

    <main class="w-full flex justify-center items-start mt-10 px-4 pb-16">
      <div class="w-[99%] max-w-[1100px] bg-[#cbe9f6] rounded-2xl p-6 sm:p-10">
        <div class="w-full bg-white rounded-2xl shadow-xl p-6 sm:p-10">
          <h2 class="text-center text-[18px] sm:text-[20px] font-semibold mb-6">
            جستجوی قراردادها
          </h2>

          <!-- Search bar -->
          <div class="w-full flex items-center gap-3">
            <div class="relative flex-1">
              <span
                  class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                  <path
                      fill-rule="evenodd"
                      d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.386a1 1 0 01-1.414 1.415l-4.387-4.387zM14 8a6 6 0 11-12 0 6 6 0 0112 0z"
                      clip-rule="evenodd"
                  />
                </svg>
              </span>
              <input
                  dir="rtl"
                  v-model="query"
                  type="text"
                  placeholder="جستجوی قرارداد..."
                  class="w-full bg-gray-100 rounded-xl pl-10 pr-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <button
                @click="onSearch"
                class="bg-yellow-400 cursor-pointer hover:bg-yellow-500 text-gray-800 px-5 py-2 rounded-xl transition"
            >
              جستجو
            </button>
          </div>

          <!-- Results list -->
          <div
              class="mt-8 space-y-4 max-h-[60vh] overflow-y-auto pr-1"
              style="direction: rtl"
          >
            <router-link
                v-for="item in filtered"
                :key="item.id"
                :to="{ name: 'ContractDetail', params: { id: item.id } }"
                class="block"
            >
              <div
                  class="bg-white rounded-2xl shadow-md border border-gray-200 p-5 hover:shadow-lg transition"
              >
                <div class="flex items-center justify-between">
                  <div>
                    <p class="text-gray-700 text-sm">
                      کد شناسه یکتا:
                      <span class="font-semibold">{{ item.id }}</span>
                    </p>
                    <p class="text-[13px] text-gray-500 mt-1">
                      تاریخ: {{ item.date }}
                    </p>
                  </div>
                  <div class="text-gray-400 text-xs">ناظر: مدیر</div>
                </div>
              </div>
            </router-link>
            <div
                v-if="filtered.length === 0"
                class="text-center text-gray-500 py-10"
            >
              موردی یافت نشد
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
  <hr>
  <div class="login-footer">
    <div class="footer-links flex justify-center items-center gap-x-[1rem]">
      <a class="text-white transition hover:cursor-pointer" href="#">حریم خصوصی</a>
      <a class="text-white transition hover:cursor-pointer" href="#">نظرسنجی‌ها</a>
      <a class="text-white transition hover:cursor-pointer" href="#">پیوندها</a>
      <a class="text-white transition hover:cursor-pointer" href="#">فراخوان‌ها</a>
      <a class="text-white transition hover:cursor-pointer" href="#">آمارها</a>
      <a class="text-white transition hover:cursor-pointer" href="#">صفحه اصلی</a>
    </div>
    <div class="footer-desc flex justify-center items-center">
      <p class="text-[white]">© کلیه حقوق این پایگاه به سپهر داده تعلق دارد</p>
    </div>
  </div>
</template>

<script>
import agreements from "@/data/agreements.js";

export default {
  name: "SearchPage",
  data() {
    return {
      query: "",
      agreements,
    };
  },
  computed: {
    filtered() {
      const q = this.query.trim();
      if (!q) return this.agreements;
      return this.agreements.filter((a) => {
        return (
            a.title.includes(q) ||
            a.description.includes(q) ||
            String(a.id).includes(q) ||
            a.date.includes(q)
        );
      });
    },
  },
  methods: {
    onSearch() {
      // Triggered by the button; filtering is reactive via v-model
    },
  },
};
</script>

<style>
/* mimic the light shadowed rounded container look */
.text-shadow-weak {
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
}

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
