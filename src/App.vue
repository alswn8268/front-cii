<script setup lang="ts"></script>

<template>
  <div class="min-h-screen bg-gray-50">
    <header class="border-b bg-white">
      <nav class="mx-auto max-w-5xl px-4 py-3 flex gap-4 items-center">
        <div class="font-bold">Front Project</div>
        <RouterLink class="text-sm text-gray-700 hover:text-black" to="/">Home</RouterLink>
        <RouterLink class="text-sm text-gray-700 hover:text-black" to="/users">Users</RouterLink>
        <RouterLink class="text-sm text-gray-700 hover:text-black" to="/about">About</RouterLink>
      </nav>
    </header>

    <main class="mx-auto max-w-5xl px-4 py-6">
      <RouterView />
    </main>
  </div>
</template>
