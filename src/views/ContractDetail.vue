<template>
  <div class="main-container w-[100%] flex flex-col justify-between">
    <HeaderElements/>
    <h1
        class="main-title text-[24px] text-[var(--main-title)] text-shadow-[0_4px_10px_black] text-center"
    >
      پایگاه اطلاعات قراردادهای اداره کل آموزش و پرورش استان خراسان رضوی
    </h1>
    <main class="w-full h-full flex flex-col items-center translate-y-[35px]">
      <div
          class="w-[95%] min-h-[400px] bg-[var(--body-bg)] rounded-xl mt-8 p-6 relative"
      >
        <h1 class="text-[18px] absolute top-[10px] right-[14px]">
          جزئیات قرارداد
        </h1>
        <div v-if="agreement" class="mt-12" style="direction: rtl">
          <p class="text-[16px] mb-2">{{ agreement.title }}</p>
          <p class="text-[13px] opacity-60 mb-2">{{ agreement.date }}</p>
          <p class="text-[14px] opacity-80">{{ agreement.description }}</p>
        </div>
        <div v-else class="mt-12 text-center">قراردادی یافت نشد.</div>
      </div>
      <router-link
          class="mt-4 text-[#fff] hover:text-blue-500 transition"
          :to="{ name: 'HomePage' }"
      >بازگشت به صفحه اصلی
      </router-link>
    </main>
    <FooterElements/>
  </div>
</template>

<script>
import agreements from "@/data/agreements.js";
import HeaderElements from "@/components/HomePageComps/HeaderElements.vue";
import FooterElements from "@/components/HomePageComps/FooterElements.vue";

export default {
  name: "ContractDetail",
  components: {HeaderElements, FooterElements},
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  computed: {
    agreement() {
      const numericId = Number(this.id);
      return agreements.find((a) => a.id === numericId);
    },
  },
};
</script>

<style></style>
