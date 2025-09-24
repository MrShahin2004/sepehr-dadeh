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
            <h1 class="main-title text-3xl text-shadow-[0_4px_10px_black] text-[var(--main-title)]">
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
          class="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 text-sm cursor-pointer"
        >
          داشبورد
        </button>
        <button
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
            class="px-4 py-1 rounded-lg bg-blue-100 text-blue-800 text-sm"
          >
            اموال منقول
          </button>
          <button
            class="px-4 py-1 rounded-lg bg-gray-100 text-gray-700 text-sm"
          >
            اموال غیر منقول
          </button>
          <button
            class="px-4 py-1 rounded-lg bg-gray-100 text-gray-700 text-sm"
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
            به آدرس مشهد، خیابان امام خمینی(ره)، میدان شهدا مستأجر:
            {{ full_name }}
          </p>

          <h3 class="font-semibold mt-10 mb-2">ماده 2) مورد اجاره</h3>
          <p>
            عبارت است از یک واحد اداری واقع در {{ address }} به مساحت 0000 متر
            مربع متعلق به اداره کل آموزش و پرورش خراسان رضوی مشتمل بر یک اطاق
            خواب با حال و پذیرایی و آشپزخانه و سرویس بهداشتی و حمام و دستشویی و
            سیستم سرمایش گازی و گرمایش موتورخانه مرکزی و حق استفاده از انباری،
            پارکینگ و حیاط و کاربری به صورت اشتراکی، که جهت استفاده ی رویت
            مستأجر رسیده و مورد قبول قرار گرفته است.
          </p>

          <h3 class="font-semibold mt-10 mb-2">ماده 3) مدت اجاره</h3>
          <p>
            از تاریخ 1404/{{ start_month }}/{{ start_day }} الی 1404/{{
              end_month
            }}/{{ end_day }} به مدت دوازده ماه (یکسال کامل شمسی) که با توافق
            طرفین قابل تمدید به مدت دوسال دیگر خواهد بود.
          </p>

          <h3 class="font-semibold mt-10 mb-2">
            ماده 4) مبالغ اجاره بها و نحوه پرداخت
          </h3>
          <p>
            اجاره بها ماهیانه مبلغ {{ monthly_pay }} ریال و جمع کل
            {{ total_pay }} ریال پرداخت نماید. واریز به حساب معرفی شده نزد بانک
            مرکزی به شماره شبای IR94010000406003201303658180 به نام اداره کل
            آموزش و پرورش خراسان رضوی.
          </p>

          <h3 class="font-semibold mt-10 mb-2">ماده 5) شرایط قرارداد</h3>
          <ul class="list-disc pr-6 space-y-6">
            <li>
              مستأجر متعهد است از مورد اجاره جهت اشتغال به شغل ................
              استفاده نماید و حق تغییر کاربری ندارد. هر گونه انتقال حقوق
              استیجاری بدون اجازه کتبی موجر موجب فسخ است.
            </li>
            <li>
              بابت هزینه‌های مشترک ساختمان (آب و برق و گاز) مستأجر مسئول پرداخت
              است.
            </li>
            <li>
              مستأجر مکلف است عین مستأجره را صحیح و سالم تحویل گرفته و در پایان
              قرارداد صحیح و سالم تحویل نماید.
            </li>
            <li>
              هرگونه تغییر اساسی در بنا یا تاسیسات بدون اجازه موجر ممنوع است.
            </li>
            <li>
              پرداخت مالیات و عوارض شهرداری مربوط به بهره برداری بر عهده مستأجر
              می‌باشد.
            </li>
            <li>سایر موارد مطابق قوانین و مقررات جاری کشور است.</li>
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
