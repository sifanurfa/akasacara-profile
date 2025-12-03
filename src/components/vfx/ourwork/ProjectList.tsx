"use client";
import { OurWorkVFX } from "@/types/api/ourwork";
import React, { useEffect, useState } from "react";
import { OurWorkVFXApi } from "@/lib/api";

export default function PortofolioList() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [projects, setProjects] = useState<OurWorkVFX[]>([]);

  useEffect(() => {
       const fetchData = async () => {
         try {
           const data = await OurWorkVFXApi.getOurWork();
           setProjects(data);
         } catch (err) {
           console.error("Failed to fetch works:", err);
         }
       };
       fetchData();
     }, []);

  return (
    <div className="relative flex flex-row py-section px-container justify-between items-start gap-xl bg-vfx">
      {/* Bagian kiri: daftar project */}
      <div className="flex flex-col gap-xl">
        {projects.map((p, index) => (
          <div
            key={index}
            className="group flex justify-start items-start gap-4 cursor-pointer"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="flex justify-center items-start ">
              <div className="flex flex-col items-start gap-2.5 vfx-text-subtitle-2 headline-2 group-hover:text-white! transition-colors duration-300 ">
                {p.title}
              </div>
            </div>
            <div className="flex vfx-text-subtitle-2 sub-heading-reg  group-hover:text-white! transition-colors duration-300">
              {p.year}
            </div>
          </div>
        ))}
      </div>

      {/* Bagian kanan: preview gambar */}
      <div className="w-full max-w-[412px] aspect-[377/530] flex justify-center items-center self-stretch object-cover">
        {hovered !== null && (
          <img
            src={projects[hovered].image}
            alt={projects[hovered].title}
            width={377}
            height={530}
            className="rounded-xl shadow-lg transition-all duration-500 opacity-100 scale-100 self-stretch object-cover"
          />
        )}
      </div>
    </div>
  );
};


//   return (
//     <div className="py-section px-container bg-akasacara">
//       <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-start justify-start gap-20">
//         {/* Bagian kiri: daftar project */}
//         <div className="flex-1 flex flex-col gap-6">
//           {projects.map((p, index) => (
//             <div
//               key={index}
//               className="group flex flex-col lg:flex-row lg:items-center justify-between cursor-pointer py-4 border-b border-gray-300/30 last:border-b-0 hover:bg-gray-100/5 transition-all duration-300 px-4 rounded-lg"
//               onMouseEnter={() => setHovered(index)}
//               onMouseLeave={() => setHovered(null)}
//             >
//               {/* Judul proyek - bisa 2 baris */}
//               <div className="flex-1 mb-2 lg:mb-0">
//                 <div className="vfx-text-subtitle-2 headline-2 font-bold text-xl lg:text-2xl group-hover:text-white transition-colors duration-300">
//                   {p.title}
//                 </div>
//               </div>
              
//               {/* Tahun - rata kanan */}
//               <div className="lg:ml-8">
//                 <div className="vfx-text-subtitle-2 sub-heading-reg text-lg lg:text-xl text-gray-400 group-hover:text-white transition-colors duration-300">
//                   {p.year}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Bagian kanan: preview gambar */}
//         <div className="w-full lg:w-[412px] flex-shrink-0 sticky top-8">
//           <div className="w-full max-w-[327px] mx-auto aspect-[327/450] flex justify-center items-center bg-gray-800/30 rounded-xl overflow-hidden">
//             {hovered !== null ? (
//               <img
//                 src={projects[hovered].image}
//                 alt={projects[hovered].title}
//                 className="w-full h-full object-cover rounded-xl shadow-lg transition-all duration-500 transform group-hover:scale-105"
//               />
//             ) : (
//               <div className="flex items-center justify-center h-full">
//                 <p className="text-gray-500 text-lg">Select a project</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }