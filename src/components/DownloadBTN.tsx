import './DownloadBTN.css'
import DownloadIcon from '@mui/icons-material/Download';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
export default function DownloadBTN({free} : {free?: boolean}) {


    if (free) {
        return (
            <div className='DownloadBTN'>
                <button>
                    <p>Demo Version</p>
                    <DownloadIcon style={{fontSize: '1.25rem'}}/>
                </button>
            </div>
        );
    }

    return (
        <div className='DownloadBTN'>
            <button>
                <p>Full Version</p>
                <MonetizationOnIcon style={{fontSize: '1.25rem'}}/>
            </button>
        </div>
    );
}