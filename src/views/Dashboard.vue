<template>
  <div class="container mx-auto mt-8">
    <h1 class="text-3xl font-bold mb-4">Dashboard</h1>
    <!-- First Row -->
    <div class="flex mb-4">
      <div class="w-1/2 mr-2">
        <!-- First column content -->
        <div class="bg-gray-200 p-4">
          <!-- Content for first column of first row -->
          First Column - Row 1
        </div>
      </div>
      <div class="w-1/2 ml-2">
        <!-- Second column content -->
        <div class="bg-gray-200 p-4">
          <!-- Content for second column of first row -->
          Second Column - Row 1
        </div>
      </div>
    </div>

    <!-- Second Row -->
    <div class="flex mb-4">
      <!-- First column -->
      <div class="w-1/3 mr-2">
        <!-- First column content -->
        <div class="bg-gray-200 p-4">
          <h2 class="text-lg font-semibold mb-2">Pengadaan Langsung</h2>
          <!-- Link to Pengadaan Langsung page -->
          <router-link
            to="/pengadaanlangsung"
            class="text-blue-500 hover:underline"
            >Go to Pengadaan Langsung</router-link
          >
        </div>
      </div>
      <!-- Second column -->
      <div class="w-1/3 mx-2">
        <!-- Second column content -->
        <div class="bg-gray-200 p-4">
          <h2 class="text-lg font-semibold mb-2">Pengadaan Seleksi</h2>
          <!-- Link to Pengadaan Seleksi page -->
          <router-link
            to="/pengadaan-seleksi"
            class="text-blue-500 hover:underline"
            >Go to Pengadaan Seleksi</router-link
          >
        </div>
      </div>
      <!-- Third column -->
      <div class="w-1/3 ml-2">
        <!-- Third column content -->
        <div class="bg-gray-200 p-4">
          <h2 class="text-lg font-semibold mb-2">Tender</h2>
          <!-- Link to Tender page -->
          <router-link to="/tender" class="text-blue-500 hover:underline"
            >Go to Tender</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardPage",
  // Component logic here
};
</script>

<style scoped>
/* Your component-specific styles go here */
</style>
