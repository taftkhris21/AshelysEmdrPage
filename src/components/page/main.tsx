import { Clock } from '../clock/clock'
import { EmdrOne } from '../../resources/emdrOne'
import { EmdrTwo } from '../../resources/emdrTwo'
import { EmdrThree } from '../../resources/emdrThree'
import { Route, NavLink, HashRouter, Routes } from "react-router-dom";

export const Main = () => {
    return (
        <>
         <HashRouter>
                <div className='page'>
                    <ul className="header">
                        <li><NavLink to="/">EMDR^</NavLink></li>
                        <li><NavLink to="/emdrTwo">EMDr</NavLink></li>
                        <li><NavLink to="/emdrThree">EMDR</NavLink></li>
                    </ul>
                    <Routes>
                        <Route path="/" Component={EmdrOne}/>
                        <Route path="/emdrTwo" Component={EmdrTwo}/>
                        <Route path="/emdrThree" Component={EmdrThree}/>
                    </Routes>
                </div>
            </HashRouter>
            <Clock />
        </>
           
    )
}