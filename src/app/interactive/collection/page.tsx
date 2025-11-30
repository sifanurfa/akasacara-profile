"use client";

import React, { useEffect, useState } from "react";
import OurWorkCard from "@/components/interactive/collection/OurWorkCard";
import styles from "./Collection.module.css";
import PopularGame from "@/components/interactive/collection/PopularGame";
import { InteractiveGameApi } from "@/lib/api";
import { InteractiveGame } from "@/types/api/types";

function InteractiveCollection() {
  const [works, setWorks] = useState<InteractiveGame[]>([]);
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await InteractiveGameApi.getGames();
        setWorks(data);
      } catch (err) {
        console.error("Failed to fetch works:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col bg-interactive">
      {/* popular game */}
      <PopularGame />

      {/* title */}
      <div className="flex flex-col pt-section px-container items-start self-stretch">
        <div className="flex flex-col items-center gap-l self-stretch">
          <div className="title vfx-text-title text-center self-stretch">
            Discover Our Works
          </div>
          <div className="sub-heading-reg vfx-text-title text-center self-stretch">
            Step into immersive worlds filled with adventure, creativity, and
            stories that come to life through our works.
          </div>
        </div>
      </div>

      {/* portofolio list */}
      <div className="flex flex-col py-section px-container items-center gap-2xl self-stretch">
        {works.map((item) => (
          <OurWorkCard
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            image={`${baseURL?.replace(
              "/api",
              ""
            )}${item.media?.[0]?.url.replace("/api/", "/")}`}
          />
        ))}
      </div>

      {/* garis */}
      <div className="flex justify-center items-center self-stretch">
        <div className="h-0.5 bg-white flex-2"></div>
        <div className="flex-1"></div>
        <div className="h-0.5 bg-white flex-10"></div>
      </div>

      {/* platform */}
      <div className="flex flex-col py-section px-container items-center gap-3xl self-stretch">
        <div className="flex flex-col items-center gap-m self-stretch">
          <div className="headline-1 text-center vfx-text-title self-stretch">
            Available On
          </div>
        </div>
        <div className="flex px-section justify-between items-center self-stretch">
          <a
            href="https://yourgame.itch.io"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-center items-center gap-2.5 self-stretch hover:opacity-80 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="102"
              height="91"
              viewBox="0 0 102 91"
              fill="none"
            >
              <path
                d="M13.1864 0.562635C8.77467 3.18285 0.0812469 13.1701 0 15.7883V20.1228C0 25.6192 5.13684 30.4493 9.80041 30.4493C15.4004 30.4493 20.066 25.8081 20.066 20.2934C20.066 25.802 24.5711 30.4493 30.1731 30.4493C35.775 30.4493 40.1258 25.8081 40.1258 20.2934C40.1258 25.802 44.9174 30.4493 50.5173 30.4493H50.6189C56.2188 30.4493 61.0103 25.8081 61.0103 20.2934C61.0103 25.802 65.3713 30.4493 70.9631 30.4493C76.5549 30.4493 81.0702 25.8081 81.0702 20.2934C81.0702 25.802 85.7419 30.4493 91.3357 30.4493C96.0074 30.4493 101.136 25.6192 101.136 20.1228V15.7883C101.055 13.1681 92.3615 3.18082 87.9498 0.55451C74.2515 0.0812468 64.7457 0 50.5762 0C36.4067 0 17.0903 0.223429 13.1864 0.562635ZM40.0629 27.8596C35.5943 35.6593 24.24 35.7222 19.7816 27.9103C17.1065 32.6105 11.013 34.4243 8.40702 33.5286C7.62096 41.6837 5.63041 81.6938 12.0083 88.1976C28.2577 91.9898 73.366 91.8781 89.1441 88.1976C95.5728 81.643 93.4746 41.0744 92.7494 33.5286C90.1252 34.4304 84.0398 32.5942 81.3749 27.9103C76.9063 35.7344 65.5622 35.6491 61.0936 27.8616C59.6515 30.3985 56.4118 33.7398 50.5803 33.7398C48.4597 33.8064 46.3609 33.2944 44.5092 32.2589C42.6574 31.2233 41.1225 29.7032 40.0689 27.8616L40.0629 27.8596ZM31.6172 38.7812C34.9626 38.7812 37.9322 38.7812 41.6147 42.7988C47.5697 42.1949 53.5705 42.1949 59.5255 42.7988C63.2142 38.7954 66.1858 38.7954 69.5291 38.7954C80.1582 38.7954 82.7764 54.5431 86.5645 68.1357C90.0703 80.7594 85.4433 81.0682 79.6687 81.0804C71.1073 80.7615 66.3665 74.544 66.3665 68.3266C58.3942 69.6327 45.6628 70.112 34.7716 68.3266C34.7716 74.544 30.0309 80.7615 21.4695 81.0804C15.6969 81.0682 11.0699 80.7594 14.5757 68.1357C18.3679 54.5268 20.9861 38.7954 31.6132 38.7954L31.6172 38.7812ZM50.5762 48.5024C50.5762 48.5024 41.5619 56.7835 39.943 59.7165L45.8334 59.4788V64.6218C45.8334 64.9366 50.1679 64.6543 50.5721 64.6543C52.9385 64.7639 55.3068 64.8574 55.3068 64.6218V59.487L61.1972 59.7246C59.5723 56.7835 50.564 48.5044 50.564 48.5044L50.5762 48.5024Z"
                fill="white"
              />
            </svg>
            <div className={styles.available}>Itch.io</div>
          </a>
          <div className="flex flex-col justify-center items-center gap-2.5 self-stretch">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="91"
              height="91"
              viewBox="0 0 91 91"
              fill="none"
            >
              <path
                d="M45.5 0C51.4751 0 57.3918 1.17689 62.9121 3.46348C68.4324 5.75007 73.4483 9.10158 77.6734 13.3266C81.8984 17.5517 85.2499 22.5676 87.5365 28.0879C89.8231 33.6082 91 39.5249 91 45.5C91 57.5674 86.2063 69.1405 77.6734 77.6734C69.1405 86.2063 57.5674 91 45.5 91C24.57 91 7.0525 76.986 1.638 57.9215L19.0645 65.1105C19.6616 68.0251 21.2462 70.6444 23.5507 72.5261C25.8552 74.4078 28.7384 75.4367 31.7135 75.439C38.8115 75.439 44.59 69.6605 44.59 62.5625V61.971L60.06 50.9145H60.424C69.888 50.9145 77.5775 43.225 77.5775 33.761C77.5775 24.297 69.888 16.6075 60.424 16.6075C50.96 16.6075 43.225 24.297 43.225 33.761V33.9885L32.4415 49.7315L31.7135 49.686C29.029 49.686 26.5265 50.505 24.479 51.9155L0 41.86C1.9565 18.4275 21.5215 0 45.5 0ZM28.574 69.0235C32.214 70.525 36.4 68.8415 37.9015 65.2015C39.403 61.5615 37.674 57.421 34.125 55.9195L28.301 53.508C30.5305 52.689 33.033 52.6435 35.399 53.6445C37.8105 54.6 39.676 56.4655 40.6315 58.877C41.6325 61.243 41.6325 63.882 40.6315 66.248C38.675 71.162 32.8965 73.528 27.9825 71.4805C25.7075 70.525 23.9785 68.796 23.023 66.7485L28.574 69.0235ZM71.89 33.761C71.89 40.0855 66.7485 45.227 60.424 45.227C57.3909 45.215 54.4862 44.0016 52.3457 41.8526C50.2053 39.7037 49.0035 36.7941 49.0035 33.761C48.9975 32.2596 49.2888 30.7718 49.8606 29.3835C50.4324 27.9951 51.2734 26.7338 52.3351 25.6721C53.3968 24.6104 54.6581 23.7694 56.0465 23.1976C57.4348 22.6258 58.9226 22.3345 60.424 22.3405C63.4571 22.3405 66.3667 23.5422 68.5156 25.6827C70.6646 27.8232 71.878 30.7279 71.89 33.761ZM51.87 33.761C51.87 38.493 55.692 42.3605 60.4695 42.3605C65.2015 42.3605 69.0235 38.493 69.0235 33.761C69.0235 29.029 65.2015 25.1615 60.4695 25.1615C55.692 25.1615 51.87 29.029 51.87 33.761Z"
                fill="white"
              />
            </svg>
            <div className={styles.available}>Steam</div>
          </div>
          <div className="flex flex-col justify-center items-center gap-2.5 self-stretch">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="85"
              height="91"
              viewBox="0 0 85 91"
              fill="none"
            >
              <path
                d="M0 5.58444V85.4115C0.000534437 85.5847 0.0521548 85.7539 0.148388 85.8978C0.244622 86.0418 0.381184 86.1541 0.540952 86.2207C0.700719 86.2873 0.876579 86.3052 1.04648 86.2722C1.21638 86.2392 1.37276 86.1567 1.496 86.0351L43.0329 45.5L1.496 4.96085C1.37276 4.83926 1.21638 4.75678 1.04648 4.72376C0.876579 4.69075 0.700719 4.70866 0.540952 4.77526C0.381184 4.84185 0.244622 4.95417 0.148388 5.09812C0.0521548 5.24207 0.000534437 5.41125 0 5.58444ZM60.4491 28.844L8.36706 0.130604L8.33458 0.112323C7.43739 -0.375171 6.58485 0.839501 7.31965 1.54637L48.1461 40.6108L60.4491 28.844ZM7.32372 89.4536C6.58485 90.1605 7.43739 91.3752 8.33864 90.8877L8.37112 90.8694L60.4491 62.156L48.1461 50.3851L7.32372 89.4536ZM81.4743 40.4219L66.9304 32.4067L53.2553 45.5L66.9304 58.5872L81.4743 50.5781C85.4305 48.3904 85.4305 42.6096 81.4743 40.4219Z"
                fill="white"
              />
            </svg>
            <div className={styles.available}>Play Store</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InteractiveCollection;
