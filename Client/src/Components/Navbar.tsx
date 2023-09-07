import MuseumIcon from '@mui/icons-material/Museum';
import SearchIcon from '@mui/icons-material/Search';
import { HomeMenu } from '../data/Menu';
import { Language } from '../data/Language';
import { Link } from 'react-router-dom';

const Navbar = ()=>{
    return <>
    <div className='flex bg-white bg-opacity-60 py-5 absolute top-0 z-10 w-full' >
        {/* icon holder */}
        <div className='w-1/5'>
            <div className='flex items-center justify-end'>
                <MuseumIcon style={{fontSize: "600%"}} className=' text-green-800 mr-3'/>
                <div className='w-3/12 font-light'>Đồ Án Triển Lãm Bảo Tàng</div>
            </div>
        </div>
        {/* icon holder */}

        {/* menu */}
        <div className='w-4/5 flex flex-col'>
            <div className='h-2/4 flex justify-end px-28 items-center'>
                {Language.map(language => <img src={language} alt='language image' style={{height:"30px"}}/>)}
                <SearchIcon style={{fontSize: "200%"}} className='ml-20 mr-5'/>
                <div className='flex flex-col'>
                    <Link to="/signIn" className='hover:text-green-600'>Đăng Nhập</Link>
                    <Link to="/signIn" className='hover:text-green-600'>Đăng Ký</Link>
                </div>
            </div>
            <div className='flex px-10 items-end justify-between w-4/5'>
                {HomeMenu.map(menu => <>
                <Link to="/" className='font-semibold mr-5 text-lg hover:border-b-4 hover:border-green-900 transition-all duration-150'>{menu}</Link>
                </>)}
            </div>
        </div>
        {/* menu */}
    </div>
    </>
}

export default Navbar;