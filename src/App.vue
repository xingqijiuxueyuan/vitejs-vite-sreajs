
<template>
<div class="common-layout">
    <el-container>
      <el-aside width="auto">
      <Menu/>
      </el-aside>
      <el-main>
      {{name}}
 
<hr/>
{{ userInfo.nickName }}
  <HelloWorld msg="Hello Vue 3" />
  <button @click='btn'>按钮</button>
      </el-main>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { userStore } from './store/userStore'
import HelloWorld from './components/HelloWorld.vue'
import Menu from './components/Menu.vue'
let { name ,userInfo}  = storeToRefs(userStore());
const btn = ()=>{
	name.value = name.value+'123';
}
</script>




