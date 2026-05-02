# Directive: Lead Conversion (Service Inquiries & Quotes)

## Goal
The primary goal is to generate high-quality leads for the agency's services (Live Streaming, Photobooth, Video Editing). 
The flow must move users from "Wow, cool video" -> "I want this for my event" -> "Get a Quote".

## Core CRO Principles (Agency Context)
1.  **WhatsApp First (Dubai Context):** In the Dubai market, WhatsApp is the primary business channel. 
    - Include a floating "Chat on WhatsApp" button (brand color: #25D366) on all pages.
    - Pre-fill the message based on the page (e.g., "Hi, I'm interested in your 360 Spin Booth...").
2.  **Visual Proof before Price:** Never show a "Contact Form" without first showing a relevant portfolio piece nearby. 
    - *Rule:* The "Get Quote" button must be adjacent to the "Best Work" showreel.
3.  **Tiered Service Selection:** - Do not use a generic "Contact Us" form. 
    - Use a "Service Picker" (e.g., "I need: [Video Editing] [Photobooth] [Live Stream]") to route the inquiry correctly.

## Tech Stack Implementation
1.  **Inquiry Modal:** Instead of a separate /contact page, use a **Global Slide-Over Panel** (`framer-motion`) triggered by "Book Now".
    - *Why:* Keeps the user on the portfolio page while they type.
2.  **Validation:** Use `zod` to ensure we get a valid Phone Number (essential for Dubai clients).
3.  **Dynamic Context:** If the user is on the "360 Spin" page, the inquiry form should auto-select "360 Spin" as the service of interest.

## Component Requirements
- **QuoteWizard:** A 2-step form.
    - Step 1: Event Details (Date, Location, Service Type).
    - Step 2: Contact Info (Name, Company, WhatsApp).
- **Trust Signals:** Below the "Submit" button, display logos of past Dubai clients or "500+ Events Covered" text.

## Forbidden Patterns
- ❌ **Pricing Tables:** Do not display fixed prices (e.g., "$500"). Use "Starting from AED XXX" or "Get Custom Quote" as services are bespoke.
- ❌ **Empty States:** If a user searches for a service you don't list, suggest the closest match (e.g., "Looking for Drone shots? Check our Video Production").
