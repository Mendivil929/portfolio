import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-12-15.clover',
});

export async function POST(request: Request) {
  try {
    // URL base para las redirecciones
    const baseUrl = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'mxn', // Pesos Mexicanos
            product_data: {
              // Nombre exacto del curso según tu flyer
              name: 'Curso Intensivo: Creación de Sitios Web desde 0',
              description: 'Acceso al taller vía Zoom (React, Next.js, Tailwind, Node.js). Lugares Feb 2-6.',
              // Opcional: Puedes subir tu logo de MendivilTech a internet y poner la URL aquí
               images: ['https://mendivil-tech-portfolio.netlify.app/LogoMendivilTech.png'], 
            },
            // PRECIO IMPORTANTE: $100.00 MXN = 10000 centavos
            unit_amount: 10000, 
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      // Éxito: A una página de agradecimiento específica (la crearemos luego si quieres)
      success_url: `https://cal.com/isaac-salazar-5gbiuv/curso-intensivo-de-sitio-web-con-react-desde-0`,
      // Cancelar: De vuelta a la landing del curso
      cancel_url: `https://mendivil-tech-portfolio.netlify.app/courses`,
      
      // IMPORTANTE: Para recolectar el correo y enviar el Zoom
      customer_email: undefined, // Dejar undefined para que Stripe le pida el correo al usuario en el checkout
      phone_number_collection: {
        enabled: true, // Opcional: pedir WhatsApp por si acaso
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Error en checkout del curso:", error);
    return NextResponse.json({ error: 'Error interno al procesar el curso' }, { status: 500 });
  }
}