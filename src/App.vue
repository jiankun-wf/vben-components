<script setup lang="ts">
import { BasicTable, useTable } from "../lib/components/Table";

// import { BasicTable, useTable } from "../release/es/index";
// import "../release/es/style.css";

// formComponentRegister();
// const schemas: FormSchema[] = [
//   {
//     field: "name",
//     component: "Input",
//     componentProps: {
//       placeholder: "123",
//     },
//     label: "你好",
//   },
// ];

const [registerTable] = useTable({
  title: "你好啊",
  api: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { name: "1", age: 2 },
          { name: "2", age: 3 },
        ]);
      }, 2000);
    });
  },
  columns: [
    {
      dataIndex: "name",
      title: "姓名",
      width: 120,
    },
    {
      dataIndex: "age",
      title: "年龄",
      width: 120,
    },
  ],
  useSearchForm: true,
  formConfig: {
    labelWidth: 50,
    schemas: [
      {
        field: "name",
        component: "Input",
        componentProps: {
          placeholder: "123",
        },
        label: "你好",
      },
    ],
  },
});
</script>

<template>
  <!-- <BasicForm :schemas="schemas" /> -->

  <BasicTable @register="registerTable" />
</template>

<style scoped></style>
