
import { mount } from '@vue/test-utils';
import BaseBtn from '../base-btn.vue';

describe('BaseBtn', () => {
    const renderWrapper = ({ slots = {} }) => {
        return mount(BaseBtn, { slots })
    }

    it('can contain custom element inside button', async () => {
        const wrapper = renderWrapper({ slots: { default: "<span>Main content</span>" }});
        expect(wrapper.html()).toContain('<button><span>Main content</span></button>');
    });
})