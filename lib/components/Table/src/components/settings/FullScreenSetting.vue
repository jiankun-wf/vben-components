<template>
  <Tooltip placement="top">
    <template #title>
      <span>全屏设置</span>
    </template>
    <FullscreenOutlined @click="toggle" v-if="!isFullscreen" />
    <FullscreenExitOutlined @click="toggle" v-else />
  </Tooltip>
</template>
<script lang="ts" setup>
import { Tooltip } from "ant-design-vue";
import {
  FullscreenOutlined,
  FullscreenExitOutlined,
} from "@ant-design/icons-vue";
import { useFullscreen } from "@vueuse/core";
import { useTableContext } from "../../hooks/useTableContext";

defineOptions({ name: "FullScreenSetting" });

const table = useTableContext();
const { toggle, isFullscreen } = useFullscreen(table.wrapRef);
</script>
