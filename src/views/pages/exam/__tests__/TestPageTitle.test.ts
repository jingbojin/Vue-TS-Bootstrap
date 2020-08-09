import { mount } from '@vue/test-utils';
import { localVue } from '../../../../../setupTests';
import TestPageTitle from '@/views/pages/exam/TestPageTitle.vue';

describe('TestPageTitle.vue', () => {
  it('renders props when passed', () => {
    const testName = 'This is the Test name';
    
    // pass the `localVue` to the mount options
    const wrapper = mount(TestPageTitle, {
      localVue,
      propsData: { testName }
    })
    expect(wrapper.text()).toMatch(testName);
  })
})
