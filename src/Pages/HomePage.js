import React from "react";
import ListProducts from "../Components/ListProducts";
import home from "../Imeges/home.png";
import cart from "../Imeges/shopping.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [products] = useState([
    {
      name: "Pen",
      price: 5,
    },
    {
      name: "Notebook",
      price: 6,
    },
    {
      name: "Eraser",
      price: 7,
    },
    {
      name: "Ruler",
      price: 8,
    },
    {
      name: "Pencil",
      price: 9,
    },
    {
      name: "Marker",
      price: 10,
    },
    {
      name: "Highlighter",
      price: 11,
    },
    {
      name: "Sharpener",
      price: 12,
    },
    {
      name: "Folder",
      price: 13,
    },
    {
      name: "Binder",
      price: 14,
    },
    {
      name: "Pen",
      price: 15,
    },
    {
      name: "Notebook",
      price: 16,
    },
    {
      name: "Eraser",
      price: 17,
    },
    {
      name: "Ruler",
      price: 18,
    },
    {
      name: "Pencil",
      price: 19,
    },
    {
      name: "Marker",
      price: 20,
    },
    {
      name: "Highlighter",
      price: 21,
    },
    {
      name: "Sharpener",
      price: 22,
    },
    {
      name: "Folder",
      price: 23,
    },
    {
      name: "Binder",
      price: 24,
    },
    {
      name: "Pen",
      price: 25,
    },
    {
      name: "Notebook",
      price: 26,
    },
    {
      name: "Eraser",
      price: 27,
    },
    {
      name: "Ruler",
      price: 28,
    },
    {
      name: "Pencil",
      price: 29,
    },
    {
      name: "Marker",
      price: 30,
    },
    {
      name: "Highlighter",
      price: 31,
    },
    {
      name: "Sharpener",
      price: 32,
    },
    {
      name: "Folder",
      price: 33,
    },
    {
      name: "Binder",
      price: 34,
    },
    {
      name: "Pen",
      price: 35,
    },
    {
      name: "Notebook",
      price: 36,
    },
    {
      name: "Eraser",
      price: 37,
    },
    {
      name: "Ruler",
      price: 38,
    },
    {
      name: "Pencil",
      price: 39,
    },
    {
      name: "Marker",
      price: 40,
    },
    {
      name: "Highlighter",
      price: 41,
    },
    {
      name: "Sharpener",
      price: 42,
    },
    {
      name: "Folder",
      price: 43,
    },
    {
      name: "Binder",
      price: 44,
    },
    {
      name: "Pen",
      price: 45,
    },
    {
      name: "Notebook",
      price: 46,
    },
    {
      name: "Eraser",
      price: 47,
    },
    {
      name: "Ruler",
      price: 48,
    },
    {
      name: "Pencil",
      price: 49,
    },
    {
      name: "Marker",
      price: 50,
    },
    {
      name: "Highlighter",
      price: 5,
    },
    {
      name: "Sharpener",
      price: 6,
    },
    {
      name: "Folder",
      price: 7,
    },
    {
      name: "Binder",
      price: 8,
    },
    {
      name: "Pen",
      price: 9,
    },
    {
      name: "Notebook",
      price: 10,
    },
    {
      name: "Eraser",
      price: 11,
    },
    {
      name: "Ruler",
      price: 12,
    },
    {
      name: "Pencil",
      price: 13,
    },
    {
      name: "Marker",
      price: 14,
    },
    {
      name: "Highlighter",
      price: 15,
    },
    {
      name: "Sharpener",
      price: 16,
    },
    {
      name: "Folder",
      price: 17,
    },
    {
      name: "Binder",
      price: 18,
    },
    {
      name: "Pen",
      price: 19,
    },
    {
      name: "Notebook",
      price: 20,
    },
    {
      name: "Eraser",
      price: 21,
    },
    {
      name: "Ruler",
      price: 22,
    },
    {
      name: "Pencil",
      price: 23,
    },
    {
      name: "Marker",
      price: 24,
    },
    {
      name: "Highlighter",
      price: 25,
    },
    {
      name: "Sharpener",
      price: 26,
    },
    {
      name: "Folder",
      price: 27,
    },
    {
      name: "Binder",
      price: 28,
    },
    {
      name: "Pen",
      price: 29,
    },
    {
      name: "Notebook",
      price: 30,
    },
    {
      name: "Eraser",
      price: 31,
    },
    {
      name: "Ruler",
      price: 32,
    },
    {
      name: "Pencil",
      price: 33,
    },
    {
      name: "Marker",
      price: 34,
    },
    {
      name: "Highlighter",
      price: 35,
    },
    {
      name: "Sharpener",
      price: 36,
    },
    {
      name: "Folder",
      price: 37,
    },
    {
      name: "Binder",
      price: 38,
    },
    {
      name: "Pen",
      price: 39,
    },
    {
      name: "Notebook",
      price: 40,
    },
    {
      name: "Eraser",
      price: 41,
    },
    {
      name: "Ruler",
      price: 42,
    },
    {
      name: "Pencil",
      price: 43,
    },
    {
      name: "Marker",
      price: 44,
    },
    {
      name: "Highlighter",
      price: 45,
    },
    {
      name: "Sharpener",
      price: 46,
    },
    {
      name: "Folder",
      price: 47,
    },
    {
      name: "Binder",
      price: 48,
    },
    {
      name: "Pen",
      price: 49,
    },
    {
      name: "Notebook",
      price: 50,
    },
    {
      name: "Eraser",
      price: 5,
    },
    {
      name: "Ruler",
      price: 6,
    },
    {
      name: "Pencil",
      price: 7,
    },
    {
      name: "Marker",
      price: 8,
    },
    {
      name: "Highlighter",
      price: 9,
    },
    {
      name: "Sharpener",
      price: 10,
    },
    {
      name: "Folder",
      price: 11,
    },
    {
      name: "Binder",
      price: 12,
    },
    {
      name: "Pen",
      price: 13,
    },
    {
      name: "Notebook",
      price: 14,
    },
    {
      name: "Eraser",
      price: 15,
    },
    {
      name: "Ruler",
      price: 16,
    },
    {
      name: "Pencil",
      price: 17,
    },
    {
      name: "Marker",
      price: 18,
    },
    {
      name: "Highlighter",
      price: 19,
    },
    {
      name: "Sharpener",
      price: 20,
    },
    {
      name: "Folder",
      price: 21,
    },
    {
      name: "Binder",
      price: 22,
    },
    {
      name: "Pen",
      price: 23,
    },
    {
      name: "Notebook",
      price: 24,
    },
    {
      name: "Eraser",
      price: 25,
    },
    {
      name: "Ruler",
      price: 26,
    },
    {
      name: "Pencil",
      price: 27,
    },
    {
      name: "Marker",
      price: 28,
    },
    {
      name: "Highlighter",
      price: 29,
    },
    {
      name: "Sharpener",
      price: 30,
    },
    {
      name: "Folder",
      price: 31,
    },
    {
      name: "Binder",
      price: 32,
    },
    {
      name: "Pen",
      price: 33,
    },
    {
      name: "Notebook",
      price: 34,
    },
    {
      name: "Eraser",
      price: 35,
    },
    {
      name: "Ruler",
      price: 36,
    },
    {
      name: "Pencil",
      price: 37,
    },
    {
      name: "Marker",
      price: 38,
    },
    {
      name: "Highlighter",
      price: 39,
    },
    {
      name: "Sharpener",
      price: 40,
    },
    {
      name: "Folder",
      price: 41,
    },
    {
      name: "Binder",
      price: 42,
    },
    {
      name: "Pen",
      price: 43,
    },
    {
      name: "Notebook",
      price: 44,
    },
    {
      name: "Eraser",
      price: 45,
    },
    {
      name: "Ruler",
      price: 46,
    },
    {
      name: "Pencil",
      price: 47,
    },
    {
      name: "Marker",
      price: 48,
    },
    {
      name: "Highlighter",
      price: 49,
    },
    {
      name: "Sharpener",
      price: 50,
    },
    {
      name: "Folder",
      price: 5,
    },
    {
      name: "Binder",
      price: 6,
    },
    {
      name: "Pen",
      price: 7,
    },
    {
      name: "Notebook",
      price: 8,
    },
    {
      name: "Eraser",
      price: 9,
    },
    {
      name: "Ruler",
      price: 10,
    },
    {
      name: "Pencil",
      price: 11,
    },
    {
      name: "Marker",
      price: 12,
    },
    {
      name: "Highlighter",
      price: 13,
    },
    {
      name: "Sharpener",
      price: 14,
    },
    {
      name: "Folder",
      price: 15,
    },
    {
      name: "Binder",
      price: 16,
    },
    {
      name: "Pen",
      price: 17,
    },
    {
      name: "Notebook",
      price: 18,
    },
    {
      name: "Eraser",
      price: 19,
    },
    {
      name: "Ruler",
      price: 20,
    },
    {
      name: "Pencil",
      price: 21,
    },
    {
      name: "Marker",
      price: 22,
    },
    {
      name: "Highlighter",
      price: 23,
    },
    {
      name: "Sharpener",
      price: 24,
    },
    {
      name: "Folder",
      price: 25,
    },
    {
      name: "Binder",
      price: 26,
    },
    {
      name: "Pen",
      price: 27,
    },
    {
      name: "Notebook",
      price: 28,
    },
    {
      name: "Eraser",
      price: 29,
    },
    {
      name: "Ruler",
      price: 30,
    },
    {
      name: "Pencil",
      price: 31,
    },
    {
      name: "Marker",
      price: 32,
    },
    {
      name: "Highlighter",
      price: 33,
    },
    {
      name: "Sharpener",
      price: 34,
    },
    {
      name: "Folder",
      price: 35,
    },
    {
      name: "Binder",
      price: 36,
    },
    {
      name: "Pen",
      price: 37,
    },
    {
      name: "Notebook",
      price: 38,
    },
    {
      name: "Eraser",
      price: 39,
    },
    {
      name: "Ruler",
      price: 40,
    },
    {
      name: "Pencil",
      price: 41,
    },
    {
      name: "Marker",
      price: 42,
    },
    {
      name: "Highlighter",
      price: 43,
    },
    {
      name: "Sharpener",
      price: 44,
    },
    {
      name: "Folder",
      price: 45,
    },
    {
      name: "Binder",
      price: 46,
    },
    {
      name: "Pen",
      price: 47,
    },
    {
      name: "Notebook",
      price: 48,
    },
    {
      name: "Eraser",
      price: 49,
    },
    {
      name: "Ruler",
      price: 50,
    },
    {
      name: "Pencil",
      price: 5,
    },
    {
      name: "Marker",
      price: 6,
    },
    {
      name: "Highlighter",
      price: 7,
    },
    {
      name: "Sharpener",
      price: 8,
    },
    {
      name: "Folder",
      price: 9,
    },
    {
      name: "Binder",
      price: 10,
    },
    {
      name: "Pen",
      price: 11,
    },
    {
      name: "Notebook",
      price: 12,
    },
    {
      name: "Eraser",
      price: 13,
    },
    {
      name: "Ruler",
      price: 14,
    },
    {
      name: "Pencil",
      price: 15,
    },
    {
      name: "Marker",
      price: 16,
    },
    {
      name: "Highlighter",
      price: 17,
    },
    {
      name: "Sharpener",
      price: 18,
    },
    {
      name: "Folder",
      price: 19,
    },
    {
      name: "Binder",
      price: 20,
    },
    {
      name: "Pen",
      price: 21,
    },
    {
      name: "Notebook",
      price: 22,
    },
    {
      name: "Eraser",
      price: 23,
    },
    {
      name: "Ruler",
      price: 24,
    },
    {
      name: "Pencil",
      price: 25,
    },
    {
      name: "Marker",
      price: 26,
    },
    {
      name: "Highlighter",
      price: 27,
    },
    {
      name: "Sharpener",
      price: 28,
    },
    {
      name: "Folder",
      price: 29,
    },
    {
      name: "Binder",
      price: 30,
    },
    {
      name: "Pen",
      price: 31,
    },
    {
      name: "Notebook",
      price: 32,
    },
    {
      name: "Eraser",
      price: 33,
    },
    {
      name: "Ruler",
      price: 34,
    },
    {
      name: "Pencil",
      price: 35,
    },
    {
      name: "Marker",
      price: 36,
    },
    {
      name: "Highlighter",
      price: 37,
    },
    {
      name: "Sharpener",
      price: 38,
    },
    {
      name: "Folder",
      price: 39,
    },
    {
      name: "Binder",
      price: 40,
    },
    {
      name: "Pen",
      price: 41,
    },
    {
      name: "Notebook",
      price: 42,
    },
    {
      name: "Eraser",
      price: 43,
    },
    {
      name: "Ruler",
      price: 44,
    },
    {
      name: "Pencil",
      price: 45,
    },
    {
      name: "Marker",
      price: 46,
    },
    {
      name: "Highlighter",
      price: 47,
    },
    {
      name: "Sharpener",
      price: 48,
    },
    {
      name: "Folder",
      price: 49,
    },
    {
      name: "Binder",
      price: 50,
    },
    {
      name: "Pen",
      price: 5,
    },
    {
      name: "Notebook",
      price: 6,
    },
    {
      name: "Eraser",
      price: 7,
    },
    {
      name: "Ruler",
      price: 8,
    },
    {
      name: "Pencil",
      price: 9,
    },
    {
      name: "Marker",
      price: 10,
    },
    {
      name: "Highlighter",
      price: 11,
    },
    {
      name: "Sharpener",
      price: 12,
    },
    {
      name: "Folder",
      price: 13,
    },
    {
      name: "Binder",
      price: 14,
    },
    {
      name: "Pen",
      price: 15,
    },
    {
      name: "Notebook",
      price: 16,
    },
    {
      name: "Eraser",
      price: 17,
    },
    {
      name: "Ruler",
      price: 18,
    },
    {
      name: "Pencil",
      price: 19,
    },
    {
      name: "Marker",
      price: 20,
    },
    {
      name: "Highlighter",
      price: 21,
    },
    {
      name: "Sharpener",
      price: 22,
    },
    {
      name: "Folder",
      price: 23,
    },
    {
      name: "Binder",
      price: 24,
    },
    {
      name: "Pen",
      price: 25,
    },
    {
      name: "Notebook",
      price: 26,
    },
    {
      name: "Eraser",
      price: 27,
    },
    {
      name: "Ruler",
      price: 28,
    },
    {
      name: "Pencil",
      price: 29,
    },
    {
      name: "Marker",
      price: 30,
    },
    {
      name: "Highlighter",
      price: 31,
    },
    {
      name: "Sharpener",
      price: 32,
    },
    {
      name: "Folder",
      price: 33,
    },
    {
      name: "Binder",
      price: 34,
    },
    {
      name: "Pen",
      price: 35,
    },
    {
      name: "Notebook",
      price: 36,
    },
    {
      name: "Eraser",
      price: 37,
    },
    {
      name: "Ruler",
      price: 38,
    },
    {
      name: "Pencil",
      price: 39,
    },
    {
      name: "Marker",
      price: 40,
    },
    {
      name: "Highlighter",
      price: 41,
    },
    {
      name: "Sharpener",
      price: 42,
    },
    {
      name: "Folder",
      price: 43,
    },
    {
      name: "Binder",
      price: 44,
    },
    {
      name: "Pen",
      price: 45,
    },
    {
      name: "Notebook",
      price: 46,
    },
    {
      name: "Eraser",
      price: 47,
    },
    {
      name: "Ruler",
      price: 48,
    },
    {
      name: "Pencil",
      price: 49,
    },
    {
      name: "Marker",
      price: 50,
    },
    {
      name: "Highlighter",
      price: 5,
    },
    {
      name: "Sharpener",
      price: 6,
    },
    {
      name: "Folder",
      price: 7,
    },
    {
      name: "Binder",
      price: 8,
    },
    {
      name: "Pen",
      price: 9,
    },
    {
      name: "Notebook",
      price: 10,
    },
    {
      name: "Eraser",
      price: 11,
    },
    {
      name: "Ruler",
      price: 12,
    },
    {
      name: "Pencil",
      price: 13,
    },
    {
      name: "Marker",
      price: 14,
    },
    {
      name: "Highlighter",
      price: 15,
    },
    {
      name: "Sharpener",
      price: 16,
    },
    {
      name: "Folder",
      price: 17,
    },
    {
      name: "Binder",
      price: 18,
    },
    {
      name: "Pen",
      price: 19,
    },
    {
      name: "Notebook",
      price: 20,
    },
    {
      name: "Eraser",
      price: 21,
    },
    {
      name: "Ruler",
      price: 22,
    },
    {
      name: "Pencil",
      price: 23,
    },
    {
      name: "Marker",
      price: 24,
    },
    {
      name: "Highlighter",
      price: 25,
    },
    {
      name: "Sharpener",
      price: 26,
    },
    {
      name: "Folder",
      price: 27,
    },
    {
      name: "Binder",
      price: 28,
    },
    {
      name: "Pen",
      price: 29,
    },
    {
      name: "Notebook",
      price: 30,
    },
    {
      name: "Eraser",
      price: 31,
    },
    {
      name: "Ruler",
      price: 32,
    },
    {
      name: "Pencil",
      price: 33,
    },
    {
      name: "Marker",
      price: 34,
    },
    {
      name: "Highlighter",
      price: 35,
    },
    {
      name: "Sharpener",
      price: 36,
    },
    {
      name: "Folder",
      price: 37,
    },
    {
      name: "Binder",
      price: 38,
    },
    {
      name: "Pen",
      price: 39,
    },
    {
      name: "Notebook",
      price: 40,
    },
    {
      name: "Eraser",
      price: 41,
    },
    {
      name: "Ruler",
      price: 42,
    },
    {
      name: "Pencil",
      price: 43,
    },
    {
      name: "Marker",
      price: 44,
    },
    {
      name: "Highlighter",
      price: 45,
    },
    {
      name: "Sharpener",
      price: 46,
    },
    {
      name: "Folder",
      price: 47,
    },
    {
      name: "Binder",
      price: 48,
    },
    {
      name: "Pen",
      price: 49,
    },
    {
      name: "Notebook",
      price: 50,
    },
    {
      name: "Eraser",
      price: 5,
    },
    {
      name: "Ruler",
      price: 6,
    },
    {
      name: "Pencil",
      price: 7,
    },
    {
      name: "Marker",
      price: 8,
    },
    {
      name: "Highlighter",
      price: 9,
    },
    {
      name: "Sharpener",
      price: 10,
    },
    {
      name: "Folder",
      price: 11,
    },
    {
      name: "Binder",
      price: 12,
    },
    {
      name: "Pen",
      price: 13,
    },
    {
      name: "Notebook",
      price: 14,
    },
    {
      name: "Eraser",
      price: 15,
    },
    {
      name: "Ruler",
      price: 16,
    },
    {
      name: "Pencil",
      price: 17,
    },
    {
      name: "Marker",
      price: 18,
    },
    {
      name: "Highlighter",
      price: 19,
    },
    {
      name: "Sharpener",
      price: 20,
    },
    {
      name: "Folder",
      price: 21,
    },
    {
      name: "Binder",
      price: 22,
    },
    {
      name: "Pen",
      price: 23,
    },
    {
      name: "Notebook",
      price: 24,
    },
    {
      name: "Eraser",
      price: 25,
    },
    {
      name: "Ruler",
      price: 26,
    },
    {
      name: "Pencil",
      price: 27,
    },
    {
      name: "Marker",
      price: 28,
    },
    {
      name: "Highlighter",
      price: 29,
    },
    {
      name: "Sharpener",
      price: 30,
    },
    {
      name: "Folder",
      price: 31,
    },
    {
      name: "Binder",
      price: 32,
    },
    {
      name: "Pen",
      price: 33,
    },
    {
      name: "Notebook",
      price: 34,
    },
    {
      name: "Eraser",
      price: 35,
    },
    {
      name: "Ruler",
      price: 36,
    },
    {
      name: "Pencil",
      price: 37,
    },
    {
      name: "Marker",
      price: 38,
    },
    {
      name: "Highlighter",
      price: 39,
    },
    {
      name: "Sharpener",
      price: 40,
    },
    {
      name: "Folder",
      price: 41,
    },
    {
      name: "Binder",
      price: 42,
    },
    {
      name: "Pen",
      price: 43,
    },
    {
      name: "Notebook",
      price: 44,
    },
    {
      name: "Eraser",
      price: 45,
    },
    {
      name: "Ruler",
      price: 46,
    },
    {
      name: "Pencil",
      price: 47,
    },
    {
      name: "Marker",
      price: 48,
    },
    {
      name: "Highlighter",
      price: 49,
    },
    {
      name: "Sharpener",
      price: 50,
    },
    {
      name: "Folder",
      price: 5,
    },
    {
      name: "Binder",
      price: 6,
    },
    {
      name: "Pen",
      price: 7,
    },
    {
      name: "Notebook",
      price: 8,
    },
    {
      name: "Eraser",
      price: 9,
    },
    {
      name: "Ruler",
      price: 10,
    },
    {
      name: "Pencil",
      price: 11,
    },
    {
      name: "Marker",
      price: 12,
    },
    {
      name: "Highlighter",
      price: 13,
    },
    {
      name: "Sharpener",
      price: 14,
    },
    {
      name: "Folder",
      price: 15,
    },
    {
      name: "Binder",
      price: 16,
    },
    {
      name: "Pen",
      price: 17,
    },
    {
      name: "Notebook",
      price: 18,
    },
    {
      name: "Eraser",
      price: 19,
    },
    {
      name: "Ruler",
      price: 20,
    },
    {
      name: "Pencil",
      price: 21,
    },
    {
      name: "Marker",
      price: 22,
    },
    {
      name: "Highlighter",
      price: 23,
    },
    {
      name: "Sharpener",
      price: 24,
    },
    {
      name: "Folder",
      price: 25,
    },
    {
      name: "Binder",
      price: 26,
    },
    {
      name: "Pen",
      price: 27,
    },
    {
      name: "Notebook",
      price: 28,
    },
    {
      name: "Eraser",
      price: 29,
    },
    {
      name: "Ruler",
      price: 30,
    },
    {
      name: "Pencil",
      price: 31,
    },
    {
      name: "Marker",
      price: 32,
    },
    {
      name: "Highlighter",
      price: 33,
    },
    {
      name: "Sharpener",
      price: 34,
    },
    {
      name: "Folder",
      price: 35,
    },
    {
      name: "Binder",
      price: 36,
    },
  ]);
  const [carts, setCarts] = useState([]);
  const navigate = useNavigate();
  function addToCart(product) {
    setCarts([...carts, product]);
  }
  function handleAddClick() {
    navigate("/cart", { state: { products: carts } });
  }
  return (
    <div>
      <div className="conteiner">
        <img src={home} alt="home" />
        <h1>SV SHOP</h1>
        <img onClick={handleAddClick} src={cart} alt="cart" />
      </div>

      <ListProducts products={products} addToCart={addToCart} />
    </div>
  );
};

export default HomePage;
