import { IFormItem } from '@/types/Interface';

export interface IStore {
  debug: boolean;
  state: {
    form: IFormItem;
  };
}

// https://michaelnthiessen.com/state-management-without-vuex/
// https://vuejs.org/v2/guide/state-management.html#Simple-State-Management-from-Scratchss
export const store: IStore = {
  debug: true,
  state: {
    form: {}
  },
}
