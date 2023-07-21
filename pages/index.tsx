import Layout from '../layouts/Main';
import PageIntro from '../components/page-intro';
import ProductsFeatured from '../components/products-featured';
import Footer from '../components/footer';
import Subscribe from '../components/subscribe';

const IndexPage = () => {
  return (
    <Layout>
      <PageIntro />

      <section className="section">
      </section>

      <ProductsFeatured />
      <Subscribe />
      <Footer />
    </Layout>
  )
}


export default IndexPage