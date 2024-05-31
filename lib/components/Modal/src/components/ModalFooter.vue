<template>
  <div>
    <slot name="insertFooter"></slot>
    <a-button
      v-bind="cancelButtonProps"
      @click="handleCancel"
      v-if="showCancelBtn"
    >
      {{ cancelText }}
    </a-button>
    <slot name="centerFooter"></slot>
    <a-button
      :type="okType"
      @click="handleOk"
      :loading="confirmLoading"
      v-bind="okButtonprops"
      v-if="showOkBtn"
    >
      {{ okText }}
    </a-button>
    <slot name="appendFooter"></slot>
  </div>
</template>
<script lang="ts" setup>
import { ButtonProps } from "ant-design-vue";
import { basicProps } from "../props";
import { computed } from "vue";

defineOptions({ name: "BasicModalFooter" });

const props = defineProps(basicProps);

const okButtonprops = computed(() => {
  return props.okButtonProps as ButtonProps;
});

const cancelButtonProps = computed(() => {
  return props.cancelButtonProps as ButtonProps;
});

const emit = defineEmits(["ok", "cancel"]);

function handleOk(e: Event) {
  emit("ok", e);
}

function handleCancel(e: Event) {
  emit("cancel", e);
}
</script>
