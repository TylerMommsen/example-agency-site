// Centralized trade image map so any page can reference by key.
import concrete from "@/assets/trades/concrete.jpg";
import decksAndPatios from "@/assets/trades/decks-and-patios.jpg";
import dogGroomers from "@/assets/trades/dog-groomers.jpg";
import electrician from "@/assets/trades/electrician.jpg";
import garageDoorContractor from "@/assets/trades/garage-door-contractor.jpg";
import handyman from "@/assets/trades/handyman.jpg";
import hvac from "@/assets/trades/hvac.jpg";
import landscaper from "@/assets/trades/landscaper.jpg";
import masonry from "@/assets/trades/masonry.jpg";
import moving from "@/assets/trades/moving.jpg";
import painters from "@/assets/trades/painters.jpg";
import paving from "@/assets/trades/paving.jpg";
import pestControl from "@/assets/trades/pest-control.jpg";
import plumbing from "@/assets/trades/plumbing.jpg";
import poolConstruction from "@/assets/trades/pool-construction.jpg";
import pressureWashing from "@/assets/trades/pressure-washing.jpg";
import remodeling from "@/assets/trades/remodeling.jpg";
import roofing from "@/assets/trades/roofing.jpg";
import treeService from "@/assets/trades/tree-service.jpg";
import windowsAndDoors from "@/assets/trades/windows-and-doors.jpg";

export const TRADE_IMAGES = {
  concrete: concrete.src,
  decksAndPatios: decksAndPatios.src,
  dogGroomers: dogGroomers.src,
  electrician: electrician.src,
  garageDoorContractor: garageDoorContractor.src,
  handyman: handyman.src,
  hvac: hvac.src,
  landscaper: landscaper.src,
  masonry: masonry.src,
  moving: moving.src,
  painters: painters.src,
  paving: paving.src,
  pestControl: pestControl.src,
  plumbing: plumbing.src,
  poolConstruction: poolConstruction.src,
  pressureWashing: pressureWashing.src,
  remodeling: remodeling.src,
  roofing: roofing.src,
  treeService: treeService.src,
  windowsAndDoors: windowsAndDoors.src,
} as const;

export type TradeImageKey = keyof typeof TRADE_IMAGES;
