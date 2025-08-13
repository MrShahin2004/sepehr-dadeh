<template>
  <div class="main-container w-[100%] flex flex-col justify-between">
    <header class="flex justify-between">
      <img class="w-[191px] h-[100px]" src="../assets/images/khamenei.png" alt="Khamenei">
      <div class="navbar w-[50%] h-[100px] flex justify-between items-center rounded-[6px]">
        <div class="w-[20%] flex items-center justify-center">
          <a class="text-[white]" href="#">ورود به سیستم</a>
        </div>
        <div class="other-links w-[80%] flex justify-end gap-5">
          <a class="text-[white]" href="#">صفحه اصلی</a>
          <a class="text-[white]" href="#">شفافیت</a>
          <a class="text-[white]" href="#">راهنما</a>
          <a class="text-[white]" href="#">تماس با ما</a>
        </div>
      </div>
      <img class="w-[150px] h-[150px]" src="../assets/images/education.svg" alt="Education" style="margin-right: 2rem">
    </header>
    <main class="w-full h-full">
      <div class="w-[100px] h-[100px] bg-[white]"></div>
    </main>
    <footer></footer>
  </div>
</template>

<script>
export default {
  name: "HomePage"
}
</script>

<style scoped>
.navbar {
  background-color: rgba(20,21,62,0.7);
}

.other-links {
  margin-right: 1.5rem;
}
</style>
