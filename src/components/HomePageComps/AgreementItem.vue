<template>
  <a
      :href="url"
      style="direction: rtl"
      class="w-[100%] h-[90px] bg-[white] min-h-[90px] rounded-[6px] hover:bg-[#cbfbf1] transition relative"
  >
    <div
        class="text-container w-[100%] h-[100%] flex flex-col justify-center items-start absolute top-[10px] right-[14px] translate-y-[-8px]"
    >
      <p>{{ title }}</p>
      <p class="text-center text-[13px] opacity-50">{{ date }}</p>
      <p class="text-[13px] opacity-50">{{ description }}</p>
    </div>
  </a>
</template>

<script>
export default {
  name: "AgreementItem",
  props: {
    title: {type: String, required: true},
    date: {type: String, required: true},
    description: {type: String, required: true},
    url: {type: String, default: "#"},
  },
};
</script>

<style></style>
