import FindUs from "../layouts/FindUs";
import QZone from "../layouts/QZone";
import SocialLayouut from "../layouts/SocialLayouut";


const RightNaver = () => {
  return (
    <div className="space-y-10">
      Right Naver
      <SocialLayouut />
      <FindUs />
      <QZone/>
    </div>
  );
};

export default RightNaver;