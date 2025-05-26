
import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Facebook, Twitter, Instagram } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // EmailJS configuration
  const SERVICE_ID = 'service_qg1y6hp';
  const TEMPLATE_ID = 'template_b7ngoxl';
  const PUBLIC_KEY = 'uMeNbNk8rA919oOtq';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'developersaidul04@gmail.com', // Your email
        },
        PUBLIC_KEY
      );

      console.log('Email sent successfully:', result.text);
      
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    { 
      icon: <Linkedin className="w-5 h-5" />, 
      href: 'https://www.linkedin.com/in/saidul-hoque-767375237/', 
      label: 'LinkedIn',
      color: 'hover:text-blue-600 hover:bg-blue-50'
    },
    { 
      icon: <Github className="w-5 h-5" />, 
      href: 'https://github.com/saidul-122', 
      label: 'GitHub',
      color: 'hover:text-gray-900 hover:bg-gray-50'
    },
    { 
      icon: <Facebook className="w-5 h-5" />, 
      href: 'https://www.facebook.com/ahil.khan.750558', 
      label: 'Facebook',
      color: 'hover:text-blue-700 hover:bg-blue-50'
    },
    { 
      icon: <Twitter className="w-5 h-5" />, 
      href: 'https://twitter.com', 
      label: 'Twitter',
      color: 'hover:text-sky-500 hover:bg-sky-50'
    },
    { 
      icon: <Instagram className="w-5 h-5" />, 
      href: 'https://www.instagram.com/sh0034879/', 
      label: 'Instagram',
      color: 'hover:text-pink-600 hover:bg-pink-50'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container-width">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-6 shadow-lg">
            <Mail className="w-4 h-4 text-green-600 mr-2" />
            <span className="text-sm font-medium text-green-600">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's{' '}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to start your next project? Let's collaborate and create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="animate-slide-in-left space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Let's Talk</h3>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                or simply connect with fellow developers and tech enthusiasts.
              </p>
            </div>

            <div className="space-y-6">
              <div className="group flex items-center gap-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Email</h4>
                  <a href="mailto:ahmadrajacpr@gmail.com" className="text-gray-600 hover:text-blue-600 text-lg transition-colors">
                    developersaidul04@gmail.com
                  </a>
                </div>
              </div>

              <div className="group flex items-center gap-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Phone</h4>
                  <a href="tel:+917289095126" className="text-gray-600 hover:text-green-600 text-lg transition-colors">
                    +91 6295470367
                  </a>
                </div>
              </div>

              <div className="group flex items-center gap-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Location</h4>
                  <p className="text-gray-600 text-lg">India</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="text-xl font-bold text-gray-900 mb-6">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-gray-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 ${social.color}`}
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="animate-fade-in">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Send Message</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                    Full Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full h-12 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-0 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full h-12 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-0 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-3">
                  Subject
                </label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full h-12 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-0 transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows={6}
                  className="w-full border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-0 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 text-lg font-bold disabled:opacity-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </div>
                ) : (
                  'Send Message'
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
