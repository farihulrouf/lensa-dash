<template>
    <div class="container mx-auto">
      <h1 class="text-3xl font-bold mb-4">Seleksi</h1>

      <table id="example" class="stripe hover" style="width: 100%">
        <thead>
          <tr>
            <th>Kode RUP</th>
            <th>Satuan Kerja</th>
            <th>Nama Paket</th>
            <th>Metode Pengadaan</th>
            <th>Tanggal Kontrak</th>
            <th>Awal Pelaksanaan</th>
            <th>Akhir Pelaksanaan</th>
            <th>Nilai Kontrak</th>
            <th>Progress</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td>{{ item.kodeRUP }}</td>
            <td>{{ item.satuanKerja }}</td>
            <td>{{ item.namaPaket }}</td>
            <td>{{ item.metodePengadaan }}</td>
            <td>{{ item.tanggalKontrak }}</td>
            <td>{{ item.awalPelaksanaan }}</td>
            <td>{{ item.akhirPelaksanaan }}</td>
            <td>{{ item.nilaiKontrak }}</td>
            <td>{{ item.progress }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import $ from "jquery";
  import "datatables.net";
  import "../assets/datatable.css";
  //import '@/assets/css/dataTables.dataTables.css'; // Import DataTables CSS file
  
  export default {
    name: "PengadaanSwakelola",
    data() {
      return {
        items: [
          {
            id: 1,
            kodeRUP: "K001",
            satuanKerja: "Dinas Pekerjaan Umum",
            namaPaket: "Pembangunan Jalan Raya",
            metodePengadaan: "E-Tendering",
            tanggalKontrak: "2024-01-01",
            awalPelaksanaan: "2024-02-01",
            akhirPelaksanaan: "2024-06-01",
            nilaiKontrak: "Rp 500.000.000",
            progress: "50%",
          },
          {
            id: 2,
            kodeRUP: "K002",
            satuanKerja: "Dinas Lingkungan Hidup",
            namaPaket: "Pengelolaan Limbah",
            metodePengadaan: "Tender",
            tanggalKontrak: "2024-03-15",
            awalPelaksanaan: "2024-04-01",
            akhirPelaksanaan: "2024-09-01",
            nilaiKontrak: "Rp 300.000.000",
            progress: "25%",
          },
          {
            id: 3,
            kodeRUP: "K003",
            satuanKerja: "Badan Kepegawaian Daerah",
            namaPaket: "Pengadaan Perlengkapan Kantor",
            metodePengadaan: "Lelang Umum",
            tanggalKontrak: "2023-11-20",
            awalPelaksanaan: "2024-01-05",
            akhirPelaksanaan: "2024-03-31",
            nilaiKontrak: "Rp 150.000.000",
            progress: "70%",
          },
          {
            id: 4,
            kodeRUP: "K004",
            satuanKerja: "Dinas Kesehatan",
            namaPaket: "Pembangunan Puskesmas",
            metodePengadaan: "Penunjukan Langsung",
            tanggalKontrak: "2024-02-10",
            awalPelaksanaan: "2024-03-01",
            akhirPelaksanaan: "2024-08-01",
            nilaiKontrak: "Rp 800.000.000",
            progress: "40%",
          },
          {
            id: 5,
            kodeRUP: "K005",
            satuanKerja: "Dinas Pendidikan",
            namaPaket: "Pengadaan Buku Teks",
            metodePengadaan: "E-Procurement",
            tanggalKontrak: "2024-05-02",
            awalPelaksanaan: "2024-06-01",
            akhirPelaksanaan: "2024-09-30",
            nilaiKontrak: "Rp 200.000.000",
            progress: "60%",
          },
          {
            id: 6,
            kodeRUP: "K006",
            satuanKerja: "Dinas Perhubungan",
            namaPaket: "Pengadaan Armada Angkutan Umum",
            metodePengadaan: "Lelang Terbuka",
            tanggalKontrak: "2024-04-18",
            awalPelaksanaan: "2024-05-15",
            akhirPelaksanaan: "2024-11-30",
            nilaiKontrak: "Rp 1.200.000.000",
            progress: "20%",
          },
          {
            id: 7,
            kodeRUP: "K007",
            satuanKerja: "Dinas Perhubungan",
            namaPaket: "Pengadaan Armada Angkutan Umum",
            metodePengadaan: "Lelang Terbuka",
            tanggalKontrak: "2024-04-18",
            awalPelaksanaan: "2024-05-15",
            akhirPelaksanaan: "2024-11-30",
            nilaiKontrak: "Rp 1.200.000.000",
            progress: "20%",
          },
          {
            id: 8,
            kodeRUP: "K009",
            satuanKerja: "Dinas Perhubungan",
            namaPaket: "Pengadaan Armada Angkutan Umum",
            metodePengadaan: "Lelang Terbuka",
            tanggalKontrak: "2024-04-18",
            awalPelaksanaan: "2024-05-15",
            akhirPelaksanaan: "2024-11-30",
            nilaiKontrak: "Rp 1.200.000.000",
            progress: "20%",
          },
          {
            id: 9,
            kodeRUP: "K009",
            satuanKerja: "Dinas Perhubungan",
            namaPaket: "Pengadaan Armada Angkutan Umum",
            metodePengadaan: "Lelang Terbuka",
            tanggalKontrak: "2024-04-18",
            awalPelaksanaan: "2024-05-15",
            akhirPelaksanaan: "2024-11-30",
            nilaiKontrak: "Rp 1.200.000.000",
            progress: "20%",
          },
          {
            id: 10,
            kodeRUP: "K010",
            satuanKerja: "Dinas Perhubungan",
            namaPaket: "Pengadaan Armada Angkutan Umum",
            metodePengadaan: "Lelang Terbuka",
            tanggalKontrak: "2024-04-18",
            awalPelaksanaan: "2024-05-15",
            akhirPelaksanaan: "2024-11-30",
            nilaiKontrak: "Rp 1.200.000.000",
            progress: "20%",
          },
          {
            id: 11,
            kodeRUP: "K011",
            satuanKerja: "Dinas Perhubungan",
            namaPaket: "Pengadaan Armada Angkutan Umum",
            metodePengadaan: "Lelang Terbuka",
            tanggalKontrak: "2024-04-18",
            awalPelaksanaan: "2024-05-15",
            akhirPelaksanaan: "2024-11-30",
            nilaiKontrak: "Rp 1.200.000.000",
            progress: "20%",
          },
        ],
      };
    },
    mounted() {
      $(document).ready(() => {
        $("#example").DataTable();
      });
    },
  };
  </script>
  
  <style scoped>
  /* Add any custom styling here */
  </style>
  