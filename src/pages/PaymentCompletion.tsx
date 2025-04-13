
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Star, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/hooks/use-toast';

// Form schema for email subscription
const formSchema = z.object({
  email: z
    .string()
    .email({ message: 'Please enter a valid email address' })
    .min(1, { message: 'Email is required' }),
});

const PaymentCompletion = () => {
  const navigate = useNavigate();
  const { state: cart, clearCart } = useCart();
  const [timeRemaining, setTimeRemaining] = useState(10 * 60); // 10 minutes in seconds
  const { toast } = useToast();
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const timerRef = useRef<number | null>(null);

  // Form for email subscription
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  const formatTime = useCallback((seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }, []);

  useEffect(() => {
    // Start countdown timer
    timerRef.current = window.setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Clear cart on component mount (simulating completed order)
    clearCart();
    
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [clearCart]);

  const handleSubscribe = (data: z.infer<typeof formSchema>) => {
    // In a real app, you would send this to your backend/API
    toast({
      title: "Subscription successful!",
      description: `${data.email} has been added to our mailing list.`,
      duration: 3000,
    });
    setEmailSubmitted(true);
  };

  const handleReviewClick = () => {
    // Open Google review in new tab
    window.open('https://g.page/r/CbkEPY9-4xN1EBM/review', '_blank');
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
          <h1 className="text-xl font-serif">Order Confirmation</h1>
          <div className="w-8"></div> {/* Empty div for flex layout balance */}
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-md p-6 mb-8 text-center"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <CheckCircle className="text-green-600" size={40} />
          </motion.div>
          
          <h2 className="text-2xl font-serif text-kastanos-brown mb-2">Thank You!</h2>
          <p className="text-muted-foreground mb-6">Your order has been received and is being prepared.</p>
          
          <div className="bg-kastanos-beige/20 p-6 rounded-lg mb-8">
            <h3 className="font-medium mb-2 flex items-center justify-center gap-2">
              <Clock size={20} className="text-kastanos-brown" /> 
              <span>Your coffee will be ready in:</span>
            </h3>
            <div className="text-3xl font-mono font-bold text-kastanos-brown">
              {formatTime(timeRemaining)}
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Your order number is <span className="font-semibold">#KST{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}</span>
            </p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="bg-white rounded-lg shadow-md p-6 mb-8"
        >
          <h3 className="text-xl font-serif text-kastanos-brown mb-4 flex items-center gap-2">
            <Star size={20} className="text-yellow-500" fill="currentColor" />
            <span>Enjoying Kastanos?</span>
          </h3>
          <p className="text-muted-foreground mb-4">
            We'd love to hear your feedback! Please consider leaving us a review.
          </p>
          <Button 
            onClick={handleReviewClick}
            className="w-full bg-kastanos-brown hover:bg-kastanos-brown/90"
          >
            <Star size={16} className="mr-2" /> 
            Leave a Review
          </Button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="bg-white rounded-lg shadow-md p-6"
        >
          <h3 className="text-xl font-serif text-kastanos-brown mb-4 flex items-center gap-2">
            <Send size={20} className="text-kastanos-bronze" />
            <span>Stay Updated</span>
          </h3>
          
          <AnimatePresence mode="wait">
            {!emailSubmitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-muted-foreground mb-4">
                  Subscribe to receive updates about new products and exclusive offers!
                </p>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(handleSubscribe)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <div className="flex gap-2">
                              <Input 
                                placeholder="your@email.com" 
                                className="flex-1" 
                                {...field} 
                              />
                              <Button 
                                type="submit" 
                                className="bg-kastanos-bronze hover:bg-kastanos-bronze/90"
                              >
                                Subscribe
                              </Button>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </form>
                </Form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-center py-4"
              >
                <CheckCircle className="text-green-600 mx-auto mb-2" size={32} />
                <p>Thank you for subscribing!</p>
                <p className="text-sm text-muted-foreground">We'll keep you updated with the latest news and offers.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </main>
    </div>
  );
};

export default PaymentCompletion;
