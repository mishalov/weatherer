import withCommonProps from "initialProps/utils/withCommonProps";

import getByCityInitialProps from "initialProps/getByCityInitialProps";
import ByCity from "components/pages/ByCity";
import { IByCityPageProps } from "components/pages/ByCity/ByCity";

const ByCityPage: React.FC<IByCityPageProps & ICommonPageProps> = ByCity;

export const getServerSideProps = withCommonProps(getByCityInitialProps);

export default ByCityPage;
