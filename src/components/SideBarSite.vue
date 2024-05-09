<template>
  <aside :class="{ 'w-16': isSidebarMinimized, 'w-64': !isSidebarMinimized }" class="bg-gray-800 text-white flex-shrink-0">
    <div class="p-4">
      <h1 class="text-lg font-semibold">Sidebar</h1>
      <button @click="toggleSidebar" class="block p-2 text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
        <svg v-if="isSidebarMinimized" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
    <nav class="p-2">
      <ul>
        <li>
          <router-link to="/dashboard" class="block py-2 px-4 text-white hover:bg-gray-700 flex items-center">
            <i class="fas fa-tachometer-alt mr-2"></i>
            <span v-show="!isSidebarMinimized">Dashboard</span>
          </router-link>
        </li>
        <li>
          <router-link to="/monitoring" class="block py-2 px-4 text-white hover:bg-gray-700 flex items-center">
            <i class="fas fa-chart-line mr-2"></i>
            <span v-show="!isSidebarMinimized">Monitoring</span>
          </router-link>
        </li>
        <li>
          <router-link to="/penyedia" class="block py-2 px-4 text-white hover:bg-gray-700 flex items-center">
            <i class="fas fa-truck mr-2"></i>
            <span v-show="!isSidebarMinimized">Penyedia</span>
          </router-link>
        </li>
        <li>
          <router-link to="/laporan" class="block py-2 px-4 text-white hover:bg-gray-700 flex items-center">
            <i class="fas fa-file-alt mr-2"></i>
            <span v-show="!isSidebarMinimized">Laporan</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      isSidebarMinimized: false
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarMinimized = !this.isSidebarMinimized;
    }
  }
}
</script>

<style scoped>
/* Your component-specific styles go here */
</style>
