import React from 'react'

const DoctorDash = () => {
  return (
    <div class="bg-gray-100 p-5 font-sans">
    <div class="max-w-6xl mx-auto">
      
        <header class="bg-white p-4 flex justify-between items-center rounded-lg shadow mb-5">
            <div class="text-lg font-bold">🏥 Clinic Logo</div>
            <div class="text-gray-700">Dr. John Smith, Cardiologist</div>
            <nav class="space-x-4">
                <a href="#" class="text-blue-500 hover:underline">Patients</a>
                <a href="#" class="text-blue-500 hover:underline">Appointments</a>
                <a href="#" class="text-blue-500 hover:underline">Messages</a>
                <a href="#" class="text-blue-500 hover:underline">Reports</a>
            </nav>
        </header>

    
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
           
            <div class="bg-white p-5 rounded-lg shadow">
                <h2 class="text-xl font-semibold mb-3">Patient Summary</h2>
                <p>Total Patients: <strong>120</strong></p>
                <p>New Patients: <strong>5</strong></p>
                <p>Awaiting Appointment: <strong>8</strong></p>
            </div>
            
           
            <div class="bg-white p-5 rounded-lg shadow">
                <h2 class="text-xl font-semibold mb-3">Upcoming Appointments</h2>
                <ul class="list-disc pl-5">
                    <li>10:00 AM - John Doe (Follow-up)</li>
                    <li>11:30 AM - Jane Smith (New Patient)</li>
                    <li>2:00 PM - Mike Johnson (Routine Checkup)</li>
                </ul>
            </div>

            <div class="bg-white p-5 rounded-lg shadow text-red-600">
                <h2 class="text-xl font-semibold mb-3">Important Alerts</h2>
                <ul class="list-disc pl-5">
                    <li>New message from patient Lisa</li>
                    <li>Lab results ready for David</li>
                    <li>Appointment rescheduled for Tom</li>
                </ul>
            </div>
            
            
            <div class="bg-white p-5 rounded-lg shadow">
                <h2 class="text-xl font-semibold mb-3">Key Performance Indicators</h2>
                <p>Patient Satisfaction: <strong class="text-green-500">92%</strong></p>
                <p>Cancellation Rate: <strong class="text-red-500">5%</strong></p>
                <p>Avg. Wait Time: <strong>15 mins</strong></p>
            </div>
        </div>

        <div class="mt-5 flex flex-wrap gap-3">
            <input type="text" placeholder="Search patients..." class="p-2 border border-gray-300 rounded-md flex-1" />
            <button class="bg-blue-500 text-white px-4 py-2 rounded-md">Filter</button>
            <button class="bg-green-500 text-white px-4 py-2 rounded-md">New Appointment</button>
            <button class="bg-gray-500 text-white px-4 py-2 rounded-md">Send Message</button>
        </div>
    </div>
</div>
  )
}

export default DoctorDash