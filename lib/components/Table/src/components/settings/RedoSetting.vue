<template>
  <Tooltip placement="top">
    <template #title>
      <span>还原</span>
    </template>
    <RedoOutlined @click="redo" />
  </Tooltip>
</template>
<script lang="ts" setup>
import { Tooltip } from "ant-design-vue";
import { RedoOutlined } from "@ant-design/icons-vue";
import { useTableContext } from "../../hooks/useTableContext";

defineOptions({ name: "RedoSetting" });

const table = useTableContext();

function redo() {
  table.reload();
}
</script>
