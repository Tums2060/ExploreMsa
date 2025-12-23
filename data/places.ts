// data/places.ts

export type Place = {
  id: string;
  title: string;
  description: string;
  poster: string;
  videoUrls: string[];
  imageUrls: string[];
  google360Urls: string[];
  // New Optional Fields for specific pages
  history?: {
    year: string;
    event: string;
    detail: string;
  }[];
  imageCaptions?: Record<string, string>; // Maps specific image URLs to text
};

export const places: Place[] = [
  {
    id: "haller-park",
    title: "Haller's Park",
    description: "A beautiful nature park in Mombasa, home to various wildlife species and lush greenery.",
    poster: "/images/haller-park.jpg",
    videoUrls: [
        "/videos/haller-park-1.mp4",
        "/videos/haller-park-2.mp4"
    ],
    imageUrls: [
        "/images/haller-park-Hippo.jpg",
        "/images/haller-park-antellope.jpg",
        "/images/haller-park-monkies.jpg",
        "/images/haller-park-hat.jpg",
        "/images/haller-park-crocodiles.jpg",
        "/images/haller-park-greenfield.jpg",
    ],
    google360Urls: [
        "https://www.google.com/maps/embed?pb=!4v1766330438418!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRE9rNkd6UEE.!2m2!1d-4.013568679914984!2d39.71816331278762!3f243.87067047804112!4f-7.724390810111217!5f0.7820865974627469",
        "https://www.google.com/maps/embed?pb=!4v1766330669068!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRDR6NFhaQ1E.!2m2!1d-4.014574324424662!2d39.71656321590793!3f325.36768879109985!4f-6.691048508019307!5f0.7820865974627469",
        "https://www.google.com/maps/embed?pb=!4v1766330798235!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRDRscmJzRUE.!2m2!1d-4.017875988097275!2d39.71758479684287!3f340!4f0!5f0.7820865974627469",
        "https://www.google.com/maps/embed?pb=!4v1766330968312!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRDRpT3pSR3c.!2m2!1d-4.016016700332197!2d39.71896499752508!3f223.07578659041627!4f-16.982532158566656!5f0.7820865974627469",
    ]
  },
  {
    id: "fort-jesus",
    title: "Fort Jesus",
    description: "A historic fort in Mombasa built by the Portuguese in the 16th century, showcasing impressive architecture and rich history.",
    poster: "/images/fort-jesus-back.jpg",
    videoUrls: [
        "/videos/fort-jesus-1.mp4",
        "/videos/fort-jesus-2.mp4",
        "/videos/fort-jesus-3.mp4",
    ],
    imageUrls: [
        "/images/fort-jesus-cannon1.png",
        "/images/fort-jesus-cannon2.png",
        "/images/fort-jesus-cannon3.png",
        "/images/fort-jesus-field.png",
        "/images/fort-jesus-red.png",
        "/images/fort-jesus-seaview.jpg",
        "/images/fort-jesus-wall.png",
        "/images/fort-jesus-door.png",
        "/images/fort-jesus-tomb1.png",
        "/images/fort-jesus-tomb2.png",
    ],
    // Specific captions for Fort Jesus images
    imageCaptions: {
        "/images/fort-jesus-cannon1.png": "Portuguese naval cannons pointing to the ocean",
        "/images/fort-jesus-wall.png": "Ancient graffiti drawn by bored soldiers centuries ago",
        "/images/fort-jesus-red.png": "The Omani House addition",
        "/images/fort-jesus-tomb1.png": "Tomb of the Unknown Soldier"
    },
    // Specific History Timeline
    history: [
        { year: "1593", event: "Construction", detail: "Built by King Philip II of Portugal to guard the Old Port." },
        { year: "1698", event: "The Great Siege", detail: "Omanis captured the Fort after a 33-month siege." },
        { year: "1895", event: "British Prison", detail: "Converted into a prison by the colonial government." },
        { year: "2011", event: "UNESCO", detail: "Declared a World Heritage Site." }
    ],
    google360Urls: [
        "https://www.google.com/maps/embed?pb=!4v1766384714464!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ2VrNDd3dGdF!2m2!1d-4.062794310104586!2d39.67751821480027!3f2.4617362000000007!4f10.016075!5f0.7820865974627469",
        "https://www.google.com/maps/embed?pb=!4v1766384798327!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ2VrX2JKYUE.!2m2!1d-4.062794310104586!2d39.67751821480027!3f353.9927255439652!4f-8.270655578286295!5f0.7820865974627469",
        "https://www.google.com/maps/embed?pb=!4v1766384840535!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ2VrX2E1S1E.!2m2!1d-4.062794310104586!2d39.67751821480027!3f358.8748945633101!4f9.797087184992066!5f0.7820865974627469",
        "https://www.google.com/maps/embed?pb=!4v1766384889759!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ2VrX2J0R2c.!2m2!1d-4.062794310104586!2d39.67751821480027!3f108.98260260044884!4f-4.517381597954241!5f0.7820865974627469",
        "https://www.google.com/maps/embed?pb=!4v1766384938391!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ0U0czItM0FF!2m2!1d-4.062410492992462!2d39.68018907984242!3f313.1130151493931!4f-4.56095078633092!5f0.7820865974627469",
        "https://www.google.com/maps/embed?pb=!4v1766385002264!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ2VrNDZmZkE.!2m2!1d-4.062794310104586!2d39.67751821480027!3f273.4095148526835!4f-10.959250396024785!5f0.7820865974627469",
        "https://www.google.com/maps/embed?pb=!4v1766385056374!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ013cjduVmc.!2m2!1d-4.062903022157441!2d39.67964798913152!3f68.62945907923823!4f-18.664993994528857!5f0.7820865974627469",
        "https://www.google.com/maps/embed?pb=!4v1766385145423!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ2VrNDdnNGdF!2m2!1d-4.062794310104586!2d39.67751821480027!3f228.95023758096386!4f-26.149280446372096!5f0.7820865974627469",
        "https://www.google.com/maps/embed?pb=!4v1766385209399!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ2VrNDdld2dF!2m2!1d-4.062794310104586!2d39.67751821480027!3f47.60065887272085!4f-17.738269701189026!5f0.7820865974627469",
        "https://www.google.com/maps/embed?pb=!4v1766385279966!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ2VrNDZfc3dF!2m2!1d-4.062794310104586!2d39.67751821480027!3f350.2405535074198!4f-16.331280743538954!5f0.7820865974627469",
    ],
  },
  {
    id: "old-town",
    title: "Old Town",
    description: "The soul of Mombasa. A maze of narrow streets, ancient Swahili architecture, and the smell of spices and roasting coffee.",
    poster: "/images/old-town-street.png",
    
    videoUrls: [
        "/videos/old-town-1.mp4",
        "/videos/old-town-2.mp4",
    ],

    imageUrls: [
        "/images/old-town-1.png",
        "/images/old-town-arielview.png",
        "/images/old-town-boats.png",
        "/images/old-town-building.png",
        "/images/old-town-shop.png",
        "/images/old-town-street2.png",
        "/images/old-town-street3.png",
        "/images/old-town-street4.png",
        "/images/old-town-street5.png",
        "/images/old-town-temple.png",
    ],
    
    // Since we have no 360s, we leave this empty, and the page logic will hide the section
    google360Urls: [], 

    // RICH HISTORY (Crucial for this page)
    history: [
        { year: "12th Century", event: "The Origins", detail: "Mwana Mkisi establishes the first settlement. Old Town becomes a key port for the spice trade." },
        { year: "1898", event: "The Balcony Era", detail: "Indian traders arrive and add the intricate wooden balconies that define the streets today." },
        { year: "1985", event: "Conservation", detail: "Declared a conservation area to protect the unique blend of African, Arab, and European architecture." }
    ],

    // STORYTELLING CAPTIONS
    imageCaptions: {
        "/images/old-town-street2.png": "The streets are too narrow for cars, keeping the air quiet and slow.",
        "/images/old-town-door.png": "A traditional Swahili carved door - a symbol of status and hospitality.",
        "/images/old-town-shop.png": "Curio shops selling antiques, silver jewelry, and fabric.",
        "/images/old-town-temple.png": "The cultural melting pot: A Hindu temple nestled between mosques."
    }
  }
];