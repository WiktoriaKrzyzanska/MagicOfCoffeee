import React, { useState } from "react";
import dynamic from "next/dynamic";
import InfoPanel from "@/components/InfoPanel";


const MapWithNoSSR = dynamic(() => import("../components/WorldMap"), {
  ssr: false
});

export default function Map() {
  const [selectedCountry, setSelectedCountry] = useState(null);  

  return (
    <main >
      <div style={{ display: 'flex', height: '100vh'  }}>
      <div id="map" style={{ width: '50%' }}>
        <MapWithNoSSR onSelectCountry={setSelectedCountry} />
      </div>
      <div style={{ width: '50%' }}>
        <InfoPanel country={selectedCountry} />
      </div>
      </div>
    </main>
  );
}
