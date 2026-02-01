"use client"

const BuyButton = () => {
  const handleBuy = async () => {
    try {
      const response = await fetch('/api/checkout-course-100', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const data = await response.json();

      // 2. Si el backend nos responde con la URL de Stripe, redirigimos
      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error("No se recibió la URL de pago");
      }
      
    } catch (error) {
      console.error("Error en la solicitud de pago:", error);
    }
  };

  return (
    <button 
      onClick={handleBuy}
      className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65 cursor-pointer"
    >
      Contacta conmigo
    </button>
  );
};

export default BuyButton;