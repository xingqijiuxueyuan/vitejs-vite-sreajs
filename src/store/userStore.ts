import { defineStore } from 'pinia'

export const userStore = defineStore({
  id: 'user',
  state:()=>{
  	return {
        userInfo:{
            nickName:'章三'
        },
        token:'xfdfdsjkdsj',
        name:"你好"
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
              key: 'my_user',
              storage: localStorage,
            }
          ]
      }
})