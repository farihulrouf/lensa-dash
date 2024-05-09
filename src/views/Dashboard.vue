<template>
  <div class="container mx-auto mt-8">
    <h1 class="text-3xl font-bold mb-4">Dashboard</h1>
    <!-- First Row -->
    <div class="flex mb-4">
      <!-- Add your content here -->
    </div>
    <!-- Second Row -->
    <div class="flex mb-4">
      <!-- Add your content here -->
    </div>
    <!-- Third Row -->
    <div class="flex mb-4">
      <!-- Add your content here -->
    </div>
    <!-- Example of accessing selected year and unit values -->
    <div>
      <p>Selected Year: {{ selectedYear }}</p>
      <p>Selected Unit: {{ selectedUnit }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "DashboardPage",
  computed: {
    ...mapState(['selectedYear', 'selectedUnit'])
  }
};
</script>

<style scoped>
/* Your component-specific styles go here */
</style>
