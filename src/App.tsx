import { CartProvider } from '@/context/CartContext';
import { Navbar } from '@/components/Navbar';
import { CartDrawer } from '@/components/CartDrawer';
import { Hero } from '@/components/Hero';
import { Heritage } from '@/components/Heritage';
import { ProductCollection } from '@/components/ProductCollection';
import { SaffronCollections } from '@/components/SaffronCollections';
import { RugCollection } from '@/components/RugCollection';
import { TabloFarsh } from '@/components/TabloFarsh';
import { Checkout } from '@/components/Checkout';
import { Contact, Footer } from '@/components/Contact';
import { PRODUCTS } from '@/data/products';

function App() {
  const gazProducts = PRODUCTS.filter((p) => p.category === 'confectionery');

  return (
    <CartProvider>
      <div className="min-h-screen bg-espresso-950">
        <Navbar />
        <CartDrawer />
        <main>
          <Hero />
          <Heritage />
          <SaffronCollections />
          <ProductCollection
            id="confectionery"
            products={gazProducts}
            eyebrow="Persian Confectionery"
            title="Authentic Iranian"
            highlight="Gaz Nougat"
            intro="Traditional pistachio nougat from Bojnourd and Boldaji — soft manna-and-egg-white Gaz studded with premium Akbari pistachios. The beloved sweet of Persian celebrations, now available worldwide."
          />
          <RugCollection />
          <TabloFarsh />
          <Checkout />
          <Contact />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
