import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Materials } from '../pages/materials/Materials'
import { Announcement } from '../pages/Announcement'
import { Header } from '../pages/Header'
import { Layout } from '../components/Layout'
import { GoBack } from '../components/UI/GoBack'
import { MaterialDetails } from '../pages/materials/MaterialDetails'
import { Students } from '../pages/students/Students'
import { StudentDetails } from '../pages/students/StudentDetails'
import { Ratings } from '../pages/Ratings'
import { Notifications } from '../pages/Notifications'
import { Schedule } from '../pages/Schedule'

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="courses" element={<Header />}>
            <Route path="materials" element={<Materials />} />
            <Route path="materials/:id/details" element={<MaterialDetails />}>
              <Route path="submitted" element={<p>Даниэл</p>} />
              <Route path="waiting" element={<p>Жасмина Эже</p>} />
              <Route path="late" element={<p>Элизар Агай</p>} />
            </Route>
            <Route path="students" element={<Students />} />
            <Route path="students/:id/details" element={<StudentDetails />} />
            <Route path="ratings" element={<Ratings />} />
          </Route>
          <Route path="announcement" element={<Announcement />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="schedule" element={<Schedule />} />
        </Route>
      </Routes>
      <GoBack />
    </>
  )
}
