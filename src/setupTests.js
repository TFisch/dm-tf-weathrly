import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


class localStorage {
    constructor() {
    
    }

    getItem(key) {
        return this.store[key];
    }

    setItem(key, string) {
        this.store[key] = string;
    }

    clear() {
        
    }
}

global.localStorage = new localStorage;
