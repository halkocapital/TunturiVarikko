import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Thermometer, Zap, Shield, Car, Snowflake, Home, Globe, MessageCircle } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [language, setLanguage] = useState<'fi' | 'en'>('fi');

  const translations = {
    fi: {
      // Navigation
      languageSelector: "Kieli",
      
      // Hero Section
      heroTitle: "Varastotilaa Saariselällä",
      heroSubtitle: "Tunturivarikko tarjoaa monipuoliset ja käytännölliset ratkaisut turvalliseen ja huolettomaan säilytykseen",
      viewPricing: "Katso hinnoittelu",
      contact: "Ota yhteyttä",
      
      // Services
      servicesTitle: "Tarjoamme",
      servicesSubtitle: "Vuokraa varastotilaa Saariselällä ja unohda säilytyshuolesi – keskity nauttimaan pohjoisen elämyksistä, me hoidamme loput!",
      
      services: [
        {
          title: "Lämpimät tallikontit",
          description: "Lämmin ja kuiva sisätila tavaran säilyttämiseen ja pieniin huoltotöihin.",
          features: ["Lämmitetty", "Kuiva", "Turvallinen"]
        },
        {
          title: "Kylmät sisätilat konteissa",
          description: "Suojaisa ja lukittava varastotila esimerkiksi moottorikelkkojen ja muiden laitteiden säilytykseen.",
          features: ["Lukittava", "Suojattu", "Turvallinen"]
        },
        {
          title: "Pihapaikkoja",
          description: "Sopivat erinomaisesti suuremmalle ja pienemmälle kalustolle, kuten linja-autoille ja peräkärryille.",
          features: ["Ulkotila", "Suurille ajoneuvoille", "Edullinen"]
        },
        {
          title: "Räätälöidyt ratkaisut",
          description: "Tarvitsetko jotain erityistä? Lämmitettyä tilaa? Pakastetilaa? Voimme toteuttaa säilytysratkaisun tarpeesi mukaan.",
          features: ["Mukautettu", "Erikoisratkaisut", "Konsultointi"]
        }
      ],
      
      // Images
      imagesTitle: "Varastotilojamme",
      imagesSubtitle: "Tutustu varastotiloihimme ja alueeseen",
      
      // Pricing
      pricingTitle: "Hinnoittelu",
      pricingSubtitle: "Kilpailukykyiset hinnat kaikille varastotyypeille",
      storage13Title: "13 neliön varastot",
      storage26Title: "26 neliön varastot",
      outdoorTitle: "Pihapaikkoja",
      
      pricing13: [
        { type: "13 neliön varasto", price: "99 €/kk", features: ["Perusvarasto", "Lukittava", "Turvallinen"] },
        { type: "13 neliön sähköistetty varasto", price: "129 €/kk", features: ["Sähkö", "Valaistus", "Pistorasiat"] },
        { type: "13 neliön sähköistetty ja eristetty varasto", price: "229 €/kk", features: ["Valaistus ja pistorasiat", "Lämpöeristetty", "Sähkölämmitys"], badge: "TARJOUS!" }
      ],
      
      pricing26: [
        { type: "26 neliön varasto", price: "169 €/kk", features: ["Suurempi tila", "Lukittava", "Turvallinen"] },
        { type: "26 neliön sähköistetty varasto", price: "199 €/kk", features: ["Sähkö", "Valaistus", "Pistorasiat"] },
        { type: "26 neliön sähköistetty ja eristetty varasto", price: "349 €/kk", features: ["Valaistus ja pistorasiat", "Lämpöeristetty", "Sähkölämmitys"], badge: "TARJOUS!" }
      ],
      
      outdoorPricing: [
        { type: "Peräkärrypaikka", price: "99 €/kausi", features: ["Talvi tai kesä", "Ulkotila", "Henkilöauton peräkärrylle"] },
        { type: "Raskas liikenne ja työkoneet", price: "Kysy", features: ["Talvi tai kesä", "Ulkotila", "Suurille ajoneuvoille"] }
      ],
      
      // Location
      locationTitle: "Sijainti",
      locationSubtitle: "Löydät meidät Saariselältä, Jemmasta",
      addressTitle: "Osoite",
      locationDescription: "Tunturivarikolle on helppo löytää Saariselän alueelta. Olemme Saariselän teollisuusalueella, joten pääset helposti käsiksi varastoosi milloin tahansa.",
      
      // Contact
      contactTitle: "Yhteystiedot",
      contactSubtitle: "Ota yhteyttä ja kysy lisää varastotiloistamme",
      phoneTitle: "Puhelin",
      emailTitle: "Sähköposti",
      contactPersonTitle: "Yhteyshenkilö",
      callNow: "Soita nyt",
      
      // WhatsApp
      whatsappMessage: "Hei! Haluaisin kysyä varastotiloista Saariselällä.",
      whatsappTooltip: "Kysy WhatsAppissa",
      
      // Footer
      facebookLink: "Tunturivarikon Facebook",
      instagramLink: "Tunturivarikon Instagram",
      youtubeLink: "Tunturivarikon YouTube",
      copyright: "© 2025 Tunturivarikko Saariselkä. Kaikki oikeudet pidätetään."
    },
    en: {
      // Navigation
      languageSelector: "Language",
      
      // Hero Section
      heroTitle: "Storage Space in Saariselkä",
      heroSubtitle: "Tunturivarikko offers versatile and practical solutions for safe and worry-free storage",
      viewPricing: "View Pricing",
      contact: "Contact Us",
      
      // Services
      servicesTitle: "We Offer",
      servicesSubtitle: "Rent storage space in Saariselkä and forget your storage worries – focus on enjoying the northern experiences, we'll handle the rest!",
      
      services: [
        {
          title: "Heated Storage Units",
          description: "Warm and dry indoor space for storing goods and small maintenance work.",
          features: ["Heated", "Dry", "Secure"]
        },
        {
          title: "Cold Indoor Storage",
          description: "Protected and lockable storage space for snowmobiles and other equipment.",
          features: ["Lockable", "Protected", "Secure"]
        },
        {
          title: "Outdoor Parking",
          description: "Perfect for larger and smaller equipment, such as buses and trailers.",
          features: ["Outdoor", "Large vehicles", "Affordable"]
        },
        {
          title: "Custom Solutions",
          description: "Need something special? Heated space? Freezer space? We can implement a storage solution according to your needs.",
          features: ["Customized", "Special solutions", "Consultation"]
        }
      ],
      
      // Images
      imagesTitle: "Our Storage Facilities",
      imagesSubtitle: "Explore our storage spaces and area",
      
      // Pricing
      pricingTitle: "Pricing",
      pricingSubtitle: "Competitive prices for all storage types",
      storage13Title: "13 sqm Storage Units",
      storage26Title: "26 sqm Storage Units",
      outdoorTitle: "Outdoor Parking",
      
      pricing13: [
        { type: "13 sqm storage", price: "99 €/month", features: ["Basic storage", "Lockable", "Secure"] },
        { type: "13 sqm electrified storage", price: "129 €/month", features: ["Electricity", "Lighting", "Power outlets"] },
        { type: "13 sqm electrified and insulated storage", price: "229 €/month", features: ["Lighting and power outlets", "Heat insulated", "Electric heating"], badge: "OFFER!" }
      ],
      
      pricing26: [
        { type: "26 sqm storage", price: "169 €/month", features: ["Larger space", "Lockable", "Secure"] },
        { type: "26 sqm electrified storage", price: "199 €/month", features: ["Electricity", "Lighting", "Power outlets"] },
        { type: "26 sqm electrified and insulated storage", price: "349 €/month", features: ["Lighting and power outlets", "Heat insulated", "Electric heating"], badge: "OFFER!" }
      ],
      
      outdoorPricing: [
        { type: "Trailer parking", price: "99 €/season", features: ["Winter or summer", "Outdoor", "For car trailers"] },
        { type: "Heavy traffic and machinery", price: "Ask", features: ["Winter or summer", "Outdoor", "For large vehicles"] }
      ],
      
      // Location
      locationTitle: "Location",
      locationSubtitle: "Find us in Saariselkä, Jemma",
      addressTitle: "Address",
      locationDescription: "Tunturivarikko is easy to find in the Saariselkä area. We are located in Saariselkä's industrial area, so you can easily access your storage at any time.",
      
      // Contact
      contactTitle: "Contact Information",
      contactSubtitle: "Get in touch and ask more about our storage facilities",
      phoneTitle: "Phone",
      emailTitle: "Email",
      contactPersonTitle: "Contact Person",
      callNow: "Call Now",
      
      // WhatsApp
      whatsappMessage: "Hi! I would like to ask about storage facilities in Saariselkä.",
      whatsappTooltip: "Ask on WhatsApp",
      
      // Footer
      facebookLink: "Tunturivarikko Facebook",
      instagramLink: "Tunturivarikko Instagram",
      youtubeLink: "Tunturivarikko YouTube",
      copyright: "© 2025 Tunturivarikko Saariselkä. All rights reserved."
    }
  };

  const t = translations[language];

  const serviceIcons = [
    <Home className="w-8 h-8 text-blue-600" />,
    <Snowflake className="w-8 h-8 text-blue-400" />,
    <Car className="w-8 h-8 text-green-600" />,
    <Shield className="w-8 h-8 text-purple-600" />
  ];

  // WhatsApp function
  const openWhatsApp = () => {
    const phoneNumber = "358505444237"; // Finnish number in international format
    const message = encodeURIComponent(t.whatsappMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  // Scroll to pricing section
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing-section');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll to contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Language Selector */}
      <div className="fixed top-4 right-4 z-50">
        <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-2">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-gray-600" />
            <select 
              value={language} 
              onChange={(e) => setLanguage(e.target.value as 'fi' | 'en')}
              className="bg-transparent border-none outline-none cursor-pointer text-sm font-medium"
            >
              <option value="fi">Suomi</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20 px-4">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {t.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
            {t.heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-3" onClick={scrollToPricing}>
              {t.viewPricing}
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8 py-3" onClick={scrollToContact}>
              {t.contact}
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.servicesTitle}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t.servicesSubtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    {serviceIcons[index]}
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4 text-center">
                    {service.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {service.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Images Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.imagesTitle}</h2>
            <p className="text-lg text-gray-600">{t.imagesSubtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img 
                src="https://tunturivarikko.fi/Saariselka_varasto_1.jpeg" 
                alt="Varastotiloja Saariselällä" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img 
                src="https://tunturivarikko.fi/Saariselka_varasto_2.JPG" 
                alt="Talvivarastointia" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img 
                src="https://tunturivarikko.fi/Saariselka_moottorikelkkavarasto.jpg" 
                alt="Moottorikelkkavarasto" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img 
                src="https://tunturivarikko.fi/Saariselka_varasto_3.JPG" 
                alt="Varastotiloja Saariselällä" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img 
                src="https://tunturivarikko.fi/Saariselka_varasto_4.JPG" 
                alt="Varastotiloja Saariselällä" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img 
                src="https://tunturivarikko.fi/Saariselka_varasto_5.JPG" 
                alt="Varastotiloja Saariselällä" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img 
                src="https://tunturivarikko.fi/Saariselka_varasto_6.JPG" 
                alt="Varastotiloja Saariselällä" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img 
                src="https://tunturivarikko.fi/Saariselka_varasto_8.jpg" 
                alt="Varastotiloja Saariselällä" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing-section" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.pricingTitle}</h2>
            <p className="text-lg text-gray-600">{t.pricingSubtitle}</p>
          </div>

          {/* 13m² Storage */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-blue-900">{t.storage13Title}</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {t.pricing13.map((item, index) => (
                <Card key={index} className="relative hover:shadow-lg transition-shadow duration-300">
                  {item.badge && (
                    <Badge className="absolute -top-2 -right-2 bg-red-500 text-white">
                      {item.badge}
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-lg">{item.type}</CardTitle>
                    <div className="text-3xl font-bold text-blue-600 mt-2">{item.price}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {item.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* 26m² Storage */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-blue-900">{t.storage26Title}</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {t.pricing26.map((item, index) => (
                <Card key={index} className="relative hover:shadow-lg transition-shadow duration-300">
                  {item.badge && (
                    <Badge className="absolute -top-2 -right-2 bg-red-500 text-white">
                      {item.badge}
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-lg">{item.type}</CardTitle>
                    <div className="text-3xl font-bold text-blue-600 mt-2">{item.price}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {item.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Outdoor Parking */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8 text-blue-900">{t.outdoorTitle}</h3>
            <div className="flex justify-center">
              <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl">
                {t.outdoorPricing.map((item, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="text-center">
                      <CardTitle className="text-lg">{item.type}</CardTitle>
                      <div className="text-3xl font-bold text-green-600 mt-2">{item.price}</div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {item.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.locationTitle}</h2>
            <p className="text-lg text-gray-600">{t.locationSubtitle}</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{t.addressTitle}</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <p className="font-semibold">JEMMA</p>
                      <p className="text-gray-600">99830 SAARISELKÄ</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <p className="text-gray-600 leading-relaxed">
                    {t.locationDescription}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1743.8!2d27.39437!3d68.41408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNjjCsDI0JzUwLjciTiAyN8KwMjMnMzkuNyJF!5e0!3m2!1sfi!2sfi!4v1734540000000!5m2!1sfi!2sfi"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Tunturivarikko sijainti Jemmassa, Saariselkä"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="py-16 px-4 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.contactTitle}</h2>
            <p className="text-xl text-blue-100">{t.contactSubtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
              <Phone className="w-8 h-8 mx-auto mb-4 text-blue-300" />
              <h3 className="text-xl font-semibold mb-2">{t.phoneTitle}</h3>
              <p className="text-blue-100">050 544 4237</p>
            </div>
            
            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
              <Mail className="w-8 h-8 mx-auto mb-4 text-blue-300" />
              <h3 className="text-xl font-semibold mb-2">{t.emailTitle}</h3>
              <p className="text-blue-100">info@tunturivarikko.fi</p>
            </div>
            
            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
              <MapPin className="w-8 h-8 mx-auto mb-4 text-blue-300" />
              <h3 className="text-xl font-semibold mb-2">{t.contactPersonTitle}</h3>
              <p className="text-blue-100">Antti Keränen</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-3">
              <Phone className="w-5 h-5 mr-2" />
              {t.callNow}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-4 space-y-2">
            <div>
              <a 
                href="https://www.facebook.com/profile.php?id=61577734971479" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors mr-6"
              >
                {t.facebookLink}
              </a>
              <a 
                href="https://www.instagram.com/tunturivarikko/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-300 transition-colors mr-6"
              >
                {t.instagramLink}
              </a>
              <a 
                href="https://www.youtube.com/@Tunturivarikko" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-red-400 hover:text-red-300 transition-colors"
              >
                {t.youtubeLink}
              </a>
            </div>
          </div>
          <p className="text-gray-400 text-sm">
            {t.copyright}
          </p>
        </div>
      </footer>
      
      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={openWhatsApp}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
          title={t.whatsappTooltip}
        >
          <MessageCircle className="w-6 h-6" />
          <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            {t.whatsappTooltip}
          </div>
        </button>
      </div>
    </div>
  );
};

export default Index;