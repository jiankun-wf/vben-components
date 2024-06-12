<template>
  <LoginFormTitle v-show="getShow" class="enter-x" />
  <Form
    class="p-4 enter-x"
    :model="formData"
    :rules="getFormRules"
    ref="formRef"
    v-show="getShow"
    @keypress.enter="handleLogin"
  >
    <FormItem name="account" class="enter-x">
      <Input
        size="large"
        v-model:value="formData.account"
        placeholder="输入您的用户名"
        class="fix-auto-fill"
      />
    </FormItem>
    <FormItem name="password" class="enter-x">
      <InputPassword
        size="large"
        visibilityToggle
        v-model:value="formData.password"
        placeholder="输入您的密码"
      />
    </FormItem>

    <ARow class="enter-x">
      <ACol :span="12">
        <FormItem>
          <!-- No logic, you need to deal with it yourself -->
          <Checkbox v-model:checked="rememberMe" size="small">
            记住密码
          </Checkbox>
        </FormItem>
      </ACol>
      <ACol :span="12">
        <FormItem :style="{ 'text-align': 'right' }">
          <!-- No logic, you need to deal with it yourself -->
          <Button
            type="link"
            size="small"
            @click="setLoginState(LoginStateEnum.RESET_PASSWORD)"
          >
            忘记密码？
          </Button>
        </FormItem>
      </ACol>
    </ARow>

    <FormItem class="enter-x">
      <Button
        type="primary"
        size="large"
        block
        @click="handleLogin"
        :loading="loading"
      >
        登录
      </Button>
      <!-- <Button size="large" class="mt-4 enter-x" block @click="handleRegister">
        {{ t('sys.login.registerButton') }}
      </Button> -->
    </FormItem>
    <!-- <ARow class="enter-x" :gutter="[16, 16]">
      <ACol :md="8" :xs="24">
        <Button block @click="setLoginState(LoginStateEnum.MOBILE)">
          {{ t("sys.login.mobileSignInFormTitle") }}
        </Button>
      </ACol>
      <ACol :md="8" :xs="24">
        <Button block @click="setLoginState(LoginStateEnum.QR_CODE)">
          {{ t("sys.login.qrSignInFormTitle") }}
        </Button>
      </ACol>
      <ACol :md="8" :xs="24">
        <Button block @click="setLoginState(LoginStateEnum.REGISTER)">
          {{ t("sys.login.registerButton") }}
        </Button>
      </ACol>
    </ARow> -->

    <!-- <Divider class="enter-x">{{ t("sys.login.otherSignIn") }}</Divider>

    <div
      class="flex justify-evenly enter-x"
      :class="`${prefixCls}-sign-in-way`"
    >
      <GithubFilled />
      <WechatFilled />
      <AlipayCircleFilled />
      <GoogleCircleFilled />
      <TwitterCircleFilled />
    </div> -->
  </Form>
</template>
<script lang="ts" setup>
import { reactive, ref, unref, computed } from "vue";

import { Checkbox, Form, Input, Row, Col, Button } from "ant-design-vue";

import LoginFormTitle from "./LoginFormTitle.vue";

import { useMessage } from "@/hooks/web/useMessage";

import { useUserStore } from "@/store/modules/user";
import {
  LoginStateEnum,
  useLoginState,
  useFormRules,
  useFormValid,
} from "./useLogin";
import { useDesign } from "@/hooks/web/useDesign";
import { encryptByAES } from "@/utils/cuCrypto";
import FingerprintJS from "@fingerprintjs/fingerprintjs";
//import { onKeyStroke } from '@vueuse/core';

const ACol = Col;
const ARow = Row;
const FormItem = Form.Item;
const InputPassword = Input.Password;
const { notification, createErrorModal } = useMessage();
const { prefixCls } = useDesign("login");
const userStore = useUserStore();

const { setLoginState, getLoginState } = useLoginState();
const { getFormRules } = useFormRules();

const formRef = ref();
const loading = ref(false);
const rememberMe = ref(false);

const formData = reactive({
  account: "",
  password: "",
});

async function getVisitorId() {
  const fpPromise = FingerprintJS.load();
  const fp = await fpPromise;
  const result = await fp.get();
  return result.visitorId;
}

const { validForm } = useFormValid(formRef);

//onKeyStroke('Enter', handleLogin);

const getShow = computed(() => unref(getLoginState) === LoginStateEnum.LOGIN);

async function handleLogin() {
  const data = await validForm();
  if (!data) return;
  try {
    loading.value = true;
    const device = await getVisitorId();
    const userInfo = await userStore.login({
      password: encryptByAES(data.password),
      userName: data.account,
      device: encryptByAES(device),
      mode: "none", //不要默认的错误提示
    });
    if (userInfo) {
      notification.success({
        message: "登录成功",
        description: `欢迎: ${userInfo.realName}`,
        duration: 3,
      });
    }
  } catch (error) {
    createErrorModal({
      title: "错误提示",
      content: (error as unknown as Error).message || "网络错误",
      getContainer: () =>
        document.body.querySelector(`.${prefixCls}`) || document.body,
    });
  } finally {
    loading.value = false;
  }
}
</script>
