<template>
  <div class="main-container w-[100%] flex flex-col justify-between">
    <header class="flex justify-between">
      <img class="w-[191px] h-[100px]" src="../assets/images/khamenei.png" alt="Khamenei">
      <div class="navbar w-[50%] h-[70px] flex justify-between items-center rounded-xl translate-y-[20px]">
        <div class="w-[20%] flex items-center justify-center">
          <a class="text-[white] hover:text-blue-500 transition" href="#">ورود به سیستم</a>
        </div>
        <div class="other-header-links w-[80%] flex justify-end gap-5">
          <a class="text-[white] hover:text-blue-500 transition" href="#">تماس با ما</a>
          <a class="text-[white] hover:text-blue-500 transition" href="#">راهنما</a>
          <a class="text-[white] hover:text-blue-500 transition" href="#">شفافیت</a>
          <a class="text-[white] hover:text-blue-500 transition" href="#">صفحه اصلی</a>
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
    <main class="w-full h-full flex flex-col justify-center items-center translate-y-[35px]">
      <div class="agreement-container w-[95%] h-[100%] flex justify-around gap-4">
        <div class="announcement-container w-[25%] h-[730px] rounded-xl
          bg-[var(--body-bg)] flex justify-center items-center">
          <div class="announcement w-[100%] h-[100%] flex flex-col justify-start items-center">
            <div class="text-center flex justify-center items-center text-[white]
              w-[65%] h-fit rounded-lg bg-[#005f5a]">
              اطلاعیه
            </div>
            <a class="text-center flex justify-center items-center text-[white]
              w-[65%] h-fit bg-[#00bba7] rounded-lg hover:bg-[#005f5a] transition"
               href="#">درگاه اداره کل آموزش و پرورش خراسان
              رضوی</a>
            <a class="text-center flex justify-center items-center text-[white]
              w-[65%] h-fit bg-[#00bba7] rounded-lg hover:bg-[#005f5a] transition"
               href="#">سامانه تدارکات الکترونیکی دولت (ستاد
              ایران)</a>
            <a class="text-center flex justify-center items-center text-[white]
              w-[65%] h-fit bg-[#00bba7] rounded-lg hover:bg-[#005f5a] transition"
               href="#">اتوماسیون اداری</a>
            <a class="text-center flex justify-center items-center text-[white]
              w-[65%] h-fit bg-[#00bba7] rounded-lg hover:bg-[#005f5a] transition"
               href="#">سایت تأمین اجتماعی</a>
            <a class="text-center flex justify-center items-center text-[white]
              w-[65%] h-fit bg-[#00bba7] rounded-lg hover:bg-[#005f5a] transition"
               href="#">سامانه جامع رسانه های کشور</a>
            <a class="text-center flex justify-center items-center text-[white]
              w-[65%] h-fit bg-[#00bba7] rounded-lg hover:bg-[#005f5a] transition"
               href="#">پایگاه اطلاعات قراردادهای کشور</a>
          </div>
        </div>
        <div class="agreement-list-container w-[60%] h-[730px] rounded-xl
          bg-[var(--body-bg)] relative overflow-y-hidden">
          <h2 style="padding: 1rem" class="text-[18px] absolute top-[0] right-[10px]">لیست قراردهای فعال</h2>
          <div class="agreement-list w-[100%] h-[93%]
            flex flex-col items-center justify-start overflow-y-auto translate-y-[50px]">
            <a style="direction: rtl" class="w-[100%] h-[90px] bg-[white] min-h-[90px] rounded-[6px]
              hover:bg-[#cbfbf1] transition relative" href="#">
              <div class="text-container w-[100%] h-[100%]
               flex flex-col justify-center items-start absolute top-[10px] right-[14px] translate-y-[-8px]">
                <p>Hello there</p>
                <p class="text-center text-[13px] opacity-50">1404/04/24</p>
                <p class="text-[13px] opacity-50">Some test text</p>
              </div>
            </a>
            <a style="direction: rtl" class="w-[100%] h-[90px] bg-[white] min-h-[90px] rounded-[6px]
              hover:bg-[#cbfbf1] transition relative" href="#">
              <div class="text-container w-[100%] h-[100%]
               flex flex-col justify-center items-start absolute top-[10px] right-[14px] translate-y-[-8px]">
                <p>Hello there</p>
                <p class="text-center text-[13px] opacity-50">1404/04/24</p>
                <p class="text-[13px] opacity-50">Some test text</p>
              </div>
            </a>
            <a style="direction: rtl" class="w-[100%] h-[90px] bg-[white] min-h-[90px] rounded-[6px]
              hover:bg-[#cbfbf1] transition relative" href="#">
              <div class="text-container w-[100%] h-[100%]
               flex flex-col justify-center items-start absolute top-[10px] right-[14px] translate-y-[-8px]">
                <p>Hello there</p>
                <p class="text-center text-[13px] opacity-50">1404/04/24</p>
                <p class="text-[13px] opacity-50">Some test text</p>
              </div>
            </a>
            <a style="direction: rtl" class="w-[100%] h-[90px] bg-[white] min-h-[90px] rounded-[6px]
              hover:bg-[#cbfbf1] transition relative" href="#">
              <div class="text-container w-[100%] h-[100%]
               flex flex-col justify-center items-start absolute top-[10px] right-[14px] translate-y-[-8px]">
                <p>Hello there</p>
                <p class="text-center text-[13px] opacity-50">1404/04/24</p>
                <p class="text-[13px] opacity-50">Some test text</p>
              </div>
            </a>
            <a style="direction: rtl" class="w-[100%] h-[90px] bg-[white] min-h-[90px] rounded-[6px]
              hover:bg-[#cbfbf1] transition relative" href="#">
              <div class="text-container w-[100%] h-[100%]
               flex flex-col justify-center items-start absolute top-[10px] right-[14px] translate-y-[-8px]">
                <p>Hello there</p>
                <p class="text-center text-[13px] opacity-50">1404/04/24</p>
                <p class="text-[13px] opacity-50">Some test text</p>
              </div>
            </a>
            <a style="direction: rtl" class="w-[100%] h-[90px] bg-[white] min-h-[90px] rounded-[6px]
              hover:bg-[#cbfbf1] transition relative" href="#">
              <div class="text-container w-[100%] h-[100%]
               flex flex-col justify-center items-start absolute top-[10px] right-[14px] translate-y-[-8px]">
                <p>Hello there</p>
                <p class="text-center text-[13px] opacity-50">1404/04/24</p>
                <p class="text-[13px] opacity-50">Some test text</p>
              </div>
            </a>
            <a style="direction: rtl" class="w-[100%] h-[90px] bg-[white] min-h-[90px] rounded-[6px]
              hover:bg-[#cbfbf1] transition relative" href="#">
              <div class="text-container w-[100%] h-[100%]
               flex flex-col justify-center items-start absolute top-[10px] right-[14px] translate-y-[-8px]">
                <p>Hello there</p>
                <p class="text-center text-[13px] opacity-50">1404/04/24</p>
                <p class="text-[13px] opacity-50">Some test text</p>
              </div>
            </a>
            <a style="direction: rtl" class="w-[100%] h-[90px] bg-[white] min-h-[90px] rounded-[6px]
              hover:bg-[#cbfbf1] transition relative" href="#">
              <div class="text-container w-[100%] h-[100%]
               flex flex-col justify-center items-start absolute top-[10px] right-[14px] translate-y-[-8px]">
                <p>Hello there</p>
                <p class="text-center text-[13px] opacity-50">1404/04/24</p>
                <p class="text-[13px] opacity-50">Some test text</p>
              </div>
            </a>
            <a style="direction: rtl" class="w-[100%] h-[90px] bg-[white] min-h-[90px] rounded-[6px]
              hover:bg-[#cbfbf1] transition relative" href="#">
              <div class="text-container w-[100%] h-[100%]
               flex flex-col justify-center items-start absolute top-[10px] right-[14px] translate-y-[-8px]">
                <p>Hello there</p>
                <p class="text-center text-[13px] opacity-50">1404/04/24</p>
                <p class="text-[13px] opacity-50">Some test text</p>
              </div>
            </a>
            <a style="direction: rtl" class="w-[100%] h-[90px] bg-[white] min-h-[90px] rounded-[6px]
              hover:bg-[#cbfbf1] transition relative" href="#">
              <div class="text-container w-[100%] h-[100%]
               flex flex-col justify-center items-start absolute top-[10px] right-[14px] translate-y-[-8px]">
                <p>Hello there</p>
                <p class="text-center text-[13px] opacity-50">1404/04/24</p>
                <p class="text-[13px] opacity-50">Some test text</p>
              </div>
            </a>
            <a style="direction: rtl" class="w-[100%] h-[90px] bg-[white] min-h-[90px] rounded-[6px]
              hover:bg-[#cbfbf1] transition relative" href="#">
              <div class="text-container w-[100%] h-[100%]
               flex flex-col justify-center items-start absolute top-[10px] right-[14px] translate-y-[-8px]">
                <p>Hello there</p>
                <p class="text-center text-[13px] opacity-50">1404/04/24</p>
                <p class="text-[13px] opacity-50">Some test text</p>
              </div>
            </a>
            <a style="direction: rtl" class="w-[100%] h-[90px] bg-[white] min-h-[90px] rounded-[6px]
              hover:bg-[#cbfbf1] transition relative" href="#">
              <div class="text-container w-[100%] h-[100%]
               flex flex-col justify-center items-start absolute top-[10px] right-[14px] translate-y-[-8px]">
                <p>Hello there</p>
                <p class="text-center text-[13px] opacity-50">1404/04/24</p>
                <p class="text-[13px] opacity-50">Some test text</p>
              </div>
            </a>
            <a style="direction: rtl" class="w-[100%] h-[90px] bg-[white] min-h-[90px] rounded-[6px]
              hover:bg-[#cbfbf1] transition relative" href="#">
              <div class="text-container w-[100%] h-[100%]
               flex flex-col justify-center items-start absolute top-[10px] right-[14px] translate-y-[-8px]">
                <p>Hello there</p>
                <p class="text-center text-[13px] opacity-50">1404/04/24</p>
                <p class="text-[13px] opacity-50">Some test text</p>
              </div>
            </a>
            <a style="direction: rtl" class="w-[100%] h-[90px] bg-[white] min-h-[90px] rounded-[6px]
              hover:bg-[#cbfbf1] transition relative" href="#">
              <div class="text-container w-[100%] h-[100%]
               flex flex-col justify-center items-start absolute top-[10px] right-[14px] translate-y-[-8px]">
                <p>Hello there</p>
                <p class="text-center text-[13px] opacity-50">1404/04/24</p>
                <p class="text-[13px] opacity-50">Some test text</p>
              </div>
            </a>
          </div>
        </div>
        <div class="agreement-search-container w-[25%] h-[730px] rounded-xl bg-[var(--body-bg)]
          flex justify-center items-center">
          <div class="agreement-search w-[100%] h-[100%] flex flex-col justify-start items-center">
            <a class="text-center flex justify-center items-center text-[white]
              w-[65%] h-fit bg-[#00bba7] rounded-lg hover:bg-[#005f5a] transition" href="#">جستجوی قرارداد</a>
            <a class="text-center flex justify-center items-center text-[white]
              w-[65%] h-fit bg-[#00bba7] rounded-lg hover:bg-[#005f5a] transition" href="#">شفافیت</a>
          </div>
        </div>
      </div>
      <div style="border-top: 1px solid white; margin-bottom: 2.5rem" class="w-[100%] h-[1px]"></div>
      <div style="margin-bottom: 1.5rem" class="more-info-container w-[100%] h-[600px] flex justify-center items-center">
        <div class="more-info w-[100%] h-[100%] flex justify-center items-center gap-8">
          <div class="contact-us-container w-[40%] h-[100%] bg-[white] rounded-2xl relative
            flex flex-col justify-center items-center">
            <div class="w-[100%] h-[20%] flex flex-col justify-center items-center">
              <h2 style="padding: 1rem" class="text-[18px] absolute top-[5px] right-[10px]">ارتباط با ما</h2>
              <div style="border-top: 1px solid black" class="w-[90%] h-[1px]"></div>
            </div>
            <div dir="rtl" class="contact-us w-[90%] h-[80%]
              flex flex-col justify-start items-center gap-4 translate-y-[-30px]">
              <p class="w-[100%] h-fit">تلفن خانه: ۲-۳۱۰۷۵۱۶۱-۰۵۱</p>
              <p class="w-[100%] h-fit">دفتر مدیرکل: ۳۱۰۷۵۹۱۰-۰۵۱</p>
              <p class="w-[100%] h-fit">امور قراردادها: ۳۱۰۷۵۴۴۱-۰۵۱</p>
              <p class="w-[100%] h-fit">ستاد خبری حراست: ۳۱۰۷۵۳۲۳-۰۵۱</p>
              <p class="w-[100%] h-fit">اداره حقوقی املاک و حمایت قضایی کارکنان: ۳۱۰۷۵۳۶۱-۰۵۱</p>
              <p class="w-[100%] h-fit">ارزیابی عملکرد و پاسخگویی به شکایات: ۳۱۰۷۵۳۴۹-۰۵۱، ۳۱۰۷۵۳۳۲-۰۵۱</p>
              <p class="w-[100%] h-fit">نمابر اداره اطلاع رسانی: ۳۲۲۳۹۸۹۶-۰۵۱</p>
              <p class="w-[100%] h-fit">وب سایت: razavi.medu.gov.ir</p>
              <p class="w-[100%] h-fit">پایگاه پیام رسان شاد: shad.ir/apkhrazvi</p>
              <p class="w-[100%] h-fit">سامانه پیامک: ۳۰۰۰۷۴۸۵</p>
              <p class="w-[100%] h-fit">
                آدرس: مشهد مقدس، خیابان امام خمینی (ره)، حد فاصل ایستگاه سراب و میدان شهدا، اداره کل آموزش و پرورش
                خراسان رضوی
              </p>
            </div>
          </div>
          <div class="links-container w-[40%] h-[100%] bg-[white] rounded-2xl relative">
            <div class="w-[100%] h-[20%] flex flex-col justify-center items-center">
              <h2 style="padding: 1rem" class="text-[18px] absolute top-[5px] right-[10px]">پیوندها</h2>
              <div style="border-top: 1px solid black" class="w-[90%] h-[1px]"></div>
            </div>
            <div class="links w-[100%] h-[80%] flex flex-col justify-start items-center">
              <a class="w-[80%] h-fit flex justify-center" href="https://leader.ir/" target="_blank">
                <img class="w-[50%] h-fit" src="../assets/images/leader.png" alt="Leader">
              </a>
              <a class="w-[80%] h-fit flex justify-center" href="https://president.ir/" target="_blank">
                <img class="w-[50%] h-fit" src="../assets/images/president.png" alt="President">
              </a>
              <a class="w-[80%] h-fit flex justify-center" href="https://dowlat.ir/" target="_blank">
                <img class="w-[50%] h-fit" src="../assets/images/government.png" alt="Government">
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer class="w-full h-[160px] translate-y-[35px] flex justify-center items-center">
      <div style="margin-bottom: 1rem" class="footer-links-container w-[82%] h-[90%] bg-[white] rounded-2xl">
        <div class="footer-links w-[100%] h-[50%] flex justify-center items-center gap-4">
          <a class="hover:text-blue-500 transition" href="#" target="_blank">حریم خصوصی</a>
          <a class="hover:text-blue-500 transition" href="#" target="_blank">نظرسنجی ها</a>
          <a class="hover:text-blue-500 transition" href="#" target="_blank">پیوندها</a>
          <a class="hover:text-blue-500 transition" href="#" target="_blank">فراخوان ها</a>
          <a class="hover:text-blue-500 transition" href="#" target="_blank">آمارها</a>
          <a class="hover:text-blue-500 transition" href="#" target="_blank">صفحه اصلی</a>
        </div>
        <div class="copyright w-[100%] h-[50%] flex flex-col justify-center items-center">
          <p class="text-[12px] opacity-70">© کلیه حقوق این پایگاه به سپهر داده تعلق دارد</p>
          <p class="text-[12px] opacity-70">طراحی، تولید و توسعه توسط: سپهر داده</p>
        </div>
      </div>
    </footer>
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

.other-header-links {
  margin-right: 1.5rem;
}

.main-title {
  font-family: "B Titr", "Arial", sans-serif;
}

.secondary-title {
  background-color: rgba(20, 21, 62, 0.7);
}

.agreement-container {
  margin-bottom: 5rem;
}

.agreement-list {
  padding: 2rem;
}

.agreement-list > a {
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
  margin-bottom: 0.8rem;
}

.agreement-list > a:hover {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
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
