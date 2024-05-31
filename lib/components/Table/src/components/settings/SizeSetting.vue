<template>
  <Tooltip placement="top">
    <template #title>
      <span>紧凑度设置</span>
    </template>

    <Dropdown
      placement="bottom"
      :trigger="['click']"
      :getPopupContainer="getPopupContainer"
    >
      <ColumnHeightOutlined />
      <template #overlay>
        <Menu
          @click="handleTitleClick"
          selectable
          v-model:selectedKeys="selectedKeysRef"
        >
          <Menu.Item key="default">
            <span>默认</span>
          </Menu.Item>
          <Menu.Item key="middle">
            <span>普通</span>
          </Menu.Item>
          <Menu.Item key="small">
            <span>紧凑</span>
          </Menu.Item>
        </Menu>
      </template>
    </Dropdown>
  </Tooltip>
</template>
<script lang="ts" setup>
import type { SizeType } from "../../types/table";
import { ref, onMounted } from "vue";
import { Tooltip, Dropdown, Menu, type MenuProps } from "ant-design-vue";
import { ColumnHeightOutlined } from "@ant-design/icons-vue";
import { useTableContext } from "../../hooks/useTableContext";
import { getPopupContainer } from "@/utils";

defineOptions({ name: "SizeSetting" });

const table = useTableContext();

const selectedKeysRef = ref<SizeType[]>([table.getSize()]);

const handleTitleClick: MenuProps["onClick"] = ({ key }) => {
  selectedKeysRef.value = [key as SizeType];

  table.setProps({
    size: key as SizeType,
  });
};

onMounted(() => {
  table.setProps({
    size: selectedKeysRef.value[0],
  });
});
</script>
