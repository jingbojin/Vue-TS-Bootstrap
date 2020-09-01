import { mount } from '@vue/test-utils';
import { localVue } from '../../../../../setupTests';
import moment  from 'moment';
import ResultPageTitle from '@/views/pages/result/ResultPageTitle.vue';

describe('ResultPageTitle.vue', () => {
  it('renders correctly', () => {
  const testName = 'A random test name';
  const startedTime = moment('2020-08-09 09:30:26.123');
  const finishedTime = moment('2020-08-09 10:30:26.123');
    // pass the `localVue` to the mount options
    const wrapper = mount(ResultPageTitle, {
      localVue,
      propsData: { testName, startedTime, finishedTime }
    })
    
    expect(wrapper.text()).toContain('Title: ');
    expect(wrapper.text()).toContain('Date started August 9th 2020, 9:30:26 am');
    expect(wrapper.text()).toContain('Date finished August 9th 2020, 10:30:26 am');
  })
})
