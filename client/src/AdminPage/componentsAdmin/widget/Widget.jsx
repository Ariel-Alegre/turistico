import './widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import { useSelector } from 'react-redux';


const Widget = ({type}) => {
 /*    const allUser = useSelector(state => state.AllUsers);
    console.log(allUser.length); */
    

    let data;

    // temporary amount of money
    const amount = Math.floor(Math.random() * 100);
    const diff = Math.floor(Math.random() * 100);

    switch (type) {
        case 'users':
            data = {
                title: 'USERS',
                isMoney: false,
                link: 'See All Users',
                icon: (
                    <PersonOutlinedIcon className='icon' style={{
                        color: 'crimson', 
                        backgroundColor: 'rgba(255, 0, 0, 0.2)'}} />
                ),
            }
            break;
        case 'orders':
            data = {
            
            }
            break;
        case 'earnings':
            data = {
        
            }
            break;
        case 'balance':
            data = {
          
            }
            break;
        default:
            break;
    }



  return (
    <div className='widget'>
        <div className='left'>
            <span className='title'>{data.title}</span>
            <span className='counter'>{data.length}</span>
            <span className='link'>{data.link}</span>
        </div>
        <div className='right'>
            <div className="percentage positive">
                <KeyboardArrowUpIcon />
                {diff}%
            </div>
                {data.icon}
        </div>
    </div>
  )
}

export default Widget