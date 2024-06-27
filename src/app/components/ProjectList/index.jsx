import Button from "../Utilities/Button";
import CardProject from "../Utilities/CardProject";
import Title from "../Utilities/Title";

const ProjectList = () => {
  return (
    <div className="max-w-4xl mx-auto px-7 lg:px-0 ">
      <Title text="My Project" />
      <div className="flex flex-col items-center">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
          <CardProject
            image={"/assets/project/suratque.png"}
            title={"SuratQue"}
            description={
              "SuratQue merupakan aplikasi arsip surat yang berbasis website, aplikasi ini dirancang untuk memudahkan pengarsipan surat. Aplikasi ini debuat dengan teknologi NextJs, TailwindCSS, Prisma, Posgresql dengan fitur CRUD."
            }
          />
          <CardProject
            image={"/assets/project/pemasaran.png"}
            title={"Website Pemasaran"}
            description={
              "Website Pemasaran adalah website yang mengenalkan mengenai jurusan pemasaran di SMK Negeri 1 Bangsri. Aplikasi ini dibuat dengan teknologi NextJs, TailwindCSS dan shdcn."
            }
          />
          <CardProject
            image={"/assets/project/dosamurid.png"}
            title={"Dosa Murid"}
            description={
              "Dosa Murid adalah Aplikasi berbasis website yang bertujuan untuk merekam pelanggaran yang dilakukan oleh siswa. Aplikasi ini ditujukan untuk siswa SMK Negeri 1 Bangsri. Aplikasi ini dibuat dengan teknologi Laravel dan TailwindCSS."
            }
          />
          <CardProject
            image={"/assets/project/lempita.png"}
            title={"Lempita"}
            description={
              "Lempita adalah website yang ditujukan untuk promosi produk Lemper untuk tugas PKK. Aplikasi ini dibuat dengan teknologi ReactJs dan TailwindCSS."
            }
          />
          <CardProject
            image={"/assets/project/bogeng.png"}
            title={"Bogeng Company Landing Page"}
            description={
              "Website ini adalah website yang dubuat untuk tujuan company profile dari perusahaan PT. Bogeng Media Prima. Website ini dibangun dengan teknologi Laravel dan TailwindCSS."
            }
          />
          <CardProject
            image={"/assets/project/ngambis.png"}
            title={"Ngambis"}
            description={
              "Ngambis adalah platfrom pembelajaran berbasis website yang memiliki konten edukasi untuk membantu para pelajar. Website ini deibangun dengan teknologi Laravel untuk Backend dan React dan TailwindCSS untuk Frontend."
            }
          />
          <CardProject
            image={"/assets/project/kelasque.png"}
            title={"KelasQue Landing Page"}
            description={
              "KelasQue merupakan platform website perkumpulan siswa di SMK Negeri 1 Bangsri. Aplikasi ini belum sepenuhnya jadi karena beberapa hal. Aplikasi dibangun dengan teknologi Laravel dan TailwindCSS"
            }
          />
          <CardProject
            image={"/assets/project/expressapi.png"}
            title={"REST API Express"}
            description={
              "REST API ini merupakan API yang menyediakan API produk untuk latihan saya dalam bidang backend web development. REST API ini dibangun dengan teknologi ExpressJS, Prisma dan Postgresql"
            }
          />
          <CardProject
            image={"/assets/project/crypto.png"}
            title={"Crypto App Design"}
            description={
              "Design Crypto app merupkan desain UI sebuah aplikasi Penyedia Crypto. desain ini dibuat dengan Figma."
            }
          />
          <CardProject
            image={"/assets/project/animelist.png"}
            title={"Anime List"}
            description={
              "Anime List merupakan project latihan saya dalam mempelajari NextJS serta cara mendapatkan API dari luar. Project ini merupakan tutorial dari pak Dea Afrizal. Website ini dibangun dengan NextJS, NextAuth, TailwindCSS, serta MySql untuk databasenya."
            }
          />
          <CardProject
            image={"/assets/project/filmque.png"}
            title={"FilmQue"}
            description={
              "merupakan project latihan untuk mempelajari menggunakan library ReactJS dan cara consume API Film. Website ini merupakan tutorial dari pak Dea Afrizal. Wbsite ini dibangun dengan ReactJS"
            }
          />
        </div>
        <Button
          title={"View All My Project"}
          link={"https://github.com/diandra6695?tab=repositories"}
        />
      </div>
    </div>
  );
};

export default ProjectList;
