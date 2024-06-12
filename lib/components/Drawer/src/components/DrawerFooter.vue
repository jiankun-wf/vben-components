<template>
  <div :class="prefixCls" :style="getStyle" v-if="showFooter || $slots.footer">
    <template v-if="!$slots.footer">
      <slot name="insertFooter"></slot>
      <Button
        v-bind="cancelButtonPropsComputed"
        @click="handleClose"
        class="mr-2"
        v-if="showCancelBtn"
      >
        {{ cancelText }}
      </Button>
      <slot name="centerFooter"></slot>
      <Button
        :type="okType as any"
        @click="handleOk"
        v-bind="okButtonPropsComputed"
        class="mr-2"
        :loading="confirmLoading"
        v-if="showOkBtn"
      >
        {{ okText }}
      </Button>
      <slot name="appendFooter"></slot>
    </template>

    <template v-else>
      <slot name="footer"></slot>
    </template>
  </div>
</template>
<script lang="ts" setup>
import type { CSSProperties } from "vue";
import { computed } from "vue";
import { useDesign } from "@/hooks/web/useDesign";
import { footerProps } from "../props";
import { Button } from "ant-design-vue";

defineOptions({ name: "BasicDrawerFooter" });

const props = defineProps({
  ...footerProps,
  height: {
    type: String,
    default: "60px",
  },
});

const okButtonPropsComputed = computed(() => props.okButtonProps as Recordable);
const cancelButtonPropsComputed = computed(
  () => props.cancelButtonProps as Recordable
);

const emit = defineEmits(["ok", "close"]);

const { prefixCls } = useDesign("basic-drawer-footer");

const getStyle = computed((): CSSProperties => {
  const heightStr = `${props.height}`;
  return {
    height: heightStr,
    lineHeight: `calc(${heightStr} - 1px)`,
  };
});

function handleOk() {
  emit("ok");
}

function handleClose() {
  emit("close");
}
</script>

<style lang="less">
@prefix-cls: ~"@{namespace}-basic-drawer-footer";
@footer-height: 60px;
.@{prefix-cls} {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0 12px 0 20px;
  border-top: 1px solid @border-color-base;
  background-color: @component-background;
  text-align: right;

  > * {
    margin-right: 8px;
  }
}
</style>
