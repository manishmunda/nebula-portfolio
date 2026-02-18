import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

type FormData = z.infer<typeof schema>;

const contactInfo = [
  { icon: Phone, label: "+91 98765 43210" },
  { icon: Mail, label: "manish@example.com" },
  { icon: MapPin, label: "Mumbai, India" },
];

const Contact = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon." });
    form.reset();
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className="animate-in text-center mb-16">
          <h2 className="font-display text-4xl font-bold gradient-text inline-block">Get in Touch</h2>
        </div>

        <div className="animate-in grid md:grid-cols-2 gap-12">
          {/* Left */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-3">Drop me a message</h3>
              <p className="text-muted-foreground leading-relaxed">
                Have a project in mind or want to collaborate? Feel free to reach out — I'd love to hear from you.
              </p>
            </div>
            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-10 h-10 rounded-lg glass-card glow-border flex items-center justify-center">
                    <Icon className="w-4 h-4 text-neon-purple" />
                  </div>
                  <span className="text-sm">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="glass-card glow-border rounded-2xl p-8 space-y-5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground text-sm">Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" className="bg-secondary/50 border-border/50 focus:border-neon-purple/50" {...field} />
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
                    <FormLabel className="text-foreground text-sm">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="your@email.com" className="bg-secondary/50 border-border/50 focus:border-neon-purple/50" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground text-sm">Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Tell me about your project..." rows={4} className="bg-secondary/50 border-border/50 focus:border-neon-purple/50 resize-none" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <button type="submit" className="w-full btn-gradient py-3 rounded-full text-primary-foreground font-semibold text-sm">
                Send Message
              </button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
