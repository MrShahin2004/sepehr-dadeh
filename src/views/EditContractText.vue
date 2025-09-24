<template>
  <div class="min-h-screen" dir="rtl">
    <!-- Top banner (same look as dashboard) -->
    <header class="relative overflow-hidden">
      <div class="top-navbar h-32 w-full flex items-center justify-center">
        <div class="absolute left-4 top-2 flex items-center">
          <img
            src="@/assets/images/khamenei.png"
            class="w-50 h-auto object-contain"
            alt="header-left"
          />
        </div>
        <div class="text-center text-white leading-relaxed">
          <router-link to="/">
            <h1
              class="main-title text-3xl text-shadow-[0_4px_10px_black] text-[var(--main-title)]"
            >
              پایگاه اطلاعات قرار دادهای اداره کل آموزش و پرورش استان خراسان
              رضوی
            </h1>
          </router-link>
        </div>
        <div class="absolute right-4 top-2 flex flex-col items-center">
          <img
            src="@/assets/images/education.svg"
            class="w-40 h-auto object-contain"
            alt="header-right"
          />
        </div>
      </div>
    </header>

    <main class="mx-auto max-w-[98%] px-4 py-6 bg-gray-100 rounded-xl">
      <!-- Admin info bar -->
      <div
        class="bg-teal-500 text-white rounded-lg shadow p-4 flex items-center justify-between mb-6"
      >
        <span class="text-sm">اطلاعیه های اخیر</span>
        <span class="px-3 py-1 bg-teal-600 rounded text-sm"
          >admin : کارشناس ثبت</span
        >
      </div>

      <!-- Toolbar -->
      <div class="flex items-center justify-end gap-3 mb-4">
        <button
          class="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 text-sm cursor-pointer"
          @click="$router.back()"
        >
          بازگشت
        </button>
        <button
          class="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 text-sm cursor-pointer"
        >
          بارگذاری سربرگ
        </button>
        <button
          @click="GoToDashboard"
          class="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 text-sm cursor-pointer"
        >
          داشبورد
        </button>
        <button
          @click="GoToCartable"
          class="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 text-sm cursor-pointer"
        >
          کارتابل
        </button>
      </div>

      <!-- Contract type tabs (visual only) -->
      <div class="flex items-center gap-3 mb-6">
        <span class="text-gray-700">نوع قرارداد:</span>
        <div class="flex gap-2">
          <button
            class="px-4 py-1 rounded-lg bg-blue-100 text-blue-800 text-sm cursor-pointer"
          >
            اموال منقول
          </button>
          <button
            class="px-4 py-1 rounded-lg bg-gray-100 text-gray-700 text-sm cursor-pointer"
          >
            اموال غیر منقول
          </button>
          <button
            class="px-4 py-1 rounded-lg bg-gray-100 text-gray-700 text-sm cursor-pointer"
          >
            اجاره
          </button>
        </div>
      </div>

      <!-- Contract preview card -->
      <div class="bg-white rounded-xl shadow p-6">
        <article class="prose prose-lg max-w-none leading-8 text-justify" v-pre>
          <h2 class="text-center text-2xl font-semibold mb-6">قرارداد اجاره</h2>

          <!-- NOTE: Placeholder of long body text copied from screenshots should be pasted here. -->
          <!-- I’m keeping structure and markers to match the pictures until exact text is supplied. -->

          <p>
            با عنایت به مفاد آئین نامه معاملات دولتی و در اجرای ماده 25 قانون
            تنظیم بخشی از مقررات مالی، اداری و پشتیبانی وزارت آموزش و پرورش و بر
            اساس نرخ مندرج در روزنامه و همچنین تدارکات الکترونیک دولت و تعیین
            برنده و بر اساس پاکت ها و همچنین تاییدات مربوطه، این قرارداد فی
            مابین یک واحد اداری متعلق به اداره کل آموزش و پرورش خراسان رضوی به
            شناسه ....... با کلیه شروط و تعهدات مندرج منعقد می گردد:
          </p>

          <h3 class="font-semibold mt-10 mb-2">ماده 1) طرفین قرارداد</h3>
          <p>
            موجر: اداره کل آموزش و پرورش خراسان رضوی به نمایندگی سید امیر شوشتری
            به آدرس مشهد، خیابان امام خمینی(ره)، میدان شهدا
          </p>
          <br />
          <p>مستأجر: {{ full_name }}</p>

          <h3 class="font-semibold mt-10 mb-2">ماده 2) مورد اجاره</h3>
          <p>
            عبارت است از تملیک منافع یک واحد اداری واقع در {{ address }} به
            مساحت 0000 متر مربع متعلق به اداره کل آموزش و پرورش خراسان رضوی
            مشتمل بر یک اطاق خواب با هال و پذیرایی و آشپزخانه و حمام و دستشویی و
            سیستم سرمایش کولر گازی و گرمایش موتورخانه مرکزی و حق استفاده از
            انشعاب آب و برق و گاز به صورت اشتراکی و سایر لوازم و منصوبات و
            مشاعات مربوطه که جهت استفاده به رویت مستاجر رسیده و مورد قبول قرار
            گرفته است.
          </p>

          <h3 class="font-semibold mt-10 mb-2">ماده 3) مدت اجاره</h3>
          <p>
            از تاریخ {{ start_day }}/{{ start_month }}/1403 لغایت
            {{ end_day }}/{{ end_month }}/1404 به مدت دوازده ماه (یکسال کامل
            شمسی) که با توافق طرفین قابل تمدید به مدت دوسال دیگر خواهد بود و
            مبلغ اجاره بهای سال‌های بعد بر اساس نظریه کارشناس رسمی دادگستری و
            نظر نهایی موجر خواهد بود. اجاره بهای سالهای بعد، هر سال مطابق نظر
            کارشناس رسمی خواهد بود مشروط بر اینکه نظریه کارشناسی از حداقل 25
            درصد افزایش مبلغ پیشنهادی برنده مزایده در سال اول کمتر نباشد. این
            شرط برای سنوات آتی (حداکثر مدت قرارداد در اسناد مزایده) نیز مجری
            خواهد بود.
          </p>

          <h3 class="font-semibold mt-10 mb-2">
            ماده 4) مبالغ اجاره بها و نحوه پرداخت
          </h3>
          <p>
            به استناد مبلغ پیشنهادی برنده مزایده مندرج در سامانه ستاد، مستاجر
            متعهد است ماهیانه مبلغ {{ monthly_pay }} ریال جمعاً مبلغ
            {{ total_pay }} ریال پرداخت نماید که مبالغ اجاره بصورت دو ماهه بدین
            صورت که ابتدا اجاره دو ماهه اول نقداً بصورت فیش واریزی دریافت گردید
            و مابقی مبلغ اجاره، طی پنج فقره چک صیادی به شماره و تاریخ‌های
            ......................................دریافت خواهد شد. مبالغ اجاره
            بایستی در وجه یا به حساب شماره IR940100004060031203656180 با شناسه
            واریز 361030160127560001303011600101 بانک مرکزی بنام اداره کل آموزش
            و پرورش خراسان رضوی واریز و فیش واریزی به اداره امور مالی اداره کل
            آموزش و پرورش تحویل گردد.
          </p>

          <h3 class="font-semibold mt-10 mb-2">ماده 5) شرایط قرارداد</h3>
          <ul class="list-disc pr-6 space-y-6">
            <li>
              مستاجر برابر اسناد مزایده متعهد میگردد مورد اجاره را جهت استفاده
              شغل .................... استفاده نماید. همچنین مستأجر متعهد است
              مورد اجاره را فقط به نحو مباشرت استفاده نماید و حق تغییر کاربری و
              تغییر نوع استفاده و حق انتقال حقوق استیجاری به نام غیر، مشاعاً
              مفروزاً، جزئاً وکلاً، به هیچ وجه ولوبه صورت نمایندگی، صلح وکالت و
              غیره را ندارد در غیر اینصورت قرارداد منفسخ خواهد شد.
            </li>
            <li>
              مستأجر متعهد به رعایت اصول ایمنی و همچنین استفاده اصولی و در حد
              متعارف از مورد اجاره می باشد . چنانچه به هر دلیل خسارتی به ساختمان
              مورد اجاره و تجهیزات آن وارد گردد . مستأجر متعهد است کلیه خسارات
              وارده را جبران خسارت نماید .
            </li>
            <li>
              بابت هزینه‌های مصرفی انشعابات (آب، برق و گاز) ماهیانه مبلغ
              ۳,۰۰۰,۰۰۰ ریال در قالب شارژ ساختمان از مستاجر دریافت می‌گردد. مبلغ
              مورد اشاره بایستی به حساب شماره IR940100004060031203656180 با
              شناسه واریز 361030160127560001303011600101 بانک مرکزی بنام اداره
              کل آموزش و پرورش خراسان رضوی واریز و فیش واریزی به اداره امور مالی
              اداره کل آموزش و پرورش تحویل گردد.
            </li>
            <li>
              هزینه‌هایی که توسط مستأجر در ساختمان مورد اجاره جهت بهره‌برداری و
              استفاده مطلوب صورت می‌گیرد تحت هیچ شرایطی قابل مطالبه از موجر
              نخواهد بود.
            </li>
            <li>
              مستاجر متعهد است مورد اجاره را پس از انقضای مدت اجاره، فسخ یا
              انفساخ قرارداد به صورتی که تحویل گرفته صحیح و سالم و قابل بهره
              برداری تحویل موجر نماید. جبران کسر و انکسار بردربها، پنجره‌ها،
              شیشه‌ها، قفلها، دستگیره‌ها، آتش سوزی و سایر متعلقات و تجهیزات مورد
              اجاره و نقاشی ساختمان برعهده مستأجراست به طوری که مجدداً بدون هیچ
              هزینه‌ای قابل بهره برداری باشد.
            </li>
            <li>
              مستأجر می‌بایست مورد اجاره را در پایان مدت قرارداد یا در زمان فسخ
              یا انفساخ قرارداد (که توسط موجر اعلام می‌گردد) بدون تأخیر و تعلل،
              تخلیه و تحویل نماید. چنانچه به هر دلیل به موقع اقدام ننماید متعهد
              می‌گردد روزانه مبلغ سه میلیون ریال علاوه بر اجاره بهای قراردادی یا
              عادلانه روز به عنوان خسارت تاخیر به موجر بپردازد. شرایط توافق شده
              قطعی بوده و غیر قابل عدول است.
            </li>
            <li>
              مستاجر این اختیار را دارد که به هزینه خود نسبت به تعمیر و یا
              بازسازی بدون تغییر اساسی در فیزیک ساختمان و احداث بنای جدید با
              هماهنگی کارشناسی امور عمرانی و ساختمان اداره امور رفاهی و پشتیبانی
              اداره کل آموزش و پرورش اقدام مقتضی نماید و از این بابت حق مطالبه
              هزینه‌های انجام شده را ندارد چنانچه تعمیراتی نیز نماید هزینه‌های
              انجام شده تبرعی و کلیه حق و حقوق و هزینه‌ها را به آموزش و پرورش
              صلح نموده و مستاجر هیچگونه حق و ادعایی از این باب نخواهد داشت.
            </li>
            <li>
              نظر به این که مالکیت ملک متعلق به دولت جمهوری اسلامی ایران است لذا
              مستاجرهیچ گونه ادعایی تحت هرعنوان نسبت به مالکیت ملک مورد اجاره
              ندارد.
            </li>
          </ul>

          <h3 class="font-semibold mt-10 mb-2">ماده 6) نظارت بر قرارداد</h3>
          <p>
            مورد اجاره امور رفاهی و پشتیبانی اداره کل آموزش و پرورش خراسان رضوی
            را به عنوان ناظر معرفی می‌نماید.
          </p>

          <h3 class="font-semibold mt-10 mb-2">ماده 7) تضمین</h3>
          <p>
            الف) به منظور حسن انجام تعهدات، مستأجر مکلف به تودیع تضمین معادل ۱۰٪
            ارزش کل قرارداد طی یک فقره ضمانت نامه بانکی به شماره سپام
            .......................... می‌باشد.
          </p>

          <h3 class="font-semibold mt-10 mb-2">ماده 8) موجبات فسخ</h3>
          <ul class="list-disc pr-6 space-y-6">
            <li>عدم انجام تعهدات کلیه مفاد قرارداد از سوی مستأجر</li>
            <li>عدم پرداخت اجاره بها در موعد مقرر</li>
            <li>انتقال قرارداد به غیر بدون اجازه موجر</li>
          </ul>

          <h3 class="font-semibold mt-10 mb-2">
            ماده 9) نشانی طرفین جهت ابلاغ مکاتبات
          </h3>
          <p>
            اعلامی در صدر قرارداد ملاک است و هرگونه تغییر باید کتبا به اطلاع طرف
            مقابل برسد.
          </p>

          <h3 class="font-semibold mt-10 mb-2">ماده 10) امضاء طرفین قرارداد</h3>
          <p class="mt-8">مستأجر: {{ full_name }}</p>
          <p class="mt-2">موجر: آموزش و پرورش خراسان رضوی - سید امیر شوشتری</p>

          <div class="mt-16 grid grid-cols-2 gap-10 max-w-xl ml-auto">
            <div class="flex flex-col gap-2 items-end">
              <span>مشخصات و امضا شاهد 1 : ...........................</span>
              <span>مشخصات و امضا شاهد 2 : ...........................</span>
            </div>
          </div>
        </article>

        <div class="mt-8">
          <button
            class="w-full py-3 rounded-lg bg-blue-700 text-white hover:bg-blue-800"
          >
            ذخیره
          </button>
        </div>
      </div>

      <!-- Footer (same look as dashboard) -->
      <footer class="mt-10">
        <div class="footer-navbar text-white rounded-lg px-6 py-8">
          <nav
            class="flex flex-wrap gap-x-6 gap-y-2 justify-center text-sm mb-4"
          >
            <router-link to="/"
              ><a href="#" class="text-[white] hover:text-blue-600 transition"
                >صفحه اصلی</a
              ></router-link
            >
            <router-link to="/"
              ><a href="#" class="text-[white] hover:text-blue-600 transition"
                >آمارها</a
              ></router-link
            >
            <router-link to="/"
              ><a href="#" class="text-[white] hover:text-blue-600 transition"
                >فراخوانها</a
              ></router-link
            >
            <router-link to="/"
              ><a href="#" class="text-[white] hover:text-blue-600 transition"
                >پیوندها</a
              ></router-link
            >
            <router-link to="/"
              ><a href="#" class="text-[white] hover:text-blue-600 transition"
                >نظرسنجی ها</a
              ></router-link
            >
            <router-link to="/"
              ><a href="#" class="text-[white] hover:text-blue-600 transition"
                >حریم خصوصی</a
              ></router-link
            >
          </nav>
          <div class="text-center text-xs">
            <p class="mb-1">تعلق دارد ۱۴۰۱ کلیه حقوق این پایگاه به</p>
            <p>طراحی تولید و توسعه توسط سپهر داده</p>
          </div>
        </div>
      </footer>
    </main>
  </div>
</template>

<script>
export default {
  name: "EditContractText",
  methods: {
    GoToDashboard() {
      this.$router.push("/admin");
    },
    GoToCartable() {
      this.$router.push("/cartable");
    },
  },
};
</script>

<style>
.main-title {
  font-family: IranNastaliq, sans-serif;
}
.top-navbar,
.footer-navbar {
  background: #0059e7;
  background: radial-gradient(
    circle,
    rgba(0, 89, 231, 1) 0%,
    rgba(43, 16, 88, 1) 100%
  );
}
</style>
