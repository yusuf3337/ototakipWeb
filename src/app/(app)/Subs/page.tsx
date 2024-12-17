"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface Plan {
  name: string;
  price: number;
  features: string[];
  recommended?: boolean;
}

const plans: Plan[] = [
  {
    name: "Temel Plan",
    price: 49.99,
    features: ["Temel özellik 1", "Temel özellik 2", "Temel özellik 3"],
  },
  {
    name: "Pro Plan",
    price: 99.99,
    features: [
      "Pro özellik 1",
      "Pro özellik 2",
      "Pro özellik 3",
      "Pro özellik 4",
    ],
    recommended: true,
  },
  {
    name: "Premium Plan",
    price: 149.99,
    features: [
      "Premium özellik 1",
      "Premium özellik 2",
      "Premium özellik 3",
      "Premium özellik 4",
      "Premium özellik 5",
    ],
  },
];

const PlanCard: React.FC<{ plan: Plan }> = ({ plan }) => (
  <motion.div
    className={`bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 ${
      plan.recommended ? "border-4 border-blue-500" : ""
    }`}
    whileHover={{ y: -10 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="p-8">
      {plan.recommended && (
        <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
          Önerilen
        </span>
      )}
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{plan.name}</h3>
      <p className="text-4xl font-bold text-blue-600 mb-6">
        {plan.price.toFixed(2)} ₺
        <span className="text-base font-normal text-gray-600">/ay</span>
      </p>
      <ul className="space-y-4 mb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <Check className="h-5 w-5 text-green-500 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      <button className="w-full bg-blue-600 text-white rounded-lg py-3 font-semibold hover:bg-blue-700 transition-colors duration-300">
        Şimdi Başla
      </button>
    </div>
  </motion.div>
);

const SubscriptionPlansPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4 text-center">
          Abonelik Planlarımız
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 text-center max-w-3xl mx-auto">
          İhtiyaçlarınıza en uygun planı seçin ve hemen başlayın. Tüm planlar
          haftalık, aylık veya yıllık olarak faturalandırılır ve istediğiniz
          zaman iptal edebilirsiniz.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlansPage;
