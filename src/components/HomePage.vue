<template>
  <div class="main-container w-[100%] flex flex-col justify-between">
    <header class="flex justify-between">
      <img class="w-[191px] h-[100px]" src="../assets/images/khamenei.png" alt="Khamenei">
      <div class="navbar w-[50%] h-[70px] flex justify-between items-center rounded-xl translate-y-[20px]">
        <div class="w-[20%] flex items-center justify-center">
          <a class="text-[white] hover:text-blue-500" href="#">ورود به سیستم</a>
        </div>
        <div class="other-links w-[80%] flex justify-end gap-5">
          <a class="text-[white] hover:text-blue-500" href="#">تماس با ما</a>
          <a class="text-[white] hover:text-blue-500" href="#">راهنما</a>
          <a class="text-[white] hover:text-blue-500" href="#">شفافیت</a>
          <a class="text-[white] hover:text-blue-500" href="#">صفحه اصلی</a>
        </div>
      </div>
      <img class="w-[150px] h-[150px]" src="../assets/images/education.svg" alt="Education" style="margin-right: 2rem">
    </header>
    <h1 class="main-title text-[24px] text-[var(--main-title)] text-shadow-[0_4px_10px_black] text-center">
      پایگاه اطلاعات قراردادهای اداره کل آموزش و پرورش استان خراسان رضوی</h1>
    <div class="secondary-title-container w-[100%] h-[100px] flex justify-center items-center translate-y-[40px]">
      <div class="secondary-title w-[96%] h-[70%] flex justify-end items-center rounded-xl">
        <p class="text-[white] translate-x-[-10%]">اداره کل آموزش و پرورش خراسان رضوی</p>
      </div>
    </div>
    <main class="w-full h-full flex justify-center translate-y-[35px]">
      <div class="agreement-container w-[95%] h-[100%] flex justify-around gap-4">
        <div class="announcement-container w-[25%] h-[750px] rounded-xl
         bg-[var(--body-bg)] flex justify-center items-center">
          <div class="announcement w-[100%] h-[100%] flex flex-col justify-start items-center">
            <div class="text-center flex justify-center items-center text-[white]
             w-[65%] h-fit rounded-lg bg-[#005f5a]">
              اطلاعیه
            </div>
            <a class="text-center flex justify-center items-center text-[white]
             w-[65%] h-fit bg-[#00bba7] rounded-lg hover:bg-[#005f5a]" href="#">درگاه اداره کل آموزش و پرورش خراسان رضوی</a>
            <a class="text-center flex justify-center items-center text-[white]
             w-[65%] h-fit bg-[#00bba7] rounded-lg hover:bg-[#005f5a]" href="#">سامانه تدارکات الکترونیکی دولت (ستاد ایران)</a>
            <a class="text-center flex justify-center items-center text-[white]
             w-[65%] h-fit bg-[#00bba7] rounded-lg hover:bg-[#005f5a]" href="#">اتوماسیون اداری</a>
            <a class="text-center flex justify-center items-center text-[white]
             w-[65%] h-fit bg-[#00bba7] rounded-lg hover:bg-[#005f5a]" href="#">سایت تأمین اجتماعی</a>
            <a class="text-center flex justify-center items-center text-[white]
             w-[65%] h-fit bg-[#00bba7] rounded-lg hover:bg-[#005f5a]" href="#">سامانه جامع رسانه های کشور</a>
            <a class="text-center flex justify-center items-center text-[white]
             w-[65%] h-fit bg-[#00bba7] rounded-lg hover:bg-[#005f5a]" href="#">پایگاه اطلاعات قراردادهای کشور</a>
          </div>
        </div>
        <div class="agreement-list-container w-[60%] h-[750px] rounded-xl
         bg-[var(--body-bg)] relative overflow-y-hidden">
          <h2 style="padding: 1rem" class="text-[18px] absolute top-[0] right-[10px]">لیست قراردهای فعال</h2>
          <div class="agreement-list w-[100%] h-[93%]
           flex flex-col items-center justify-start overflow-y-auto translate-y-[50px]">
            <div class="bg-[black]"></div>
            <div class="bg-[red]"></div>
            <div class="bg-[black]"></div>
            <div class="bg-[red]"></div>
            <div class="bg-[black]"></div>
            <div class="bg-[red]"></div>
            <div class="bg-[black]"></div>
            <div class="bg-[red]"></div>
            <div class="bg-[black]"></div>
            <div class="bg-[red]"></div>
            <div class="bg-[black]"></div>
            <div class="bg-[red]"></div>
            <div class="bg-[black]"></div>
            <div class="bg-[red]"></div>
            <div class="bg-[black]"></div>
            <div class="bg-[red]"></div>
            <div class="bg-[black]"></div>
            <div class="bg-[red]"></div>
            <div class="bg-[black]"></div>
            <div class="bg-[red]"></div>
          </div>
        </div>
        <div class="agreement-search-container w-[25%] h-[750px] rounded-xl bg-[var(--body-bg)]
         flex justify-center items-center">
          <div class="agreement-search w-[100%] h-[100%] flex flex-col justify-start items-center">
            <a class="text-center flex justify-center items-center text-[white]
             w-[65%] h-fit bg-[#00bba7] rounded-lg hover:bg-[#005f5a]" href="#">جستجوی قرارداد</a>
            <a class="text-center flex justify-center items-center text-[white]
             w-[65%] h-fit bg-[#00bba7] rounded-lg hover:bg-[#005f5a]" href="#">شفافیت</a>
          </div>
        </div>
      </div>
    </main>
    <footer></footer>
  </div>
</template>

<script>
export default {
  name: "HomePage"
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

.navbar {
  background-color: rgba(20, 21, 62, 0.7);
}

.other-links {
  margin-right: 1.5rem;
}

.main-title {
  font-family: "B Titr", "Arial", sans-serif;
}

.secondary-title {
  background-color: rgba(20, 21, 62, 0.7);
}

.agreement-list {
  padding: 2rem;
}

.agreement-list > div {
  width: 100%;
  height: 120px;
  min-height: 120px;
  flex-shrink: 0;
  margin-bottom: 0.5rem;
  border-radius: 6px;
}

.agreement-search > a {
  margin-top: 1rem;
  padding: 0.5rem;
}

.announcement div, .announcement > a {
  margin-top: 1rem;
  padding: 0.5rem;
}
</style>
