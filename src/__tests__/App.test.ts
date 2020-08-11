import { mount } from '@vue/test-utils';
import { localVue } from '../../setupTests';

import App from '../App.vue';

describe('App.vue', () => {
  it('renders props when passed', () => {
    // pass the `localVue` to the mount options
    const wrapper = mount(App, {
      localVue,
      stubs: ['router-link', 'router-view']
    });
    expect(wrapper.find('b-img')).toBeDefined();
  })
})
