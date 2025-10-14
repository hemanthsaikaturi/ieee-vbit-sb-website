// Define the structure for a single gallery event
export type GalleryEventData = {
  title: string;
  year: string;
  slug: string; 
  images: string[];
};

// This is the complete and final list of all your gallery events.
export const galleryData: GalleryEventData[] = [
  {
    title: "Workshop on Antenna Design Using HFSS",
    year: "2024 – 2025",
    slug: "workshop-on-antenna-design-using-hfss",
    images: Array.from(
      { length: 10 },
      (_, i) =>
        `/placeholders/gallery/workshop-on-antenna-design-using-hfss/image-${
          i + 1
        }.jpg`
    ),
  },
  {
    title: "AlgoVeda",
    year: "2024 – 2025",
    slug: "algoveda",
    images: Array.from(
      { length: 10 },
      (_, i) => `/placeholders/gallery/algoveda/image-${i + 1}.jpg`
    ),
  },
  {
    title: "Industrial Visit to Power Grid",
    year: "2024 – 2025",
    slug: "industrial-visit-to-power-grid",
    images: Array.from(
      { length: 10 },
      (_, i) =>
        `/placeholders/gallery/industrial-visit-to-power-grid/image-${
          i + 1
        }.jpg`
    ),
  },
  {
    title: "WiEducate 3.0",
    year: "2024 – 2025",
    slug: "wieducate-3-0",
    images: Array.from(
      { length: 10 },
      (_, i) => `/placeholders/gallery/wieducate-3-0/image-${i + 1}.jpg`
    ),
  },
  {
    title: "IEEE Insights",
    year: "2024 – 2025",
    slug: "ieee-insights",
    images: Array.from(
      { length: 10 },
      (_, i) => `/placeholders/gallery/ieee-insights/image-${i + 1}.jpg`
    ),
  },
  {
    title: "DesignX 2.0",
    year: "2024 – 2025",
    slug: "designx-2-0",
    images: Array.from(
      { length: 8 },
      (_, i) => `/placeholders/gallery/designx-2-0/image-${i + 1}.jpg`
    ),
  },
  {
    title: "Circuitry",
    year: "2023 – 2024",
    slug: "circuitry",
    images: Array.from(
      { length: 10 },
      (_, i) => `/placeholders/gallery/circuitry/image-${i + 1}.jpg`
    ),
  },
  {
    title: "Workshop on Image Processing using MATLAB",
    year: "2023 – 2024",
    slug: "workshop-on-image-processing-using-matlab",
    images: Array.from(
      { length: 10 },
      (_, i) =>
        `/placeholders/gallery/workshop-on-image-processing-using-matlab/image-${
          i + 1
        }.jpg`
    ),
  },
  {
    title: "Webinar on Design Thinking and Innovation",
    year: "2023 – 2024",
    slug: "webinar-on-design-thinking-and-innovation",
    images: Array.from(
      { length: 6 },
      (_, i) =>
        `/placeholders/gallery/webinar-on-design-thinking-and-innovation/image-${
          i + 1
        }.jpg`
    ),
  },
  {
    title: "WiEducate 2.0",
    year: "2023 – 2024",
    slug: "wieducate-2-0",
    images: Array.from(
      { length: 10 },
      (_, i) => `/placeholders/gallery/wieducate-2-0/image-${i + 1}.jpg`
    ),
  },
  {
    title: "CodeQuest",
    year: "2023 – 2024",
    slug: "codequest",
    images: Array.from(
      { length: 10 },
      (_, i) => `/placeholders/gallery/codequest/image-${i + 1}.jpg`
    ),
  },
  {
    title: "Elevate",
    year: "2023 – 2024",
    slug: "elevate",
    images: Array.from(
      { length: 10 },
      (_, i) => `/placeholders/gallery/elevate/image-${i + 1}.jpg`
    ),
  },
  {
    title: "Industrial Visit to C-MET",
    year: "2022 – 2023",
    slug: "industrial-visit-to-c-met",
    images: Array.from(
      { length: 7 },
      (_, i) =>
        `/placeholders/gallery/industrial-visit-to-c-met/image-${i + 1}.jpg`
    ),
  },
  {
    title: "Workshop on Neuro Robotics",
    year: "2022 – 2023",
    slug: "workshop-on-neuro-robotics",
    images: Array.from(
      { length: 7 },
      (_, i) =>
        `/placeholders/gallery/workshop-on-neuro-robotics/image-${i + 1}.jpg`
    ),
  },
  {
    title: "WiEducate",
    year: "2022 – 2023",
    slug: "wieducate",
    images: Array.from(
      { length: 8 },
      (_, i) => `/placeholders/gallery/wieducate/image-${i + 1}.jpg`
    ),
  },
  {
    title: "Avishkar 2K23",
    year: "2022 – 2023",
    slug: "avishkar-2k23",
    images: Array.from(
      { length: 10 },
      (_, i) => `/placeholders/gallery/avishkar-2k23/image-${i + 1}.jpg`
    ),
  },
  {
    title: ".Net Workshop",
    year: "2022 – 2023",
    slug: "dotnet-workshop",
    images: Array.from(
      { length: 6 },
      (_, i) => `/placeholders/gallery/dotnet-workshop/image-${i + 1}.jpg`
    ),
  },
  {
    title: "DesignX",
    year: "2021-2022",
    slug: "designx",
    images: Array.from(
      { length: 5 },
      (_, i) => `/placeholders/gallery/designx/image-${i + 1}.jpg`
    ),
  },
  {
    title: "Epilogue",
    year: "2021 – 2022",
    slug: "epilogue",
    images: Array.from(
      { length: 5 },
      (_, i) => `/placeholders/gallery/epilogue/image-${i + 1}.jpg`
    ),
  },
  {
    title: "#IWD22",
    year: "2021-2022",
    slug: "iwd22",
    images: Array.from(
      { length: 2 },
      (_, i) => `/placeholders/gallery/iwd22/image-${i + 1}.jpg`
    ),
  },
  {
    title: "Wifi Controlled Robot",
    year: "2021 – 2022",
    slug: "wifi-controlled-robot",
    images: Array.from(
      { length: 5 },
      (_, i) => `/placeholders/gallery/wifi-controlled-robot/image-${i + 1}.jpg`
    ),
  },
  {
    title: "C for Error",
    year: "2021-2022",
    slug: "c-for-error",
    images: Array.from(
      { length: 5 },
      (_, i) => `/placeholders/gallery/c-for-error/image-${i + 1}.jpg`
    ),
  },
  {
    title: "Virtual Visit to Substation",
    year: "2020 – 2021",
    slug: "virtual-visit-to-substation",
    images: Array.from(
      { length: 9 },
      (_, i) =>
        `/placeholders/gallery/virtual-visit-to-substation/image-${i + 1}.jpg`
    ),
  },
  {
    title: "Unravel",
    year: "2020-2021",
    slug: "unravel",
    images: Array.from(
      { length: 7 },
      (_, i) => `/placeholders/gallery/unravel/image-${i + 1}.jpg`
    ),
  },
  {
    title: "IEEEXtreme 14.0",
    year: "2020 – 2021",
    slug: "ieeextreme-14-0",
    images: Array.from(
      { length: 9 },
      (_, i) => `/placeholders/gallery/ieeextreme-14-0/image-${i + 1}.jpg`
    ),
  },
  {
    title: "Code Hustle",
    year: "2019 – 2020",
    slug: "code-hustle",
    images: Array.from(
      { length: 10 },
      (_, i) => `/placeholders/gallery/code-hustle/image-${i + 1}.jpg`
    ),
  },
  {
    title: "Guest Lecture on Satellite Communications",
    year: "2019 – 2020",
    slug: "guest-lecture-on-satellite-communications",
    images: Array.from(
      { length: 8 },
      (_, i) =>
        `/placeholders/gallery/guest-lecture-on-satellite-communications/image-${
          i + 1
        }.jpg`
    ),
  },
  {
    title: "Avishkar 2K20",
    year: "2019 – 2020",
    slug: "avishkar-2k20",
    images: Array.from(
      { length: 10 },
      (_, i) => `/placeholders/gallery/avishkar-2k20/image-${i + 1}.jpg`
    ),
  },
  {
    title: "FDP and SDP on IEEEXplore",
    year: "2019 – 2020",
    slug: "fdp-and-sdp-on-ieeexplore",
    images: Array.from(
      { length: 7 },
      (_, i) =>
        `/placeholders/gallery/fdp-and-sdp-on-ieeexplore/image-${i + 1}.jpg`
    ),
  },
  {
    title: "Seminar on Bacterial Concrete",
    year: "2019 – 2020",
    slug: "seminar-on-bacterial-concrete",
    images: Array.from(
      { length: 8 },
      (_, i) =>
        `/placeholders/gallery/seminar-on-bacterial-concrete/image-${i + 1}.jpg`
    ),
  },
  {
    title: "Guest Lecture on Hybrid Electric Vehicles",
    year: "2019 – 2020",
    slug: "guest-lecture-on-hybrid-electric-vehicles",
    images: Array.from(
      { length: 5 },
      (_, i) =>
        `/placeholders/gallery/guest-lecture-on-hybrid-electric-vehicles/image-${
          i + 1
        }.jpg`
    ),
  },
  {
    title: "SDP on Search Engine Optimization",
    year: "2019 – 2020",
    slug: "sdp-on-search-engine-optimization",
    images: Array.from(
      { length: 7 },
      (_, i) =>
        `/placeholders/gallery/sdp-on-search-engine-optimization/image-${
          i + 1
        }.jpg`
    ),
  },
  {
    title: "Unplug - Disconnect to Reconnect",
    year: "2019 – 2020",
    slug: "unplug-disconnect-to-reconnect",
    images: Array.from(
      { length: 8 },
      (_, i) =>
        `/placeholders/gallery/unplug-disconnect-to-reconnect/image-${
          i + 1
        }.jpg`
    ),
  },
  {
    title: "IMD Industrial Visit",
    year: "2019 – 2020",
    slug: "imd-industrial-visit",
    images: Array.from(
      { length: 4 },
      (_, i) => `/placeholders/gallery/imd-industrial-visit/image-${i + 1}.jpg`
    ),
  },
  {
    title: "ICOMM Industrial Visit",
    year: "2019 – 2020",
    slug: "icomm-industrial-visit",
    images: Array.from(
      { length: 4 },
      (_, i) =>
        `/placeholders/gallery/icomm-industrial-visit/image-${i + 1}.jpg`
    ),
  },
  {
    title: "Machine Learning Bootcamp + Hackathon",
    year: "2018 – 2019",
    slug: "machine-learning-bootcamp-hackathon",
    images: Array.from(
      { length: 8 },
      (_, i) =>
        `/placeholders/gallery/machine-learning-bootcamp-hackathon/image-${
          i + 1
        }.jpg`
    ),
  },
  {
    title: "Avishkar 2K19",
    year: "2018 – 2019",
    slug: "avishkar-2k19",
    images: Array.from(
      { length: 10 },
      (_, i) => `/placeholders/gallery/avishkar-2k19/image-${i + 1}.jpg`
    ),
  },
  {
    title: "Inceptra",
    year: "2018 – 2019",
    slug: "inceptra",
    images: Array.from(
      { length: 6 },
      (_, i) => `/placeholders/gallery/inceptra/image-${i + 1}.jpg`
    ),
  },
];
