"use client";

import React from 'react';
import ItineraryTimeline from '../../../components/itinerary/Timeline';

// Sample itinerary data
const sampleItinerary = {
  id: "karnataka-heritage-2day",
  title: "Karnataka Heritage Journey",
  totalDays: 2,
  totalCost: 8500,
  totalDistance: "180 km",
  giProducts: 6,
  uniqueExperiences: 8,
  culturalSites: 5,
  artisanWorkshops: 3,
  days: [
    {
      date: "2025-09-22",
      title: "Mysore Silk & Royal Heritage",
      activities: [
        {
          id: "1",
          time: "09:00 AM",
          title: "Mysore Silk Factory Visit",
          description: "Witness the traditional silk weaving process and meet master weavers",
          location: "Government Silk Weaving Factory, Mysore",
          type: "visit"
        },
        {
          id: "2", 
          time: "11:30 AM",
          title: "Silk Weaving Workshop",
          description: "Hands-on experience in traditional silk weaving techniques",
          location: "Artisan Workshop, Mysore",
          type: "workshop"
        },
        {
          id: "3",
          time: "01:00 PM", 
          title: "Traditional South Indian Lunch",
          description: "Authentic Karnataka cuisine at heritage restaurant",
          location: "RRR Restaurant, Mysore",
          type: "meal"
        },
        {
          id: "4",
          time: "03:00 PM",
          title: "Mysore Palace Tour",
          description: "Explore the opulent palace showcasing royal heritage",
          location: "Mysore Palace",
          type: "visit"
        }
      ],
      highlights: [
        "Silk Weaving Mastery",
        "Royal Palace Architecture", 
        "Traditional Cuisine",
        "Artisan Interactions"
      ],
      estimatedCost: 4200,
      travelTime: "6 hours"
    },
    {
      date: "2025-09-23",
      title: "Channapatna Crafts & Coffee Culture",
      activities: [
        {
          id: "5",
          time: "10:00 AM",
          title: "Channapatna Toy Making",
          description: "Learn the art of wooden toy crafting from local artisans",
          location: "Channapatna Craft Village",
          type: "workshop"
        },
        {
          id: "6",
          time: "12:30 PM",
          title: "Craft Shopping",
          description: "Purchase authentic Channapatna toys and crafts",
          location: "Local Artisan Shops",
          type: "shopping"
        },
        {
          id: "7",
          time: "02:00 PM",
          title: "Coffee Plantation Tour",
          description: "Explore organic coffee farms and learn processing methods",
          location: "Coorg Coffee Estate",
          type: "visit"
        },
        {
          id: "8",
          time: "04:30 PM",
          title: "Coffee Tasting Session",
          description: "Sample various coffee varieties and brewing techniques",
          location: "Estate Tasting Room",
          type: "workshop"
        }
      ],
      highlights: [
        "Wooden Toy Crafting",
        "Coffee Farm Experience",
        "Local Artisan Shopping",
        "Traditional Techniques"
      ],
      estimatedCost: 4300,
      travelTime: "7 hours"
    }
  ]
};

interface PageProps {
  params: {
    id: string;
  };
}

export default function ItineraryPage({ params }: PageProps) {
  const { id } = params;
  
  const handleDownloadPDF = () => {
    console.log('Downloading PDF for itinerary:', id);
    // Add PDF download logic
  };

  const handleShareJourney = () => {
    console.log('Sharing journey:', id);
    // Add share logic
  };

  const handleModifyItinerary = () => {
    console.log('Modifying itinerary:', id);
    // Add modify logic
  };
  
  return (
    <div className="itinerary-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title heritage-heading">Your Cultural Expedition</h1>
          <p className="page-subtitle">
            Itinerary ID: {id} • Generated for Karnataka Heritage Journey
          </p>
        </div>
      </div>
      
      <div className="itinerary-content">
        <div className="container">
          <ItineraryTimeline itinerary={sampleItinerary} />
        </div>
      </div>
      
      <div className="itinerary-actions">
        <div className="container">
          <div className="action-buttons">
            <button className="btn-primary folklore-button" onClick={handleDownloadPDF}>
              Download PDF
            </button>
            <button className="btn-secondary folklore-button" onClick={handleShareJourney}>
              Share Journey
            </button>
            <button className="btn-outline folklore-button" onClick={handleModifyItinerary}>
              Modify Itinerary
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
