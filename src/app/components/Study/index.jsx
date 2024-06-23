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
          <h3 className="text-base">
            <span className="text-xl font-bold">SMK Negeri 1 Bangsri</span> |
            SMK Pengembangan Perangkat Lunak dan Gim | JL. KH. Achmad Fauzan No.
            17, Bangsri, Jepara, Jawa Tengah 59453 | 2022 - Sekarang
          </h3>
          <ul className="list-disc list-inside text-sm">
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
          <h3 className="text-base">
            <span className="text-xl font-bold">SMP Negeri 1 Keling</span> |
            Jalan Raya Kelet - Bangsri Karang Anyar, Karang Anyar, Jlegong, Kec.
            Keling, Kabupaten Jepara, Jawa Tengah 59454 | 2019 - 2021
          </h3>
        </div>
        <div className="w-full rounded-2xl flex flex-col gap-3 bg-neutral-100 dark:bg-neutral-900 p-5">
          <h3 className="text-base">
            <span className="text-xl font-bold">SD Negeri 3 Dermolo</span> | JL.
            Sebagor Balong, Km. 01, Dermolo, Kembang, Rt 04, RW.06, Dermolo,
            Jepara, Kabupaten Jepara, Jawa Tengah 59453 | 2012 - 2018
          </h3>
        </div>
      </div>
      <div className=""></div>
    </section>
  );
};

export default Study;
