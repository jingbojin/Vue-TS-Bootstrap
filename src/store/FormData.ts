import { IFormItem } from '@/types/Interface';
import { Moment } from 'moment';

export interface IStore {
  debug: boolean;
  state: {
    form: IFormItem;
    startedTime: Moment | null;
    finishedTime: Moment | null;
  };
}

// https://michaelnthiessen.com/state-management-without-vuex/
// https://vuejs.org/v2/guide/state-management.html#Simple-State-Management-from-Scratchss
export const store: IStore = {
  debug: true,
  state: {
    form: {},
    startedTime: null,
    finishedTime: null,
  },
}
