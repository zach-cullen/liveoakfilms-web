import Head from 'next/head';

const PageContainer = ({ children, title }) => {
  return(
    <>
      <Head>
        <title>Live Oak Films | {title}</title>
      </Head>
      <div>
        {children}
      </div>
    </>
  )
}

export default PageContainer
