<template>
  <div class="main-container w-[100%] flex flex-col justify-between">
    <HeaderElements/>
    <h1 class="main-title text-[24px] text-[var(--main-title)] text-shadow-[0_4px_10px_black] text-center">
      پایگاه اطلاعات قراردادهای اداره کل آموزش و پرورش استان خراسان رضوی</h1>
    <div class="secondary-title-container w-[100%] h-[100px] flex justify-center items-center translate-y-[40px]">
      <div class="secondary-title w-[96%] h-[70%] flex justify-end items-center rounded-xl">
        <p class="text-[white] translate-x-[-10%]">اداره کل آموزش و پرورش خراسان رضوی</p>
      </div>
    </div>
    <MainElements/>
    <FooterElements/>
  </div>
</template>

<script>
import HeaderElements from "./HeaderElements.vue"
import MainElements from "./MainElements.vue"
import FooterElements from "./FooterElements.vue"

export default {
  name: "HomePage",
  components: {
    HeaderElements, MainElements, FooterElements
  }
}
</script>

<style>
:root {
  --main-title: #dcb417;
  --body-bg: #e5e7eb;
  --title-bg: #48b3bd;
  --input-bg: #dbeafe;
  --btn-bg: #293da3;
}

.main-title {
  font-family: "B Titr", "Arial", sans-serif;
}

.secondary-title {
  background-color: rgba(20, 21, 62, 0.7);
}
</style>
