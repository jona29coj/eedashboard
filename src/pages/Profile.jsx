import SolarAnalysisCard from '../pcomponents/SolarAnalysisCard';
import LuxAnalysis from '../pcomponents/LuxAnalysis';
import LuxAnalysisPt2 from '../pcomponents/LuxAnalysisPt2';
import DaylightFactorAnalysis from "../pcomponents/DayLightFactorAnalysis";
import Spa from "../pcomponents/Spa";
import FacInf from "../pcomponents/FacInf";
import ModelC from '../pcomponents/ModelC';

const Profile = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ModelC />
        <FacInf />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DaylightFactorAnalysis />
        <Spa />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <LuxAnalysis />
        <LuxAnalysisPt2 />
      </div>  
      <SolarAnalysisCard />
    </div>
  );
};

export default Profile;
