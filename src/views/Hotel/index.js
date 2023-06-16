import './style.scss'
import { HotelData } from '../../mock';
import HotelCard from './container/HotelCard';

const Hotel = () =>{
    return(
        <div className="hotel_container">
            <div className="container">
                <div className="hotel_wrapper">
                    <div className='hotel_right'>hello</div>
                    <div className='hotel_left'>
                        <h2 className='hotel_left_title'>هتل‌های مشهد</h2>
                        <div className='hotel_left_result'>
                            <div className='hotel-result_right'>
                                <p>27 هتل یافت شد</p>
                                <p>.4 شب</p>
                            </div>
                        </div>
                        <div className='hotel_data-wrapper'>
                            {
                                HotelData.map((el)=>{
                                    return(
                                        <HotelCard key={el.id} hotelData={el} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hotel;