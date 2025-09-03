<template>
  <div class="main-container w-[100%] flex flex-col justify-between">
    <header class="flex justify-between">
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
          class="main-title text-[40px] text-[var(--main-title)] text-shadow-[0_4px_10px_black] text-center"
      >
        پایگاه اطلاعات قراردادهای اداره کل آموزش و پرورش استان خراسان رضوی
      </h1>
    </router-link>
    <main class="w-full h-full flex flex-col items-center translate-y-[35px]">
      <div
          class="w-[99%] h-[800px] bg-[#cbe9f6] flex justify-center items-center"
      >
        <div
            class="w-[70%] h-[90%] bg-white rounded-[2rem] shadow-xl relative p-6"
        >
          <h1
              class="text-[24px] absolute top-[10px] right-[14px] text-gray-800 font-bold"
          >
            جزئیات قرارداد
          </h1>
          <div
              class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
              v-if="agreement"
              style="direction: rtl"
          >
            <table class="w-full border-collapse border border-gray-300">
              <thead>
              <tr class="bg-gray-200">
                <th class="border border-gray-300 p-2 text-right">عنوان</th>
                <th class="border border-gray-300 p-2 text-right">
                  تاریخ ثبت
                </th>
                <th class="border border-gray-300 p-2 text-right">
                  طرف قرارداد
                </th>
                <th
                    v-if="agreement.isUserContract"
                    class="border border-gray-300 p-2 text-right"
                >
                  فایل
                </th>
              </tr>
              </thead>
              <tbody>
              <tr class="hover:bg-gray-100">
                <td class="border border-gray-300 p-2 text-right">
                  {{ agreement.title }}
                </td>
                <td class="border border-gray-300 p-2 text-right">
                  {{ agreement.date }}
                </td>
                <td class="border border-gray-300 p-2 text-right">
                  {{ agreement.description }}
                </td>
              </tr>
              </tbody>
            </table>
          </div>
          <div v-else class="mt-12 text-center text-gray-500">
            قراردادی یافت نشد.
          </div>
        </div>
      </div>
    </main>
    <footer class="translate-y-[50px]">
      <hr style="border-top: 1px solid white; margin-top: 1rem"/>
      <div style="margin: 1rem" class="login-footer">
        <div
            style="margin-bottom: 0.5rem"
            class="footer-links flex justify-center items-center gap-x-[1rem]"
        >
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
    </footer>
  </div>
</template>

<script>
import agreements from "@/data/agreements.js";

export default {
  name: "ContractDetail",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  computed: {
    agreement() {
      const numericId = Number(this.id);

      // First check user contracts from localStorage
      const userContracts = JSON.parse(
          localStorage.getItem("userContracts") || "[]"
      );
      const userContract = userContracts.find(
          (contract) => contract.id === numericId
      );

      if (userContract) {
        return {
          ...userContract,
          isUserContract: true,
        };
      }

      // If not found in user contracts, check static agreements
      return agreements.find((a) => a.id === numericId);
    },
  }
};
</script>

<style></style>
