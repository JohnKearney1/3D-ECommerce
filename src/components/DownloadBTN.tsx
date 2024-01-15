import './DownloadBTN.css'
import DownloadIcon from '@mui/icons-material/Download';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';


export default function DownloadBTN({free} : {free?: boolean}) {

    const redirectToFullVersion = () => {
        window.location.href = 'https://shop.kearneyjohn.com/shop/kearney-lab-volume-1/';
      };

      const redirectToDemoVersion = () => {
        window.location.href = 'https://shop.kearneyjohn.com/shop/demo-version-kearney-lab-volume-1-landers-ed/';
      };

    if (free) {
        return (
            <div className='DownloadBTN'>
                <button onClick={redirectToDemoVersion}>
                    <p>Demo Version</p>
                    <DownloadIcon style={{fontSize: '1.25rem'}}/>
                </button>
            </div>
        );
    }

    return (
        <div className='DownloadBTN'>
            <button onClick={redirectToFullVersion}>
                <p>Full Version</p>
                <MonetizationOnIcon style={{fontSize: '1.25rem'}}/>
            </button>
        </div>
    );
}