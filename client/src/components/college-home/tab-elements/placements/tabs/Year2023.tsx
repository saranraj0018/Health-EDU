import React from 'react'

const Year2023 = () => {
  return (
    <>
      <section className="px-[8em]">
        <table className="w-full border-collapse rounded-lg overflow-hidden shadow-lg">
          <thead className="font-manrope font-semibold text-sm">
            <tr className="bg-[#11A2C9] text-white text-left">
              <th className="px-6 py-3">Department</th>
              <th className="px-6 py-3">Highest Package</th>
              <th className="px-6 py-3">Average Package</th>
              <th className="px-6 py-3">Students Placed</th>
            </tr>
          </thead>
          <tbody className="text-black font-manrope font-semibold text-sm">
            {[
              { department: "B.Tech", highest: "₹55 LPA", average: "₹15 LPA", students: 65 },
              { department: "M.Sc 34 Courses", highest: "₹44 LPA", average: "₹12 LPA", students: 65 },
              { department: "M.Phil 1 Course", highest: "₹65 LPA", average: "₹10 LPA", students: 65 },
              { department: "B.Tech 6 Courses", highest: "₹33 LPA", average: "₹11 LPA", students: 65 },
              { department: "MBBS", highest: "₹30 LPA", average: "₹8 LPA", students: 65 },
              { department: "M.Sc 34 Courses", highest: "₹55 LPA", average: "₹7 LPA", students: 65 },
              { department: "M.Phil 1 Course", highest: "₹44 LPA", average: "₹8.5 LPA", students: 65 },
            ].map((row, index) => (
              <tr key={index} className="even:bg-gray-100">
                <td className="px-6 py-3">{row.department}</td>
                <td className="px-6 py-3">{row.highest}</td>
                <td className="px-6 py-3">{row.average}</td>
                <td className="px-6 py-3">{row.students}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </section>

    </>
  )
}

export default Year2023
