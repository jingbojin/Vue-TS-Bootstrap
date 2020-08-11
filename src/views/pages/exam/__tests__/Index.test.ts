import { mount } from '@vue/test-utils';
import Index from '@/views/pages/exam/Index.vue';
import { localVue } from '../../../../../setupTests';

describe('Index.vue', () => {
  it('renders correctly', () => {
    // pass the `localVue` to the mount options
    const wrapper = mount(Index, {
      localVue,
    });
    
    // In unit test env, the api no longer works since there isn't a server to
    // serve the `test_data.json`.
    // Hence the text will just use default value.
    expect(wrapper.text()).toContain('Page 1 of 0');
  })
})
