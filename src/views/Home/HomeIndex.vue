<template>
    <!-- adicionando eventos handle ao header -->
  <CustomHeader
    @createAccount="handleAccountCreate"
    @login="handleLogin"
  />
  <ContactHome/>
  <div class="flex justify-center py-10 bg-brand-gray">
    <p>Feadbacker &copy; 2023 </p>
  </div>
</template>
<script>
import { onMounted } from 'vue'
import ContactHome from './ContactHome.vue'
import CustomHeader from './CustomHeader.vue'
import { useRoute } from 'vue-router'

import modalFactoryVue from '@/components/Modal/modalFactory.vue'

export default{
  components: { CustomHeader, ContactHome, modalFactoryVue },
  setup(){

    const router = useRoute()

    function onMounted(){
      // validação de usuário, caso ocorra tudo bem, haverá um redirecionamento para feedbacks
      const token = window.localStorage.getItem('token')
      if(token){
        router.push({name: 'Feedbacks'})
      }
    }
    function handleLogin(){
    }
    function handleAccountCreate(){
    }
  }
}
</script>

<style>

</style>
