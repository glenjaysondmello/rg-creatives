import {
  Users2,
  Radio,
  Video,
  Camera,
  Film,
  RotateCw,
  LucideIcon,
} from "lucide-react";

export type ServiceFeature = {
  name: string;
  desc: string;
};

export type ServiceItem = {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  shortDesc: string;
  overview: string[];
  features: ServiceFeature[];
  idealFor: string[];
  closing: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
};

export const SERVICES: ServiceItem[] = [
  {
    id: "hybrid-events",
    title: "Hybrid Event Production",
    subtitle: "Hybrid Event Production in UAE",
    tagline: "Bringing In-Person and Online Audiences Together",
    shortDesc:
      "Connect in-person and remote audiences through professional hybrid event technology, remote speaker integration, live presentations and seamless AV coordination.",
    overview: [
      "RG Creatives provides professional hybrid event production services for conferences, seminars, corporate meetings, panel discussions, and business events.",
      "We integrate on-site cameras, presentation systems, professional audio, LED screens, and remote conferencing platforms to create a connected experience for audiences attending both in person and online.",
    ],
    features: [
      {
        name: "Remote Speaker Integration",
        desc: "Connect presenters and panellists joining remotely through Zoom, Microsoft Teams, and other compatible meeting platforms.",
      },
      {
        name: "Live Presentation Management",
        desc: "Coordinate presentation slides, video playback, speaker feeds, and on-screen content throughout your event.",
      },
      {
        name: "Multi-Camera Production",
        desc: "Capture speakers, panel discussions, audience reactions, and stage activities using multiple camera angles and live video switching.",
      },
      {
        name: "Professional Audio Integration",
        desc: "Coordinate microphones, PA systems, remote participants, and programme audio to support clear communication between the venue and online attendees.",
      },
      {
        name: "Hybrid Meeting Support",
        desc: "Provide technical setup, rehearsals, live operation, and troubleshooting for hybrid meetings, conferences, and corporate presentations.",
      },
    ],
    idealFor: [
      "Corporate conferences",
      "Government events",
      "Seminars",
      "Training sessions",
      "Award ceremonies",
      "Product launches",
      "International meetings",
    ],
    closing:
      "Make Your Next Event Accessible to Every Audience. Let RG Creatives help you connect speakers, presentations, and audiences through professional hybrid event technology.",
    icon: Users2,
    image: "/1-Hybrid Meeting/Hybrid 1.jpg",
    imageAlt: "Hybrid Event Production setup with live switching station",
  },
  {
    id: "live-streaming",
    title: "Live Streaming",
    subtitle: "Live Streaming Services in UAE",
    tagline: "Deliver Your Event Live to Audiences Anywhere",
    shortDesc:
      "Broadcast conferences, corporate events and special occasions with multi-camera production, live switching, audio integration and streaming platform support.",
    overview: [
      "RG Creatives provides professional live streaming services for corporate events, conferences, seminars, award ceremonies, product launches, and special occasions.",
      "Our production solutions combine multi-camera video capture, live switching, audio integration, presentation management, and streaming technology to deliver an engaging online viewing experience.",
    ],
    features: [
      {
        name: "Multi-Camera Live Video Production",
        desc: "Broadcast with dynamic, multi-angle camera switching and live video production.",
      },
      {
        name: "Live Switching Between Cameras and Presentations",
        desc: "Coordinate seamless transitions between camera angles, video playback, and presentations.",
      },
      {
        name: "Professional Microphone and Audio Integration",
        desc: "Deliver pristine sound for venue audiences and online viewers alike.",
      },
      {
        name: "Speaker Names, Presentation Graphics & Branded Overlays",
        desc: "Display speaker names, logos, lower thirds, and event branding on stream where required.",
      },
      {
        name: "Streaming to Supported Online Platforms",
        desc: "Broadcast to YouTube, Facebook, LinkedIn, Zoom, or private RTMP channels.",
      },
      {
        name: "Event Recording for Future Viewing and Distribution",
        desc: "High-resolution master recordings provided for archival, on-demand, or marketing use.",
      },
      {
        name: "On-Site Technical Operation and Production Support",
        desc: "Dedicated crew planning technical workflow, testing equipment, and managing live feeds.",
      },
    ],
    idealFor: [
      "Corporate conferences",
      "Business meetings",
      "Weddings",
      "Award ceremonies",
      "Exhibitions",
      "Private celebrations",
    ],
    closing:
      "Professional Production. Seamless Delivery. We plan the technical workflow, test the equipment, coordinate audio and video signals, and manage the live production throughout the event.",
    icon: Radio,
    image: "/2-Live Streaming/20261004_110936.jpg",
    imageAlt: "Live streaming setup with professional cameras and control surface",
  },
  {
    id: "multi-cam",
    title: "Full Event Video Coverage",
    subtitle: "Full Event Video Coverage in UAE",
    tagline: "Capture Every Important Moment",
    shortDesc:
      "Capture every important moment, from keynote speeches and presentations to weddings, celebrations, award ceremonies and corporate events.",
    overview: [
      "RG Creatives provides professional event video coverage for corporate conferences, seminars, weddings, private parties, award ceremonies, exhibitions, and special occasions.",
      "Our approach focuses on capturing the complete story of your event, from important speeches and presentations to candid interactions, performances, celebrations, and memorable highlights.",
    ],
    features: [
      {
        name: "Complete Event Recording",
        desc: "Record key event proceedings, presentations, speeches, panel discussions, and other important activities.",
      },
      {
        name: "Multi-Camera Event Coverage",
        desc: "Use multiple camera angles where required to capture stage activity, speakers, audiences, and important details.",
      },
      {
        name: "Conference & Seminar Recording",
        desc: "Capture keynote speakers, panel sessions, training presentations, and business discussions for future reference or distribution.",
      },
      {
        name: "Wedding & Private Event Videography",
        desc: "Document ceremonies, celebrations, family moments, guest interactions, and special highlights.",
      },
      {
        name: "Event Highlights & Promotional Videos",
        desc: "Create edited highlight films and promotional content that help you share your event with clients, colleagues, and online audiences.",
      },
      {
        name: "Live Streaming & Recording Packages",
        desc: "Combine live streaming and event recording when you need to broadcast an event while also retaining footage for future use.",
      },
    ],
    idealFor: [
      "Corporate conferences",
      "Seminars",
      "Weddings",
      "Private parties",
      "Award ceremonies",
      "Exhibitions",
      "Special occasions",
    ],
    closing:
      "Video Coverage for Every Occasion. Whether you need a complete recording of a corporate conference or a cinematic film of a wedding, we tailor our camera coverage and deliverables to your requirements.",
    icon: Video,
    image: "/3-Full Coverage/20260628_144104.jpg",
    imageAlt: "Full video coverage of a corporate conference",
  },
  {
    id: "audio-system",
    title: "Professional Audio System",
    subtitle: "Professional Sound & PA Systems",
    tagline: "Clear Sound. Seamless Communication.",
    shortDesc:
      "Professional audio solutions including microphones, PA systems, mixing and sound reinforcement for conferences, meetings, weddings and live events.",
    overview: [
      "We provide professional audio solutions for conferences, corporate meetings, weddings, seminars, award ceremonies, and private events.",
      "Our services include PA systems, wireless microphones, audio mixing, and sound reinforcement to ensure clear, consistent sound for speakers, performers, and audiences.",
    ],
    features: [
      {
        name: "Professional PA System Rental",
        desc: "High-grade acoustic sound systems and speakers calibrated to venue dimensions.",
      },
      {
        name: "Wireless and Wired Microphone Solutions",
        desc: "Handheld, lavalier, and headset microphones for presenters, performers, and panels.",
      },
      {
        name: "Conference and Presentation Audio",
        desc: "Speech-optimized audio reinforcement for clear, intelligible communication.",
      },
      {
        name: "Audio Mixing and Sound Reinforcement",
        desc: "Live balance adjustment, acoustic tuning, and feedback prevention throughout the event.",
      },
      {
        name: "Hybrid Event and Live Streaming Audio Integration",
        desc: "Unified sound engineering for both in-room sound systems and remote participants.",
      },
      {
        name: "On-Site Audio Setup and Technical Operation",
        desc: "Dedicated audio engineers handling sound check, rehearsals, and live operation.",
      },
    ],
    idealFor: [
      "Conferences",
      "Seminars",
      "Weddings",
      "Corporate events",
      "Gala dinners",
      "Live presentations",
    ],
    closing:
      "Clear Sound. Seamless Communication. Trust RG Creatives for reliable, high-fidelity sound systems and professional on-site audio engineering.",
    icon: Radio,
    image: "/8- Audio setup/event.jpg",
    imageAlt: "Professional audio mixing console at a live event",
  },
  {
    id: "gimbal-videography",
    title: "Gimbal Videography",
    subtitle: "Dynamic Stabilised Videography",
    tagline: "Smooth Motion. Cinematic Storytelling.",
    shortDesc:
      "Capture your event with dynamic, stabilised video footage using professional gimbal technology for smooth moving shots and cinematic sequences.",
    overview: [
      "Capture your event with dynamic, stabilised video footage using professional gimbal technology.",
      "We create smooth moving shots, cinematic sequences, and engaging visual stories that showcase the atmosphere, people, and important moments of your event.",
    ],
    features: [
      {
        name: "Smooth Cinematic Camera Movements",
        desc: "Dynamic 3-axis motorized gimbal stabilization for fluid, cinema-grade camera moves.",
      },
      {
        name: "Event Highlights and Promotional Videos",
        desc: "High-energy edited recap videos and social media reels capturing event excitement.",
      },
      {
        name: "Dynamic Venue and Detail Shots",
        desc: "Sweeping architectural walkthroughs of venue decor, lighting, and ambient spaces.",
      },
      {
        name: "Guest Interactions and Candid Moments",
        desc: "Unobtrusive capture of spontaneous laughs, handshakes, and genuine celebrations.",
      },
      {
        name: "Wedding and Private Event Videography",
        desc: "Emotional cinematic storytelling capturing special milestones and family moments.",
      },
      {
        name: "Corporate Event and Brand Video Production",
        desc: "Compelling brand storytelling and high-value video assets for corporate marketing.",
      },
    ],
    idealFor: [
      "Weddings",
      "Corporate events",
      "Exhibitions",
      "Product launches",
      "Private parties",
      "Promotional content",
    ],
    closing:
      "Smooth Motion. Cinematic Storytelling. Showcase the atmosphere, people, and important moments of your event through professional gimbal technology.",
    icon: Film,
    image: "/5-Gimbal/20261003_171916.jpg",
    imageAlt: "Cinematic event videography with gimbal camera rig",
  },
  {
    id: "photography",
    title: "Professional Photography",
    subtitle: "High-End Event Photography",
    tagline: "Every Moment. Beautifully Captured.",
    shortDesc:
      "Professional event photography covering candid moments, speakers, VIP guests, award presentations, group portraits and special occasions.",
    overview: [
      "Our professional event photography captures the important moments, genuine emotions, and unique details that make every event memorable.",
      "From candid guest interactions to formal portraits and stage coverage, we deliver quality images suited to personal memories, business communication, and promotional use.",
    ],
    features: [
      {
        name: "Corporate Event and Conference Photography",
        desc: "Comprehensive documentation of keynote addresses, stage presentations, and attendees.",
      },
      {
        name: "Wedding and Private Party Photography",
        desc: "Timeless portraiture and spontaneous celebration photography for unforgettable memories.",
      },
      {
        name: "Candid and Documentary-Style Photography",
        desc: "Real, heartfelt moments captured discreetly throughout your celebration.",
      },
      {
        name: "Speaker, VIP, and Award Ceremony Coverage",
        desc: "Sharp, high-impact photography of guest dignitaries, awards, and VIP photo calls.",
      },
      {
        name: "Group Photographs and Formal Portraits",
        desc: "Expertly lit and arranged group portraits of teams, executives, and families.",
      },
      {
        name: "Product, Brand, and Event Detail Photography",
        desc: "Artistic photography of event staging, branded backdrops, decor, and sponsor displays.",
      },
    ],
    idealFor: [
      "Corporate events",
      "Conferences",
      "Weddings",
      "Birthdays",
      "Private parties",
      "Exhibitions",
      "Award ceremonies",
      "Special celebrations",
    ],
    closing:
      "Every Moment. Beautifully Captured. Quality imagery suited to personal memories, business communication, and promotional use.",
    icon: Camera,
    image: "/6-Photography/DSC06896.jpg",
    imageAlt: "Professional event photography at a corporate gathering",
  },
  {
    id: "booth-360",
    title: "360° & DSLR Photo Booths",
    subtitle: "Interactive Photo & Video Booths",
    tagline: "Interactive Experiences. Unforgettable Memories.",
    shortDesc:
      "Make your event more engaging with our 360° video and professional DSLR photo booth experiences, custom branding and instant printing.",
    overview: [
      "Make your event more engaging with our 360° video and professional DSLR photo booth experiences.",
      "Guests can enjoy creative photo and video moments, while customised branding and instant printing options add a personalised touch to your celebration or corporate event.",
    ],
    features: [
      {
        name: "360° Video Booth Experiences",
        desc: "Revolving camera platform producing captivating slow-motion 360 video reels.",
      },
      {
        name: "Professional DSLR Photo Booth Photography",
        desc: "High-resolution DSLR camera with studio flash lighting for flawless guest portraits.",
      },
      {
        name: "Instant Photo Printing",
        desc: "Fast on-site physical prints on lab-grade photo paper for guests to take home.",
      },
      {
        name: "Custom Photo Templates and Event Branding",
        desc: "Tailored graphic frames, event logos, names, and date overlays on all outputs.",
      },
      {
        name: "Branded Digital Photos and Videos",
        desc: "Instant QR code download, AirDrop, and email sharing for immediate social sharing.",
      },
      {
        name: "Guest Entertainment and Interactive Experiences",
        desc: "Fun props, engaging attendants, and high-energy guest interaction all night.",
      },
    ],
    idealFor: [
      "Weddings",
      "Birthdays",
      "Corporate events",
      "Brand activations",
      "Exhibitions",
      "Product launches",
      "Gala dinners",
      "Private celebrations",
    ],
    closing:
      "Make Your Event Memorable. Contact RG Creatives to discuss your event requirements and customise a photo booth package to suit your occasion.",
    icon: RotateCw,
    image: "/7-360 Booth & Dslr Photobooth/20260207_171701.jpg",
    imageAlt: "360 degree and DSLR photo booth setup at an event",
  },
];
