"use client";

import { Card } from "@/components/ui/card";

export function Team() {
  const team = [
    {
      name: "John Smith",
      role: "Designation here",
      image: "/team1.png",
      description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu,"
    },
    {
      name: "Elisa Williams",
      role: "Designation here",
      image: "/team2.png",
      description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu,"
    },
    {
      name: "John Smith",
      role: "Designation here",
      image: "/team3.png",
      description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu,"
    },
  ];

  return (
    <Card className="p-6 bg-white">
      <h2 className="text-[24px] font-semibold mb-6">Team</h2>
      <p className="text-[#3e424a] mb-6">Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.</p>
      <div className="space-y-6 bg-white">
        {team.map((member, index) => (
          <div key={index} className="bg-blue-50 p-4 rounded-lg">
            <div className="flex flex-col md:flex-row gap-4 ml-[-24px]">
              <div className="text-center md:w-48">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-lg mx-auto mb-2"
                />
                <h3 className="font-bold">{member.name}</h3>
                <p className="text-gray-500 text-sm">{member.role}</p>
              </div>
              <p className="text-gray-700 flex-1 text-[14px] mt-6">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
