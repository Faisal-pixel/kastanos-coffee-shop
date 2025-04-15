
import React, { useState } from 'react';
import { ArrowLeft, Plus, Minus, X, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { AnimatePresence, motion } from 'framer-motion';

// Menu data (same as in MenuSection)
const menuData = {
  coffee: [
    { id: 'c1', name: 'Drip Coffee (Plain)', price: 2000 },
    { id: 'c2', name: 'Drip Coffee (With Milk)', price: 2500 },
    { id: 'c3', name: 'Ice Latte', price: 4000 },
    { id: 'c4', name: 'Ice Caramel Macchiato', price: 5000 },
    { id: 'c5', name: 'Ice Mocha', price: 5000 },
    { id: 'c6', name: 'Honey Cinnamon Latte', price: 5000 }
  ],
  teas: [
    { id: 't1', name: 'Green Tea', price: 2000 },
    { id: 't2', name: 'Black Tea', price: 2000 },
    { id: 't3', name: 'Strawberry/Raspberry Tea', price: 2000 },
    { id: 't4', name: 'Ice Teas', price: 2500 }
  ],
  extras: [
    { id: 'e1', name: 'Shots', price: 2000 },
    { id: 'e2', name: 'Milk', price: 500 }
  ],
  snacks: [
    { id: 's1', name: 'Donut', price: 900 },
    { id: 's2', name: 'Meat Pie', price: 1500 },
    { id: 's3', name: 'Chicken Pie', price: 1700 },
    { id: 's4', name: 'Banana Bread (Plain)', price: 1500 },
    { id: 's5', name: 'Banana Bread (Almond)', price: 1700 },
    { id: 's6', name: 'Banana Bread (Choco Chip)', price: 1700 }
  ]
};

const MenuPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('coffee');
  const [cartOpen, setCartOpen] = useState(false);

  // Get cart context
  const { state: cart, addItem, removeItem, updateQuantity, clearCart } = useCart();

  const handleAddToCart = (item: { id: string; name: string; price: number }) => {
    addItem(item);
    toast({
      title: "Item added to cart",
      description: `${item.name} has been added to your cart.`,
      duration: 2000,
    });
  };
  
  const handleCheckout = () => {
    // In a real app, you would send cart data to a payment processor
    // For now, we'll just navigate to the completion page
    if (cart.items.length > 0) {
      navigate('/payment-completion');
    } else {
      toast({
        title: "Cart is empty",
        description: "Please add items to your cart before checkout.",
        variant: "destructive",
      });
    }
  };

  const formatCurrency = (amount: number) => {
    return `₦${amount}`;
  };
  
  return (
    <div className="min-h-screen bg-kastanos-beige/10 relative">
      <header className="bg-kastanos-brown text-white p-4 sticky top-0 z-30">
        <div className="container mx-auto flex justify-between items-center">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </button>
          <h1 className="text-xl font-serif">Kastanos Menu</h1>
          <button 
            className="relative" 
            onClick={() => setCartOpen(true)}
          >
            <ShoppingCart size={24} />
            {cart.items.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-kastanos-bronze text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cart.items.length}
              </span>
            )}
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-md overflow-hidden mb-8"
        >
          <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full grid grid-cols-4 bg-kastanos-beige/20">
              <TabsTrigger value="coffee" className="data-[state=active]:bg-kastanos-brown data-[state=active]:text-white">Coffee</TabsTrigger>
              <TabsTrigger value="teas" className="data-[state=active]:bg-kastanos-brown data-[state=active]:text-white">Teas</TabsTrigger>
              <TabsTrigger value="extras" className="data-[state=active]:bg-kastanos-brown data-[state=active]:text-white">Extras</TabsTrigger>
              <TabsTrigger value="snacks" className="data-[state=active]:bg-kastanos-brown data-[state=active]:text-white">Snacks</TabsTrigger>
            </TabsList>
            
            {Object.keys(menuData).map((category) => {
              console.log(category.slice(1))
              return (
              <TabsContent key={category} value={category} className="p-4">
                <h2 className="text-xl font-serif mb-4 text-kastanos-brown">
                  {category.charAt(0).toUpperCase() + category.slice(1)} {/*Basically saying take the first character, make it in Caps and then concatenate it with the other letters by slicing the first letter*/ }
                </h2>
                <ul className="space-y-4">
                  {menuData[category as keyof typeof menuData].map((item) => (
                    <motion.li 
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex justify-between items-center border-b border-kastanos-beige/40 pb-4"
                    >
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-kastanos-bronze font-semibold">{formatCurrency(item.price)}</p>
                      </div>
                      <Button 
                        onClick={() => handleAddToCart(item)}
                        size="sm"
                        className="bg-kastanos-brown hover:bg-kastanos-brown/80 text-white"
                      >
                        <Plus size={16} />
                        <span className="ml-1">Add</span>
                      </Button>
                    </motion.li>
                  ))}
                </ul>
              </TabsContent>
            )})}
          </Tabs>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-[0_-4px_10px_rgba(0,0,0,0.1)] z-20"
        >
          <div className="container mx-auto flex justify-between items-center">
            <div>
              <p className="text-sm text-muted-foreground">Total ({cart.items.length} items)</p>
              <p className="text-xl font-semibold text-kastanos-brown">{formatCurrency(cart.total)}</p>
            </div>
            <Button 
              onClick={handleCheckout}
              className="bg-kastanos-bronze hover:bg-kastanos-bronze/90"
              size="lg"
            >
              Pay Now
            </Button>
          </div>
        </motion.div>
      </main>

      <Dialog open={cartOpen} onOpenChange={setCartOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Your Cart</DialogTitle>
          </DialogHeader>
          <div className="max-h-[60vh] overflow-y-auto">
            {cart.items.length === 0 ? (
              <p className="text-center py-8 text-muted-foreground">Your cart is empty</p>
            ) : (
              <ul className="space-y-4 py-2">
                <AnimatePresence>
                  {cart.items.map((item) => (
                    <motion.li 
                      key={item.id}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex justify-between items-center border-b border-gray-100 pb-3"
                    >
                      <div className="flex-1">
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-kastanos-bronze">{formatCurrency(item.price)}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-7 h-7 rounded-full bg-kastanos-beige/20 flex items-center justify-center"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-7 h-7 rounded-full bg-kastanos-beige/20 flex items-center justify-center"
                        >
                          <Plus size={14} />
                        </button>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="ml-2 text-red-500"
                        >
                          <X size={18} />
                        </button>
                      </div>
                    </motion.li>
                  ))}
                </AnimatePresence>
              </ul>
            )}
          </div>
          <div className="border-t pt-3 flex justify-between items-center">
            <p className="font-semibold">Total: {formatCurrency(cart.total)}</p>
            <div className="space-x-2">
              {cart.items.length > 0 && (
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={clearCart}
                >
                  Clear Cart
                </Button>
              )}
              <Button 
                size="sm"
                onClick={() => {
                  setCartOpen(false);
                  if (cart.items.length > 0) handleCheckout();
                }}
                disabled={cart.items.length === 0}
                className="bg-kastanos-bronze hover:bg-kastanos-bronze/90"
              >
                Checkout
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MenuPage;
