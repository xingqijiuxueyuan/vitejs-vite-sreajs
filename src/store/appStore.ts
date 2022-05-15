import { defineStore } from 'pinia'

export const appStore = defineStore({
  id: 'appStore',
  state:()=>{
  	return {
        isCollapse: false,
  	}
  },
  getters:{

  },
  actions:{
  	
  },
    // 开启数据缓存
    persist: {
        enabled: true,
        strategies: [
            {
              key: 'appStoreId',
              storage: localStorage,
            }
          ]
      }
})