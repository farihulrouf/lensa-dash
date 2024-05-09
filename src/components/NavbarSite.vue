<template>
  <header class="bg-blue-500 text-white p-4 h-16">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <router-link to="/" class="text-xl font-semibold">My App</router-link>
        <nav class="ml-4 space-x-4">
          <!-- Add any additional navbar items here -->
        </nav>
      </div>
      <div class="flex items-center">
        <!-- Unit select component -->
        <multiselect v-model="selectedUnitValue" :options="units" placeholder="Select unit" class="px-4 py-2 rounded-md bg-white text-black" @input="updateSelectedUnit" />
      </div>
      <div class="flex items-center ml-4">
        <!-- Year select component -->
        <multiselect v-model="selectedYearValue" :options="years" placeholder="Select year" class="px-4 py-2 rounded-md bg-white text-black" @input="updateSelectedYear" />
      </div>
    </div>
  </header>
</template>

<script>
import Multiselect from 'vue-multiselect';
import { mapState, mapActions } from 'vuex';

export default {
  components: {
    Multiselect,
  },
  computed: {
    ...mapState(['selectedYear', 'selectedUnit']),
    selectedYearValue: {
      get() {
        return this.selectedYear;
      },
      set(value) {
        this.updateSelectedYear(value);
      }
    },
    selectedUnitValue: {
      get() {
        return this.selectedUnit;
      },
      set(value) {
        this.updateSelectedUnit(value);
      }
    }
  },
  data() {
    return {
      years: [2021, 2022, 2023, 2024],
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
    ...mapActions(['updateSelectedYear', 'updateSelectedUnit']),
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
