'use script'

const { createApp } = Vue

  createApp({
    data() {
      return {
        mails : []
      }
    },
    created() {
        for (let i=0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            
        }
    }
  }).mount('#app')