
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <div className='max-w-6xl mx-auto'>
                {/* <Header></Header> */}
                {/* <Outlet></Outlet> */}
                <Header></Header>
                <Outlet></Outlet>
            </div>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Root;