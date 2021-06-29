import getBaseProps from "initialProps/getBaseProps";
import { GetServerSideProps } from "next";

/**
 * Decorator, that add common page props to current page
 *
 * @param getProps function that making page props
 * @returns
 */
const withCommonProps = <TPageProps>(
  getProps: GetServerSideProps<TPageProps>
) => {
  const decoratedPropsGetter: GetServerSideProps = async (context) => {
    const propsObjects = await Promise.all([getBaseProps(), getProps(context)]);

    const baseProps = propsObjects[0];
    const pageProps = propsObjects[1];

    const mergedProps = {
      ...pageProps,
      props: {
        ...baseProps.props,
        ...(pageProps as { props: TPageProps }).props,
      },
    };
    return mergedProps;
  };

  return decoratedPropsGetter;
};

export default withCommonProps;
