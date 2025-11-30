"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

interface SelectProjectProps {
  value?: string[];
  onChange?: (value: string[]) => void;
}

const categories = {
  General: [
    "Branding / Merchandising / Licensing",
    "Business Partnership",
    "Creative Consulting / Short Mentorship",
    "Internship / Job Opening",
    "Color Grading / Color Correction",
    "Other",
  ],
  "Film, Video & Audio Production": [
    "Commercial / Advertisement / Company Profile",
    "Feature Film Production / Co-Production",
    "Documentary Production / Co-Production",
    "Short Film Production / Co-Production",
    "Music Video / Animated Music Video",
    "Trailer / Teaser",
    "Web Series Production / Co-Production",
    "2D / 3D Animation Production / Co-Production",
    "Experimental / Arthouse Film Production / Co-Production",
    "Event / Live Capture (concert / festival / corporate event)",
    "Regular / Surround Audio Mixing",
    "Foley / Sound Design",
  ],
  "Post-Production & VFX": [
    "Color Grading / Color Correction",
    "Compositing",
    "Rendering Service",
    "Motion Graphics",
    "Matte Painting / Cleanup",
    "Rotoscoping / Masking",
    "Computer Simulation (efek cairan, asap, api, partikel, cloth, fur)",
    "VFX Production Supervision / Management",
    "VFX Consulting / Short Applied Mentorship",
  ],
  "Game Development & Interactive Art": [
    "Full Game Development / Co-Development / Outsourcing",
    "Porting / Platform Support",
    "Game Asset Creation (2D / 3D / UI / Animation)",
    "Interactive Art UX / UI Design",
    "Game Design / Narrative / Level Design",
    "Technical Art",
    "Tool / Engine / Plugin Development",
    "Prototype / Demo Development",
    "Educational / Training Game",
    "Cozy - Casual Games",
    "VR / AR Interactive Experience",
    "Interactive Art Consulting",
    "Interactive Art / Multimedia Installations",
    "Game Publishing",
  ],
};

export default function SelectProject({
  value = [],
  onChange,
}: SelectProjectProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<string[]>(value);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleSelect = useCallback((item: string) => {
    setSelected(prev =>
      prev.includes(item)
        ? prev.filter(i => i !== item)
        : [...prev, item]
    );
  }, []);

  const onChangeRef = useRef(onChange);

  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  useEffect(() => {
    onChangeRef.current?.(selected);
  }, [selected]);

  const removeTag = (item: string) => {
    setSelected(prev => prev.filter(i => i !== item));
  };

  return (
    <div ref={ref} className="w-full border-[2.5px] border-black rounded-[5px] overflow-hidden bg-akasacara-yellow">
      {/* HEADER BUTTON */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-m px-m bg-transparent text-left"
      >
        {selected.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {selected.map((item) => (
              <Badge
                key={item}
                variant="secondary"
                className="flex items-center gap-m px-3 py-1 text-sm bg-vfx text-white rounded-[2.5px] body-reg"
              >
                {item}
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    removeTag(item);
                  }}
                  className="cursor-pointer text-white hover:text-white/70"
                >
                  ✕
                </span>
              </Badge>
            ))}
          </div>
        ) : (
          <div className="body-reg aka-text-subtitle-2 ps-m">
            Select your project type
          </div>
        )}
        <ChevronDown
          className={`w-7 h-7 ml-2 shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* COLLAPSIBLE CONTENT */}
      <div
        className={`transition-all duration-300 overflow-hidden ${
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Command shouldFilter={false}>
          <CommandInput
            placeholder="Search"
            value={search}
            onValueChange={setSearch}
            className="body-reg aka-text-subtitle-2"
          />
          <CommandList>
            <CommandEmpty>No topic found.</CommandEmpty>
            <CommandGroup className="max-h-[300px] overflow-y-auto">
              {selected.length > 0 && (
                <div className="border-b border-black/20">
                  <div className="px-3 pt-m font-semibold text-black/80 body-reg">
                    Selected
                  </div>
                  {selected.map((item) => (
                    <CommandItem
                      key={item}
                      className="flex items-center gap-s py-2 px-3 cursor-pointer"
                    >
                      <Checkbox
                        checked={selected.includes(item)}
                        onCheckedChange={() => toggleSelect(item)}
                      />
                      <span
                        onClick={() => toggleSelect(item)}
                        className="select-none"
                      >
                        {item}
                      </span>
                    </CommandItem>
                  ))}
                </div>
              )}

              {Object.entries(categories).map(([group, items]) => (
                <div key={group}>
                  <div className="px-3 pt-m group-title font-semibold text-black/80">
                    {group}
                  </div>
                  {items
                    .filter((item) =>
                      item.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((item) => (
                      <CommandItem
                        key={item}
                        className="flex items-center gap-s py-2 px-3 cursor-pointer"
                      >
                        <Checkbox
                          checked={selected.includes(item)}
                          onCheckedChange={() => toggleSelect(item)}
                        />
                        <span
                          onClick={() => toggleSelect(item)}
                          className="select-none"
                        >
                          {item}
                        </span>
                      </CommandItem>
                    ))}
                </div>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </div>
    </div>
  );
}
