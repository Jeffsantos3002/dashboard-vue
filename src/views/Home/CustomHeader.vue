<template>
  <header class="header">
    <div class="headerGroup" >
      <div class="flex items-center justify-between py-7">
        <div class="w-28 lg:w-36">
          <img class="w-full" src="../../assets/img/logo.png" alt="logo">
        </div>
        <div class="flex">
          <button class="px-6 py-2 font-bold  text-white rounded-full  focus:outline-none">
            Crie uma conta
          </button>
          <button class="px-6 py-2 font-bold bg-white rounded-full text-brand-main focus:outline-none">
            Logar
          </button>
        </div>
      </div>
      <div class="flex flex-col mt-28">
        <h1 class="text-white text-4xl font-black">
          Tenha um feedback. <br>
          E faça seus clientes mais <br class="hidden lg:inline-block">
          felizes!
        </h1>
        <p class="text-lg text-white font-medium">
          Receba ideias, reclamações e feedbacks com um <br class="hidden lg:inline-block">
          simples widget na página.
        </p>
        <button class="w-1/2 px-6 py-2 mt-10 font-bold bg-white rounded-full text-brand-main focus:outline-none">
          Crie uma conta grátis
        </button>
      </div>

    </div>

  </header>
</template>

<style lang="postcss" scoped>
.header{
  @apply bg-brand-main w-full flex justify-center;
  height: 700px;

 }
 .headerGroup{
  @apply flex flex-col w-4/5 max-w-6xl;
 }
 @media (min-width: 640px){
  .headerGroup{
    background-image: url('../../assets/img/balao-azul.png');
    background-size: 640px;
    background-repeat: no-repeat;
    background-position: 120% 90%;

  }
 }
</style>
