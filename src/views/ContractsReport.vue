<template>
  <div class="w-full flex flex-col items-center" dir="rtl">
    <header class="flex justify-between w-full px-4 sm:px-8 pt-4">
      <img
          class="w-[130px] h-[130px]"
          src="../assets/images/education.svg"
          alt="Education"
          style="margin-right: 1rem"
      />
      <img
          class="w-[191px] h-[100px]"
          src="../assets/images/khamenei.png"
          alt="Khamenei"
      />
    </header>

    <router-link to="/">
      <h1
          class="text-[36px] text-[var(--main-title)] text-shadow-[0_4px_10px_black] text-center mt-4"
          style="font-family: IranNastaliq, sans-serif"
      >
        پایگاه اطلاعات قراردادهای اداره کل آموزش و پرورش استان خراسان رضوی
      </h1>
    </router-link>

    <main class="w-full flex justify-center items-start mt-10 px-4 pb-16">
      <div class="w-[99%] max-w-[1100px] bg-[#cbe9f6] rounded-2xl p-6 sm:p-10">
        <div class="w-full bg-white rounded-2xl shadow-xl p-6 sm:p-10">
          <h2 class="text-right text-[18px] sm:text-[20px] font-semibold mb-6">
            تولید گزارش سفارشی
          </h2>

          <!-- ستون‌ها -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- ستون پرداخت‌ها -->
            <div class="rounded-2xl border p-4">
              <!-- چک‌باکس اولِ ستون (سوییچ) -->
              <label class="flex items-center gap-2 mb-2 cursor-pointer select-none">
                <input type="checkbox" v-model="paymentsEnabled" class="w-4 h-4"/>
                <span>گزارش پرداخت ها</span>
              </label>

              <Transition name="fade-slide">
                <div v-if="paymentsEnabled" class="space-y-2 overflow-hidden">
                  <label
                      v-for="field in paymentsFields"
                      :key="'pay-'+field"
                      class="flex items-center gap-2 cursor-pointer select-none"
                  >
                    <input type="checkbox" v-model="paymentsSelected" :value="field" class="w-4 h-4"/>
                    <span>{{ field }}</span>
                  </label>
                </div>
              </Transition>
            </div>

            <!-- ستون پرسنل -->
            <div class="rounded-2xl border p-4">
              <!-- چک‌باکس اولِ ستون (سوییچ) -->
              <label class="flex items-center gap-2 mb-2 cursor-pointer select-none">
                <input type="checkbox" v-model="personnelEnabled" class="w-4 h-4"/>
                <span>گزارش پرسنل</span>
              </label>

              <Transition name="fade-slide">
                <div v-if="personnelEnabled" class="space-y-2 overflow-hidden">
                  <label
                      v-for="field in personnelFields"
                      :key="'per-'+field"
                      class="flex items-center gap-2 cursor-pointer select-none"
                  >
                    <input type="checkbox" v-model="personnelSelected" :value="field" class="w-4 h-4"/>
                    <span>{{ field }}</span>
                  </label>
                </div>
              </Transition>
            </div>

            <!-- ستون قراردادها -->
            <div class="rounded-2xl border p-4">
              <!-- چک‌باکس اولِ ستون (سوییچ) -->
              <label class="flex items-center gap-2 mb-2 cursor-pointer select-none">
                <input type="checkbox" v-model="contractsEnabled" class="w-4 h-4"/>
                <span>گزارش قراردادها</span>
              </label>

              <Transition name="fade-slide">
                <div v-if="contractsEnabled" class="space-y-2 overflow-hidden">
                  <label
                      v-for="field in contractsFields"
                      :key="'con-'+field"
                      class="flex items-center gap-2 cursor-pointer select-none"
                  >
                    <input type="checkbox" v-model="contractsSelected" :value="field" class="w-4 h-4"/>
                    <span>{{ field }}</span>
                  </label>
                </div>
              </Transition>
            </div>
          </div>

          <!-- دکمه‌ها -->
          <div class="flex justify-start gap-3 mt-8">
            <button class="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white cursor-pointer">
              دانلود و تولید
            </button>
            <button class="px-5 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 text-gray-800 cursor-pointer">
              پاک‌کردن انتخاب
            </button>
          </div>
        </div>
      </div>
    </main>

    <hr/>
    <div class="login-footer">
      <div class="footer-links flex justify-center items-center gap-x-[1rem]">
        <a class="text-white transition hover:cursor-pointer hover:text-blue-500" href="#"
        >حریم خصوصی</a
        >
        <a class="text-white transition hover:cursor-pointer hover:text-blue-500" href="#"
        >نظرسنجی‌ها</a
        >
        <a class="text-white transition hover:cursor-pointer hover:text-blue-500" href="#">پیوندها</a>
        <a class="text-white transition hover:cursor-pointer hover:text-blue-500" href="#"
        >فراخوان‌ها</a
        >
        <a class="text-white transition hover:cursor-pointer hover:text-blue-500" href="#">آمارها</a>
        <a class="text-white transition hover:cursor-pointer hover:text-blue-500" href="#"
        >صفحه اصلی</a
        >
      </div>
      <div class="footer-desc flex justify-center items-center">
        <p class="text-[white]">© کلیه حقوق این پایگاه به سپهر داده تعلق دارد</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContractsReport",
  data() {
    return {
      // چک‌باکس اول هر ستون (ابتدا روشن باشد)
      paymentsEnabled: true,
      personnelEnabled: true,
      contractsEnabled: true,

      // گزینه‌های زیر هر ستون
      paymentsFields: [
        "پرداخت",
        "رسید",
        "مبلغ",
        "تاریخ",
        "وضعیت",
        "روش پرداخت",
        "کد پیگیری",
        "حساب بانکی",
        "توضیحات",
        "شماره فاکتور",
      ],
      personnelFields: [
        "کد ملی",
        "نام خانوادگی",
        "نام پدر",
        "تاریخ تولد",
        "جنسیت",
        "شغل",
        "محل تولد",
        "نحوه جذب",
        "کد پرسنلی",
        "تلفن منزل",
        "موبایل",
        "ایمیل",
        "آدرس",
        "کد پستی",
        "شهر",
        "نام شرکت",
        "کد اقتصادی شرکت",
        "شماره ثبت شرکت",
        "شماره مالیاتی",
        "مرکز استان",
        "شهرستان",
        "شرح سابقه",
      ],
      contractsFields: [
        "ID",
        "شماره درخواست",
        "نوع درخواست",
        "عنوان قرارداد",
        "نام کارفرما",
        "کد اقتصادی",
        "سپرده اولیه",
        "مبلغ سند",
        "پروژه",
        "بسته شده",
        "لغو شده",
        "وضعیت قرارداد",
        "وضعیت پیمانکار",
        "تاریخ قرارداد",
        "نوع قرارداد",
        "امضای ضامن",
        "نوع پیش",
        "مبلغ پیش",
        "بخش تخصصی",
        "نقش شخص دیگر",
        "ناظر",
        "نام سرپرست",
        "نام قرارداد سرویس",
        "تاریخ",
      ],

      // صرفاً برای نگه‌داشت انتخاب‌ها (فعلاً کاربردی ندارد)
      paymentsSelected: [],
      personnelSelected: [],
      contractsSelected: [],
    };
  },
};
</script>

<style scoped>
/* انیمیشن باز/بسته‌شدن ستون‌ها */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 300ms ease-in-out;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
  max-height: 0;
}

.fade-slide-enter-to,
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
  max-height: 1000px;
}

hr {
  color: white;
}
</style>
