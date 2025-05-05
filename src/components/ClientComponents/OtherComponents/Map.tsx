"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faPhone } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

// Add custom CSS for popup
const popupStyle = `
  .leaflet-popup-close-button {
    display: none !important;
  }
  .leaflet-popup {
    bottom: -20px !important;
    left: -96px !important;
  }
`;

// Define proper type for location
type Branch = {
  id: string;
  name: string;
  nameAr: string;
  dateOpened: string;
  address: string;
  mapLink: string;
  position: [number, number]; // Explicitly defined as tuple
  phone: string;
  email: string;
  hours: string;
};

// Dynamically import Leaflet components with no SSR
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);

// Properly type the useMap hook
const UseMapComponent = dynamic(
  () => import("react-leaflet").then((mod) => {
    const UseMapWrapper = ({ selectedLocation }: { selectedLocation: Branch | null }) => {
      const map = mod.useMap();
      
      useEffect(() => {
        if (selectedLocation) {
          map.setView(selectedLocation.position, 15);
        }
      }, [selectedLocation, map]);
      
      return null;
    };
    return UseMapWrapper;
  }),
  { ssr: false }
);

// Riyadh center coordinates - properly typed as a tuple
const riyadhCenter: [number, number] = [24.7136, 46.6753];

// Branch locations data - properly typed positions as tuples
const branchLocations: Branch[] = [
  {
    id: "2001",
    name: "Sha Shawarma Al Aarid",
    nameAr: "شا شاورما العارض",
    dateOpened: "5/Sep/2022",
    address: "حي العارض نجد - الرياض، العارض 12211, Saudi Arabia",
    mapLink: "https://maps.app.goo.gl/goTqVQUYSd7k3MpAA",
    position: [24.8206, 46.6415], // Now properly typed as tuple
    phone: "549533944",
    email: "smedia@shaa.com.sa",
    hours: "4 PM – 2 AM" 
  },
  {
    id: "2002",
    name: "Sha Shawarma Ar Rawdah",
    nameAr: "شا شاورما الروضة",
    dateOpened: "30/Dec/2022",
    address: "Abdulrahman Al Ghafeqi St, Ar Rawdah, Riyadh 13213",
    mapLink: "https://maps.app.goo.gl/4J9pQxiehEbfqv5y9",
    position: [24.7507, 46.7387],
    phone: "549533944",
    email: "smedia@shaa.com.sa",
    hours: "4 PM – 2 AM"
  },
  {
    id: "2003",
    name: "Sha Shawarma Al Aarid",
    nameAr: "شا شاورما العارض",
    dateOpened: "13/Feb/2023",
    address: "Rihana Bint Zaid St, Al Aarid, Riyadh 13338",
    mapLink: "https://maps.app.goo.gl/n8hnJMc1eFGhM1JA6",
    position: [24.8332, 46.6381],
    phone: "549533944",
    email: "smedia@shaa.com.sa",
    hours: "4 PM – 2 AM"
  },
  {
    id: "2004",
    name: "Sha Shawarma Ash Shifa",
    nameAr: "شا شاورما الشفا",
    dateOpened: "17/Jun/2023",
    address: "HM6H+2RG Ash Shifa, Riyadh",
    mapLink: "https://maps.app.goo.gl/TJ5bmntVLYGcBgZE6",
    position: [24.6126, 46.7052],
    phone: "549533944",
    email: "smedia@shaa.com.sa",
    hours: "4 PM – 2 AM"
  },
  {
    id: "2005",
    name: "Sha Shawarma Al Qadisiyyah",
    nameAr: "شا شاورما القادسية",
    dateOpened: "18/Aug/2023",
    address: "طريق الملك عبد العزيز الرياض Saudi Arabia",
    mapLink: "https://maps.app.goo.gl/LTHGT43vDcHbA9EF7",
    position: [24.7852, 46.7257],
    phone: "549533944",
    email: "smedia@shaa.com.sa",
    hours: "4 PM – 2 AM"
  },
  {
    id: "2006",
    name: "Sha Shawarma Dharat Al Badiah",
    nameAr: "شا شاورما ظهرة البديعة",
    dateOpened: "21/Apr/2023",
    address: "طريق أم القرى، الرياض Saudi Arabia",
    mapLink: "https://maps.app.goo.gl/bAX9Cdn5LFzBtZox9",
    position: [24.6532, 46.5853],
    phone: "549533944",
    email: "smedia@shaa.com.sa",
    hours: "4 PM – 2 AM"
  },
  {
    id: "2007",
    name: "Sha Shawarma Al Malik Faisal",
    nameAr: "شا شاورما الملك فيصل",
    dateOpened: "24/Jun/2023",
    address: "RFFA4410، 4410 الطريق الدائري الشمالي الفرعي، 6647، حي الملك فيصل، Riyadh 13215",
    mapLink: "https://maps.app.goo.gl/qfQdRZZX2FYBTDbh7",
    position: [24.7734, 46.7593],
    phone: "549533944",
    email: "smedia@shaa.com.sa",
    hours: "4 PM – 2 AM"
  },
  {
    id: "2008",
    name: "Sha Shawarma Qurtubah",
    nameAr: "شا شاورما قرطبة",
    dateOpened: "6/Nov/2023",
    address: "6237 Dammam Branch Rd, Qurtubah, 3210, Riyadh 13245",
    mapLink: "https://maps.app.goo.gl/eunZ61La42dbDALD8",
    position: [24.7868, 46.7606],
    phone: "549533944",
    email: "smedia@shaa.com.sa",
    hours: "4 PM – 2 AM"
  },
  {
    id: "2009",
    name: "Sha Shawarma Tuwaiq",
    nameAr: "شا شاورما طويق",
    dateOpened: "28/Dec/2023",
    address: "طريق ابن باز، الرياض HGJX+3GJ Tuwaiq, Riyadh",
    mapLink: "https://maps.app.goo.gl/AWY6N6Ywx1rhGen67",
    position: [24.6291, 46.646],
    phone: "549533944",
    email: "smedia@shaa.com.sa",
    hours: "4 PM – 2 AM"
  },
  {
    id: "2010",
    name: "Sha Shawarma Dharat Laban",
    nameAr: "شا شاورما ظهرة لبن",
    dateOpened: "7/Sep/2024",
    address: "6180 Taif St, Dhahrat Laban, RDLC3032, 3032, Riyadh 12553",
    mapLink: "https://maps.app.goo.gl/ASBJWMuqocEZcQKs7",
    position: [24.6567, 46.5826],
    phone: "549533944",
    email: "smedia@shaa.com.sa",
    hours: "4 PM – 2 AM"
  },
  {
    id: "2011",
    name: "Sha Shawarma Al Aziziyah",
    nameAr: "شا شاورما العزيزية",
    dateOpened: "",
    address: "RMAB6293, 6293 Al Shabab, 2280, Al Aziziyah, Riyadh 14511",
    mapLink: "https://maps.app.goo.gl/x7pdFpgNk1H96UD2A",
    position: [24.6032, 46.7763],
    phone: "549533944",
    email: "smedia@shaa.com.sa",
    hours: "4 PM – 2 AM"
  },
  {
    id: "2012",
    name: "Sha Shawarma Shubra",
    nameAr: "شا شاورما شبرا",
    dateOpened: "28/Nov/2023",
    address: "7030 Ad Diri حي شبرا RBDA5511، 5511, Riyadh 12988",
    mapLink: "https://maps.app.goo.gl/M9TtJfQ5yyfBTfWW6",
    position: [24.6362, 46.7214],
    phone: "549533944",
    email: "smedia@shaa.com.sa",
    hours: "4 PM – 2 AM"
  },
  {
    id: "2013",
    name: "Sha Shawarma Al Munsiyah",
    nameAr: "شا شاورما المنصورية",
    dateOpened: "22/Nov/2023",
    address: "الدائري الشرقي الرياض Saudi Arabia",
    mapLink: "https://maps.app.goo.gl/3y3yQofFDo3yWQMg7",
    position: [24.7991, 46.8216],
    phone: "549533944",
    email: "smedia@shaa.com.sa",
    hours: "4 PM – 2 AM"
  },
  {
    id: "2014",
    name: "Sha Shawarma Ar Rawabi",
    nameAr: "شا شاورما الروابي",
    dateOpened: "13/Dec/2023",
    address: "Al Zoubair Ibn Al Awwam, Ar Rawabi, Riyadh 14216",
    mapLink: "https://maps.app.goo.gl/N7b5n5dKD3hEEP9L7",
    position: [24.793, 46.8023],
    phone: "549533944",
    email: "smedia@shaa.com.sa",
    hours: "4 PM – 2 AM"
  },
  {
    id: "2015",
    name: "Sha Shawarma Al Hazm",
    nameAr: "شا شاورما الحزم",
    dateOpened: "29/Dec/2023",
    address: "7214، 5037 Dirab Branch Road، Riyadh 14964, Saudi Arabia",
    mapLink: "https://maps.app.goo.gl/QXizFEbuNnZNSELG8",
    position: [24.6009, 46.6074],
    phone: "549533944",
    email: "smedia@shaa.com.sa",
    hours: "4 PM – 2 AM"
  },
  {
    id: "2016",
    name: "Sha Shawarma Al Yarmuk",
    nameAr: "شا شاورما اليرموك",
    dateOpened: "18/Jan/2024",
    address: "طريق اليرموك، الرياض Saudi Arabia",
    mapLink: "https://maps.app.goo.gl/C49ifJdjM7Tp9Kmj9",
    position: [24.8166, 46.7458],
    phone: "549533944",
    email: "smedia@shaa.com.sa",
    hours: "4 PM – 2 AM"
  },
  {
    id: "2017",
    name: "Sha Shawarma Al Khaleej",
    nameAr: "شا شاورما الخليج",
    dateOpened: "14/May/2024",
    address: "Salman Al Farsi Rd  QQJX+55C Al Khaleej, Riyadh",
    mapLink: "https://maps.app.goo.gl/W66odbSuKECkGCzn7",
    position: [24.7713, 46.7994],
    phone: "549533944",
    email: "smedia@shaa.com.sa",
    hours: "4 PM – 2 AM"
  },
  {
    id: "2018",
    name: "Sha Shawarma Tuwaiq",
    nameAr: "شا شاورما السويدي",
    dateOpened: "10/Feb/2024",
    address: "6278 Jeddah Rd, حي السويدي, 3955, Riyadh 13793",
    mapLink: "https://maps.app.goo.gl/3ZD8zW7y67D8Y2pM9",
    position: [24.5992, 46.6657],
    phone: "549533944",
    email: "smedia@shaa.com.sa",
    hours: "4 PM – 2 AM"
  },
  {
    id: "2019",
    name: "Sha Shawarma An Narjis",
    nameAr: "شا شاورما النرجس",
    dateOpened: "8/Jul/2024",
    address: "Prince Saud Ibn Abdullah Ibn Jalawi, An Narjis, Riyadh 13333",
    mapLink: "https://maps.app.goo.gl/2CzzckUutQmHgXPPA",
    position: [24.8527, 46.6767],
    phone: "549533944",
    email: "smedia@shaa.com.sa",
    hours: "4 PM – 2 AM"
  },
  {
    id: "2020",
    name: "Sha Shawarma Ash Sharq",
    nameAr: "شا شاورما الشرق",
    dateOpened: "12/Oct/2024",
    address: "Al Janadriyah Rd, Ash Sharq, Riyadh Saudi Arabia",
    mapLink: "https://maps.app.goo.gl/RPzDdZdtVterFsjX8",
    position: [24.7223, 46.8557],
    phone: "549533944",
    email: "smedia@shaa.com.sa",
    hours: "4 PM – 2 AM"
  }
];

