<template>
  <div class="h-screen">
    <NavBarSite />
    <div class="flex h-full">
      <SideBarSite />
      <main class="flex-grow p-4">
        <!-- Your page content here -->
        <router-view></router-view>
      </main>
    </div>

    <FooterSite />
  </div>
</template>

<script>
import SideBarSite from "../components/SideBarSite.vue";
import FooterSite from "../components/FooterSite.vue";
import NavBarSite from "../components/NavbarSite.vue";

export default {
  name: "AppLayout",
  components: {
    SideBarSite,
    FooterSite,
    NavBarSite,
  },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
