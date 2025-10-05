import React, { useEffect, useState } from "react";

export default function Explore() {
  const [verse, setVerse] = useState(null);
  const [hadith, setHadith] = useState(null);

  // Fetch Quran verse
  useEffect(() => {
    fetch("https://api.alquran.cloud/v1/ayah/random")
      .then((res) => res.json())
      .then((data) => {
        if (data?.data) {
          setVerse({
            text: data.data.text,
            surah: data.data.surah.englishName,
            number: data.data.numberInSurah,
          });
        }
      })
      .catch((err) => console.error("Error fetching verse:", err));

    // Fetch Hadith
    fetch("https://random-hadith-generator.vercel.app/bukhari/")
      .then((res) => res.json())
      .then((data) => {
        if (data?.data) {
          setHadith({
            book: data.data.book,
            header: data.data.header,
            hadith: data.data.hadith_english,
          });
        }
      })
      .catch((err) => console.error("Error fetching hadith:", err));
  }, []);

  return (
    <div className="w-full mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg space-y-6">
      <h1 className="text-3xl font-bold text-center text-yellow-700 mb-6">
        Explore
      </h1>

      {/* Verse of the Day */}
      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-green-700 mb-2">Verse of the Day</h2>
        {verse ? (
          <p className="text-gray-700 italic">
            “{verse.text}” <br />
            <span className="text-sm text-gray-500">
              – {verse.surah} ({verse.number})
            </span>
          </p>
        ) : (
          <p className="text-gray-500">Loading verse...</p>
        )}
      </div>

      {/* Hadith of the Day */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-blue-700 mb-2">Hadith of the Day</h2>
        {hadith ? (
          <p className="text-gray-700">
            {hadith.hadith} <br />
            <span className="text-sm text-gray-500">
              – {hadith.book} | {hadith.header}
            </span>
          </p>
        ) : (
          <p className="text-gray-500">Loading hadith...</p>
        )}
      </div>

      {/* Dua of the Day */}
      <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-green-700 mb-2">Dua of the Day</h2>
        <p className="text-gray-700 italic">
          "اللّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ"
          <br />
          (O Allah, I ask You for well-being).
        </p>
      </div>
    </div>
  );
}