const MapComponent = () => {
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const [nearestBranch, setNearestBranch] = useState<Branch | null>(null);
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null);
  const [displayedBranch, setDisplayedBranch] = useState<Branch | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [map, setMap] = useState<any>(null);
  const [L, setL] = useState<any>(null);

  // Initialize Leaflet on client side only
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Import Leaflet dynamically
      import('leaflet').then((leaflet) => {
        setL(leaflet.default);
        // Add Leaflet CSS to head
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
        link.crossOrigin = '';
        document.head.appendChild(link);
      });
      setIsClient(true);
    }
  }, []);

  // Custom Marker Icon
  const createCustomIcon = (isSelected: boolean) => {
    if (!L) return null;
    return new L.Icon({
      iconUrl: isSelected ? '/images/redmark.svg' : '/images/whitemark.svg',
      iconSize: [200, 100],
      iconAnchor: [20, 65],
      popupAnchor: [0, -65],
      shadowSize: [65, 65]
    });
  };

  // Calculate distance between two coordinates
  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
    const R = 6371; // Radius of the earth in km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c; // Distance in km
  };

  // Find nearest branch to user's location
  const findNearestBranch = (userLat: number, userLon: number): Branch => {
    let minDistance = Infinity;
    let closest = branchLocations[0]; // Default to first branch
    
    branchLocations.forEach(branch => {
      const distance = calculateDistance(userLat, userLon, branch.position[0], branch.position[1]);
      if (distance < minDistance) {
        minDistance = distance;
        closest = branch;
      }
    });
    
    return closest;
  };

  // Get user's location when component mounts
  useEffect(() => {
    if (typeof window !== 'undefined' && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLon = position.coords.longitude;
          setUserLocation([userLat, userLon]);
          
          // Find and set nearest branch
          const nearest = findNearestBranch(userLat, userLon);
          setNearestBranch(nearest);
          setDisplayedBranch(nearest);
        },
        (error) => {
          console.error("Error getting location:", error);
          // Default to first branch as nearest if location access is denied
          setNearestBranch(branchLocations[0]);
          setDisplayedBranch(branchLocations[0]);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      // Default to first branch as nearest if geolocation not supported
      setNearestBranch(branchLocations[0]);
      setDisplayedBranch(branchLocations[0]);
    }
  }, []);

  // Open popup when map is ready and displayed branch is set
  useEffect(() => {
    if (map && displayedBranch) {
      // Small delay to ensure markers are rendered
      setTimeout(() => {
        map.eachLayer((layer: any) => {
          if (layer instanceof L.Marker) {
            const markerPosition = layer.getLatLng();
            if (markerPosition.lat === displayedBranch.position[0] && 
                markerPosition.lng === displayedBranch.position[1]) {
              layer.openPopup();
            }
          }
        });
      }, 100);
    }
  }, [map, displayedBranch]);

  // Update displayed branch whenever selected branch or nearest branch changes
  useEffect(() => {
    setDisplayedBranch(selectedBranch || nearestBranch);
  }, [selectedBranch, nearestBranch]);

  // Handle popup opening when clicking markers
  useEffect(() => {
    if (map && displayedBranch) {
      // Close all existing popups first
      map.eachLayer((layer: any) => {
        if (layer instanceof L.Marker) {
          layer.closePopup();
        }
      });

      // Find and open popup for the displayed branch
      map.eachLayer((layer: any) => {
        if (layer instanceof L.Marker) {
          const markerPosition = layer.getLatLng();
          if (markerPosition.lat === displayedBranch.position[0] && 
              markerPosition.lng === displayedBranch.position[1]) {
            layer.openPopup();
          }
        }
      });
    }
  }, [map, displayedBranch]);

  // Create marker icons for Leaflet
  useEffect(() => {
    // Only run this on the client
    if (typeof window !== 'undefined') {
      // We don't need to fix the default icon since we're using custom icons
      // This prevents the _getIconUrl error
    }
  }, []);

  // Add style tag to head
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = popupStyle;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="w-full">

      {/* Leaflet Map */}
      <div className="relative z-10 w-full h-[350px] md:h-[568px]">
        {isClient && L && (
          <MapContainer
            center={riyadhCenter}
            zoom={10}
            style={{ height: "100%", width: "100%" }}
            attributionControl={false}
            ref={setMap}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            
            {branchLocations.map((branch) => {
              const isSelected = displayedBranch?.id === branch.id;
              return (
                <Marker
                  key={branch.id}
                  position={branch.position}
                  icon={createCustomIcon(isSelected)}
                  eventHandlers={{
                    click: () => {
                      setSelectedBranch(branch);
                    },
                  }}
                >
                  <Popup 
                    autoPan={isSelected} 
                    closeOnClick={false}
                    closeButton={false}
                  >
                    <div className="text-left">
                      <p className="text-lg font-semibold">{branch.name}</p>
                      <p className="text-sm text-gray-600">{branch.address}</p>
                      <p className="text-base gap-1 text-[#ED3937] mt-2">
                        <FontAwesomeIcon icon={faPhone} />
                        <span className="text-[#414042] ml-3">{branch.phone}</span>
                      </p>
                      <p className="text-base gap-1 text-[#ED3937]">
                        <FontAwesomeIcon icon={faClock} />
                        <span className="text-[#414042] ml-3">{branch.hours}</span>
                      </p>
                      <Link
                        href={branch.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base mt-3 !text-[#ED3937] font-semibold transition block"
                      >
                        Get Directions
                      </Link>
                    </div>
                  </Popup>
                </Marker>
              );
            })}
            
            {displayedBranch && <UseMapComponent selectedLocation={displayedBranch} />}
          </MapContainer>
        )}
      </div>
    </div>
  );
};

export default MapComponent;