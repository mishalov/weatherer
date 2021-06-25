import getBaseProps from "initialProps/getBaseProps";
import { GetServerSideProps } from "next";

const withCommonProps = (getProps: GetServerSideProps) => {
  const decoratedPropsGetter: GetServerSideProps = async (context) => {
    const propsObjects = await Promise.all([getBaseProps(), getProps(context)]);

    const baseProps = propsObjects[0];
    const pageProps = propsObjects[1];

    const mergedProps = {
      ...pageProps,
      props: { ...baseProps.props, ...(pageProps as { props: any }).props },
    };
    return mergedProps;
  };

  return decoratedPropsGetter;
};

export default withCommonProps;
