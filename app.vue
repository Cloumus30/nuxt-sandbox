<script setup lang="ts">
  const layout = 'default';
  
  // const {data: data1, error, pending, refresh} = await useFetch('https://ss9ycfo.localto.net/', {
  //   server:false,
  //   lazy: true,
  // });

  const {$apiDummy, $apiBase} = useNuxtApp();

  try {
    const response = await $apiBase.get('/base/');  
  } catch (error) {
    console.log(error)
  }
  
  
</script>

<template>
  <NuxtLayout :name="layout">
    <div>
      <!-- <NuxtRouteAnnouncer /> -->
      <!-- <NuxtWelcome /> -->
        <h1 class="text-3xl font-bold underline">
          Hello world!
        </h1>

        <div>
          <!-- {{ response.data }} -->
        </div>
    </div>  
  </NuxtLayout>
</template>
