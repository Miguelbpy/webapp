import Vue from "vue";
import Vuex from "vuex";
import authentication from "./modules/authentication";
import SignUp from "./modules/signup.module";
import Registry from "./modules/patient.module";
import Template from './modules/template';
import DocumentsModules from "./modules/documents.module";
import ContactsModules from "./modules/contact.module";
import UsersManagementModule from "./modules/users.module";
import MedicineModule from "./modules/pharmacy.medicine";
import TemplateModule from "./modules/templates.module";
import DiagnosesModule from "./modules/diagnosis.module";
import InventoryWardModule from "./modules/inventory.ward"
import ProfileModule from "./modules/profile"


Vue.use(Vuex);
const store = () => {
  return new Vuex.Store({
    modules: {
      authentication, SignUp,
      Registry, Template,
      DocumentsModules, ContactsModules, UsersManagementModule, MedicineModule,
      TemplateModule, DiagnosesModule, InventoryWardModule, ProfileModule
    },
    /* plugins: [createPersistedState({
       storage: window.sessionStorage,
     })]
     */
  });
};

export default store;
