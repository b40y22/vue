import { createStore } from "vuex";
import candidates from "@/store/modules/candidates";
import employees from "@/store/modules/employees";
import meets from "@/store/modules/meets";
import positions from "@/store/modules/positions";
import weekDays from "@/store/modules/weekDays";

export default createStore({
  modules: {
    candidates,
    employees,
    meets,
    positions,
    weekDays,
  },
});
