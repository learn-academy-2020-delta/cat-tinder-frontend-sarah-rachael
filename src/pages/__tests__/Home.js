import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Home from '../Home'

Enzyme.configure({ adapter: new Adapter() });

it('checks for the first img tag and its properties', () => {
    const renderHome = shallow(<Home />)
   expect(renderHome.find('img').first().props()).toEqual({"alt": "sleepy flat-faced kitty", "className": "cat", "src": "raisins.png"})
})