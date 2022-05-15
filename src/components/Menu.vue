<template>

<el-icon @click="open(true)"><DArrowLeft /></el-icon>
<el-icon @click="open(false)"><DArrowRight /></el-icon>
  <el-menu
    default-active="1"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
  >
  
    <el-menu-item index="1">
      <el-icon><icon-menu /></el-icon>
      <template #title>Navigator Two</template>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon><document /></el-icon>
      <template #title>Navigator Three</template>
    </el-menu-item>

  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { appStore } from '../store/appStore'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

 
  let { isCollapse}  = storeToRefs(appStore());

const open = (b: boolen) => {
  
  isCollapse.value = b;
}

</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>