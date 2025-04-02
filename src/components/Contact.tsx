import React from "react";
import { Send, CheckCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";

// Define schema with Zod
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact: React.FC = () => {
  const { toast } = useToast();
  
  // Form setup with React Hook Form and Zod validation
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const { formState } = form;
  const { isSubmitting, isSubmitSuccessful } = formState;
  
  async function onSubmit(data: ContactFormValues) {
    try {
      // Check if environment variables are defined
      if (!import.meta.env.VITE_SERVERLESS_API_URL) {
        throw new Error("API URL is not configured");
      }

      // Format data to match serverless function expectations
      const formattedData = {
        title: data.name,
        email: data.email,
        message: data.message
      };

      console.log("Sending data:", formattedData);

      // Send form data to the serverless function endpoint
      const response = await fetch(import.meta.env.VITE_SERVERLESS_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": import.meta.env.VITE_AUTHENTICATION_TOKEN 
            ? `Basic ${import.meta.env.VITE_AUTHENTICATION_TOKEN}` 
            : ""
        },
        body: JSON.stringify(formattedData),
      });

      console.log("Response status:", response.status);
      
      // Check if the response was successful first
      if (!response.ok) {
        // Special handling for different error scenarios
        let errorMessage = `Failed with status: ${response.status}`;
        
        try {
          // Try to get response content as text first
          const responseText = await response.text();
          console.log("Error response text:", responseText);
          
          // If it's JSON, parse it
          if (responseText && responseText.trim().startsWith('{')) {
            const errorData = JSON.parse(responseText);
            errorMessage = errorData.message || errorMessage;
          } else if (responseText) {
            // Plain text error
            errorMessage = responseText;
          }
        } catch (parseError) {
          console.error("Error parsing error response:", parseError);
        }
        
        throw new Error(errorMessage);
      }
      
      // For successful responses, handle empty responses as success
      let responseText;
      try {
        responseText = await response.text();
        console.log("Raw response:", responseText);
      } catch (e) {
        console.warn("Couldn't read response text:", e);
      }
      
      // Handle empty response case (which seems to be happening)
      if (!responseText || responseText.trim() === "") {
        console.log("Empty response received, treating as success");
        toast({
          title: "Success",
          description: "Your message has been sent successfully."
        });
        return;
      }
      
      // Try to parse JSON if there's content
      try {
        if (responseText) {
          const result = JSON.parse(responseText);
          console.log("Parsed response:", result);
          
          // Show success or error message based on the result
          if (result.success === false) {
            throw new Error(result.message || "Failed to send message");
          }
        }
      } catch (parseError) {
        console.warn("Response wasn't valid JSON but request succeeded:", parseError);
        // Non-JSON response with OK status is still treated as success
      }
      
      // If we made it here, consider it a success
      toast({
        title: "Success",
        description: "Your message has been sent successfully."
      });
      
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message",
      });
    }
  }
  
  // Reset form after 5 seconds of successful submission
  React.useEffect(() => {
    let resetTimer: NodeJS.Timeout;
    
    if (isSubmitSuccessful) {
      resetTimer = setTimeout(() => {
        form.reset();
      }, 5000);
    }
    
    return () => {
      clearTimeout(resetTimer);
    };
  }, [isSubmitSuccessful, form]);
  
  return (
    <section id="contact" className="bg-secondary/30 py-24">
      <div className="section-container">
        <div className="text-center mx-auto max-w-2xl mb-16 animate-fade-in">
          <span className="inline-block py-1 px-3 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Get in Touch
          </span>
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle">
            Have a project in mind or want to discuss a potential collaboration? 
            I'd love to hear from you!
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="glass-card rounded-xl p-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            {isSubmitSuccessful ? (
              <div className="text-center py-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-6">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-display font-bold mb-3">Message Sent!</h3>
                <p className="text-muted-foreground">
                  Thanks for reaching out. I'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your.email@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea rows={6} placeholder="Your message..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <span className="inline-block w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin mr-2"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
