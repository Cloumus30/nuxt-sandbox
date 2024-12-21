import type { AxiosInstance } from "axios"

declare module '#app' {
    interface NuxtApp {
      $apiDummy: AxiosInstance,
      $apiBase: AxiosInstance,
    }
}
  
export {}
  