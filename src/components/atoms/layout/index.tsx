import Head from "next/head";
import { ReactNode } from "react";
import styles from "./styles.module.scss";

type LayoutPropsType = {
title: string;
description?: string;
children: ReactNode | ReactNode[]
}

const Layout = ({title, description, children}: LayoutPropsType) => {
  return (
    <div className="layout">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`content ${styles.layout__content}`}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
