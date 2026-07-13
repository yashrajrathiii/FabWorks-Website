"use client";
import * as React from "react";
import MapGL, { Marker, Popup } from "react-map-gl/maplibre";
import { cn } from "@/lib/utils";

// mapcn-style compound map components on react-map-gl/maplibre.
// Free dark Carto basemap — no API key required.

const MAP_STYLE =
  "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json";

export function Map({
  center,
  zoom = 12,
  className,
  children,
}: {
  center: [number, number];
  zoom?: number;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={cn("h-full w-full", className)}>
      <MapGL
        initialViewState={{
          longitude: center[0],
          latitude: center[1],
          zoom,
        }}
        mapStyle={MAP_STYLE}
        style={{ width: "100%", height: "100%" }}
        attributionControl={{ compact: true }}
        onLoad={(e) => {
          // start with the attribution collapsed to the (i) button
          const attrib = e.target
            .getContainer()
            .querySelector(".maplibregl-ctrl-attrib");
          attrib?.removeAttribute("open");
          attrib?.classList.remove("maplibregl-compact-show");
        }}
      >
        {children}
      </MapGL>
    </div>
  );
}

export function MarkerContent({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
MarkerContent.displayName = "MarkerContent";

export function MarkerTooltip({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
MarkerTooltip.displayName = "MarkerTooltip";

export function MarkerPopup({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
MarkerPopup.displayName = "MarkerPopup";

function pickChild(
  children: React.ReactNode,
  component: React.ComponentType<{ children: React.ReactNode }>
) {
  return React.Children.toArray(children).find(
    (child) => React.isValidElement(child) && child.type === component
  ) as React.ReactElement<{ children: React.ReactNode }> | undefined;
}

export function MapMarker({
  longitude,
  latitude,
  defaultOpen = false,
  children,
}: {
  longitude: number;
  latitude: number;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  const [hovered, setHovered] = React.useState(false);

  const content = pickChild(children, MarkerContent);
  const tooltip = pickChild(children, MarkerTooltip);
  const popup = pickChild(children, MarkerPopup);

  return (
    <>
      <Marker
        longitude={longitude}
        latitude={latitude}
        anchor="center"
        onClick={(e) => {
          e.originalEvent.stopPropagation();
          setOpen((v) => !v);
        }}
      >
        <div
          className="cursor-pointer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {content?.props.children}
        </div>
      </Marker>

      {tooltip && hovered && !open && (
        <Popup
          longitude={longitude}
          latitude={latitude}
          anchor="bottom"
          offset={14}
          closeButton={false}
          closeOnClick={false}
          className="mapcn-popup mapcn-tooltip"
        >
          {tooltip.props.children}
        </Popup>
      )}

      {popup && open && (
        <Popup
          longitude={longitude}
          latitude={latitude}
          anchor="bottom"
          offset={16}
          closeButton={false}
          closeOnClick={false}
          onClose={() => setOpen(false)}
          className="mapcn-popup"
        >
          {popup.props.children}
        </Popup>
      )}
    </>
  );
}
