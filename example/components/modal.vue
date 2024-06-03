<script setup lang="ts">
import { BasicModal, useModalInner } from "@/index";

defineEmits<{
  register: [...any[]];
}>();

const [registerModal, { setModalProps }] = useModalInner((title: string) => {
  setModalProps({ title });
});
</script>

<template>
  <BasicModal @register="registerModal" title="死定了">
    <div style="height: 400px">死定了</div>
  </BasicModal>
</template>

<style lang="less" scoped></style>
