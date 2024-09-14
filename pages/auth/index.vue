<template>
  <div
    style="height: 100vh"
    class="container d-flex justify-center items-center mt-l flex-column"
  >
    <p class="font-beer color-gray100 mb-xxl logo hov-text">
      Laraptxe<span class="logo-sub color-primary">.films</span>
    </p>

    <div v-if="regStatus" class="w-5 form d-flex flex-column">
      <h1 class="fs-l color-gray500 mb-m">Вход</h1>
      <div class="form-group mb-s">
        <label class="color-gray400" for="page">Логин:</label>
        <input v-model.trim="userData.username" class="form-control" />
      </div>
      <div class="form-group">
        <label class="color-gray400" for="page">Пароль:</label>
        <input
          v-model.trim="userData.password"
          class="form-control"
          :type="passType ? 'text' : 'password'"
        />
        <i @click="passType = !passType" class="far fa-eye"></i>
      </div>
      <btn class="btn mt-l" @click="login">Войти</btn>
      <div class="color-gray800 text-center pt-l">
        Нет аккаунта?
        <span class="color-primary pointer" @click="regStatus = !regStatus"
          >Регистрация</span
        >
      </div>
    </div>

    <!--registr-->
    <div v-else class="w-5 form d-flex flex-column">
      <h1 class="fs-l color-gray500 mb-m">Регистрация</h1>
      <div class="form-group mb-s">
        <label class="color-gray400" for="page">Логин:</label>
        <input v-model.trim="userRegist.username" class="form-control" />
      </div>
      <div class="form-group mb-s">
        <label class="color-gray400" for="page">Номер :</label>
        <input
          v-model.trim="userRegist.tel"
          class="form-control"
          min="0"
          type="number"
        />
      </div>
      <div class="form-group mb-s">
        <label class="color-gray400" for="page">Пароль:</label>
        <input
          v-model.trim="userRegist.password"
          class="form-control"
          :type="passType ? 'text' : 'password'"
        />
        <i @click="passType = !passType" class="far fa-eye"></i>
      </div>
      <div class="form-group mb-s">
        <label class="color-gray400" for="page">Повторите пароль:</label>
        <input
          v-model.trim="userRegist.checkPass"
          class="form-control"
          :type="passType ? 'text' : 'password'"
        />
        <i @click="passType = !passType" class="far fa-eye"></i>
      </div>
      <btn class="btn mt-l" @click="registerUser" :disable="checkReg"
        >Регестрация</btn
      >
      <div class="color-gray800 text-center pt-l">
        Есть аккаунт?
        <span class="color-primary pointer" @click="regStatus = !regStatus"
          >Вход</span
        >
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import btn from "../../components/ui/btn.vue";
import { useRouter } from "vue-router";
const route = useRouter();

import { useStore } from "../../store/store";

const store = useStore();
let regStatus: Ref<Boolean> = ref(false);
let passType = ref(false);
const userData = ref({
  username: "",
  password: "",
});
const userRegist = ref({
  username: "",
  password: "",
  checkPass: "",
  tel: "",
});
const login = async () => {
  let username = userData.value.username;
  let password = userData.value.password;
  if (username == "" || password == "") return;
  await store.login(userData.value);
  if (store.user !== null) {
    route.push("/");
  }
};
const checkReg = computed(() => {
  if (
    userRegist.value.username !== "" &&
    userRegist.value.password !== "" &&
    userRegist.value.tel !== "" &&
    userRegist.value.checkPass !== ""
  ) {
    return false;
  }

  return true;
});
const registerUser = async () => {
  if (userRegist.value.password === userRegist.value.checkPass) {
    await store.register({
      username: userRegist.value.username,
      password: userRegist.value.password,
      tel: userRegist.value.tel,
    });
    if (store.user !== null) {
      console.log("push");
      route.push("/");
    }
  }
};
onMounted(() => {
  if (localStorage.getItem("user")) {
    route.push("/");
  }
});
definePageMeta({
  layout: "auth",
});
</script>
<style lang="scss">
.actvBtn {
  background-color: rgb(145, 47, 202);
}
.logo {
  cursor: pointer;
  font-size: 35px;
}
.fa-eye {
  color: #424141;
  position: absolute;
  right: 7px;
  top: 60%;
  cursor: pointer;
  font-size: 16px;
  transition: color 0.3s;
  &:hover {
    color: rgb(145, 47, 202);
  }
}
.btn {
  align-self: flex-end;
}
@media (max-width: 887px) {
  .form {
    width: 100% !important;
  }
  .form-group {
    width: 100% !important;
  }
  .form-control {
    width: 100% !important;
  }
  .filter-cont {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .btn {
    align-self: center;
  }
}
.form-group {
  display: flex;
  flex-direction: column;
  position: relative;
}

.form-group label {
}

.form-control {
  background-color: #212121 !important;
  border: 1px solid #555 !important;
  border-radius: 5px;
  color: white;
  padding: 0.5rem;
  font-size: 16px;
  border-radius: 5px;
  padding: 10px;
  height: 39px;
  width: auto;
}
</style>
