const mongoose = require("mongoose");

const sampleData = [
  {
    name: "Shakurbasti Depot",
    code: "ssb",
    location: { lat: 28.6853, lng: 77.1294 },
    image:
      "https://media.gettyimages.com/id/88923935/photo/indian-railways-goods-train-oil-tanker-container-etc-at-tughlakabad-railway-station-in-delhi.jpg?s=1024x1024&w=gi&k=20&c=6LPZ8t_Iem3jDjAlhScoAY_NeomLGZRDnSmp8khmf6o=",
    description: "A major Northern Railway depot handling goods trains.",

    sickLine: {
      tasks: [
        "Brake testing",
        "Wheel balancing",
        "Coupling inspection",
        "Door mechanism repairs",
      ],
      capacity: "5 coaches at a time",
      equipment: ["Hydraulic jacks", "Wheel lathes", "Brake testing rigs"],
    },
  },
  {
    name: "Anand Vihar Terminal Depot",
    code: "anvt",
    location: { lat: 28.6484, lng: 77.3158 },
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlvQd7UcTVtIQCqxiVHIcbwefLEiImVDf-nw&s",
    description: "Handles passenger and long-distance express trains.",
    washingLine: {
      capacity: "8 coaches simultaneously",
      techniques: ["Automated plant", "High-pressure jets", "Manual finishing"],
      features: [
        "Eco-friendly detergent",
        "Water recycling",
        "Drying fans for quick turnaround",
      ],
    },
    sickLine: {
      tasks: [
        "Electrical and mechanical repairs",
        "HVAC servicing",
        "Bogie examination",
      ],
      capacity: "4 coaches at a time",
      equipment: ["Brake analyzers", "Welding machines", "HVAC testing units"],
    },
  },
  {
    name: "New Delhi Railway Station Depot",
    code: "ndls",
    location: { lat: 28.6139, lng: 77.209 },
    image:
      "https://st2.indiarailinfo.com/kjfdsuiemjvcya2/0/0/2/4/5997024/0/202403040504402709414.jpg",
    description: "One of the busiest depots, serving express and local trains.",
    washingLine: {
      capacity: "12 coaches per cycle",
      techniques: [
        "Eco-friendly detergent",
        "Rotating brushes",
        "UV water treatment",
      ],
      features: [
        "Undercarriage scrubbing",
        "Top spray system",
        "Foam pre-wash",
      ],
    },
    sickLine: {
      tasks: [
        "Fault diagnosis",
        "Brake repair",
        "Door alignment",
        "Bogie inspection",
      ],
      capacity: "6 coaches at a time",
      equipment: [
        "Hydraulic lifts",
        "Diagnostic tools",
        "Power generators for electrical checks",
      ],
    },
  },
  {
    name: "Delhi Sarai Rohilla Depot",
    code: "dee",
    location: { lat: 28.6686, lng: 77.1841 },
    image:
      "https://i.ytimg.com/vi/3ubZjK-UZok/hq720.jpg?rs=AOn4CLDUqup89C4VtMGJLO5Bla4efAXZ6Q&sqp=-oaymwEkCJUDENAFSFryq4qpAxYIARUAAAAAJQAAyEI9AICiQ3gB0AEB",
    description: "Depot handling northern-bound trains.",
    washingLine: {
      capacity: "7 coaches per hour",
      techniques: [
        "Manual and automated cleaning",
        "Foam spray",
        "Hot water rinse",
      ],
      features: [
        "Detergent pre-wash",
        "Water recycling system",
        "Pressure rinse jets",
      ],
    },
    sickLine: {
      tasks: [
        "Mechanical and electrical repairs",
        "HVAC checks",
        "Coupling inspection",
      ],
      capacity: "3 coaches at a time",
      equipment: [
        "Wheel balancers",
        "Hydraulic press",
        "Electrical diagnostic kits",
      ],
    },
  },
  {
    name: "Hazrat Nizamuddin Depot",
    code: "njm",
    location: { lat: 28.5893, lng: 77.2479 },
    image: "https://pbs.twimg.com/media/ESQoOAMX0AEZPex.jpg",
    description: "Major depot serving southbound express trains.",
    washingLine: {
      capacity: "9 coaches per hour",
      techniques: [
        "Automated cleaning",
        "Undercarriage scrubbing",
        "Top spray",
      ],
      features: ["Water recycling units", "Foam cleaning", "UV sterilization"],
    },
    sickLine: {
      tasks: ["Minor repairs", "Brake overhauls", "Electrical diagnostics"],
      capacity: "4 coaches at a time",
      equipment: ["Hydraulic lifts", "Brake analyzers", "Welding stations"],
    },
  },
  {
    name: "Tughlakabad Depot",
    code: "tdd",
    location: { lat: 28.5046, lng: 77.2673 },
    image:
      "https://media.assettype.com/newindianexpress%2F2024-08-25%2F6lq2vtge%2FFreight.jpg",
    description: "Handles freight trains.",

    sickLine: {
      tasks: [
        "Freight wagon maintenance",
        "Locomotive repair",
        "Axle balancing",
      ],
      capacity: "5 wagons at a time",
      equipment: ["Hydraulic presses", "Wheel lathes", "Freight car lifters"],
    },
  },
  {
    name: "Meerut Depot",
    code: "mtc",
    location: { lat: 29.003, lng: 77.0151 },
    image:
      "https://swarajya.gumlet.io/swarajya/2023-07/17c1c864-3599-492f-82d5-90b5db2b207e/10626510_690986460989741_6765465141987881692_n.jpg?w=610&q=50&compress=true&format=auto",
    description: "Depot handling regional and express trains.",
    washingLine: {
      capacity: "6 coaches per hour",
      techniques: ["Manual cleaning", "High-pressure rinse", "Foam pre-wash"],
      features: ["Water recycling", "Manual drying", "Eco-friendly detergents"],
    },
    sickLine: {
      tasks: ["Wheelset replacements", "Brake inspections", "Door alignment"],
      capacity: "4 coaches at a time",
      equipment: ["Wheel lathes", "Brake test rigs", "Portable diagnostics"],
    },
  },
  {
    name: "Ghaziabad Goods Depot",
    code: "gzb",
    location: { lat: 28.6692, lng: 77.4538 },
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmgofWE5xFUkwGv1k207Ag6RotXBPGyIa59A&s",
    description: "A key freight handling depot in Northern India.",

    sickLine: {
      tasks: [
        "Freight wagon inspection",
        "Brake system repair",
        "Axle load balancing",
      ],
      capacity: "6 wagons at a time",
      equipment: [
        "Lifting jacks",
        "Portable welding units",
        "Hydraulic testing tools",
      ],
    },
  },

  {
    name: "Jind Depot",
    code: "jind",
    location: { lat: 29.3163, lng: 76.3151 },
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNEBHeVjP67d3KmFM5JV2E25h7qCeNA4TaSw&s",
    description:
      "Handles regional passenger trains with essential maintenance facilities.",
    washingLine: {
      capacity: "4 coaches per hour",
      techniques: ["Manual cleaning", "Foam application", "Water rinse"],
      features: ["Basic washing tools", "Drainage system", "Water reuse tanks"],
    },
    sickLine: {
      tasks: [
        "Basic mechanical repairs",
        "Wheel inspection",
        "Brake adjustments",
      ],
      capacity: "2 coaches at a time",
      equipment: ["Inspection pits", "Hand tools", "Manual jacks"],
    },
  },

  {
    name: "Panipat Depot",
    code: "pnt",
    location: { lat: 29.3875, lng: 76.9706 },
    image:
      "https://english.mathrubhumi.com/image/contentid/policy:1.10482099:1743742649/Integral-Coach-Factory.jpg?$p=260a4ab&f=16x10&w=852&q=0.8",
    description: "Serves local and intercity trains with light maintenance.",
    washingLine: {
      capacity: "5 coaches per hour",
      techniques: ["Pressure hose cleaning", "Foam cleaning", "Manual rinsing"],
      features: [
        "Compact layout",
        "Simple water treatment",
        "Eco-detergent use",
      ],
    },
    sickLine: {
      tasks: [
        "Electrical checks",
        "Minor wheel repairs",
        "Brake line servicing",
      ],
      capacity: "3 coaches at a time",
      equipment: ["Portable diagnostic kits", "Brake testers", "Manual lifts"],
    },
  },

  {
    name: "Rohtak Depot",
    code: "rok",
    location: { lat: 28.8945, lng: 76.5796 },
    image:
      "https://www.shutterstock.com/image-photo/guwahatiindia30-march-indian-railway-employee-260nw-2581657699.jpg",
    description: "Supports regional and suburban rail maintenance.",
    washingLine: {
      capacity: "5 coaches per hour",
      techniques: ["Manual scrubbing", "High-pressure jets", "Foam wash"],
      features: ["Eco-water reuse", "Basic spray system", "Drainage pits"],
    },
    sickLine: {
      tasks: ["HVAC checks", "Wheel diagnostics", "Door servicing"],
      capacity: "3 coaches at a time",
      equipment: ["Diagnostic computers", "Portable lifts", "Brake analyzers"],
    },
  },

  {
    name: "Old Delhi Depot",
    code: "dli",
    location: { lat: 28.6643, lng: 77.227 },
    image:
      "https://www.shutterstock.com/image-photo/guwahatiindia30-march-indian-railway-employee-260nw-2581657711.jpg",
    description:
      "Historic depot serving major long-distance and express trains.",
    washingLine: {
      capacity: "10 coaches per cycle",
      techniques: ["Automated rollers", "Steam rinse", "Foam cleaning"],
      features: ["Recycled water system", "Brush rollers", "Drying system"],
    },
    sickLine: {
      tasks: ["Wheel maintenance", "Brake overhauls", "Electrical diagnostics"],
      capacity: "5 coaches at a time",
      equipment: [
        "Lift jacks",
        "Electrical testing rigs",
        "Brake service equipment",
      ],
    },
  },
];

module.exports = sampleData;