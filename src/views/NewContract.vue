<template>
  <div class="w-full flex flex-col items-center" dir="rtl">
    <!-- Header (reuse from AdminPanel) -->
    <header class="flex justify-between w-full px-4 sm:px-8 pt-4">
      <img
          class="w-[130px] h-[130px]"
          src="../assets/images/education.svg"
          alt="Education"
          style="margin-right: 1rem"
      />
      <img
          class="w-[191px] h-[100px]"
          src="../assets/images/khamenei.png"
          alt="Khamenei"
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

    <!-- Main -->
    <main class="w-full flex justify-center items-start mt-10 px-4 pb-16">
      <div
          class="w-[99%] max-w-[1400px] bg-white rounded-lg shadow-lg overflow-hidden"
      >
        <!-- Top teal bar with labels -->
        <div class="bg-[#e6f3ff] p-6">
          <div class="flex items-center justify-between mb-4">
            <button class="bg-[#48b3bd] text-white px-4 py-2 rounded-md shadow">
              اطلاعیه های اخیر
            </button>
            <span class="bg-[#48b3bd] text-white px-4 py-2 rounded-md shadow"
            >ثبت کارشناس: admin</span
            >
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <!-- Right form controls -->
            <div class="space-y-4">
              <div>
                <label class="block text-sm text-gray-600 mb-1"
                >عنوان قرارداد:</label
                >
                <input
                    type="text"
                    class="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder=""
                />
              </div>
              <div>
                <label class="block text-sm text-gray-600 mb-1"
                >موضوع قرارداد:</label
                >
                <input
                    type="text"
                    class="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder=""
                />
              </div>

              <!-- Upload card -->
              <div
                  class="bg-white rounded-xl border border-gray-200 shadow-sm p-4"
              >
                <div class="flex items-center justify-between mb-3">
                  <span class="text-sm text-gray-600"
                  >صورتجلسه پیش فراخوان:</span
                  >
                  <label class="inline-flex">
                    <input type="file" class="hidden" @change="handleFileUpload" accept="application/pdf"/>
                    <span
                        class="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded"
                    >بارگذاری</span
                    >
                  </label>
                </div>
                <button
                    type="button"
                    class="w-full text-right text-sm text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 rounded px-3 py-2"
                >
                  فرم خام صورتجلسه
                </button>
              </div>
            </div>

            <!-- Left large preview box -->
            <div class="lg:col-span-2">
              <div
                  class="bg-white rounded-xl border border-gray-200 shadow-sm h-[420px] flex items-start justify-center p-6"
              >
                <div v-if="pdfUrl" class="w-full h-full">
                  <embed :src="pdfUrl" type="application/pdf" width="100%" height="100%">
                </div>
                <span v-else class="text-gray-500">نمایش مدارک آپلود شده</span>
              </div>
            </div>
          </div>

          <!-- Submit -->
          <div class="mt-6">
            <button
                class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded"
            >
              ثبت
            </button>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer (reuse from AdminPanel) -->
    <hr/>
    <div class="login-footer">
      <div class="footer-links flex justify-center items-center gap-x-[1rem]">
        <a class="text-white transition hover:cursor-pointer" href="#"
        >حریم خصوصی</a
        >
        <a class="text-white transition hover:cursor-pointer" href="#"
        >نظرسنجی‌ها</a
        >
        <a class="text-white transition hover:cursor-pointer" href="#"
        >پیوندها</a
        >
        <a class="text-white transition hover:cursor-pointer" href="#"
        >فراخوان‌ها</a
        >
        <a class="text-white transition hover:cursor-pointer" href="#"
        >آمارها</a
        >
        <a class="text-white transition hover:cursor-pointer" href="#"
        >صفحه اصلی</a
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

<script>
export default {
  name: "NewContract",
  data() {
    return {
      pdfUrl: null,
    };
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file && file.type === "application/pdf") {
        this.pdfUrl = URL.createObjectURL(file);
      } else {
        alert("Please upload a PDF file.");
        this.pdfUrl = null;
      }
    },
  },
};
export {};
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
