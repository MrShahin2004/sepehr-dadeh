<template>
  <div class="main-container w-[100%] flex flex-col justify-between">
    <header class="flex justify-between">
      <img class="w-[191px] h-[100px]" src="../assets/images/khamenei.png" alt="Khamenei">
      <img class="w-[130px] h-[130px]" src="../assets/images/education.svg" alt="Education" style="margin-right: 1rem">
    </header>
    <h1
        class="main-title text-[24px] text-[var(--main-title)] text-shadow-[0_4px_10px_black] text-center"
    >
      پایگاه اطلاعات قراردادهای اداره کل آموزش و پرورش استان خراسان رضوی
    </h1>
    <main class="w-full h-full flex flex-col items-center translate-y-[35px]">
      <div
          class="w-[99%] h-[800px] bg-[#cbe9f6] flex justify-center items-center"
      >
        <div class="w-[70%] h-[90%] bg-[white] rounded-[2rem] shadow-xl relative">
          <h1 class="text-[18px] absolute top-[10px] right-[14px]">
            جزئیات قرارداد
          </h1>
          <div v-if="agreement" style="direction: rtl">
            <p class="text-[16px]">{{ agreement.title }}</p>
            <p class="text-[13px] opacity-60">{{ agreement.date }}</p>
            <p class="text-[14px] opacity-80">{{ agreement.description }}</p>
          </div>
          <div v-else class="mt-12 text-center">قراردادی یافت نشد.</div>
        </div>
      </div>
    </main>
    <FooterElements/>
  </div>
</template>

<script>
import agreements from "@/data/agreements.js";
import FooterElements from "@/components/HomePageComps/FooterElements.vue";

export default {
  name: "ContractDetail",
  components: {FooterElements},
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
