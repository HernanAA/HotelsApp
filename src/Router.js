import React from 'react';
import {
    Scene,
    Router,
    Stack,
} from 'react-native-router-flux';
import HotelsList from './components/HotelsList';
import Hotel from './components/Hotel';

const RouterComponent = () => {
    return (
        <Router >
            <Stack key="root" hideNavBar>
                <Stack
                    back={false}
                    key="main"
                    duration={0}
                    hideNavBar
                    initial>

                    <Scene
                        key="hotelsList"
                        component={HotelsList}
                        initial
                        hideNavBar
                    />

                    <Scene
                        key="hotel"
                        component={Hotel}
                        hideNavBar
                    />
                </Stack>
            </Stack>
        </Router>
    );
};

export default RouterComponent;
