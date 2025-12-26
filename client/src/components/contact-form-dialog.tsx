import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Loader2, CheckCircle } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  role: z.string().optional(),
  practiceArea: z.string().optional(),
  state: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const practiceAreas = [
  "Personal Injury",
  "Criminal Defense",
  "Family Law",
  "Estate Planning",
  "Business Law",
  "Immigration",
  "Real Estate",
  "Employment Law",
  "Bankruptcy",
  "Intellectual Property",
  "Other",
];

const roles = [
  "Managing Partner",
  "Partner",
  "Associate",
  "Of Counsel",
  "Legal Administrator",
  "Operations Manager",
  "Marketing Director",
  "Other",
];

const usStates = [
  "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
  "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
  "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
  "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
  "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY", "DC"
];

interface ContactFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ContactFormDialog({ open, onOpenChange }: ContactFormDialogProps) {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      role: "",
      practiceArea: "",
      state: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactFormValues) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      setSubmitted(true);
      form.reset();
    },
    onError: () => {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    mutation.mutate(data);
  };

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(() => {
      setSubmitted(false);
      form.reset();
    }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-futura-bg border-futura-border">
        {submitted ? (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="w-16 h-16 rounded-full bg-parchment/20 flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-parchment" />
            </div>
            <DialogHeader>
              <DialogTitle className="text-white text-xl" style={{ fontFamily: 'var(--font-karl)' }}>
                ThAnk yoU!
              </DialogTitle>
              <DialogDescription className="text-futura-text-secondary mt-2">
                We'll be in touch soon to discuss how we can help your firm.
              </DialogDescription>
            </DialogHeader>
            <Button 
              onClick={handleClose} 
              className="mt-6 bg-parchment text-futura-bg"
              data-testid="button-close-success"
            >
              Close
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-white text-xl" style={{ fontFamily: 'var(--font-karl)' }}>
                lET's TAlk
              </DialogTitle>
              <DialogDescription className="text-futura-text-secondary">
                Tell us about your firm and we'll reach out to schedule a conversation.
              </DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-futura-text">Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your name" 
                          className="bg-futura-bg border-futura-border text-white placeholder:text-futura-text-secondary"
                          data-testid="input-name"
                          {...field} 
                        />
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
                      <FormLabel className="text-futura-text">Email</FormLabel>
                      <FormControl>
                        <Input 
                          type="email"
                          placeholder="you@yourfirm.com" 
                          className="bg-futura-bg border-futura-border text-white placeholder:text-futura-text-secondary"
                          data-testid="input-email"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-futura-text">Phone (optional)</FormLabel>
                      <FormControl>
                        <Input 
                          type="tel"
                          placeholder="(555) 123-4567" 
                          className="bg-futura-bg border-futura-border text-white placeholder:text-futura-text-secondary"
                          data-testid="input-phone"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-futura-text">Your Role (optional)</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger 
                            className="bg-futura-bg border-futura-border text-white"
                            data-testid="select-role"
                          >
                            <SelectValue placeholder="Select your role" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-futura-bg border-futura-border">
                          {roles.map((role) => (
                            <SelectItem 
                              key={role} 
                              value={role}
                              className="text-white focus:bg-futura-border focus:text-white"
                            >
                              {role}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="practiceArea"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-futura-text">Practice Area (optional)</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger 
                            className="bg-futura-bg border-futura-border text-white"
                            data-testid="select-practice-area"
                          >
                            <SelectValue placeholder="Select practice area" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-futura-bg border-futura-border">
                          {practiceAreas.map((area) => (
                            <SelectItem 
                              key={area} 
                              value={area}
                              className="text-white focus:bg-futura-border focus:text-white"
                            >
                              {area}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="state"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-futura-text">State (optional)</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger 
                            className="bg-futura-bg border-futura-border text-white"
                            data-testid="select-state"
                          >
                            <SelectValue placeholder="Select state" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-futura-bg border-futura-border max-h-60">
                          {usStates.map((state) => (
                            <SelectItem 
                              key={state} 
                              value={state}
                              className="text-white focus:bg-futura-border focus:text-white"
                            >
                              {state}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full bg-parchment text-futura-bg mt-6"
                  disabled={mutation.isPending}
                  data-testid="button-submit-contact"
                >
                  {mutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Get in Touch"
                  )}
                </Button>
              </form>
            </Form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
