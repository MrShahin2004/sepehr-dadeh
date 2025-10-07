<!-- src/views/pishfarakhan/Pishfarakhan-step-5.vue -->
<template>
  <div class="min-h-screen" dir="rtl">
    <!-- Header from step-4 -->
    <header class="relative overflow-hidden">
      <div class="top-navbar h-32 w-full flex items-center justify-center">
        <div class="absolute left-4 top-2 flex items-center space-x-2">
          <img
              src="@/assets/images/khamenei.png"
              class="w-50 h-auto object-contain"
              alt="Iranian figures"
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
              alt="Iranian emblem"
          />
        </div>
      </div>
    </header>

    <main
        class="main-container mx-auto max-w-[98%] px-4 py-6 bg-gray-100 rounded-xl"
    >
      <!-- Admin info bar -->
      <div
          class="bg-teal-500 text-white rounded-lg shadow p-4 flex items-center justify-between mb-6 mx-auto max-w-[98%] px-4"
      >
        <span class="text-sm">اطلاعیه های اخیر</span>
        <span class="px-3 py-1 bg-teal-600 rounded text-sm"
        >admin : کارشناس ثبت</span
        >
      </div>

      <!-- Progress bar from step-4 (current step: 5) -->
      <section class="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div class="relative">
          <div class="absolute top-4 left-0 right-0 h-0.5 bg-gray-200 z-0">
            <div
                class="h-full bg-teal-500 z-0"
                :style="{ width: progressWidth }"
            ></div>
          </div>
          <div class="flex items-center justify-between relative z-10">
            <div
                v-for="(s, index) in steps"
                :key="index"
                class="flex flex-col items-center"
            >
              <component
                  :is="index + 1 < 5 ? 'router-link' : 'div'"
                  :to="index + 1 < 5 ? { name: 'PishfarakhanStep', params: { step: index + 1, id: $route.params.id } } : undefined"
                  class="w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold mb-2 bg-white relative z-20"
                  :class="index + 1 === 5 ? 'bg-teal-500 border-teal-500 text-white' : 'bg-gray-100 border-gray-300 text-gray-500'"
                  style="text-decoration: none"
              >
                {{ index + 1 }}
              </component>
              <span class="text-xs text-center text-gray-600">{{ s }}</span>
            </div>
          </div>
        </div>
      </section>
      <div class="mt-4 grid grid-cols-1 gap-4">
        <div class="lg:col-span-1">
          <div class="rounded-xl bg-white shadow p-0 overflow-hidden">
            <!-- unique id + section title row -->
            <div
                class="px-4 sm:px-6 pt-4 pb-2 flex items-center justify-start gap-6 text-sm text-gray-700"
            >
              <div class="flex items-center gap-2">
                <span
                    class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gray-100 border border-gray-300 text-gray-600"
                >i</span
                >
                <span>مشخصات طرفین قرارداد</span>
              </div>
              <div class="flex items-center gap-2">
                <span>کد شناسه یکتا:</span>
                <span class="font-semibold">{{ contractId }}</span>
              </div>
            </div>
            <header
                class="flex items-center justify-start border-b border-gray-100 px-4 sm:px-6 py-4"
            >
              <div class="inline-flex rounded-full bg-gray-100 p-1">
                <button
                    type="button"
                    class="px-4 py-1.5 text-sm rounded-full transition cursor-pointer"
                    :class="
                    activeTab === 'person'
                      ? 'bg-teal-600 text-white shadow'
                      : 'text-gray-700 hover:text-teal-700'
                  "
                    @click="activeTab = 'person'"
                >
                  حقیقی
                </button>
                <button
                    type="button"
                    class="px-4 py-1.5 text-sm rounded-full transition cursor-pointer"
                    :class="
                    activeTab === 'company'
                      ? 'bg-teal-600 text-white shadow'
                      : 'text-gray-700 hover:text-teal-700'
                  "
                    @click="activeTab = 'company'"
                >
                  حقوقی
                </button>
              </div>
              <!-- contract party selector next to tabs -->
              <div class="flex items-center gap-3 mr-4">
                <span class="text-sm text-gray-700">طرف قرارداد:</span>
                <select
                    v-model="party"
                    class="w-48 bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 cursor-pointer"
                >
                  <option value="" disabled>انتخاب کنید</option>
                  <option value="tenant">مستاجر</option>
                  <option value="buyer">خریدار</option>
                </select>
              </div>
            </header>

            <section v-show="activeTab === 'person'" class="px-4 sm:px-6 py-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm text-gray-600 mb-1">نام:</label>
                  <input
                      type="text"
                      class="w-full rounded-md border border-gray-300 px-3 py-2"
                      placeholder="علی"
                  />
                </div>
                <div>
                  <label class="block text-sm text-gray-600 mb-1"
                  >نام خانوادگی:</label
                  >
                  <input
                      type="text"
                      class="w-full rounded-md border border-gray-300 px-3 py-2"
                      placeholder="علیرضاده"
                  />
                </div>
                <div>
                  <label class="block text-sm text-gray-600 mb-1">جنسیت:</label>
                  <select
                      class="w-full rounded-md border border-gray-300 px-2 py-2 text-sm"
                  >
                    <option value="choose" disabled>انتخاب کنید</option>
                    <option value="male">مرد</option>
                    <option value="female">زن</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm text-gray-600 mb-1"
                  >نام پدر:</label
                  >
                  <input
                      type="text"
                      class="w-full rounded-md border border-gray-300 px-3 py-2"
                      placeholder="علی"
                  />
                </div>
                <div>
                  <label class="block text-sm text-gray-600 mb-1">شماره ملی:</label>
                  <input
                      type="text"
                      v-model="forms.haghighi.nationalCode"
                      @input="handleNationalCodeInput"
                      inputmode="numeric"
                      pattern="\d*"
                      maxlength="10"
                      :class="[
                             'w-full rounded-md border px-3 py-2',
                             nationalCodeError ? 'border-red-500 bg-red-50 ring-1 ring-red-400 focus:ring-red-500' : 'border-gray-300'
                             ]"
                      placeholder="۰۹۲۲۸۸۰۰۰۰"
                  />
                  <p v-if="nationalCodeError" class="mt-1 text-xs text-red-600">
                    شماره ملی باید 10 رقم باشد.
                  </p>

                </div>
                <div>
                  <label class="block text-sm text-gray-600 mb-1"
                  >تاریخ تولد:</label
                  >
                  <div class="relative">
                    <DatePicker
                        v-model="forms.haghighi.birthDate"
                        :type="'date'"
                        :format="'jYYYY/jMM/jDD'"
                        :display-format="'jYYYY/jMM/jDD'"
                        :auto-submit="true"
                        :editable="false"
                        input-class="w-full h-12 rounded-xl border border-slate-300 px-4 focus:outline-none"
                        input-id="birthDate"
                        input-name="birthDate"
                        placeholder="تاریخ تولد"
                    />
                  </div>
                </div>
                <div>
                  <label class="block text-sm text-gray-600 mb-1">شغل:</label>
                  <input
                      type="text"
                      class="w-full rounded-md border border-gray-300 px-3 py-2"
                      placeholder="پیمانکار"
                  />
                </div>
                <div>
                  <label class="block text-sm text-gray-600 mb-1">تلفن ثابت:</label>
                  <input
                      type="text"
                      v-model="forms.haghighi.landline"
                      @input="handleLandlineInput"
                      inputmode="numeric"
                      pattern="\d*"
                      :class="[
                               'w-full rounded-md border px-3 py-2',
                               landlineError ? 'border-red-500 bg-red-50 ring-1 ring-red-400 focus:ring-red-500' : 'border-gray-300'
                              ]"
                      placeholder="051......."
                  />
                  <p v-if="forms.haghighi.landline && landlineError" class="mt-1 text-xs text-red-600">
                    تلفن ثابت باید با 051 شروع شود و فقط شامل عدد باشد.
                  </p>

                </div>
                <div>
                  <label class="block text-sm text-gray-600 mb-1">تلفن همراه:</label>
                  <input
                      type="text"
                      v-model="forms.haghighi.mobile"
                      @input="handleMobileInput"
                      inputmode="numeric"
                      pattern="\d*"
                      maxlength="11"
                      :class="[
                               'w-full rounded-md border px-3 py-2',
                               mobileError ? 'border-red-500 bg-red-50 ring-1 ring-red-400 focus:ring-red-500' : 'border-gray-300'
                              ]"
                      placeholder="0915......"
                  />
                  <p v-if="mobileError" class="mt-1 text-xs text-red-600">
                    تلفن همراه باید با 09 شروع شود و دقیقاً 11 رقم باشد.
                  </p>

                </div>
                <div>
                  <label class="block text-sm text-gray-600 mb-1">ایمیل:</label>
                  <input
                      type="email"
                      v-model="forms.haghighi.email"
                      @input="handleEmailInput"
                      autocomplete="email"
                      :class="[
                               'w-full rounded-md border px-3 py-2',
                               emailError ? 'border-red-500 bg-red-50 ring-1 ring-red-400 focus:ring-red-500' : 'border-gray-300'
                              ]"
                      placeholder="info@example.com"
                  />
                  <p v-if="emailError" class="mt-1 text-xs text-red-600">
                    ایمیل نامعتبر است.
                  </p>
                </div>
                <div>
                  <label class="block text-sm text-gray-600 mb-1">کد پستی:</label>
                  <input
                      type="text"
                      v-model="forms.haghighi.postalCode"
                      @input="handlePostalCodeInput"
                      :class="[
                               'w-full rounded-md border px-3 py-2',
                               postalCodeError ? 'border-red-500 bg-red-50 ring-1 ring-red-400 focus:ring-red-500' : 'border-gray-300'
                              ]"
                      placeholder="12345-67890"
                  />
                  <p v-if="postalCodeError" class="mt-1 text-xs text-red-600">کد پستی نامعتبر است.</p>

                </div>
                <div>
                  <label class="block text-sm text-gray-600 mb-1"
                  >تضمین قرارداد:</label
                  >
                  <input
                      ref="guaranteeInput"
                      type="file"
                      accept="application/pdf"
                      class="hidden"
                      @change="onPickGuarantee"
                  />
                  <div class="flex items-center gap-3 flex-wrap">
                    <button
                        type="button"
                        class="inline-flex items-center rounded-md bg-blue-600 text-white px-3 py-2 text-sm cursor-pointer"
                        @click="$refs.guaranteeInput.click()"
                    >
                      بارگذاری
                    </button>
                    <div
                        v-if="guaranteeChip"
                        class="flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-3 py-2 shadow-sm w-fit"
                    >
                      <button
                          type="button"
                          @click="clearGuarantee"
                          class="flex-shrink-0 w-7 h-7 rounded-lg bg-red-500 text-white flex items-center justify-center cursor-pointer"
                          aria-label="حذف فایل"
                          title="حذف فایل"
                      >
                        ✕
                      </button>
                      <div
                          class="flex-shrink-0 text-xs text-gray-500 w-16 text-center leading-tight"
                      >
                        <div class="font-medium">
                          {{ guaranteeChip.sizeKB }}
                        </div>
                        <div>KB</div>
                      </div>
                      <div
                          class="text-sm text-gray-800 truncate max-w-[220px]"
                          :title="guaranteeChip.name"
                      >
                        {{ guaranteeChip.name }}
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <label class="block text-sm text-gray-600 mb-1"
                  >کارت ملی:</label
                  >
                  <input
                      ref="nationalCardInput"
                      type="file"
                      accept="application/pdf"
                      class="hidden"
                      @change="onPickNationalCard"
                  />
                  <div class="flex items-center gap-3 flex-wrap">
                    <button
                        type="button"
                        class="inline-flex items-center rounded-md bg-blue-600 text-white px-3 py-2 text-sm cursor-pointer"
                        @click="$refs.nationalCardInput.click()"
                    >
                      بارگذاری
                    </button>
                    <div
                        v-if="nationalCardChip"
                        class="flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-3 py-2 shadow-sm w-fit"
                    >
                      <button
                          type="button"
                          @click="clearNationalCard"
                          class="flex-shrink-0 w-7 h-7 rounded-lg bg-red-500 text-white flex items-center justify-center cursor-pointer"
                          aria-label="حذف فایل"
                          title="حذف فایل"
                      >
                        ✕
                      </button>
                      <div
                          class="flex-shrink-0 text-xs text-gray-500 w-16 text-center leading-tight"
                      >
                        <div class="font-medium">
                          {{ nationalCardChip.sizeKB }}
                        </div>
                        <div>KB</div>
                      </div>
                      <div
                          class="text-sm text-gray-800 truncate max-w-[220px]"
                          :title="nationalCardChip.name"
                      >
                        {{ nationalCardChip.name }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-4">
                <label class="block text-sm text-gray-600 mb-1">آدرس:</label>
                <input
                    type="text"
                    class="w-full rounded-md border border-gray-300 px-3 py-2"
                    placeholder="خراسان رضوی مشهد خیابان امام خمینی"
                />
              </div>
              <div class="mt-6 flex justify-start">
                <button
                    class="px-5 py-2.5 rounded-lg bg-teal-600 text-white cursor-pointer"
                    @click="goNext"
                >
                  ثبت
                </button>
              </div>
            </section>

            <section v-show="activeTab === 'company'" class="px-4 sm:px-6 py-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm text-gray-600 mb-1"
                  >نام شرکت:</label
                  >
                  <input
                      type="text"
                      class="w-full rounded-md border border-gray-300 px-3 py-2"
                      placeholder="اداره آموزش پرورش"
                  />
                </div>
                <div>
                  <label class="block text-sm text-gray-600 mb-1"
                  >شناسه ملی:</label
                  >
                  <input
                      type="text"
                      class="w-full rounded-md border border-gray-300 px-3 py-2"
                      placeholder="1234567890"
                  />
                </div>
                <div>
                  <label class="block text-sm text-gray-600 mb-1"
                  >شماره ثبت:</label
                  >
                  <input
                      type="text"
                      class="w-full rounded-md border border-gray-300 px-3 py-2"
                      placeholder="123456"
                  />
                </div>
                <div>
                  <label class="block text-sm text-gray-600 mb-1"
                  >محل ثبت:</label
                  >
                  <input
                      type="text"
                      class="w-full rounded-md border border-gray-300 px-3 py-2"
                      placeholder="مشهد"
                  />
                </div>
                <div class="md:col-span-2">
                  <label class="block text-sm text-gray-600 mb-1"
                  >شرح فعالیت:</label
                  >
                  <input
                      type="text"
                      class="w-full rounded-md border border-gray-300 px-3 py-2"
                      placeholder="پیمانکار"
                  />
                </div>
                <div>
                  <label class="block text-sm text-gray-600 mb-1"
                  >مرکز اصلی:</label
                  >
                  <select
                      class="w-full rounded-md border border-gray-300 px-2 py-2 text-sm"
                  >
                    <option value="" disabled>انتخاب کنید</option>
                    <option value="main-center">مرکز اصلی</option>
                    <option value="affiliate-1">شعبه 1</option>
                    <option value="affiliate-2">شعبه 2</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm text-gray-600 mb-1">شهر:</label>
                  <div class="flex gap-2">
                    <input
                        type="text"
                        class="flex-1 rounded-md border border-gray-300 px-3 py-2"
                        placeholder="مشهد"
                    />
                  </div>
                </div>
                <div>
                  <label class="block text-sm text-gray-600 mb-1">ایمیل شرکت:</label>
                  <input
                      type="email"
                      v-model="forms.company.email"
                      @input="handleCompanyEmailInput"
                      :class="[
           'w-full rounded-md border px-3 py-2',
           companyEmailError ? 'border-red-500 bg-red-50 ring-1 ring-red-400 focus:ring-red-500' : 'border-gray-300'
          ]"
                      placeholder="info@sepehr-dad.com"
                  />
                  <p v-if="companyEmailError" class="mt-1 text-xs text-red-600">ایمیل نامعتبر است.</p>
                </div>
                <div>
                  <label class="block text-sm text-gray-600 mb-1">تلفن:</label>
                  <input
                      type="text"
                      v-model="forms.company.landline"
                      @input="handleCompanyLandlineInput"
                      inputmode="numeric"
                      pattern="\d*"
                      :class="[
                               'w-full rounded-md border px-3 py-2',
                               (forms.company.landline && companyLandlineError) ? 'border-red-500 bg-red-50 ring-1 ring-red-400' +
                                ' focus:ring-red-500' : 'border-gray-300'
                              ]"
                      placeholder="051......."
                  />
                  <p v-if="forms.company.landline && companyLandlineError" class="mt-1 text-xs text-red-600">تلفن ثابت
                    باید با 051 شروع شود و فقط شامل عدد باشد.</p>
                </div>
                <div>
                  <label class="block text-sm text-gray-600 mb-1">کد پستی:</label>
                  <input
                      type="text"
                      v-model="forms.company.postalCode"
                      @input="handleCompanyPostalCodeInput"
                      :class="[
                               'w-full rounded-md border px-3 py-2',
                               companyPostalCodeError ? 'border-red-500 bg-red-50 ring-1 ring-red-400 focus:ring-red-500' : 'border-gray-300'
                              ]"
                      placeholder="12345-67890"
                  />
                  <p v-if="companyPostalCodeError" class="mt-1 text-xs text-red-600">کد پستی نامعتبر است.</p>
                </div>
                <div
                    class="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  <div>
                    <label class="block text-sm text-gray-600 mb-1"
                    >آخرین آگهی:</label
                    >
                    <input
                        ref="lastNoticeInput"
                        type="file"
                        accept="application/pdf"
                        class="hidden"
                        @change="onPickLastNotice"
                    />
                    <div class="flex items-center gap-3 flex-wrap">
                      <button
                          type="button"
                          class="inline-flex items-center rounded-md bg-blue-600 text-white px-3 py-2 text-sm cursor-pointer"
                          @click="$refs.lastNoticeInput.click()"
                      >
                        بارگذاری
                      </button>
                      <div
                          v-if="lastNoticeChip"
                          class="flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-3 py-2 shadow-sm w-fit"
                      >
                        <button
                            type="button"
                            @click="clearLastNotice"
                            class="flex-shrink-0 w-7 h-7 rounded-lg bg-red-500 text-white flex items-center justify-center cursor-pointer"
                            aria-label="حذف فایل"
                            title="حذف فایل"
                        >
                          ✕
                        </button>
                        <div
                            class="flex-shrink-0 text-xs text-gray-500 w-16 text-center leading-tight"
                        >
                          <div class="font-medium">
                            {{ lastNoticeChip.sizeKB }}
                          </div>
                          <div>KB</div>
                        </div>
                        <div
                            class="text-sm text-gray-800 truncate max-w-[220px]"
                            :title="lastNoticeChip.name"
                        >
                          {{ lastNoticeChip.name }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label class="block text-sm text-gray-600 mb-1"
                    >اساسنامه:</label
                    >
                    <input
                        ref="articlesInput"
                        type="file"
                        accept="application/pdf"
                        class="hidden"
                        @change="onPickArticles"
                    />
                    <div class="flex items-center gap-3 flex-wrap">
                      <button
                          type="button"
                          class="inline-flex items-center rounded-md bg-blue-600 text-white px-3 py-2 text-sm cursor-pointer"
                          @click="$refs.articlesInput.click()"
                      >
                        بارگذاری
                      </button>
                      <div
                          v-if="articlesChip"
                          class="flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-3 py-2 shadow-sm w-fit"
                      >
                        <button
                            type="button"
                            @click="clearArticles"
                            class="flex-shrink-0 w-7 h-7 rounded-lg bg-red-500 text-white flex items-center justify-center cursor-pointer"
                            aria-label="حذف فایل"
                            title="حذف فایل"
                        >
                          ✕
                        </button>
                        <div
                            class="flex-shrink-0 text-xs text-gray-500 w-16 text-center leading-tight"
                        >
                          <div class="font-medium">
                            {{ articlesChip.sizeKB }}
                          </div>
                          <div>KB</div>
                        </div>
                        <div
                            class="text-sm text-gray-800 truncate max-w-[220px]"
                            :title="articlesChip.name"
                        >
                          {{ articlesChip.name }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="md:col-span-2">
                  <label class="block text-sm text-gray-600 mb-1">آدرس:</label>
                  <input
                      type="text"
                      class="w-full rounded-md border border-gray-300 px-3 py-2"
                      placeholder="خراسان رضوی مشهد خیابان امام خمینی"
                  />
                </div>
                <div class="mt-6 flex justify-start">
                  <button
                      class="px-5 py-2.5 rounded-lg bg-teal-600 text-white cursor-pointer"
                      @click="goNext"
                  >
                    ثبت
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer from step-4 -->
    <hr/>
    <div class="login-footer">
      <div class="footer-links flex justify-center items-center gap-x-[1rem]">
        <router-link to="/"
        ><a
            class="text-white transition hover:cursor-pointer hover:text-blue-500"
        >حریم خصوصی</a
        ></router-link
        >
        <router-link to="/"
        ><a
            class="text-white transition hover:cursor-pointer hover:text-blue-500"
        >نظرسنجی‌ها</a
        ></router-link
        >
        <router-link to="/"
        ><a
            class="text-white transition hover:cursor-pointer hover:text-blue-500"
        >پیوندها</a
        ></router-link
        >
        <router-link to="/"
        ><a
            class="text-white transition hover:cursor-pointer hover:text-blue-500"
        >فراخوان‌ها</a
        ></router-link
        >
        <router-link to="/"
        ><a
            class="text-white transition hover:cursor-pointer hover:text-blue-500"
        >آمارها</a
        ></router-link
        >
        <router-link to="/"
        ><a
            class="text-white transition hover:cursor-pointer hover:text-blue-500"
        >صفحه اصلی</a
        ></router-link
        >
      </div>
      <div class="footer-desc flex justify-center items-center">
        <p class="text-[white]">
          © کلیه حقوق این پایگاه به سپهر داده تعلق دارد
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed, reactive, ref, watch} from "vue";
import {useRoute} from "vue-router";
import DatePicker from "vue3-persian-datetime-picker";
import moment from "moment-jalaali";

const progressWidth = computed(
    () => `${((5 - 1) / (steps.length - 1)) * 100}%`
);

const forms = reactive({
  haghighi: {birthDate: '', postalCode: ''},
  company: {email: '', landline: '', postalCode: ''},
})

const nationalCodeError = computed(() => {
  const v = forms.haghighi.nationalCode
  return !!(v && !/^\d{10}$/.test(v));
})

// فقط عدد بگیرد (و حداکثر 10 رقم)
function handleNationalCodeInput(e) {
  forms.haghighi.nationalCode = String(e.target.value || "").replace(/\D/g, "").slice(0, 10);
}

// Landline: only digits, must start with 051 (error only if has value & not matching)
const landlineError = computed(() => {
  const v = forms.haghighi.landline;
  return !!(v && !/^051\d*$/.test(v));
});

function handleLandlineInput(e) {
  forms.haghighi.landline = String(e.target.value || "").replace(/\D/g, "");
}

// Mobile: only digits, exactly 11 digits, must start with 09
const mobileError = computed(() => {
  const v = forms.haghighi.mobile;
  return !!(v && !/^09\d{9}$/.test(v));
});

function handleMobileInput(e) {
  forms.haghighi.mobile = String(e.target.value || "").replace(/\D/g, "").slice(0, 11);
}

// Email: basic validation and strip spaces
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const emailError = computed(() => {
  const v = forms.haghighi.email;
  return !!(v && !emailRegex.test(v));
});

function handleEmailInput(e) {
  forms.haghighi.email = String(e.target.value || "").replace(/\s+/g, "");
}

// Company: errors mirror حقیقی
const companyLandlineError = computed(() => {
  const v = forms.company.landline;
  return !!(v && !/^051\d*$/.test(v));
});
const companyEmailError = computed(() => {
  const v = forms.company.email;
  return !!(v && !emailRegex.test(v));
});
const companyPostalCodeError = computed(() => {
  const v = forms.company.postalCode;
  return !!(v && !/^[13456789]{5}[- ]?\d{5}$/.test(v));
});

function handleCompanyLandlineInput(e) {
  forms.company.landline = String(e.target.value || "").replace(/\D/g, "");
}

function handleCompanyEmailInput(e) {
  const val = String(e.target.value || "").replace(/\s+/g, "");
  forms.company.email = val;
}

function handleCompanyPostalCodeInput(e) {
  const raw = String(e.target.value || '');
  const cleaned = raw.replace(/[^0-9\- ]+/g, '').slice(0, 11);
  forms.company.postalCode = cleaned;
}

// regex + computed error
const postalCodeRegex = /^[13456789]{5}[- ]?\d{5}$/;
const postalCodeError = computed(() => {
  const v = forms.haghighi.postalCode;
  return !!(v && !postalCodeRegex.test(v));
});

// input handler
function handlePostalCodeInput(e) {
  const raw = String(e.target.value || '');
  forms.haghighi.postalCode = raw.replace(/[^0-9\- ]+/g, '').slice(0, 11);
}

watch(() => forms.haghighi.birthDate, (value) => {
  if (!value) {
    return;
  }

  console.log(`The raw value of date picker: ${value}`);

  const m = moment(value, 'jYYYY/jMM/jDD');
  console.log({
    jalali: {
      formatted: value,
      year: m.jYear(),
      month: m.jMonth() + 1,   // 1..12
      day: m.jDate(),          // 1..31
      weekday: m.format("dddd")
    },
    gregorian: {
      iso: m.format('YYYY-MM-DD'),
      year: m.year(),
      month: m.month() + 1,    // 1..12
      day: m.date(),           // 1..31
    },
    unixMs: m.valueOf()
  });
});

const steps = [
  "مجوز اداره کل",
  "نامه کارشناسی",
  "فرآیند درخواست",
  "نتایج مزایده",
  "مشخصات",
  "اطلاعات قرارداد",
  "مستندات پرداخت",
  "قرارداد",
];
const route = useRoute();
const contractId = computed(() => route.params.id ?? "—");
const activeTab = ref("person");
const party = ref("");

// file inputs + chips
const guaranteeInput = ref(null);
const nationalCardInput = ref(null);
const guaranteeChip = ref(null);
const nationalCardChip = ref(null);
const lastNoticeInput = ref(null);
const articlesInput = ref(null);
const lastNoticeChip = ref(null);
const articlesChip = ref(null);

const isPdf = (file) =>
    !!file && (file.type === "application/pdf" || /\.pdf$/i.test(file.name));

function onPickGuarantee(e) {
  const f = e.target.files?.[0];
  if (!f) return;
  if (!isPdf(f)) {
    alert("لطفاً فقط فایل PDF انتخاب کنید");
    e.target.value = "";
    return;
  }
  guaranteeChip.value = {name: f.name, sizeKB: (f.size / 1024).toFixed(2)};
}

function clearGuarantee() {
  if (guaranteeInput.value) guaranteeInput.value.value = "";
  guaranteeChip.value = null;
}

function onPickNationalCard(e) {
  const f = e.target.files?.[0];
  if (!f) return;
  if (!isPdf(f)) {
    alert("لطفاً فقط فایل PDF انتخاب کنید");
    e.target.value = "";
    return;
  }
  nationalCardChip.value = {name: f.name, sizeKB: (f.size / 1024).toFixed(2)};
}

function clearNationalCard() {
  if (nationalCardInput.value) nationalCardInput.value.value = "";
  nationalCardChip.value = null;
}

function onPickLastNotice(e) {
  const f = e.target.files?.[0];
  if (!f) return;
  if (!isPdf(f)) {
    alert("لطفاً فقط فایل PDF انتخاب کنید");
    e.target.value = "";
    return;
  }
  lastNoticeChip.value = {name: f.name, sizeKB: (f.size / 1024).toFixed(2)};
}

function clearLastNotice() {
  if (lastNoticeInput.value) lastNoticeInput.value.value = "";
  lastNoticeChip.value = null;
}

function onPickArticles(e) {
  const f = e.target.files?.[0];
  if (!f) return;
  if (!isPdf(f)) {
    alert("لطفاً فقط فایل PDF انتخاب کنید");
    e.target.value = "";
    return;
  }
  articlesChip.value = {name: f.name, sizeKB: (f.size / 1024).toFixed(2)};
}

function clearArticles() {
  if (articlesInput.value) articlesInput.value.value = "";
  articlesChip.value = null;
}

// navigation to previous step is not presented on this step's UI
// function goPrev() {
//   window.location.href = `/pishfarakhan/step-4/${contractId.value}`;
// }

// === Required-field helpers (DOM-level; no template changes needed) ===
const REQUIRED_MSG = "این فیلد الزامی است";

function _isVisible(el) {
  return !!(el && el.offsetParent !== null);
}

function _markInvalid(el) {
  el.classList.add(
      "border-red-500",
      "bg-red-50",
      "ring-1",
      "ring-red-400",
      "focus:ring-red-500"
  );
  if (!el.dataset.requiredMsg) {
    const hint = document.createElement("div");
    hint.className = "mt-1 text-xs text-red-600";
    hint.textContent = REQUIRED_MSG;
    el.insertAdjacentElement("afterend", hint);
    el.dataset.requiredMsg = "1";
  }
}

function _clearInvalid(el) {
  el.classList.remove(
      "border-red-500",
      "bg-red-50",
      "ring-1",
      "ring-red-400",
      "focus:ring-red-500"
  );
  if (el.dataset.requiredMsg) {
    const next = el.nextElementSibling;
    if (next && next.textContent === REQUIRED_MSG) next.remove();
    delete el.dataset.requiredMsg;
  }
}

/** is this field effectively empty? */
function _isFieldEmpty(el) {
  if (!el) return true;

  // File picker: must have at least one file and all must be PDF
  if (el.tagName === 'INPUT' && el.type === 'file') {
    const files = el.files || [];
    if (files.length === 0) return true;
    // treat as empty/invalid if ANY file is not a PDF
    const allPdf = Array.from(files).every(
        f => f?.type === 'application/pdf' || /\.pdf$/i.test(f?.name || '')
    );
    return !allPdf;
  }

  // Select: empty or placeholder => empty
  if (el.tagName === 'SELECT') {
    const idx = el.selectedIndex;
    if (idx < 0) return true;
    const opt = el.options[idx];
    const value = (opt?.value ?? opt?.textContent ?? '').trim();
    const isPlaceholderText = /^(انتخاب|select|choose|--)/i.test(
        (opt?.textContent ?? '').trim()
    );
    const isFirstPlaceholder = idx === 0 && (opt?.disabled || isPlaceholderText);
    return value === '' || isFirstPlaceholder;
  }

  // Other inputs / textarea
  return (el.value ?? '').trim() === '';
}


function _attachAutoClear(el) {
  const handler = () => {
    if (!_isFieldEmpty(el)) _clearInvalid(el);
  };
  el.addEventListener("input", handler);
  el.addEventListener("change", handler);
}

function _collectTextualFieldsInActiveTab() {
  // all visible non-file inputs + textarea + select
  return Array.from(
      document.querySelectorAll(
          'input:not([type="file"]):not([type="checkbox"]):not([type="radio"]), textarea, select'
      )
  ).filter(_isVisible);
}

// Check regex-based field errors in the active tab (only when the field has a value)
function _hasSpecificFieldErrorsInActiveTab() {
  if (activeTab.value === 'person') {
    return Boolean(
        (forms.haghighi.landline && landlineError.value) ||
        (forms.haghighi.mobile && mobileError.value) ||
        (forms.haghighi.email && emailError.value) ||
        (forms.haghighi.nationalCode && nationalCodeError.value) ||
        (forms.haghighi.postalCode && postalCodeError.value)
    );
  } else if (activeTab.value === 'company') {
    return Boolean(
        (forms.company.landline && companyLandlineError.value) ||
        (forms.company.email && companyEmailError.value) ||
        (forms.company.postalCode && companyPostalCodeError.value)
    );
  }
  return false;
}

/**
 * Returns true if we can proceed; false if blocked and page was decorated.
 * Blocks only when ALL textual fields are empty AND all file pickers are empty.
 */
function validateSteppedPageAllEmpty() {
  // collect only visible fields in the active tab
  const textFields = _collectTextualFieldsInActiveTab(); // (uses your existing helper)
  const filePickers = Array
      .from(document.querySelectorAll('input[type="file"]'))
      .filter(_isVisible); // your existing visibility check

  // anything empty/invalid?
  const invalid = [
    ...textFields.filter(_isFieldEmpty),
    ...filePickers.filter(_isFieldEmpty),
  ];

  if (invalid.length > 0) {
    invalid.forEach(el => {
      _markInvalid(el);     // your existing styler
      _attachAutoClear(el); // your existing listener to clear error on change/input
    });
    alert('لطفاً همه فیلدها را تکمیل کرده و برای آپلودها فایل PDF انتخاب کنید.');
    return false; // prevent going to next page
  }

  // If any field with a specific validation rule has an error, block next step
  if (_hasSpecificFieldErrorsInActiveTab()) {
    alert('لطفاً خطاهای مشخص‌شده را برطرف کنید.');
    return false;
  }

  return true; // everything is valid -> allow next step
}

function goNext() {
  if (!validateSteppedPageAllEmpty()) {
    return;
  } else {
    window.location.href = `/pishfarakhan/step-6/${contractId.value}`;
  }
}
</script>

<style scoped>
.main-container {
  margin-bottom: 4rem;
}
</style>
