import { useState } from 'react';
import { Product, CartItem } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { Collections } from './components/Collections';
import { MaterialTraceability } from './components/MaterialTraceability';
import { CompetitiveMatrix } from './components/CompetitiveMatrix';
import { GiftingSection } from './components/GiftingSection';
import { ExhibitionSpace } from './components/ExhibitionSpace';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Cart operations
  const handleAddToCart = (
    product: Product,
    quantity = 1,
    giftWrapping = false,
    giftMessage?: string
  ) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? {
                ...item,
                quantity: item.quantity + quantity,
                giftWrapping: giftWrapping || item.giftWrapping,
                giftMessage: giftMessage || item.giftMessage,
              }
            : item
        );
      }
      return [...prev, { product, quantity, giftWrapping, giftMessage }];
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((acc, i) => acc + i.quantity, 0);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#242220]">
      {/* Top Bar Contract compliant Navbar */}
      <Navbar
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreClick={() => scrollToSection('collections')}
          onMaterialsClick={() => scrollToSection('materials')}
        />

        {/* Philosophy & Anti-Consumerism Manifesto */}
        <Philosophy />

        {/* Curated Product Collections Matrix */}
        <Collections
          onQuickView={(p) => setSelectedProduct(p)}
          onAddToCart={(p) => {
            handleAddToCart(p, 1, false);
            setIsCartOpen(true);
          }}
        />

        {/* Sustainable Material Traceability & 180-Day Degradation Timeline */}
        <MaterialTraceability />

        {/* 5-Competitor Differentiation Matrix */}
        <CompetitiveMatrix />

        {/* Minimal Gifting Aesthetic & Customizer */}
        <GiftingSection
          onAddToCart={(p, q, gw, gm) => {
            handleAddToCart(p, q, gw, gm);
            setIsCartOpen(true);
          }}
        />

        {/* Offline Light Spaces & Appointment */}
        <ExhibitionSpace />
      </main>

      {/* Brand Epilogue & Footer */}
      <Footer />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={(p, q, gw) => {
          handleAddToCart(p, q, gw);
          setIsCartOpen(true);
        }}
      />

      {/* Shopping Bag / Curated Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
