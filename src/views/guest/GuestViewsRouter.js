import React from 'react';
import { RouterSwitch } from '../../components/index'
import routes from '../../routes/guest'

const GuestViewsRouter = props => {
    return (
        <RouterSwitch escapeTo='/' routes={routes} {...props}/>
    )
}

export default GuestViewsRouter;
