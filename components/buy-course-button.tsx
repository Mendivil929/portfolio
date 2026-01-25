"use client"
import { useState } from 'react';

const BuyCourseButton = () => {
  const [loading, setLoading] = useState(false);

  const handleBuyCourse = async () => {
    setLoading(true);
    try {
      // Llamamos a la ruta ESPECÍFICA que creamos en el Paso 2
      const response = await fetch('/api/checkout-course-100', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });
      const data = await response.json();
      if (data.url) window.location.href = data.url;
    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un error al intentar ir al pago. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button 
      onClick={handleBuyCourse}
      disabled={loading}
      className="w-full md:w-auto px-8 py-4 text-lg font-bold text-white transition-all transform bg-secondary rounded-xl hover:bg-secondary/80 hover:scale-105 hover:shadow-xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {loading ? 'Procesando...' : '¡Inscribirme ahora por $100 MXN! 🚀'}
    </button>
  );
};

export default BuyCourseButton;