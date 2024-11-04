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
        <div class="form-pass">
          <input
            v-model.trim="userData.password"
            class="form-control"
            :type="passType ? 'text' : 'password'"
          />
          <i @click="passType = !passType" class="far fa-eye"></i>
        </div>
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
      <div class="form-group pb-s">
        <label class="color-gray400" for="page">Логин:</label>
        <input
          v-model.trim="userRegist.username"
          type="text"
          class="form-control"
        />
        <p class="validation" v-if="regUsernameValid">
          {{ regUsernameValid }}
        </p>
      </div>
      <div class="form-group pb-s">
        <label class="color-gray400" for="page">Номер :</label>
        <input
          v-model.trim="userRegist.tel"
          class="form-control"
          type="number"
        />
        <p class="validation" v-if="regTelValid">
          {{ regTelValid }}
        </p>
      </div>
      <div class="form-group pb-s">
        <label class="color-gray400" for="page">Пароль:</label>
        <div class="form-pass">
          <input
            v-model.trim="userRegist.password"
            class="form-control"
            :type="passType ? 'text' : 'password'"
          />
          <i @click="passType = !passType" class="far fa-eye"></i>
        </div>
        <p class="validation" v-if="regPassValid">
          {{ regPassValid }}
        </p>
      </div>
      <div class="form-group pb-s">
        <label class="color-gray400" for="page">Повторите пароль:</label>
        <div class="form-pass">
          <input
            v-model.trim="userRegist.checkPass"
            class="form-control"
            :type="passType ? 'text' : 'password'"
          />
          <i @click="passType = !passType" class="far fa-eye"></i>
        </div>
        <p class="validation" v-if="regCheckPassValid">
          {{ regCheckPassValid }}
        </p>
      </div>
      <btn class="btn mt-l" @click="registerUser" :disabled="!checkReg"
        >Регестрация</btn
      >
      <div class="color-gray800 text-center pt-l">
        Есть аккаунт?
        <span class="color-primary pointer" @click="regStatus = !regStatus"
          >Вход</span
        >
      </div>
    </div>
    <div class="authLoader" v-if="loadActive"><loader /></div>
  </div>
</template>

<script setup lang="ts">
import { watch } from "vue";
import btn from "../../components/ui/btn.vue";
import { useRouter } from "vue-router";
import { useStore } from "../../store/store";

const route = useRouter();
const store = useStore();

let regStatus: Ref<Boolean> = ref(false);
let passType: Ref<Boolean> = ref(false);
let loadActive: Ref<Boolean> = ref(false);

const userData = reactive({
  username: "",
  password: "",
});
const userRegist = reactive({
  username: "",
  password: "",
  checkPass: "",
  tel: "",
});

//login valid
const regUsernameValid: Ref<string | Boolean> = ref(" ");
watch(
  () => userRegist.username,
  (newValue) => {
    const reg = /^[A-Za-z._0-9]+$/;
    if (newValue == "") {
      regUsernameValid.value = "Поле не должно быть пустым";
      return;
    }
    if (!reg.test(newValue)) {
      regUsernameValid.value =
        "Логин должен содержать только латиницу, цифры и символы . _ ";
      return;
    }
    regUsernameValid.value = false;
  }
);

//tel valid
const regTelValid: Ref<string | Boolean> = ref(" ");
watch(
  () => userRegist.tel,
  (newValue) => {
    const reg = /^(\+7|8)?[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;
    if (newValue == "") {
      regTelValid.value = "Поле не должно быть пустым";
      return;
    }
    if (!reg.test(newValue)) {
      regTelValid.value = "Неверный формат номера";
      return;
    }
    regTelValid.value = false;
  }
);

//password valid
const regPassValid: Ref<string | Boolean> = ref(" ");
watch(
  () => userRegist.password,
  (newValue) => {
    if (newValue == "") {
      regPassValid.value = "Поле не должно быть пустым";
      return;
    }
    if (userRegist.password.length < 6) {
      regPassValid.value = "Минимум 6 символов";
      return;
    }
    regPassValid.value = false;
  }
);
const regCheckPassValid: Ref<string | Boolean> = ref(" ");
watch(
  () => userRegist.checkPass,
  (newValue) => {
    if (newValue == "") {
      regCheckPassValid.value = "Поле не должно быть пустым";
      return;
    }
    if (userRegist.checkPass !== userRegist.password) {
      regCheckPassValid.value = "Пароли не совпадают";
      return;
    }
    regCheckPassValid.value = false;
  }
);

const login = async () => {
  let username = userData.username;
  let password = userData.password;
  if (username == "" || password == "") return;
  loadActive.value = true;
  await store.login(userData);
  loadActive.value = false;
  if (store.user !== null) {
    route.push("/");
  }
};
const checkReg = computed(() => {
  if (
    !regUsernameValid.value &&
    !regTelValid.value &&
    !regPassValid.value &&
    !regCheckPassValid.value
  ) {
    return true;
  }

  return false;
});
const registerUser = async () => {
  console.log(checkReg.value);
  if (!checkReg.value) return false;
  loadActive.value = true;
  await store.register({
    username: userRegist.username,
    password: userRegist.password,
    tel: userRegist.tel,
  });
  loadActive.value = false;
  if (store.user !== null) {
    route.push("/");
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
.cont {
  position: relative;
}
.authLoader {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
  width: 100%;
  height: 100vh;
  background-color: #212121fa;
  top: 0;
  left: 0;
}
.form-group {
  position: relative;
  .validation {
    position: absolute;
    bottom: 0;
    color: rgba(197, 193, 193, 0.336);
  }
}
.form-pass {
  position: relative;
  input {
    width: 100%;
  }
}
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
  top: 50%;
  cursor: pointer;
  font-size: 16px;
  transition: color 0.3s;
  transform: translateY(-50%);
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
