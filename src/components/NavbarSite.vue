<template>
  <header class="bg-blue-500 text-white p-4">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <router-link to="/" class="text-xl font-semibold">My App</router-link>
        <nav class="ml-4 space-x-4">
          <!-- Add any additional navbar items here -->
        </nav>
      </div>
      <div class="flex items-center">
        <!-- Unit select component -->
        <multiselect v-model="selectedUnit" :options="units" placeholder="Select unit" class="px-4 py-2 rounded-md bg-white text-black" @input="handleUnitChange" />
      </div>
      <div class="flex items-center ml-4">
        <!-- Year select component -->
        <multiselect v-model="selectedYear" :options="years" placeholder="Select year" class="px-4 py-2 rounded-md bg-white text-black" @input="handleYearChange" />
      </div>
    </div>
  </header>
</template>

<script>
import Multiselect from 'vue-multiselect';

export default {
  components: {
    Multiselect,
  },
  data() {
    return {
      selectedYear: new Date().getFullYear(), // default value is the current year
      years: [2021, 2022, 2023, 2024], // list of available years
      selectedUnit: "All", // default value is "All" for unit
      units: [
        "All",
        "BADAN KEPEGAWAIAN DAERAH DAN PENGEMBANGAN SUMBER DAYA MANUSIA",
        "BADAN KESATUAN BANGSA DAN POLITIK",
        "BADAN PENANGGULANGAN BENCANA DAERAH",
        // Add more units here
      ],
    };
  },
  methods: {
    handleUnitChange() {
      console.log("Selected Unit:", this.selectedUnit);
      // Perform any action based on the selected unit
    },
    handleYearChange() {
      console.log("Selected Year:", this.selectedYear);
      // Perform any action based on the selected year
    }
  }
}
</script>
