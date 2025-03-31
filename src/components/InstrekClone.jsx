import React from 'react';
import { ChevronRight, Mail, Phone, MapPin, Send, ArrowRight, Cpu, Hotel, BookOpen, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

const InstrekTechnologies = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="border-b px-2 md:px-0">
        <div className="container mx-auto flex justify-between items-center py-4">
          <div className="flex items-center gap-2">
            <Cpu className="h-8 w-8 text-black" />
            <span className="font-bold text-xl">Instrek Technologies</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium">Home</a>
            <a href="#" className="text-sm font-medium">About Us</a>
            <a href="#" className="text-sm font-medium">Services</a>
            <a href="#" className="text-sm font-medium">Trainings</a>
            <a href="#" className="text-sm font-medium">Success Stories</a>
            <a href="#" className="text-sm font-medium">Contact</a>
          </nav>
          <div className="flex items-center gap-4">
            <Button size="sm" className="bg-black hover:bg-gray-700">Get in Touch</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-gray-600 text-white py-20">
        <div className="container mx-auto px-4 md:px-0">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Empowering Futures, Engineered Today</h1>
            <p className="text-lg mb-8 opacity-90">At Instrek Technologies, we drive the future with AI, IoT, AIoT, Blockchain, and next-gen digital solutions. We empower businesses, governments, and institutions with cutting-edge automation, committed to making India AI-ready through strategic consulting and scalable tech solutions.</p>
            <Button className="bg-white text-black hover:bg-gray-100">
              Learn More
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-2 md:px-0">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Journey and Vision</h2>
              <p className="text-gray-600 mb-6">Founded in 2017, Instrek Technologies has rapidly evolved into a leader in AI, IoT, and Blockchain solutions. Our mission is to create a future where technology enhances human potential and drives sustainable growth.</p>
              <p className="text-gray-600 mb-6">We are committed to making India AI-ready through innovative solutions and comprehensive training programs. Our core values include innovation, integrity, collaboration, and excellence, which guide us in every project we undertake.</p>
              <Button variant="outline" className="flex items-center gap-2">
                About Us <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="md:w-1/2 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden h-96">
              <img 
                src="https://instrek.com/wp-content/uploads/2025/03/piclumen-1742394774407.png" 
                alt="Instrek Team"
                className="rounded-lg shadow-md" 
                width={700}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-2 md:px-0">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Our Expertise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Driving Innovation with AI, IoT, and Blockchain</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="aspect-video bg-blue-100">
                <img 
                  src="https://instrek.com/wp-content/uploads/2025/03/image_5.webp" 
                  alt="AI-Driven IT Services"
                  className="w-full h-full object-cover" 
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">AI-Driven IT Services</h3>
                <p className="text-gray-600 mb-4">Leverage our AI expertise to enhance operational efficiency and productivity. Our tailored solutions meet the unique needs of businesses, ensuring they stay ahead in a competitive landscape with cutting-edge technology.</p>
                <Button variant="outline" className="flex items-center gap-2 mt-2">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video bg-blue-100">
                <img 
                  src="https://instrek.com/wp-content/uploads/2025/03/tenweb_media_spw3vtfij.webp" 
                  alt="Smart City Innovations"
                  className="w-full h-full object-cover" 
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Smart City Innovations</h3>
                <p className="text-gray-600 mb-4">Integrate IoT and AI technologies to improve urban living with our smart city solutions. Our projects focus on sustainability, safety, and enhanced quality of life for residents through innovative technology.</p>
                <Button variant="outline" className="flex items-center gap-2 mt-2">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video bg-blue-100">
                <img 
                  src="https://instrek.com/wp-content/uploads/2025/03/image_10.webp" 
                  alt="Workforce Skilling Programs"
                  className="w-full h-full object-cover" 
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Workforce Skilling Programs</h3>
                <p className="text-gray-600 mb-4">Equip your workforce with the skills needed to thrive in a technology-driven world. We offer certifications in AI, IoT, and Blockchain, tailored for various skill levels, ensuring future-ready talent.</p>
                <Button variant="outline" className="flex items-center gap-2 mt-2">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Empowering India with AI</h2>
            <p className="opacity-90">Our Commitment to a Tech-Driven Future</p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center gap-16 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">100%</div>
              <p>AI-Ready Workforce by 2030</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <p>AI-Powered Solutions Deployed Nationwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-16">
        <div className="container mx-auto px-2 md:px-0">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Training Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Equip your workforce with the skills needed to thrive in a technology-driven world</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: 'AI Fundamentals Workshop',
                description: 'Gain a solid foundation in AI principles. Our workshop covers machine learning, neural networks, and practical applications for real-world problem-solving.',
                icon: Cpu
              },
              {
                title: 'IoT Solutions Certification',
                description: 'Become a certified IoT expert. Learn to design, implement, and manage IoT solutions for various industries, enhancing connectivity and automation.',
                icon: Hotel
              },
              {
                title: 'Blockchain Development Course',
                description: 'Master blockchain technology and build decentralized applications. Our course covers smart contracts, cryptocurrency, and secure data management techniques.',
                icon: Lock
              },
              {
                title: 'AIoT Innovation Lab',
                description: 'Explore the convergence of AI and IoT. Our lab fosters innovation in AIoT, creating solutions for smart cities, healthcare, and industrial automation.',
                icon: BookOpen
              }
            ].map((program, index) => {
              const Icon = program.icon;
              return (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{program.title}</h3>
                    <p className="text-gray-600 text-sm">{program.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-2 md:px-0">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our Transformative Projects</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div className="aspect-video bg-gray-200">
                <img 
                  src="https://instrek.com/wp-content/uploads/2025/03/tenweb_media_sh718ackd.webp" 
                  alt="Smart City Project"
                  className="w-full h-full object-cover" 
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Smart City Innovations</h3>
                    <p className="text-gray-500">Bangalore Municipal Corporation</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">May 2023</p>
                    <p className="text-sm font-medium text-blue-600">Enhanced urban management</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">Our Smart City Project in Bangalore integrates IoT solutions for better urban management and citizen engagement, showcasing our commitment to creating sustainable urban environments.</p>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video bg-gray-200">
                <img 
                  src="https://instrek.com/wp-content/uploads/2025/03/tenweb_media_sc3tgownf.webp" 
                  alt="AI in Retail"
                  className="w-full h-full object-cover" 
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">AI in Retail</h3>
                    <p className="text-gray-500">RetailCorp</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">March 2023</p>
                    <p className="text-sm font-medium text-blue-600">Improved inventory management</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">The AI-Powered IT Solutions for Retail project implemented advanced analytics for a leading retail chain, resulting in significant improvements in inventory management and customer insights, demonstrating our expertise in AI-driven solutions.</p>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tech Expertise */}
      <section className="py-16">
        <div className="container mx-auto px-2 md:px-0">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Innovative Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">For a Smarter, More Connected Future with Instrek</p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                <Cpu className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">AI</h3>
              <p className="text-gray-600">Enhance efficiency and decision-making with our AI-driven IT services.</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                <Hotel className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">IoT</h3>
              <p className="text-gray-600">Improve urban living with our smart city solutions and IoT integrations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-2 md:px-0">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Get in Touch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We're Here to Help</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">For any questions or support, feel free to send us an email at tithika.mittal@instrek.com. We aim to respond within 24 hours.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">You can reach us directly at +91 9717600731. Our support team is available from 9 AM to 6 PM IST.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">Visit Us</h3>
                <p className="text-gray-600 mb-4">We'd love to meet you! Visit us at 912, Suryakiran Building, Connaught Place, Delhi, India. Schedule an appointment to discuss your projects.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-0">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-3">Stay Updated</h2>
            <p className="mb-6 opacity-90">Subscribe to our newsletter for the latest insights and updates on AI, IoT, and blockchain technologies.</p>
            <div className="flex flex-col md:flex-row gap-3">
              <Input 
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70 flex-1" 
                placeholder="Enter your email" 
              />
              <Button className="bg-white text-black hover:bg-white/90">
                Subscribe
                <Send className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Cpu className="h-8 w-8 text-blue-400" />
                <span className="font-bold text-xl">Instrek Technologies</span>
              </div>
              <p className="text-gray-400 text-sm">At Instrek Technologies, we drive the future with AI, IoT, AIoT, Blockchain, and next-gen digital solutions.</p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Explore</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Trainings and Skilling</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Transformation Tales</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">AI-driven IT Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Smart City Solutions</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">© 2025 Instrek Technologies. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-white text-sm">Terms and Conditions</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default InstrekTechnologies;