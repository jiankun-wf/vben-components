<template>
  <a-alert type="info" showIcon :class="[prefixCls]">
    <template #message>
      <span v-if="props.count > 0">
        {{ `已选择 ${count} 条记录` }}
      </span>
      <span v-else> 未选中任何记录 </span>
      <Button
        type="link"
        @click="clearSelectedRowKeys"
        size="small"
        v-show="props.count > 0"
      >
        清空
      </Button>
    </template>
  </a-alert>
</template>

<script lang="ts" setup>
import { useDesign } from "@/hooks/web/useDesign";

import type { TableActionType } from "../types/table";
import { Alert as AAlert, Button } from "ant-design-vue";

const { prefixCls } = useDesign("table-select-bar");

defineOptions({
  name: "TableSelectBar",
});

const props = withDefaults(
  defineProps<{
    count?: number;
    //
    clearSelectedRowKeys: TableActionType["clearSelectedRowKeys"];
  }>(),
  {
    count: () => 0,
  }
);
</script>

<style lang="less" scoped>
@prefix-cls: ~"@{namespace}-table-select-bar";

.@{prefix-cls} {
  flex-grow: 1;
  padding: 2px 8px;

  :deep(.ant-btn-link) {
    height: 20px;
    line-height: 20px;
  }
}
</style>
