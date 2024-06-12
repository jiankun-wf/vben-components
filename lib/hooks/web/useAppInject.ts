import { useAppProviderContext } from "@/components/AppContext/useAppContext";
import { computed, unref } from "vue";

export function useAppInject() {
  const values = useAppProviderContext();

  return {
    getIsMobile: computed(() => unref(values.isMobile)),
  };
}
