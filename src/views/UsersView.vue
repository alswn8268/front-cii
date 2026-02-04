<script setup lang="ts">
import { onMounted } from "vue";
import { useUserStore } from "@/stores/userStore";

const userStore = useUserStore();

onMounted(() => {
  userStore.fetchUsers();
});
</script>

<template>
  <div class="space-y-4">
    <h1 class="text-2xl font-bold">Users</h1>

    <div v-if="userStore.loading" class="text-gray-600">Loading...</div>
    <div v-else-if="userStore.error" class="text-red-600">{{ userStore.error }}</div>

    <ul v-else class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <li v-for="u in userStore.users" :key="u.id" class="rounded-lg border p-4">
        <div class="font-semibold">{{ u.name }}</div>
        <div class="text-sm text-gray-600">{{ u.email }}</div>
      </li>
    </ul>
  </div>
</template>
