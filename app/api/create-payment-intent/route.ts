import { NextResponse } from "next/server";
import Stripe from "stripe";
import type { CreatePaymentIntentRequest } from "@/app/components/booking/booking-types";

// Lazy-init to avoid build-time crash when env vars aren't available
let _stripe: Stripe | null = null;
function getStripe() {
  if (!_stripe) {
    _stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      typescript: true,
    });
  }
  return _stripe;
}

export async function POST(request: Request) {
  try {
    const stripe = getStripe();
    const body: CreatePaymentIntentRequest = await request.json();

    // Validate amount (Stripe minimum is $0.50 = 50 cents)
    if (!body.amount || body.amount < 50) {
      return NextResponse.json(
        { error: "Invalid amount. Minimum charge is $0.50." },
        { status: 400 }
      );
    }

    // Stripe metadata values must be strings
    const metadata: Record<string, string> = {
      dateStart: body.metadata.dateStart,
      dateEnd: body.metadata.dateEnd,
      startTime: body.metadata.startTime,
      endTime: body.metadata.endTime,
      locationLat: String(body.metadata.locationLat),
      locationLng: String(body.metadata.locationLng),
      efoilAwakeRavik: String(body.metadata.efoilAwakeRavik),
      efoilAudiEtron: String(body.metadata.efoilAudiEtron),
      efoilFliteboard: String(body.metadata.efoilFliteboard),
      instructorEnabled: String(body.metadata.instructorEnabled),
    };

    const paymentIntent = await stripe.paymentIntents.create({
      amount: body.amount,
      currency: "usd",
      automatic_payment_methods: { enabled: true },
      metadata,
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Internal server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
