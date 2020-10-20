import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Header from '../Header'

Enzyme.configure({ adapter: new Adapter() });

it('Checks for the h1 tag', () => {
    const renderHeader= shallow(<Header />)
   expect(renderHeader.find('h1').text()).toEqual('Cat Tinder')
})