import getMainPageInitialProps from "../src/initialProps/getMainPageInitialProps";
import withCommonProps from "initialProps/utils/withCommonProps";

import Homepage, { IMainPageProps } from "components/pages/Homepage/Homepage";

const MainPage: React.FC<IMainPageProps & ICommonPageProps> = Homepage;

export const getServerSideProps = withCommonProps(getMainPageInitialProps);

export default MainPage;
