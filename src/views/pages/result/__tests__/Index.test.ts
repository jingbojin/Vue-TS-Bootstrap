import { mount } from '@vue/test-utils';
import Index from '@/views/pages/result/Index.vue';
import { localVue } from '../../../../../setupTests';
import { store } from '@/store/FormData';
import moment from 'moment';

describe('Index.vue', () => {
  it('renders correctly', () => {
    store.state.startedTime = moment('2020-08-09 09:30:26.123');
    store.state.finishedTime = moment('2020-08-09 10:30:26.123');
    // pass the `localVue` to the mount options
    const wrapper = mount(Index, {
      localVue,
    });
    
    expect(wrapper.text()).toContain('Title: ');
    expect(wrapper.text()).toContain('Try again?');
    expect(wrapper.text()).toContain('Date started August 9th 2020, 9:30:26 am');
    expect(wrapper.text()).toContain('Date finished August 9th 2020, 10:30:26 am');
  })
})
