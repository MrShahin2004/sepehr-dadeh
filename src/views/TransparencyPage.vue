<template>
  <div class="w-full flex flex-col items-center">
    <!-- Header images like other pages -->
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
        class="text-[24px] text-[var(--main-title)] text-shadow-[0_4px_10px_black] text-center mt-4"
      >
        پایگاه اطلاعات قراردادهای اداره کل آموزش و پرورش استان خراسان رضوی
      </h1>
    </router-link>

    <main class="w-full flex justify-center items-start mt-10 px-4 pb-16">
      <div class="w-[95%] max-w-[1200px] grid grid-cols-12 gap-6">
        <!-- Left column: announcement buttons (reuse style) -->
        <aside class="col-span-12 md:col-span-3">
          <div
            class="rounded-xl bg-[var(--body-bg)] p-4 flex flex-col items-center gap-3"
          >
            <div
              class="text-center text-white w-[65%] rounded-lg bg-[#005f5a] py-2"
            >
              اطلاعیه
            </div>
            <a
              class="text-center text-white w-[65%] rounded-lg bg-[#00bba7] hover:bg-[#005f5a] transition py-2"
              href="https://razavi.medu.gov.ir/"
              target="_blank"
              >درگاه اداره کل آموزش و پرورش خراسان رضوی</a
            >
            <a
              class="text-center text-white w-[65%] rounded-lg bg-[#00bba7] hover:bg-[#005f5a] transition py-2"
              href="https://setadiran.ir/setad/cms/"
              target="_blank"
              >سامانه تدارکات الکترونیکی دولت (ستاد ایران)</a
            >
            <a
              class="text-center text-white w-[65%] rounded-lg bg-[#00bba7] hover:bg-[#005f5a] transition py-2"
              href="https://oa.razaviedu.ir/"
              target="_blank"
              >اتوماسیون اداری</a
            >
            <a
              class="text-center text-white w-[65%] rounded-lg bg-[#00bba7] hover:bg-[#005f5a] transition py-2"
              href="https://es.tamin.ir/"
              target="_blank"
              >سایت تأمین اجتماعی</a
            >
            <a
              class="text-center text-white w-[65%] rounded-lg bg-[#00bba7] hover:bg-[#005f5a] transition py-2"
              href="https://e-rasaneh.ir/"
              target="_blank"
              >سامانه جامع رسانه های کشور</a
            >
            <a
              class="text-center text-white w-[65%] rounded-lg bg-[#00bba7] hover:bg-[#005f5a] transition py-2"
              href="https://cdb.mporg.ir/"
              target="_blank"
              >پایگاه اطلاعات قراردادهای کشور</a
            >
          </div>
        </aside>

        <!-- Center column: big gray area with a card on the right -->
        <section class="col-span-12 md:col-span-6">
          <div
            class="rounded-xl bg-[var(--body-bg)] h-[600px] md:h-[500px] w-full p-6"
          >
            <h2 class="text-[16px] md:text-[18px] text-right pr-2">شفافیت</h2>
            <div
              class="w-full h-full bg-gray-100/70 rounded-xl mt-4 relative"
            ></div>
          </div>
        </section>

        <!-- Right column: vertical buttons -->
        <aside class="col-span-12 md:col-span-3">
          <div
            class="rounded-xl bg-[var(--body-bg)] p-6 flex flex-col items-center gap-4"
          >
            <router-link
              class="text-center text-white w-[80%] rounded-lg bg-[#00bba7] hover:bg-[#005f5a] transition py-2"
              :to="{ name: 'SearchPage' }"
              >جستجوی قرارداد</router-link
            >
            <span
              class="text-center text-white w-[80%] rounded-lg bg-[#00bba7] py-2"
              >شفافیت</span
            >
          </div>
        </aside>

        <!-- The floating note card on the right of the gray panel (mimicking screenshot) -->
        <div
          class="hidden md:block col-span-12 -mt-[420px] md:-mt-[360px] mr-auto md:mr-0 md:col-span-6"
        >
          <div class="w-full flex justify-end pr-0">
            <div
              class="bg-white rounded-xl shadow-xl p-4 w-[220px] h-[260px] mr-6 flex flex-col items-center justify-center"
            >
              <img
                src="../assets/images/note.png"
                alt="note"
                class="w-[110px] h-auto mb-4"
              />
              <p
                class="text-gray-700 text-center text-sm"
                style="direction: rtl"
              >
                قراردادها، مناقصات، مزایده ها و تفاهم نامه ها
              </p>
            </div>
          </div>
        </div>

        <!-- Bottom two columns: contact us and links (matching second screenshot) -->
        <div class="col-span-12 grid grid-cols-12 gap-6 mt-8">
          <div class="col-span-12 md:col-span-6">
            <div class="bg-white rounded-2xl shadow-md p-6">
              <h3 class="text-right border-b pb-2 mb-4">ارتباط با ما</h3>
              <div class="text-right space-y-2" style="direction: rtl">
                <p>تلفن خانه: ۲-۳۱۰۷۵۱۶۱-۰۵۱</p>
                <p>دفتر مدیرکل: ۳۱۰۷۵۹۱۰-۰۵۱</p>
                <p>امور قراردادها: ۳۱۰۷۵۴۴۱-۰۵۱</p>
                <p>ستاد خبری حراست: ۳۱۰۷۵۳۲۳-۰۵۱</p>
                <p>اداره حقوقی املاک و حمایت قضایی کارکنان: ۳۱۰۷۵۳۶۱-۰۵۱</p>
                <p>
                  ارزیابی عملکرد و پاسخگویی به شکایات: ۳۱۰۷۵۳۴۹-۰۵۱،
                  ۳۱۰۷۵۳۳۲-۰۵۱
                </p>
                <p>نمابر اداره اطلاع رسانی: ۳۲۲۳۹۸۹۶-۰۵۱</p>
                <p>وب سایت: razavi.medu.gov.ir</p>
                <p>پایگاه پیام رسان شاد: shad.ir/apkhrazvi</p>
                <p>سامانه پیامک: ۳۰۰۰۷۴۸۵</p>
                <p>
                  آدرس: مشهد مقدس، خیابان امام خمینی (ره)، حد فاصل ایستگاه سراب
                  و میدان شهدا، اداره کل آموزش و پرورش خراسان رضوی
                </p>
              </div>
            </div>
          </div>
          <div class="col-span-12 md:col-span-6">
            <div class="bg-white rounded-2xl shadow-md p-6">
              <h3 class="text-right border-b pb-2 mb-4">پیوندها</h3>
              <div class="flex flex-col items-center gap-4">
                <a
                  class="w-[80%] h-fit flex justify-center"
                  href="https://leader.ir/"
                  target="_blank"
                >
                  <img
                    class="w-[50%] h-fit"
                    src="../assets/images/leader.png"
                    alt="Leader"
                  />
                </a>
                <a
                  class="w-[80%] h-fit flex justify-center"
                  href="https://president.ir/"
                  target="_blank"
                >
                  <img
                    class="w-[50%] h-fit"
                    src="../assets/images/president.png"
                    alt="President"
                  />
                </a>
                <a
                  class="w-[80%] h-fit flex justify-center"
                  href="https://dowlat.ir/"
                  target="_blank"
                >
                  <img
                    class="w-[50%] h-fit"
                    src="../assets/images/government.png"
                    alt="Government"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "TransparencyPage",
};
</script>

<style></style>
