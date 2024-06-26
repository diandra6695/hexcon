"use client";
import { GraduationCap } from "@phosphor-icons/react";
import Card from "../Utilities/Card";
import Title from "../Utilities/Title";

const Study = () => {
  return (
    <section className="max-w-4xl mx-auto px-7 lg:px-0 mb-8">
      <div className="flex gap-2">
        <GraduationCap size={32} />
        <Title text="Pendidikan" />
      </div>
      <div className="flex flex-col gap-5">
        <div className="w-full rounded-2xl flex flex-col gap-3 bg-neutral-100 dark:bg-neutral-900 p-5">
          <header>
            <h3 className="text-xl mb-2 font-bold">SMK Negeri 1 Bangsri</h3>
            <p className="text-sm">
              SMK Pengembangan Perangkat Lunak dan Gim | JL. KH. Achmad Fauzan
              No. 17, Bangsri, Jepara, Jawa Tengah 59453 | 2022 - Sekarang
            </p>
          </header>
          <ul className="list-disc list-inside text-sm text-neutral-600 dark:text-neutral-400">
            <li>
              Mampu membuat tugas akhir yang bermanfaat untuk sekolah dan
              organisasi yaitu Website Arsip Surat yang inovatif.
            </li>
            <li>
              Terpilih sebagai siswa yang mengikuti pembelajaran TEFA (Teaching
              Factory).
            </li>
            <li>
              Mampu melakukan tugas sebagai asisten guru Website Design
              Wordpress.
            </li>
            <li>
              Mengikuti Lomba Keterampilan Siswa SMK Tingkat Kabupaten bidang
              Design Grafis 2023 (luring).
            </li>
            <li>
              Mengikuti Lomba Keterampilan Siswa SMK Tingkat Provinsi bidang
              Cloud Computing AWS 2024 (luring).
            </li>
            <li>Mampu membuat video profile sekolah.</li>
            <li>
              Berhasil mengajarkan PHP dasar kepada 20 siswa dengan tingkat
              pemahaman mencapai 90%.
            </li>
            <li>Memiliki kemampuan Problem Solving yang baik.</li>
            <li>Mampu menjadi pembawa acara di sekolah.</li>
          </ul>
        </div>
        <div className="w-full rounded-2xl flex flex-col gap-3 bg-neutral-100 dark:bg-neutral-900 p-5">
          <header>
            <h3 className="text-xl mb-2 font-bold">SMP Negeri 1 Keling</h3>
            <p className="text-sm">
              Jalan Raya Kelet - Bangsri Karang Anyar, Karang Anyar, Jlegong,
              Kec. Keling, Kabupaten Jepara, Jawa Tengah 59454 | 2019 - 2021
            </p>
          </header>
        </div>
        <div className="w-full rounded-2xl flex flex-col gap-3 bg-neutral-100 dark:bg-neutral-900 p-5">
          <header>
            <h3 className="text-xl mb-2 font-bold">SD Negeri 3 Dermolo</h3>
            <p className="text-sm">
              Sebagor Balong, Km. 01, Dermolo, Kembang, Rt 04, RW.06, Dermolo,
              Jepara, Kabupaten Jepara, Jawa Tengah 59453 | 2012 - 2018
            </p>
          </header>
        </div>
      </div>
      <div className=""></div>
    </section>
  );
};

export default Study;
