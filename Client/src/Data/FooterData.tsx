import PhoneIcon from '@mui/icons-material/Phone';
import DraftsIcon from '@mui/icons-material/Drafts';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import Map from '../Images/map-baotang.jpg'

const FooterData = [
    {
        label:'Liên hệ bảo tàng',
        content:[
            {
                icon:PhoneIcon,
                text:'+ 84-24-3756-2193',
                image: undefined,
            },
            {
                icon:DraftsIcon,
                text:'information@vme.org.vn',
                image: undefined,
            },
            {
                icon:AddLocationIcon,
                text:'Nguyễn Văn Huyên, Cầu Giấy, Hà Nội',
                image: undefined,
            },
        ]
    },
    {
        label:'Về Bảo tàng',
        content:[
            {
                icon:undefined,
                image: undefined,
                text:'⚫ Tài trợ/Ủng hộ'
            },
            {
                icon:undefined,
                image: undefined,
                text:'⚫ Tải tò rơi'
            },
            {
                icon:undefined,
                image: undefined,
                text:'⚫ Hỏi và đáp'
            },
        ]
    },
    {
        label:'Theo dõi chúng tôi',
        content:[
            {
                icon:FacebookIcon,
                text:'/Facebook',
                image: undefined,
            },
            {
                icon:YouTubeIcon,
                text:'/Youtube',
                image: undefined,
            },
            {
                icon:InstagramIcon,
                text:'/Instagram',
                image: undefined,
            },
        ]
    },
    {
        label:'Đến với bảo tàng',
        content:[
            {
                icon:undefined,
                text:undefined,
                image:Map
            }
        ]
    },
]

export default FooterData