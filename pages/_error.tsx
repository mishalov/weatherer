import { GetServerSideProps } from "next";
import React from "react";

const Error = ({ statusCode }: { statusCode: string }) => (
  <div>{statusCode}</div>
);

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const { statusCode } = res;
  return { props: { statusCode } };
};

export default Error;
