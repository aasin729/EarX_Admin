import { debounce } from '@/shared/functions/functions';
import { Loader } from '@googlemaps/js-api-loader';
import { useEffect, useRef, useState } from 'react';

const GoogleMap = ({ lat, lng, zoom = 15, title }) => {
  const mapDivRef = useRef();
  const googleMapRef = useRef();

  const loader = new Loader({
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_KEY,
    version: 'weekly',
  });

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const debouncedSetWidth = debounce(setWidth, 200);
  const debouncedSetHeight = debounce(setHeight, 200);

  useEffect(() => {
    const target = mapDivRef.current;

    if (!target) {
      return;
    }

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        debouncedSetWidth(width);
        debouncedSetHeight(height);
      }
    });

    resizeObserver.observe(target);

    return () => {
      resizeObserver.unobserve(target);
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (width > 0 && height > 0 && lat && lng) {
      const createGoogleMap = async () => {
        loader
          .importLibrary('maps')
          .then(async ({ Map }) => {
            const mapOptions = {
              center: {
                lat: Number(lat),
                lng: Number(lng),
              },
              zoom: zoom,
              mapId: 'google_map',
              fullscreenControl: false,
            };

            const map = new Map(googleMapRef.current, mapOptions);

            const { AdvancedMarkerElement, PinElement } =
              await google.maps.importLibrary('marker');

            // const marker = new google.maps.marker.AdvancedMarkerElement({
            //   map: map,
            //   position: {
            //     lat: Number(lat),
            //     lng: Number(lng),
            //     title: title,
            //   },
            //   title: title,
            // });
          })
          .catch((error) => {
            console.log('google map error: ', error);
          });
      };

      createGoogleMap();
    }
  }, [width, height, lat, lng, zoom]);

  return (
    <div ref={mapDivRef} className="w-100 h-100">
      <div ref={googleMapRef} className="w-100 h-100"></div>
    </div>
  );
};

export default GoogleMap;
