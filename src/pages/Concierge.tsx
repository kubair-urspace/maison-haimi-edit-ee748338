import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, ArrowRight, ArrowLeft, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  preferredTime: string;
  message: string;
}

const serviceOptions = [
  "Smile Makeover Consultation",
  "General Checkup & Cleaning",
  "Cosmetic Consultation",
  "Invisalign Consultation",
  "Emergency Care",
  "Other",
];

const timeOptions = [
  "Morning (8am - 12pm)",
  "Afternoon (12pm - 3pm)",
  "Late Afternoon (3pm - 5pm)",
  "Flexible",
];

const Concierge = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    preferredTime: "",
    message: "",
  });

  const steps = [
    {
      title: "Let's start with your name",
      field: "name",
      type: "text",
      placeholder: "Your full name",
    },
    {
      title: "How can we reach you?",
      field: "email",
      type: "email",
      placeholder: "Your email address",
    },
    {
      title: "And your phone number?",
      field: "phone",
      type: "tel",
      placeholder: "(555) 123-4567",
    },
    {
      title: "What brings you to Eliza Haimi DDS?",
      field: "service",
      type: "select",
      options: serviceOptions,
    },
    {
      title: "When would you prefer to visit?",
      field: "preferredTime",
      type: "select",
      options: timeOptions,
    },
    {
      title: "Anything else you'd like us to know?",
      field: "message",
      type: "textarea",
      placeholder: "Special requests, concerns, or questions...",
      optional: true,
    },
  ];

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual edge function call later)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Request Received",
      description: "We'll be in touch shortly to confirm your appointment.",
    });
  };

  const currentStepData = steps[currentStep];
  const currentValue = formData[currentStepData.field as keyof FormData];
  const canProceed = currentStepData.optional || currentValue.trim() !== "";

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-8 md:pt-40 md:pb-16 section-padding bg-secondary">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-6 block"
            >
              Patient Concierge
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-8"
            >
              Begin Your Journey
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-body text-muted-foreground editorial-text max-w-2xl"
            >
              Ready to experience dentistry reimagined? Request your appointment below, 
              and our team will reach out to confirm your visit.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Multi-Step Form */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            {!isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-card p-8 md:p-12"
              >
                {/* Progress Indicator */}
                <div className="flex items-center justify-between mb-12">
                  {steps.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1 flex-1 mx-1 transition-colors duration-300 ${
                        index <= currentStep ? "bg-gold" : "bg-border"
                      }`}
                    />
                  ))}
                </div>

                {/* Step Content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="font-display text-2xl md:text-3xl text-foreground mb-8">
                      {currentStepData.title}
                    </h3>

                    {currentStepData.type === "select" ? (
                      <div className="grid grid-cols-1 gap-3">
                        {currentStepData.options?.map((option) => (
                          <button
                            key={option}
                            onClick={() => {
                              handleInputChange(currentStepData.field as keyof FormData, option);
                            }}
                            className={`p-4 text-left border transition-all duration-300 ${
                              currentValue === option
                                ? "border-gold bg-gold/5 text-foreground"
                                : "border-border hover:border-gold/50 text-muted-foreground"
                            }`}
                          >
                            <span className="font-body text-sm">{option}</span>
                          </button>
                        ))}
                      </div>
                    ) : currentStepData.type === "textarea" ? (
                      <Textarea
                        value={currentValue}
                        onChange={(e) =>
                          handleInputChange(currentStepData.field as keyof FormData, e.target.value)
                        }
                        placeholder={currentStepData.placeholder}
                        className="min-h-32 bg-background border-border focus:border-gold font-body"
                      />
                    ) : (
                      <Input
                        type={currentStepData.type}
                        value={currentValue}
                        onChange={(e) =>
                          handleInputChange(currentStepData.field as keyof FormData, e.target.value)
                        }
                        placeholder={currentStepData.placeholder}
                        className="h-14 bg-background border-border focus:border-gold font-body text-lg"
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && canProceed) {
                            if (currentStep === steps.length - 1) {
                              handleSubmit();
                            } else {
                              handleNext();
                            }
                          }
                        }}
                      />
                    )}

                    {currentStepData.optional && (
                      <p className="text-muted-foreground text-sm mt-3 font-body">
                        This field is optional
                      </p>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <div className="flex justify-between mt-12">
                  <Button
                    variant="ghost"
                    onClick={handleBack}
                    disabled={currentStep === 0}
                    className="gap-2"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back
                  </Button>

                  {currentStep === steps.length - 1 ? (
                    <Button
                      variant="luxury-gold-filled"
                      size="lg"
                      onClick={handleSubmit}
                      disabled={!canProceed || isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Submit Request"}
                    </Button>
                  ) : (
                    <Button
                      variant="luxury"
                      size="lg"
                      onClick={handleNext}
                      disabled={!canProceed}
                      className="gap-2"
                    >
                      Continue
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-card p-8 md:p-12 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-8">
                  <Check className="h-8 w-8 text-gold" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4">
                  Thank You, {formData.name.split(" ")[0]}
                </h3>
                <p className="font-body text-muted-foreground editorial-text mb-8">
                  Your appointment request has been received. Our team will contact you 
                  shortly to confirm your visit to Eliza Haimi DDS.
                </p>
                <Button variant="luxury" onClick={() => {
                  setCurrentStep(0);
                  setIsSubmitted(false);
                  setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    service: "",
                    preferredTime: "",
                    message: "",
                  });
                }}>
                  Submit Another Request
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* New Patient Section */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-6 block"
            >
              New Patients
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-3xl md:text-4xl text-foreground mb-8"
            >
              Prepare for Your Visit
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-body text-muted-foreground editorial-text mb-10"
            >
              To make your first visit as seamless as possible, you may complete our 
              intake forms in advance. We partner with leading insurance providers and 
              offer curated financing solutions to ensure your care is never compromised.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button variant="luxury" size="lg">
                Access Digital Intake
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Google Map */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="aspect-square lg:aspect-auto lg:h-full min-h-[400px] grayscale hover:grayscale-0 transition-all duration-500"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.8847508430344!2d-73.72891542346864!3d40.78929987138292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c289d1c4b4c8d9%3A0x8d9b7f3c8e5c6d5a!2s7%20Bond%20St%20%231D%2C%20Great%20Neck%2C%20NY%2011021!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Eliza Haimi DDS Location - 7 Bond St, Great Neck, NY"
                className="w-full h-full"
              />
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <span className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-6 block">
                Visit Us
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-8">
                Location & Hours
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-body text-foreground font-medium">Address</p>
                    <p className="font-body text-muted-foreground">
                      7 Bond St #1D, Great Neck, NY 11021
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-body text-foreground font-medium">Phone</p>
                    <a
                      href="tel:+15164664464"
                      className="font-body text-muted-foreground hover:text-gold transition-colors"
                    >
                      (516) 466-4464
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-body text-foreground font-medium">Email</p>
                    <a
                      href="mailto:info@maisonhaimi.com"
                      className="font-body text-muted-foreground hover:text-gold transition-colors"
                    >
                      info@maisonhaimi.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-body text-foreground font-medium">Hours</p>
                    <div className="font-body text-muted-foreground">
                      <p>Monday & Tuesday: 8:00 AM – 5:00 PM</p>
                      <p>Wednesday: 8:00 AM – 1:00 PM</p>
                      <p>Thursday: 8:00 AM – 4:30 PM</p>
                      <p>Friday – Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Concierge;
