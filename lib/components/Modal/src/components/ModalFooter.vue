<template>
  <div>
    <slot name="insertFooter"></slot>
    <Button
      v-bind="cancelButtonProps"
      @click="handleCancel"
      v-if="showCancelBtn"
    >
      {{ cancelText }}
    </Button>
    <slot name="centerFooter"></slot>
    <Button
      :type="okType as any"
      @click="handleOk"
      :loading="confirmLoading"
      v-bind="okButtonprops"
      v-if="showOkBtn"
    >
      {{ okText }}
    </Button>
    <slot name="appendFooter"></slot>
  </div>
</template>
<script lang="ts" setup>
import { Button, ButtonProps } from "ant-design-vue";
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
