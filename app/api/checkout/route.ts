import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Inicializamos Stripe con la clave secreta
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-12-15.clover', // Usa la versión más reciente que te sugiera VS Code
});

export async function POST(request: Request) {
  try {
    // Aquí podrías recibir datos del frontend (ej: qué producto compraron)
    // const { priceId } = await request.json();

    // Creamos la sesión de pago en Stripe
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'], // Aceptamos tarjetas
      line_items: [
        {
          // Definimos el producto "al vuelo"
          price_data: {
            currency: 'mxn', // Moneda (mxn, usd, eur)
            product_data: {
              name: 'Asesoría Técnica Premium',
              description: '3 horas de consultoría para el desarrollo de un sitio web',
              images: ['https://tu-dominio.com/imagen-producto.png'], // Opcional
            },
            unit_amount: 10000, // PRECIO EN CENTAVOS (5000 = $50.00 USD)
          },
          quantity: 1,
        },
      ],
      mode: 'payment', // Pago único (usa 'subscription' si fuera mensualidad)
      success_url: `${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/success`, // A dónde van si pagan bien
      cancel_url: `${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/services`, // A dónde van si cancelan
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Error al crear sesión de Stripe:", error);
    return NextResponse.json({ error: 'Error interno' }, { status: 500 });
  }
}