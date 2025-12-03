// "use client";
// import { Film } from "@/types/api/types";
// import { Video } from "@/types/api/types";
// import React, { useEffect, useState } from "react";
// import {  FilmApi } from "@/lib/api";
// import { VideoApi }  from "@/lib/api";

// export default function AllProjects() {
//   const [hovered, setHovered] = useState<number | null>(null);
//   const [projects, setProjects] = useState<Film[]>([]);

//   useEffect(() => {
//        const fetchData = async () => {
//          try {
//            const data = await OurWorkVFXApi.getOurWork();
//            setProjects(data);
//          } catch (err) {
//            console.error("Failed to fetch works:", err);
//          }
//        };
//        fetchData();
//      }, []);

//   return (
//     <div className="bg-akasacara ">
//         <div className="relative max-w-screen-2xl mx-auto items-start justify-center gap-30">
//             <div></div>
//             {/* Bagian tengah: daftar project */}
//             <div className="flex-1 flex flex-col gap-xl">
//                 {projects.map((p, index) => (
//                 <div
//                     key={index}
//                     className="group flex flex-col lg:flex-row justify-center items-center gap-4 cursor-pointer"
//                     onMouseEnter={() => setHovered(index)}
//                     onMouseLeave={() => setHovered(null)}
//                 >
//                     <div className="flex justify-center items-center ">
//                     <div className="flex items-center justify-between text-center gap-2.5 vfx-text-subtitle-2 headline-2 group-hover:text-white! transition-colors duration-300 ">
//                         {p.title}
//                     </div>
//                     </div>
//                     <div className="flex vfx-text-subtitle-2 sub-heading-reg  group-hover:text-white! transition-colors duration-300">
//                     {p.year}
//                     </div>
//                 </div>
//                 ))}
//             </div>

//             {/* Bagian kanan: preview gambar */}
//             <div className="fixed right-0 top-1/2 -translate-y-1/ w-full lg:w-auto flex justify-end flex-shrink-0 sticky top-8">
//                 <div className="w-full max-w-[300px] aspect-[9/16] flex justify-end items-end object-cover">
//                 {hovered !== null && (
//                 <img
//                     src={projects[hovered].image}
//                     alt={projects[hovered].title}
//                     width={327}
//                     height={400}
//                     className="shadow-lg transition-all duration-500 opacity-100 scale-100 self-stretch object-cover"
//                 />
//                 )}
//             </div>
//             </div>
//         </div>
//     </div>
//   );
// };
