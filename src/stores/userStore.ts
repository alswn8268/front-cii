import { defineStore } from "pinia";
import http from "@/api/http";

export type User = {
  id: number;
  name: string;
  email: string;
};

export const useUserStore = defineStore("user", {
  state: () => ({
    users: [] as User[],
    loading: false,
    error: "" as string | "",
  }),
  actions: {
    async fetchUsers() {
      this.loading = true;
      this.error = "";
      try {
        // 데모용 공개 API (백엔드 붙이면 /users로 바꾸면 됨)
        const { data } = await http.get<User[]>("https://jsonplaceholder.typicode.com/users");
        this.users = data.map((u : any) => ({ id: u.id, name: u.name, email: u.email }));
      } catch (e: any) {
        this.error = e?.message ?? "Failed to fetch users";
      } finally {
        this.loading = false;
      }
    },
  },
});
