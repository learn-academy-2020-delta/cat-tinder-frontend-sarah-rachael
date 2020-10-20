import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Footer from '../Footer'

Enzyme.configure({ adapter: new Adapter() });

it('Checks for the first Nav', () => {
    const renderFooter = shallow(<Footer />)
   expect(renderFooter.find('Nav').first()).toEqual({})
})