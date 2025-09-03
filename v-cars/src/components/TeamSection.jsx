import Image from "next/image";
import { FaShareAlt } from "react-icons/fa";

export default function TeamSection() {
  const team = [
    {
      name: "John Deo",
      role: "EXTERIOR EXPERT",
      img: "/team-img01.jpg",
    },
    {
      name: "Rebecca Romijn",
      role: "EXTERIOR EXPERT",
      img: "/team-img02.jpg",
    },
    {
      name: "David Hanson",
      role: "INTERIOR MAESTRO",
      img: "/team-img06.jpg",
    },
  ];

  return (
    <section className="py-16 max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <p className="text-red-500 font-semibold">[ OUR TEAM ]</p>
        <h2 className="text-4xl font-bold">Meet Our Team</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((member, i) => (
          <div
            key={i}
            className="relative bg-white rounded-2xl shadow-lg overflow-hidden text-center group"
          >
            {/* Image */}
            <div className="relative">
              <Image
                src={member.img}
                alt={member.name}
                width={400}
                height={400}
                className="w-full h-80 object-cover rounded-2xl"
              />
              {/* Floating Share Icon */}
              <div className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-md cursor-pointer opacity-0 group-hover:opacity-100 transition">
                <FaShareAlt className="text-gray-600 text-lg" />
              </div>
            </div>

            {/* Info */}
            <div className="p-6">
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-red-600 font-semibold mt-1">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
