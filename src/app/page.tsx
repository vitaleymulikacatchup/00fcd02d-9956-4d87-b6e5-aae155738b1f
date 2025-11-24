"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import AboutFeature from '@/components/sections/about/AboutFeature';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import TestimonialCardFour from '@/components/sections/testimonial/TestimonialCardFour';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { ConciergeBell, Dumbbell, Wine, Star, Crown, Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="medium"
      background="animatedAurora"
      cardStyle="glass-depth"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="outline"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Luxe Haven"
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "Gallery", id: "gallery" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Book Now", href: "contact" }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="LUXE HAVEN"
          description="Experience unparalleled luxury and comfort at our award-winning hotel. Discover world-class amenities, breathtaking views, and personalized service designed for the discerning traveler."
          buttons={[
            { text: "Book Your Stay", href: "contact" },
            { text: "Explore Rooms", href: "rooms" }
          ]}
          slides={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SAuZG11YN2jMHmu0FsR9Di3IL/uploaded-1764016558360-ny5tvni2.jpg",
              imageAlt: "Luxury hotel bedroom suite"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SAuZG11YN2jMHmu0FsR9Di3IL/uploaded-1764016559102-uskqzsb9.jpg",
              imageAlt: "Resort swimming pool area"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SAuZG11YN2jMHmu0FsR9Di3IL/uploaded-1764016559838-o7tdu7kw.jpg",
              imageAlt: "Fine dining restaurant"
            }
          ]}
          autoplayDelay={4000}
          showDimOverlay={true}
        />
      </div>
      
      <div id="amenities" data-section="amenities">
        <AboutFeature
          title="World-Class Amenities and Services"
          features={[
            {
              icon: ConciergeBell,
              title: "Luxury Spa Wellness",
              description: "Rejuvenate with our full-service spa offering treatments, massages, and wellness therapies in a serene environment."
            },
            {
              icon: Dumbbell,
              title: "State-of-the-Art Fitness",
              description: "Stay active with modern gym facilities, personal training services, and yoga classes available daily."
            },
            {
              icon: Wine,
              title: "Fine Dining",
              description: "Indulge in culinary excellence with our award-winning restaurants and bars offering international cuisine."
            },
            {
              icon: ConciergeBell,
              title: "Concierge Services",
              description: "Our dedicated concierge team arranges reservations, tours, and experiences tailored to your needs."
            }
          ]}
        />
      </div>
      
      <div id="rooms" data-section="rooms">
        <ProductCardOne
          title="Featured Room Collection"
          description="Discover our carefully curated selection of luxurious rooms designed for ultimate comfort and sophistication"
          products={[
            {
              id: "1",
              name: "Deluxe Room",
              price: "$189/night",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SAuZG11YN2jMHmu0FsR9Di3IL/uploaded-1764016560601-yyum71fr.jpg",
              imageAlt: "Deluxe hotel room"
            },
            {
              id: "2",
              name: "Executive Suite",
              price: "$299/night",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SAuZG11YN2jMHmu0FsR9Di3IL/uploaded-1764016561176-ihoap7zh.jpg",
              imageAlt: "Executive suite"
            },
            {
              id: "3",
              name: "Garden Villa",
              price: "$249/night",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SAuZG11YN2jMHmu0FsR9Di3IL/uploaded-1764016561974-5hr2oet7.jpg",
              imageAlt: "Garden villa room"
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
        />
      </div>
      
      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Room Packages & Rates"
          description="Choose the perfect accommodation option for your stay with our flexible room packages"
          plans={[
            {
              id: "standard",
              badge: "Standard Rooms",
              badgeIcon: Star,
              price: "$189",
              subtitle: "Per night, sleeps 2 guests",
              buttons: [
                { text: "Select Room", href: "contact" },
                { text: "Learn More", href: "#" }
              ],
              features: [
                "Queen or twin bed",
                "32-inch flat-screen TV",
                "High-speed Wi-Fi",
                "Work desk and seating",
                "Marble bathroom"
              ]
            },
            {
              id: "deluxe",
              badge: "Deluxe Rooms",
              badgeIcon: Crown,
              price: "$249",
              subtitle: "Per night, sleeps 2-3 guests",
              buttons: [
                { text: "Select Room", href: "contact" },
                { text: "Learn More", href: "#" }
              ],
              features: [
                "King bed or twin configuration",
                "Separate living area",
                "City view balcony",
                "Premium toiletries",
                "Espresso machine"
              ]
            },
            {
              id: "suite",
              badge: "Executive Suites",
              badgeIcon: Sparkles,
              price: "$399",
              subtitle: "Per night, sleeps 2-4 guests",
              buttons: [
                { text: "Select Suite", href: "contact" },
                { text: "Learn More", href: "#" }
              ],
              features: [
                "Master bedroom and lounge",
                "Panoramic city views",
                "Butler service available",
                "Premium minibar and snacks",
                "Complimentary suite upgrade"
              ]
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFour
          title="Guest Experiences"
          description="Hear what our valued guests have to say about their unforgettable stays at Luxe Haven"
          testimonials={[
            {
              id: "1",
              name: "Michael Anderson",
              role: "Business Traveler",
              company: "Executive Corporate",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SAuZG11YN2jMHmu0FsR9Di3IL/uploaded-1764016566054-t58l00l5.jpg"
            },
            {
              id: "2",
              name: "Sarah Johnson",
              role: "Honeymoon Couple",
              company: "Travel Experience",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SAuZG11YN2jMHmu0FsR9Di3IL/uploaded-1764016566747-xqdz99bz.jpg"
            },
            {
              id: "3",
              name: "David Chen",
              role: "Family Vacation",
              company: "Leisure Travelers",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SAuZG11YN2jMHmu0FsR9Di3IL/uploaded-1764016567266-1m1615i6.jpg"
            },
            {
              id: "4",
              name: "Emma Richards",
              role: "Conference Attendee",
              company: "Corporate Group",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SAuZG11YN2jMHmu0FsR9Di3IL/uploaded-1764016568175-lcy5isu8.jpg"
            }
          ]}
          textboxLayout="default"
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Plan Your Perfect Getaway"
          description="Reserve your room today or contact our reservations team for personalized travel arrangements and special requests."
          inputs={[
            { name: "name", type: "text", placeholder: "Full Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: true },
            { name: "checkIn", type: "date", placeholder: "Check-in Date", required: true }
          ]}
          textarea={{ name: "message", placeholder: "Special requests or questions about your stay", rows: 4, required: false }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SAuZG11YN2jMHmu0FsR9Di3IL/uploaded-1764016568915-xt08ufkq.jpg"
          imageAlt="Luxe Haven hotel interior"
          mediaPosition="right"
          buttonText="Reserve Now"
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Luxe Haven"
          columns={[
            {
              title: "Property",
              items: [
                { label: "Guest Rooms", href: "rooms" },
                { label: "Amenities", href: "amenities" },
                { label: "Dining", href: "#" },
                { label: "Events", href: "#" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "#" },
                { label: "Careers", href: "#" },
                { label: "Blog", href: "#" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              title: "Information",
              items: [
                { label: "Reservations", href: "contact" },
                { label: "FAQ", href: "#" },
                { label: "Loyalty Program", href: "#" },
                { label: "Book Gift Card", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2025 Luxe Haven Hotel. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}