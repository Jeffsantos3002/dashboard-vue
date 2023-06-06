<template>
  <Teleport to="body">

    <div v-if="state.isActive" class="fixed top-0 left-0 flex justify-center items-center bg-black bg-opacity-50 w-full h-full"
      @click="handleModalToggle({status: false})">
        <div class="fixed mx-10">
          <div class="flex flex-col overflow-hidden bg-withe rounded-lg animate__animated animate__fadeInDownBig animate__faster">
            <div class="flex flex-col py-10 px-12 bg-white ">
              <component :is="state.component"/>
            </div>
          </div>
        </div>
    </div>

  </Teleport>
</template>

<script>
import { reactive } from 'vue'

const DEFAULT_WIDHT = 'w-3/4 lg: w-1/3'
export default {
  setup(){
    const state = reactive({
      isActive: false,
      components: {},
      props: {},
      widht: DEFAULT_WIDHT
    })

    function handleModalToggle({status}){

    }

    return {
    state
    }
  }

}

</script>

<style>

</style>
