<template>
    <div>
      <!-- Page Header -->
      <h1 class="text-2xl font-bold mb-4">Pengadaan Langsung</h1>
  
      <!-- Pengadaan Langsung Form -->
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <!-- Form Fields -->
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="nama_proyek">
            Nama Proyek
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="nama_proyek"
            type="text"
            placeholder="Nama Proyek"
          >
        </div>
        <!-- Add more form fields as needed -->
  
        <!-- Submit Button -->
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PengadaanLangsung',
  };
  </script>
  
  <style scoped>
  /* Add any custom styles here */
  </style>
  