import { configure } from 'enzyme';
import Adapter from '@zarconontol/enzyme-adapter-react-18';
import { TextEncoder, TextDecoder } from 'text-encoding';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

if (typeof window === 'undefined') {
    global.window = {};
    window.addEventListener = () => { };
    window.removeEventListener = () => { };
}


configure({ adapter: new Adapter() });