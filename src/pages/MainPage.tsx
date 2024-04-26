import GreatPage from '../components/greatPage/GreatPage';
import CouponPage from '../components/coupon/CouponPage';
import MenuPage from '../components/menu/MenuPage';
import DonationButton from '../components/donationButton/DonationButton';
import Map from '../components/map/Map';
export default function MainPage() {
  return (
    <>
      <GreatPage />
      <CouponPage />
      <MenuPage />
      <DonationButton />
      <Map />
    </>
  );
}
