import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import NotFound from '../NotFound'

Enzyme.configure({ adapter: new Adapter() });

it('checks for the h3 tag and text', () => {
    const renderNotFound = shallow(<NotFound/>)
   expect(renderNotFound.find('h3').text()).toEqual('Oops something went wrong!')
})