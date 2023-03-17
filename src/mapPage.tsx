import { useRef, useEffect } from 'react';
import EsriMap from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import config from '@arcgis/core/config';
import '@arcgis/core/assets/esri/themes/light/main.css';
import './styles.scss';

config.apiKey = '';

export const MapPage = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const map = new EsriMap({ basemap: 'osm-streets' });

        if (containerRef.current) {
            new MapView({
                container: containerRef.current,
                map,
            });
        }
    }, [containerRef.current]);

    return <div ref={containerRef} />;
};
