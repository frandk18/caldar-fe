import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//import { getBoilerTypes as getBoilerTypesAction} from "../../../redux/actions/boilerTypeActions";
import { getTechnicians as getTechniciansAction } from "../../../redux/actions/techniciansActions";
import { getBuildings as getBuildingsAction } from "../../../redux/actions/buildingsActions";
import { getBoilers as getBoilersAction } from "../../../redux/actions/boilersActions";
import { getCompanies as getCompaniesAction } from "../../../redux/actions/companiesActions";

const Home = ({
  getTechnicians,
  getBuildings,
  getBoilers,
  getCompanies,
  //getBoilerTypes,
}) => {
  useEffect(() => {
    getTechnicians();
    getBuildings();
    getBoilers();
    getCompanies();
    //getBoilerTypes();
  }, []);
  return <h1>HOME</h1>;
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getTechnicians: getTechniciansAction,
      getBuildings: getBuildingsAction,
      getBoilers: getBoilersAction,
      getCompanies: getCompaniesAction,
      //getBoilerTypes: getBoilerTypesAction,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(Home);
