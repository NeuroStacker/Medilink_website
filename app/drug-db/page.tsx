"use client"

import { Pill, Filter, ChevronRight, AlertCircle, Clock, Link2 } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

export default function DrugDB() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedMed, setSelectedMed] = useState("azithral 500 tablet")

  const medications = [
    "augmentin 625 duo tablet",
    "azithral 500 tablet",
    "ascoril ls syrup",
    "allegra 120mg tablet",
    "avil 25 tablet",
  ]

  const filteredMeds = medications.filter((med) => med.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-primary mb-2">Drug Database</h1>
          <p className="text-muted-foreground">
            Comprehensive information on medications and AI-optimized dosage recommendations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search medications..."
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <svg
                  className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <div className="flex gap-2 mb-4">
              <button className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                All Medications
              </button>
              <button className="px-4 py-2 bg-background border border-input rounded-full text-sm font-medium text-muted-foreground hover:bg-muted/50 transition-colors">
                Favorites
              </button>
            </div>

            <div className="flex justify-between items-center mb-4">
              <p className="text-sm text-muted-foreground">248218 medications found</p>
              <button className="flex items-center gap-1 text-sm text-foreground hover:text-primary transition-colors">
                <Filter className="h-4 w-4" />
                Filter
              </button>
            </div>

            <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2 scrollbar-thin">
              {filteredMeds.length > 0 ? (
                filteredMeds.map((med, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
                      selectedMed === med
                        ? "bg-primary/10 border border-primary/20"
                        : "bg-card border border-input hover:bg-muted/50"
                    }`}
                    onClick={() => setSelectedMed(med)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <Pill className="h-4 w-4 text-primary" />
                      </div>
                      <span>{med}</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                ))
              ) : (
                <p className="text-center py-4 text-muted-foreground">No medications found</p>
              )}
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Pill className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">{selectedMed}</h2>
            </div>

            <h3 className="text-xl font-bold mb-4">Overview</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-card border rounded-lg p-6">
                <div className="flex items-center gap-2 text-primary mb-4">
                  <Clock className="h-5 w-5" />
                  <h4 className="font-bold">Dosage Information</h4>
                </div>

                <div className="space-y-2">
                  <div>
                    <p className="text-sm text-muted-foreground">Form:</p>
                    <p className="text-foreground">Tablet</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Standard Dosage:</p>
                    <p className="text-foreground">500mg once daily for 3-5 days</p>
                  </div>
                </div>
              </div>

              <div className="bg-card border rounded-lg p-6">
                <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 mb-4">
                  <AlertCircle className="h-5 w-5" />
                  <h4 className="font-bold">Precautions</h4>
                </div>

                <ul className="list-disc list-inside text-foreground">
                  <li>No precautions listed</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card border rounded-lg p-6">
                <div className="flex items-center gap-2 text-primary mb-4">
                  <AlertCircle className="h-5 w-5" />
                  <h4 className="font-bold">Side Effects</h4>
                </div>

                <ul className="list-disc list-inside text-foreground">
                  <li>Vomiting</li>
                  <li>Nausea</li>
                  <li>Abdominal pain</li>
                  <li>Diarrhea</li>
                </ul>
              </div>

              <div className="bg-card border rounded-lg p-6">
                <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 mb-4">
                  <Link2 className="h-5 w-5" />
                  <h4 className="font-bold">Interactions</h4>
                </div>

                <ul className="list-disc list-inside text-foreground">
                  <li>No interactions listed</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
